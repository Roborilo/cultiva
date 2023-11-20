import axios from 'axios'

const BASEURL = 'https://cultiva-backend.vercel.app'

async function handleFetch(productId: string, content: string, rating: number, token: string) {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}

	const response = await axios.post(`${BASEURL}/comment/${productId}`, {
		content,
		rating,
	}, config)

	return response
}

export default async function useCreateComment(productId: string, content: string, rating: number, token: string) {
  try {
    const response = await handleFetch(productId, content, rating, token)
    if (response.status === 201) {
      return response.data
    } else {
      return false
    }
  } catch (error) {
    console.error('create error:', error)
  }
}