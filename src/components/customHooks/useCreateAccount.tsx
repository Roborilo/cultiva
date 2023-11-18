import axios from 'axios'

const BASEURL = 'https://cultiva-backend.vercel.app'

type Payload = {
	name: string
	email: string
	password: string
}

async function handleFetch(payload: Payload) {
	console.log(payload)
	const response = await axios.post(`${BASEURL}/user`, {
    name: payload.name,
		email: payload.email,
		password: payload.password
	})
	return response
}

export default async function useCreateAccount(payload: Payload) {
  try {
    const response = await handleFetch(payload)
    if (response.status === 201) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.error('login error:', error)
  }
}