import React, { useState } from 'react'
import {
  Box,
  Center,
  Grid,
  Alert,
  AlertIcon,
  Button,
  Text,
  GridItem,
  Image,
} from '@chakra-ui/react'

import { FormControl } from '../../components'
import { icons, web3Item } from '../../utils'
import useMetaMask from '../../hooks/useMetaMask'

interface PurchaseHistory {
  owner: string
  price: number
}

interface ItemDetails {
  name: string
  description: string
  status: number
  location: string
  purchasedHistory: PurchaseHistory[]
}

const TrackItem = () => {
  const { userAccount } = useMetaMask()

  const [trackId, setTrackId] = useState('')
  const [itemDetails, setItemDetails] = useState<ItemDetails>()

  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const getItemDetail = async () => {
    if (!userAccount) {
      setError(true)
    } else {
      const item = await web3Item.getItemDetails(trackId, userAccount)
      if (typeof item !== 'string') {
        setItemDetails(item)
        setErrorMessage('')
      } else {
        setErrorMessage(item)
      }
    }
  }

  return (
    <Box m="10">
      <Center paddingInline="15vw" gridGap="4" flexDirection="column" mb="10">
        <Text fontSize="4xl">Track Item</Text>
        {!userAccount && (
          <Alert status={error ? 'error' : 'warning'}>
            <AlertIcon />
            Please make sure you are connecting with MetaMask.
          </Alert>
        )}

        {errorMessage && (
          <Alert status="error">
            <AlertIcon />
            Please make sure your track ID is correct and your account is item&apos;s owner account.
          </Alert>
        )}
      </Center>
      <Center paddingInline="15vw" gridGap="1" mb="4">
        <FormControl value={trackId} handleChange={setTrackId} placeholder="Track ID" type="text" />
        <Button onClick={getItemDetail} borderRadius="5" variant="solid" colorScheme="blue">
          Okay
        </Button>
      </Center>

      {!itemDetails ? null : (
        <Box>
          <Box>
            <Text m="10" textAlign="center" fontSize="4xl">
              {itemDetails.name}
            </Text>

            <Grid m="10" templateColumns="repeat(2, 1fr)" gap={10}>
              <GridItem borderRadius="20" colSpan={2}>
                <Center>
                  <Image maxHeight="60vh" src={icons.item2} alt="Item" />
                </Center>
              </GridItem>

              <GridItem colSpan={2} paddingInline="20%">
                <Text fontWeight="bold" mb="4">
                  Price
                </Text>
                <Text>{itemDetails.purchasedHistory[0].price}</Text>
              </GridItem>
              <GridItem colSpan={2} paddingInline="20%">
                <Text fontWeight="bold" mb="4">
                  Status
                </Text>
                <Text>{itemDetails.status}</Text>
              </GridItem>
              <GridItem colSpan={2} paddingInline="20%">
                <Text fontWeight="bold" mb="4">
                  Location
                </Text>
                <Text>{itemDetails.location}</Text>
              </GridItem>
              <GridItem colSpan={2} paddingInline="20%">
                <Text fontWeight="bold" mb="4">
                  Description
                </Text>
                <Text>{itemDetails.description}</Text>
              </GridItem>
            </Grid>
          </Box>
        </Box>
      )}
    </Box>
  )
}

export default TrackItem
