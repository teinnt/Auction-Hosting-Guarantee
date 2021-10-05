import React, { useState } from 'react'
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
  useDisclosure,
} from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

import { FormControl, TermsAndConditions } from '../../components'

interface BecomeSellerProps {}

const BecomeSeller: React.FC<BecomeSellerProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [agreed, setAgreed] = useState(false)
  const [phone, setPhone] = useState('')
  const [houseNumber, setHouseNumber] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [country, setContry] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [identityImg, setIdentifyImg] = React.useState<File>()

  const [bankAccount, setBankAccount] = useState('')
  const [bankName, setBankName] = useState('')
  const [bankAddress, setBankAddress] = useState('')
  const [bankCountry, setBankCountry] = useState('')
  const [currency, setCurrency] = useState('')

  const [errorMessage, setErrorMessage] = useState('')

  const history = useHistory()

  const handleUpdateSeller = () => {
    history.goBack()
  }

  return (
    <Box m="10">
      <Center marginBottom="10vh">
        <Text fontSize="4xl">Become a seller</Text>
      </Center>

      <Text fontWeight="bold">Terms and Conditions</Text>
      <Flex p="1rem" direction="column" mt="6" mb="10">
        <TermsAndConditions />
        <Checkbox colorScheme="blue">Agree on Terms and Conditions</Checkbox>
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
      </Stack>

      <Text mb="4" fontWeight="bold">
        Contact Details
      </Text>

      <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900">
        <FormControl
          value={phone}
          handleChange={setPhone}
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
          <FormControl value={country} handleChange={setContry} placeholder="Country" type="text" />
          <FormControl
            value={zipCode}
            handleChange={setZipCode}
            placeholder="ZipCode"
            type="text"
          />
        </Grid>

        <Flex alignItems="center">
          <Button borderRadius="5" type="button" variant="solid" colorScheme="gray" w="fit-content">
            Upload your legal identity photo
          </Button>
          <Box ml="6" color="green.400" borderRadius="full">
            OK
          </Box>
        </Flex>
      </Stack>

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
