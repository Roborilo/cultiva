import axios from 'axios'

const BASEURL = 'https://cultiva-backend.vercel.app'

async function handleFetch(token: string, name?: string, email?: string, icon?: File[]) {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	}
	
	let data;
	if (name) {
		data = { name }
	}
	if (email) {
		data = { ...data, email }
	}

	const response = await axios.patch(`${BASEURL}/user`, data, config)
	if (icon?.length === 0 || !icon) {
		return response
	}

	const formData = new FormData()
	formData.append('file', icon[0])

	const responseIcon = await axios.post(`${BASEURL}/firebase/icon`, formData, config)
	if (!(responseIcon.status === 200)) {
		return responseIcon
	}

	return responseIcon
}

export default async function useUpdateUser(token: string, name?: string, email?: string, icon?: File[]) {
  try {
    const response = await handleFetch(token, name, email, icon)
    if (response.status === 200) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.error('error:', error)
  }
}