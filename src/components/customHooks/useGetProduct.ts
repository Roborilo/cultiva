import axios from 'axios'

const BASEURL = 'https://cultiva-backend.vercel.app'

async function handleFetch(id: string) {
	const response = await axios.get(`${BASEURL}/product/${id}`)

  const user = await axios.get(`${BASEURL}/user/${response.data.producerId}`)
  if (user.status === 200) {
    response.data.user = user.data
  }

  const buys = await axios.get(`${BASEURL}/product/${id}/buys`)
  if (buys.status === 200) {
    response.data.buys = buys.data
  }

  const userSales = await axios.get(`${BASEURL}/user/${response.data.producerId}/sales`)
  if (userSales.status === 200) {
    response.data.user.sales = userSales.data
  }

  console.log(response)
  return response
}

export default async function useGetProduct(id: string) {
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