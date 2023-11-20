import axios from 'axios'

const BASEURL = 'https://cultiva-backend.vercel.app'

export type Category = {
  id: string
  name: string
}

export type Product = {
  id: string
  name: string
  description: string
  price: string
  quantity: number
  manufacturingDate: Date
  expirationDate: Date
  category: Category
  categoryId: string
  rating: number[]
  producerId: string
  images: string[]
  comments: object[]
  createdAt: Date
}

async function handleFetch() {
  const response = await axios.get(`${BASEURL}/product`)
  return response
}

export default async function useGetProducts(): Promise<Product[]> {
  const response = await handleFetch()
  if (response.status === 200) {
    return response.data
  }

  return []
}
