import * as React from 'react'
import { Center, Spinner } from '@chakra-ui/react'
import { useQuery } from '@apollo/client'

import { GET_USER } from '../../graphql/queries/queries'
import { GetUsers } from '../../graphql/queries/__generated__/GetUsers'

interface UserDetailsProps {}

const UserDetails: React.FC<UserDetailsProps> = ({}) => {
  const { loading, error, data } = useQuery<GetUsers>(GET_USER)

  if (loading) {
    return (
      <Center>
        <Spinner marginTop="40vh" thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
      </Center>
    )
  }
  return (
    <div>
      <div>Hello {data?.users[0].userName}</div>
    </div>
  )
}

export default UserDetails
