import React, { useState } from 'react'
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
  FormControl as ChakraFormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'

import { FormControl } from '../../components'

const BecomeSeller: React.FC = (): JSX.Element => {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [trackId, setTrackId] = useState('')

  const [isUnique, setUnique] = useState(false)
  const [isNew, setNew] = useState(false)
  const [isTracked, setTracked] = useState(false)

  const [identityImg, setIdentifyImg] = React.useState<File>()

  const [errorMessage, setErrorMessage] = useState('')

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
        mb="8"
        colorScheme="blue"
        isChecked={isUnique}
        onChange={() => setUnique(!isUnique)}
      >
        This item is unique
      </Checkbox>

      <Flex alignItems="center">
        <ChakraFormControl id="email" w="fit-content">
          <FormLabel
            p="2"
            paddingInline="4"
            borderRadius="6"
            width="fit-content"
            htmlFor="img"
            backgroundColor="gray.100"
          >
            Upload item photos
          </FormLabel>
          <Input type="file" id="img" name="img" hidden />
        </ChakraFormControl>
        <Box mb="1.5" color="green.400" borderRadius="full">
          OK
        </Box>
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

      {errorMessage ? (
        <Alert status="error">
          <AlertIcon />
          {errorMessage}
        </Alert>
      ) : null}

      <Center>
        <Button mt="10" mb="20" type="button" variant="solid" colorScheme="blue">
          Okay, save!
        </Button>
      </Center>
    </Box>
  )
}

export default BecomeSeller
