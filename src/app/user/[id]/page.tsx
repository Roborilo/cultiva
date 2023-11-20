'use client'

import { useContext } from 'react'
import { PageContext } from './layout'
import EditProfileInfo from '@/components/user/edit-profile-info/EditProfileInfoPage'
import Buys from '@/components/user/buys/Buys'
import Sells from '@/components/user/sells/Sells'
import Config from '@/components/user/config/Config'
import Orders from '@/components/user/orders/Orders'
import Sale from '@/components/user/sale/Sale'

export default function UserPage() {
  const page = useContext(PageContext)

  if (page === 'buys') {
    return <Buys />
  }

  if (page === 'sells') {
    return <Sells />
  }

  if (page === 'config') {
    return <Config />
  }

  if (page === 'orders') {
    return <Orders />
  }

  if (page === 'sales') {
    return <Sale />
  }

  if (page === 'profile') {
    return <EditProfileInfo />
  }
}
