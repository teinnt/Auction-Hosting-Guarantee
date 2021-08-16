import React from 'react'
import { Text } from '@chakra-ui/react'
import { Login, Register } from '../../components'

function Buyer() {
  return (
    <div>
      <Text fontSize="6xl">Buyer</Text>

      <Login />
      <Register />
    </div>
  )
}

export default Buyer
