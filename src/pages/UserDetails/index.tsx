/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import { useQuery } from '@apollo/client'

import { Spinner } from '../../components'
import { GET_USERS } from '../../graphql/queries/queries'
import { GetUsers } from '../../graphql/queries/__generated__/GetUsers'

function UserDetails(): JSX.Element {
  const { loading, data } = useQuery<GetUsers>(GET_USERS)

  const [buffer, setBuffer] = useState(null)
  const [memeHash, setMemeHash] = useState('QmbwJfmg5spxefn15gbQTXYXuyNoY5EqUuSZL46uV2npvR')

  if (loading) {
    return <Spinner />
  }

  return (
    <div>
      <div>Hello {data?.users[0].userName}</div>
      <img src={`https://ipfs.infura.io/ipfs/${memeHash}`} className="App-logo" alt="logo" />
    </div>
  )
}

export default UserDetails
