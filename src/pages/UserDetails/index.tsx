import * as React from 'react'
import { useQuery } from '@apollo/client'

import { Spinner } from '../../components'
import { GET_USERS } from '../../graphql/queries/queries'
import { GetUsers } from '../../graphql/queries/__generated__/GetUsers'

function UserDetails(): JSX.Element {
  const { loading, data } = useQuery<GetUsers>(GET_USERS)

  if (loading) {
    return <Spinner />
  }

  return (
    <div>
      <div>Hello {data?.users[0].userName}</div>
    </div>
  )
}

export default UserDetails
