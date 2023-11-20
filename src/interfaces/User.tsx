type Client = {
  userId?: string
  cart?: object[]
  favorites?: object[]
  purchases?: object[]
  commentsOnProducts?: object[]
}

interface IUser {
  id: string
  name: string
  email: string
  icon?: string | null
  telephone?: string | null
  addressId?: string | null
  address?: Address | null
  producer?: Producer | null
  client?: Client
  rating?: number[]
  comments?: object[]
  createdAt?: Date | string
}

type Address = {
  id: string
  street: string
  number: number
  complement: string
  district: string
  cep: string
  city: string
  state: string
}

type Producer = {
  userId?: string
  cpf?: string
  cnpj?: string
}