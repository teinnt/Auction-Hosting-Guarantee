import React, { FormEvent, useState } from 'react'
import {
  Box,
  Text,
  Button,
  Center,
  Alert,
  AlertIcon,
  Checkbox,
  Flex,
  Grid,
  GridItem,
  Image,
} from '@chakra-ui/react'

import { CaptureImage, FormControl } from '../../components'
import { web3ItemUtils } from '../../utils'

const BecomeSeller: React.FC = (): JSX.Element => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [trackId, setTrackId] = useState('')
  const [ownerWalletAddress, setOwnerWalletAddress] = useState('')

  const [isUnique, setUnique] = useState(false)
  const [isNew, setNew] = useState(false)
  const [isTracked, setTracked] = useState(false)

  const [itemImage, setItemImage] = useState<File>()

  const [errorMessage, setErrorMessage] = useState('')

  const handleCaptureImage = (event: FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      setItemImage(event.currentTarget.files[0])
    }
  }

  const handleSubmit = async () => {
    let message = ''
    if (!name) {
      message += 'Please input item name. '
    }

    if (!price) {
      message += 'Please input item price. '
    }

    if (!description) {
      message += 'Please input item description. '
    }

    if (isTracked && !trackId) {
      message += 'Please input item track ID. '
    }

    if (!isTracked && !ownerWalletAddress) {
      message += 'Please input owner wallet address. '
    }

    if (!isTracked && !itemImage) {
      message += 'Please upload an image of this item. '
    }

    if (message) {
      setErrorMessage(message)
    } else if (isTracked) {
      await web3ItemUtils.getItem(0)
    } else {
      const item = await web3ItemUtils.createNewItem(
        itemImage,
        name,
        location,
        description,
        ownerWalletAddress,
        Number(price)
      )

      console.log(item)
    }
  }

  const renderUntrackedDetails = () => (
    <>
      <Checkbox
        mb="6"
        display="block"
        colorScheme="blue"
        isChecked={isNew}
        onChange={() => setNew(!isNew)}
      >
        This item is new
      </Checkbox>
      <Checkbox
        mb="6"
        colorScheme="blue"
        isChecked={isUnique}
        onChange={() => setUnique(!isUnique)}
      >
        This item is unique
      </Checkbox>

      <FormControl
        value={ownerWalletAddress}
        handleChange={setOwnerWalletAddress}
        placeholder="Owner wallet address"
        type="text"
      />

      <Flex mt="8" alignItems="center">
        <CaptureImage label="Upload image photo" handleCapture={handleCaptureImage} />
      </Flex>
    </>
  )

  return (
    <Box m="10">
      <Center marginBottom="10vh">
        <Text fontSize="4xl">Register Item</Text>
      </Center>

      <Text fontWeight="bold" mb="4">
        Item details
      </Text>

      <Grid gap="4" mb="10">
        <FormControl value={name} handleChange={setName} placeholder="Item name" type="text" />
        <br />
        <FormControl
          value={price}
          handleChange={setPrice}
          placeholder="Starting price"
          type="text"
        />
        <GridItem colSpan={2}>
          <FormControl
            value={description}
            handleChange={setDescription}
            placeholder="Description"
            type="text"
          />
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl
            value={location}
            handleChange={setLocation}
            placeholder="Location"
            type="text"
          />
        </GridItem>
      </Grid>

      <Box mb="6">
        <Checkbox colorScheme="blue" isChecked={isTracked} onChange={() => setTracked(!isTracked)}>
          This item has tracking ID
        </Checkbox>
      </Box>
      <Box mb="6">
        {!isTracked ? (
          renderUntrackedDetails()
        ) : (
          <FormControl
            value={trackId}
            handleChange={setTrackId}
            placeholder="Track ID"
            type="text"
          />
        )}
      </Box>

      {itemImage ? (
        <Image m="auto" mb="8" alt="Uploaded image" src={URL.createObjectURL(itemImage)} />
      ) : null}

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
          onClick={handleSubmit}
        >
          Okay, save!
        </Button>
      </Center>
    </Box>
  )
}

export default BecomeSeller
