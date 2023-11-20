import axios from 'axios'

const BASEURL = 'https://cultiva-backend.vercel.app'

type Address = {
  street?: string
  number?: number
  district?: string
  complement?: string
  cep?: string
  city?: string
  state?: string
}

async function handleFetch(
  token: string,
  telephone?: string,
  address?: Address,
  hasAddress?: boolean,
) {
  let data
  if (telephone) {
    data = {
      telephone,
    }
  }
  if (
    address?.street &&
    address?.number &&
    address?.district &&
    address?.cep &&
    address?.city &&
    address?.state
  ) {
    if (hasAddress) {
      data = {
        ...data,
        address: {
          update: {
            ...address,
          },
        },
      }
    } else {
      data = {
        ...data,
        address: {
          create: {
            ...address,
          },
        },
      }
    }
  }

  console.log(data)

  if (!data) {
    const response = {
      status: 400,
    }
    return response
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.patch(`${BASEURL}/user`, data, config)

  return response
}

export default async function useEditContactInfo(
  token: string,
  telephone?: string,
  address?: Address,
  hasAddress?: boolean,
) {
  try {
    if (!telephone && !address) {
      return false
    }
    const response = await handleFetch(token, telephone, address, hasAddress)
    if (response.status === 200) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.error('error:', error)
  }
}
