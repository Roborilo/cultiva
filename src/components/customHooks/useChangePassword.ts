import axios from 'axios'

const BASEURL = 'https://cultiva-backend.vercel.app'

async function handleFetch(
  currentPassword: string,
  newPassword: string,
  token: string,
) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.patch(
    `${BASEURL}/user/password`,
    {
      currentPassword,
      newPassword,
    },
    config,
  )

  return response
}

export default async function useChangePassword(
  currentPassword: string,
  newPassword: string,
  token: string,
) {
  try {
    const response = await handleFetch(currentPassword, newPassword, token)
    if (response.status === 200) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.error('error:', error)
  }
}
