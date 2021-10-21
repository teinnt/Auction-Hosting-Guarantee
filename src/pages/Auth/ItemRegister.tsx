import React, { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
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
  Image,
} from '@chakra-ui/react'
import { useMutation } from '@apollo/client'

import { client, routerUtils, web3Factory, web3Item } from '../../utils'
import { CaptureImage, FormControl } from '../../components'
import { ADD_ITEM } from '../../graphql/mutations/auction'

const ItemRegister = (): JSX.Element => {
  const [name, setName] = useState('Item name')
  const [price, setPrice] = useState('1')
  const [description, setDescription] = useState('Description')
  const [location, setLocation] = useState('Location')
  const [trackId, setTrackId] = useState('')
  const [ownerWalletAddress, setOwnerWalletAddress] = useState('')

  const [isNew, setNew] = useState(false)
  const [isUnique, setUnique] = useState(false)
  const [isTracked, setTracked] = useState(true)
  const [itemImage, setItemImage] = useState<File>()
  const [imageURL] = useState('')

  const [isLoading, setLoading] = useState(false)
  const [isSuccess, setSuccess] = useState(false)
  const [resultMessage, setResultMessage] = useState('')

  const auctionID = routerUtils.getIdFromUrl()

  const [addItemToAuction] = useMutation(ADD_ITEM)

  const history = useHistory()

  const handleCaptureImage = (event: FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      setItemImage(event.currentTarget.files[0])
    }
  }

  const allInputsValid = () => {
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
      setResultMessage(message)
      return false
    }

    return true
  }

  const addItemToAuctionApi = async (trackID: string) => {
    const result = await addItemToAuction({
      variables: {
        name,
        price: Number(price),
        auctionID,
        description,
        imageURL,
        location,
        ownerWalletAddress,
        trackID,
      },
    })

    return result.data
  }

  const handleSubmit = async () => {
    if (isSuccess) {
      await client.reFetchObservableQueries()
      history.goBack()
      return
    }

    if (!allInputsValid()) {
      return
    }

    setLoading(true)

    if (isTracked) {
      const message = await web3Item.updateItemToBid(
        trackId,
        ownerWalletAddress,
        location,
        Number(price)
      )

      if (!message) {
        if (await addItemToAuctionApi(trackId)) {
          setSuccess(true)
          setResultMessage('Item has been updated and added to the auction!')
        }
      } else {
        setResultMessage('Please make sure the owner id is correct.')
      }
    } else {
      const itemAddress = await web3Factory.createNewItem(
        itemImage,
        name,
        location,
        description,
        ownerWalletAddress,
        Number(price)
      )

      if (itemAddress) {
        if (await addItemToAuctionApi(itemAddress)) {
          setSuccess(true)
          setResultMessage(
            `Item has been registered and added to the auction successfully. Item track ID: ${itemAddress}`
          )
        }
      } else {
        setResultMessage('Cannot add this new item.')
      }
    }

    setLoading(false)
  }

  const renderUntrackedDetails = () => (
    <>
      <Grid gap="6" mb="10">
        <FormControl value={name} handleChange={setName} placeholder="Item name" type="text" />

        <FormControl
          value={description}
          handleChange={setDescription}
          placeholder="Description"
          type="text"
        />
      </Grid>

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
        mb="8"
        colorScheme="blue"
        isChecked={isUnique}
        onChange={() => setUnique(!isUnique)}
      >
        This item is unique
      </Checkbox>

      <Flex alignItems="center">
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

      <Box mb="6">
        <Checkbox colorScheme="blue" isChecked={isTracked} onChange={() => setTracked(!isTracked)}>
          This item has tracking ID
        </Checkbox>
      </Box>

      {isTracked && (
        <Box mb="6">
          <FormControl
            value={trackId}
            handleChange={setTrackId}
            placeholder="Track ID"
            type="text"
          />
        </Box>
      )}

      <Grid gap="6" mb="6">
        <FormControl
          value={price}
          handleChange={setPrice}
          placeholder="Starting price"
          type="text"
        />

        <FormControl
          value={location}
          handleChange={setLocation}
          placeholder="Current location"
          type="text"
        />

        <FormControl
          value={ownerWalletAddress}
          handleChange={setOwnerWalletAddress}
          placeholder="Owner wallet address"
          type="text"
        />
      </Grid>

      {!isTracked && renderUntrackedDetails()}

      {itemImage ? (
        <Image m="auto" mb="8" alt="Uploaded image" src={URL.createObjectURL(itemImage)} />
      ) : null}

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
          onClick={handleSubmit}
          isLoading={isLoading}
        >
          {isSuccess ? 'Go back' : 'Okay, save!'}
        </Button>
      </Center>
    </Box>
  )
}

export default ItemRegister
