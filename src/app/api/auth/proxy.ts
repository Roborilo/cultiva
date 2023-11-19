// disable
export default async function proxy(token: string): Promise<any> {
  if (token !== null) {
    const response = await fetch(
      'https://cultiva-backend.vercel.app/profile',
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    let user = await response.json()
    console.log(user)
    user.accessToken = token
    console.log(user)
    return user
  } else {
    return null
  }
}
