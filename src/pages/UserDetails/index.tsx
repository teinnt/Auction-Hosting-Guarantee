import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  Box,
  Text,
  Button,
  Center,
  Alert,
  AlertIcon,
  Stack,
  Checkbox,
  Flex,
  Grid,
} from '@chakra-ui/react'
import { useMutation, useQuery } from '@apollo/client'

import useMetaMask from '../../hooks/useMetaMask'
import { FormControl, TermsAndConditionsBuyer } from '../../components'
import { GetAuction_auction_rounds } from '../../graphql/queries/__generated__/GetAuction'
import { client, mathUtils, sendMail, web3Item } from '../../utils'
import { UPDATE_ITEM_WINNER } from '../../graphql/mutations/auction'
import { GET_ME } from '../../graphql/queries/queries'
import { GetMe } from '../../graphql/queries/__generated__/GetMe'

interface UserDetailsProps {
  auctionId: string
  round: GetAuction_auction_rounds
}

function UserDetails(): JSX.Element {
  const { loading, data } = useQuery<GetMe>(GET_ME)

  const { userAccount, loadMetaMask } = useMetaMask()

  const [agreed, setAgreed] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState(
    (data?.self.phoneNumber && `${data?.self.phoneNumber}`) || ''
  )
  const [houseNumber, setHouseNumber] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [confirmationCode] = useState(mathUtils.randomNumber(15))
  const [shippingCode] = useState(mathUtils.randomNumber(15))
  const [walletAddress, setWalletAddress] = useState('')
  const [sellerEmail, setSellerEmail] = useState('')

  const [isLoading, setLoading] = useState(false)
  const [isSuccess, setSuccess] = useState(false)
  const [resultMessage, setResultMessage] = useState('')

  const [updateItemWinner] = useMutation(UPDATE_ITEM_WINNER)

  const { auctionId, round } = useLocation<UserDetailsProps>().state

  const history = useHistory()

  useEffect(() => {
    setPhoneNumber((data?.self.phoneNumber && `${data?.self.phoneNumber}`) || '')
    setHouseNumber(data?.self.address?.houseNumber || '')
    setStreet(data?.self.address?.streetAddress || '')
    setCity(data?.self.address?.city || '')
    setState(data?.self.address?.state || '')
    setCountry(data?.self.address?.country || '')
    setZipCode(data?.self.address?.zipCode || '')
    setWalletAddress(userAccount || '')
    setImageURL('')
    setSellerEmail(round?.seller?.email || '')
  }, [data, loading, userAccount, round])

  const updateBuyerDetails = async () => {
    const result = await updateItemWinner({
      variables: {
        auctionId,
        roundNumber: round.roundNumber,
        city,
        country,
        houseNumber,
        imageURL,
        phoneNumber,
        state,
        street,
        walletAddress,
        zipCode,
      },
    })

    return result.data
  }

  const handleUpdateBuyer = async () => {
    if (isSuccess) {
      history.push('/track-item')
      return
    }

    setLoading(true)

    if (agreed && walletAddress && phoneNumber && houseNumber && street && country) {
      if (await updateBuyerDetails()) {
        client.reFetchObservableQueries()

        const message = await web3Item.updateItemAfterBid(
          round.item?.trackId || '',
          userAccount,
          round.item?.highestPrice || 0,
          confirmationCode,
          shippingCode
        )

        if (!message) {
          setSuccess(true)
          setResultMessage('Your details is updated!')

          // send email to seller
          await sendMail(sellerEmail, shippingCode, round.item?.trackId || '')
        } else {
          setResultMessage('Cannot update item details')
        }
      } else {
        setResultMessage('Something went wrong, please contact IT Department for details')
      }
    } else {
      setResultMessage('Please make sure you enter all required information.')
    }

    setLoading(false)
  }

  return (
    <Box m="10">
      <Center marginBottom="10vh">
        <Text fontSize="4xl">Buyer details</Text>
      </Center>

      <Text fontWeight="bold">Terms and Conditions</Text>
      <Flex p="1rem" direction="column" mt="6" mb="10">
        <TermsAndConditionsBuyer />
        <Checkbox isChecked={agreed} onChange={() => setAgreed(!agreed)} colorScheme="blue">
          Agree on Terms and Conditions
        </Checkbox>
      </Flex>

      <Text mb="4" fontWeight="bold">
        Contact Details
      </Text>

      <Stack mb="8" spacing={4} p="1rem" backgroundColor="whiteAlpha.900">
        <FormControl
          value={phoneNumber}
          handleChange={setPhoneNumber}
          placeholder="Your phone number"
          type="text"
        />

        <Grid templateColumns="repeat(2, 1fr)" gap="4">
          <FormControl
            value={houseNumber}
            handleChange={setHouseNumber}
            placeholder="House address number"
            type="text"
          />
          <FormControl
            value={street}
            handleChange={setStreet}
            placeholder="Street name"
            type="text"
          />
          <FormControl value={city} handleChange={setCity} placeholder="City" type="text" />
          <FormControl value={state} handleChange={setState} placeholder="State" type="text" />
          <FormControl
            value={country}
            handleChange={setCountry}
            placeholder="Country"
            type="text"
          />
          <FormControl
            value={zipCode}
            handleChange={setZipCode}
            placeholder="ZipCode"
            type="text"
          />
        </Grid>
      </Stack>

      <Text mb="4" fontWeight="bold">
        Payment Method
      </Text>

      <Stack mb="8" spacing={4} p="1rem" backgroundColor="whiteAlpha.900">
        {userAccount ? (
          <Text>
            <b>Wallet address</b> - {userAccount}
          </Text>
        ) : (
          <Button m="auto" w="fit-content" onClick={loadMetaMask}>
            Connect to MetaMask
          </Button>
        )}
      </Stack>

      <Text mb="4" fontWeight="bold">
        Item details
      </Text>

      <Stack mb="8" spacing={4} p="1rem" backgroundColor="whiteAlpha.900">
        <Text mb="4">
          <b>Track ID</b> - {round.item?.trackId}
        </Text>
        <Text mb="4">
          <b>Confirmation Code</b> - {confirmationCode}
        </Text>
      </Stack>

      {resultMessage ? (
        <Alert mt="6" status={isSuccess ? 'success' : 'error'}>
          <AlertIcon />
          {resultMessage}
        </Alert>
      ) : null}

      <Center>
        <Button
          mt="10"
          mb="20"
          variant="solid"
          colorScheme={isSuccess ? 'green' : 'blue'}
          onClick={handleUpdateBuyer}
          isLoading={isLoading}
        >
          {isSuccess ? 'Track my item' : 'Okay, save!'}
        </Button>
      </Center>
    </Box>
  )
}

export default UserDetails
