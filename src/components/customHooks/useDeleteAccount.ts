import axios from 'axios'

const BASEURL = 'https://cultiva-backend.vercel.app'

async function handleFetch(token: string) {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}

	const response = await axios.delete(`${BASEURL}/user`, config)

	return response
}

export default async function useDeleteAccount(token: string) {
  try {
    const response = await handleFetch(token)
    if (response.status === 200) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.error('error:', error)
  }
}