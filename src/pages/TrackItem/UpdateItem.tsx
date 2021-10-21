import React, { useState } from 'react'
import { Box, Center, Alert, AlertIcon, Button, Text, Grid } from '@chakra-ui/react'

import { FormControl } from '../../components'
import { routerUtils, web3Item } from '../../utils'
import useMetaMask from '../../hooks/useMetaMask'

const UpdateItem = () => {
  const { userAccount } = useMetaMask()

  const [trackId] = useState(routerUtils.getIdFromUrl())
  const [shippingCode, setShippingCode] = useState('')
  const [confirmationCode, setConfirmationCode] = useState('')
  const [location, setLocation] = useState('')

  const [isSuccess, setSuccess] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [resultMessage, setResultMessage] = useState('')

  const updateItem = async () => {
    setSuccess(false)
    setLoading(true)
    let message = await web3Item.updateLocation(trackId, shippingCode, location)

    if (!message) {
      if (confirmationCode) {
        message = await web3Item.receiveItem(trackId, confirmationCode)

        if (!message) {
          setSuccess(true)
          setResultMessage('The item is updated! Thank you for shipping.')
        } else {
          setResultMessage(message)
        }
      } else {
        setSuccess(true)
        setResultMessage('The item is updated!')
      }
    } else {
      setResultMessage(message)
    }
    setLoading(false)
  }

  return (
    <Box m="10">
      <Center marginBottom="10vh">
        <Text fontSize="4xl">Update Item</Text>
      </Center>

      {!userAccount && (
        <Alert status="warning">
          <AlertIcon />
          Please make sure you are connecting with MetaMask.
        </Alert>
      )}

      <Grid gap="8" paddingInline="32">
        <FormControl
          value={shippingCode}
          handleChange={setShippingCode}
          placeholder="Shipping code"
          type="text"
        />
        <FormControl
          value={location}
          handleChange={setLocation}
          placeholder="Location"
          type="text"
        />
      </Grid>

      <Text m="8" ml="32" fontWeight="bold">
        Complete the journey
      </Text>

      <Grid gap="8" paddingInline="32">
        <FormControl
          value={confirmationCode}
          handleChange={setConfirmationCode}
          placeholder="Confirmation code"
          type="text"
        />
      </Grid>

      {resultMessage ? (
        <Alert mt="6" status={isSuccess ? 'success' : 'error'}>
          <AlertIcon />
          {resultMessage}
        </Alert>
      ) : null}

      <Center>
        <Button
          isLoading={isLoading}
          onClick={updateItem}
          mt="10"
          mb="20"
          variant="solid"
          colorScheme="blue"
        >
          Okay
        </Button>
      </Center>
    </Box>
  )
}

export default UpdateItem
