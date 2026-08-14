import React from 'react'
import ProductsMarquee from '../components/ProductsMarqee'
import { ClientsList } from '../utils/utils'

const Clients = () => {
  return (
    <ProductsMarquee data={ClientsList} title='Our Clients' />
  )
}

export default Clients