import * as React from 'react'
import { useQuery } from '@apollo/client'

import { GET_USER } from '../../graphql/queries/queries'
import { GetUsers } from '../../graphql/queries/__generated__/GetUsers'

interface UserDetailsProps {}

const UserDetails: React.FC<UserDetailsProps> = ({}) => {
  const { loading, error, data } = useQuery<GetUsers>(GET_USER)

  if (data) {
    console.log(data)
  }
  return (
    <div>
      <div>Hello {data?.users[0].userName}</div>
    </div>
  )
}

export default UserDetails
