import axios from 'axios'

const BASEURL = 'https://cultiva-backend.vercel.app'

async function handleFetch(name: string, description: string, manufacturingDate: Date, expirationDate: Date, category: string, price: number, quantity: number, token: string, media?: File[]) {
  const data = {
    name,
    description,
    manufacturingDate,
    expirationDate,
    category,
    price,
    quantity,
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(`${BASEURL}/product`, data, config)
  if (!response) {
    return false
  }

  console.log(media)
  if (media?.length === 0) {
    return true
  }

  const formData = new FormData()
  media?.map((file) => formData.append('files', file))

  const sendImages = await axios.post(`${BASEURL}/firebase/product/${response.data.id}`, formData, config)
  return sendImages
}

export default async function useCreateProduct(
  name: string,
  description: string,
  manufacturingDate: Date,
  expirationDate: Date,
  category: string,
  price: number,
  quantity: number,
  token: string,
  media?: File[],
) {
  if (!name && !description && !category && !price && !manufacturingDate && !expirationDate) {
    return false
  } else if (typeof price !== 'number') {
    return false
  }

  try {
    const response = await handleFetch(name, description, manufacturingDate, expirationDate, category, price, quantity, token, media)
    if (response) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.error('post error:', error)
  }
}