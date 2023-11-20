import axios from 'axios'

const BASEURL = 'https://cultiva-backend.vercel.app'

async function handleFetch(id: string) {
  const response = await axios.get(`${BASEURL}/user/${id}`)
  return response
}

export default async function useGetProfile(id: string) {
  try {
    const response = await handleFetch(id)
    if (response.status === 200) {
      return response.data
    } else {
      return false
    }
  } catch (error) {
    console.error('login error:', error)
  }
}
