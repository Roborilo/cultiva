import proxy from '@/app/api/auth/proxy'
import CredentialsProvider from 'next-auth/providers/credentials'


export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'email' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'password',
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null
        }
        const payload = {
          email: credentials.email,
          password: credentials.password,
        }

        const res = await fetch(
          'https://cultiva-backend.vercel.app/login',
          {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
    
        const user = await res.json()
    
        if (!res.ok) {
          throw new Error(user.message)
        }
        if (res.ok && user) {
          const userData = await proxy(user.access_token)
          userData.token = user.token
          return userData
        }

        return null
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({
      token,
      user,
      account,
    }: {
      token: any
      user: any
      account: any
    }) {
      if (account && user) {
        return {
          ...token,
          accessToken: user.token,
          refreshToken: user.refreshToken,
          userData: user,
        }
      }

      return token
    },

    async session({ session, token }: { session: any; token: any }) {
      if (token.userData) {
        session.user = token.userData
        session.user.accessToken = token.accessToken
        session.user.refreshToken = token.refreshToken
        session.user.accessTokenExpires = token.accessTokenExpires
      }

      return session
    },
  },
}
