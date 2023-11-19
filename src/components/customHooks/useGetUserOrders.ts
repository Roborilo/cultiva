import axios from 'axios'

const BASEURL = 'https://cultiva-backend.vercel.app'

export type Product = {
	id: string
	name: string
	description: string
	price: string
	quantity: number
	manufacturingDate: Date
	expirationDate: Date
	categoryId: string
	rating: number[]
	producerId: string
	images: string[]
	comments: object[]
	createdAt: Date
}

async function handleFetch(id: string) {
	const response = await axios.get(`${BASEURL}/user/${id}/orders`)
	return response
}

export default async function useGetUserOrders(id: string): Promise<Product[]> {
	const response = await handleFetch(id)
	if (response.status === 200) {
		return response.data
	}

	return []
}