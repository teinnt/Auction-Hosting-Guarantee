import React from 'react'

import { useGetUser, GetUserMe } from '../../generated/graphql'

// Props are typed according to GraphQL query
type UserProps = {
  user: GetUserMe
}

// Components are typed with props
const UserComponent = ({ user }: UserProps) => <p>Hello {user.name}</p>

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  // We got autocompletion for data and graphql variables here
  const { data, loading } = useGetUser()

  return (
    <div className="App">
      <header className="App-header">
        {/** Accessing and undefined key here will break the build */}
        {loading && <p>Loading</p>}
        {data && data.me && <UserComponent user={data.me} />}
      </header>
    </div>
  )
}
