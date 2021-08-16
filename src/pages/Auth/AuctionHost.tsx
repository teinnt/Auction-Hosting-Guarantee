import React from 'react'
import { Text } from '@chakra-ui/react'
import { Login, Register } from '../../components'

function AuctionHost() {
  return (
    <div>
      <Text fontSize="6xl">AuctionHost</Text>

      <Login />
      <Register />
    </div>
  )
}

export default AuctionHost
