import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
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
  Image,
} from '@chakra-ui/react'
import { useMutation } from '@apollo/client'

import { BECOME_SELLER } from '../../graphql/mutations/auth'
import { CaptureImage, FormControl, TermsAndConditionsSeller } from '../../components'

const BecomeSeller = () => {
  const [agreed, setAgreed] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('0987654321')
  const [houseNumber, setHouseNumber] = useState('55')
  const [street, setStreet] = useState('Wellesley Street East')
  const [city, setCity] = useState('Auckland')
  const [state, setState] = useState('')
  const [country, setCountry] = useState('New Zealand')
  const [zipCode, setZipCode] = useState('1010')
  const [imageURL] = useState('URL')
  const [imageFile, setImageFile] = useState<File>()

  const [bankAccount, setBankAccount] = useState('123456')
  const [bankName, setBankName] = useState('Taylor')
  const [bankAddress, setBankAddress] = useState('Wellesley Street East')
  const [bankCountry, setBankCountry] = useState('New Zealand')
  const [currency, setCurrency] = useState('NZD')
  const [walletAddress, setWalletAddress] = useState('0x6d398A10eCAE3053d6Cd332c2c1FDE070FaA4ABC')

  const [errorMessage, setErrorMessage] = useState('')

  const [becomeSeller] = useMutation(BECOME_SELLER)

  const history = useHistory()

  const handleUpdateSeller = async () => {
    if (agreed && walletAddress && phoneNumber && houseNumber && street && country) {
      const result = await becomeSeller({
        variables: {
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

      if (result.data) {
        history.goBack()
      } else {
        setErrorMessage('Something went wrong, please contact IT Department for details')
      }
    } else {
      setErrorMessage('Please make sure you enter all required information.')
    }
  }

  const handleCaptureImage = (event: FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      setImageFile(event.currentTarget.files[0])
    }
  }

  return (
    <Box m="10">
      <Center marginBottom="10vh">
        <Text fontSize="4xl">Become a seller</Text>
      </Center>

      <Text fontWeight="bold">Terms and Conditions</Text>
      <Flex p="1rem" direction="column" mt="6" mb="10">
        <TermsAndConditionsSeller />
        <Checkbox isChecked={agreed} onChange={() => setAgreed(!agreed)} colorScheme="blue">
          Agree on Terms and Conditions
        </Checkbox>
      </Flex>

      <Text mt="10" mb="4" fontWeight="bold">
        Bank Account To Receive Money
      </Text>

      <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" mb="10">
        <Grid templateColumns="repeat(2, 1fr)" gap="4">
          <FormControl
            value={bankAccount}
            handleChange={setBankAccount}
            placeholder="IBAN/Account Number"
            type="text"
          />
          <FormControl
            value={bankName}
            handleChange={setBankName}
            placeholder="Bank name"
            type="text"
          />
        </Grid>
        <Grid templateColumns="repeat(2, 1fr)" gap="4">
          <FormControl
            value={bankCountry}
            handleChange={setBankCountry}
            placeholder="Bank country"
            type="text"
          />
          <FormControl
            value={currency}
            handleChange={setCurrency}
            placeholder="Your preferred currency"
            type="text"
          />
        </Grid>
        <FormControl
          value={bankAddress}
          handleChange={setBankAddress}
          placeholder="Bank address"
          type="text"
        />
        <FormControl
          value={walletAddress}
          handleChange={setWalletAddress}
          placeholder="Ethereum wallet address"
          type="text"
        />
      </Stack>

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

      {imageFile ? (
        <Image m="auto" mb="8" alt="Uploaded image" src={URL.createObjectURL(imageFile)} />
      ) : null}

      <Flex alignItems="center">
        <CaptureImage label="Upload image photo" handleCapture={handleCaptureImage} />
      </Flex>

      {errorMessage ? (
        <Alert status="error">
          <AlertIcon />
          {errorMessage}
        </Alert>
      ) : null}

      <Center>
        <Button
          mt="10"
          mb="20"
          type="button"
          variant="solid"
          colorScheme="blue"
          onClick={handleUpdateSeller}
        >
          Okay, save!
        </Button>
      </Center>
    </Box>
  )
}

export default BecomeSeller
