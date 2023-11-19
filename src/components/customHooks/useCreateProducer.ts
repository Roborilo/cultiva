import axios from 'axios'

const BASEURL = 'https://cultiva-backend.vercel.app'

async function handleFetch(token: string, cpf?: string, cnpj?: string) {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	
	const response = await axios.post(`${BASEURL}/producer`, {
		cpf,
		cnpj,
	}, config)

	return response
}

export default async function useCreateProducer(token: string, cpf?: string, cnpj?: string) {
  try {
		if (!cpf && !cnpj) {
			return false
		}
    const response = await handleFetch(token, cpf, cnpj)
    if (response.status === 200) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.error('error:', error)
  }
}