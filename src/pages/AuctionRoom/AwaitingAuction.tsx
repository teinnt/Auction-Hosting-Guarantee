import React from 'react'
import { useQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import { Box, Text, Button, Center, Image, Grid } from '@chakra-ui/react'

import { GetAuction_auction } from '../../graphql/queries/__generated__/GetAuction'
import { GET_ME } from '../../graphql/queries/queries'
import { Self } from '../../graphql/queries/__generated__/Self'
import { Spinner } from '../../components'
import { icons } from '../../utils'

interface AwaitingAuctionProps {
  auction: GetAuction_auction | undefined
}

const AwaitingAuction: React.FC<AwaitingAuctionProps> = ({ auction }) => {
  const { loading, data } = useQuery<Self>(GET_ME)
  const user = data?.self

  const history = useHistory()

  const goToPage = () => {
    if (user?.phoneNumber) {
      history.push('/become-seller')
    } else {
      history.push('register-item')
    }
  }

  const renderItems = () => (
    <Box>
      <Text textAlign="center" fontSize="2xl">
        Items to be sold
      </Text>

      <Grid m="10" templateColumns="repeat(3, 1fr)" gap={10}>
        {auction?.rounds?.map((round) => (
          <Box>
            <Text>{round?.item?.name}</Text>
            <Image marginRight="1" maxHeight="60vh" src={icons.item} alt="Item" />
          </Box>
        ))}
      </Grid>
    </Box>
  )

  if (loading) {
    return <Spinner />
  }

  return (
    <Box>
      <Text fontSize="4xl">{auction?.name}</Text>

      <Center mt="10">
        <Button mb="10" onClick={goToPage}>
          {user?.phoneNumber ? 'Become a seller' : 'Add your item in this auction'}
        </Button>
      </Center>

      {renderItems()}
    </Box>
  )
}

export default AwaitingAuction
