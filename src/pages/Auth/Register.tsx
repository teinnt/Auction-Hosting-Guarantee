import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { Box, Center, Stack, Button, Text, Alert, AlertIcon, Link } from '@chakra-ui/react'

import AuthContext from '../../context/Auth'
import { FormControl } from '../../components'
import { REGISTER_USER } from '../../graphql/mutations/auth'

function Register(): JSX.Element {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const history = useHistory()
  const authObj = useContext(AuthContext)

  const [register] = useMutation(REGISTER_USER)

  const handleRegister = async () => {
    const result = await authObj.registerUser(userName, email, password, register)

    if (result.registerUser.data) {
      history.push('lobby')
    } else {
      setErrorMessage(result.registerUser.error.message)
    }
  }

  return (
    <Center marginTop="15vh">
      <Box w={['90vw', '60vw', '50vw']}>
        <Center marginBottom="10vh">
          <Text fontSize="4xl">Register</Text>
        </Center>

        <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md">
          <FormControl
            value={userName}
            handleChange={setUserName}
            placeholder="User Email"
            type="text"
          />
          <FormControl value={email} handleChange={setEmail} placeholder="Email" type="email" />
          <FormControl
            value={password}
            handleChange={setPassword}
            placeholder="Password"
            type="password"
          />

          <Link textAlign="right" color="blue.600" href="#/login">
            Already have an account
          </Link>

          {errorMessage ? (
            <Alert status="error">
              <AlertIcon />
              {errorMessage}
            </Alert>
          ) : null}

          <Button
            borderRadius={0}
            type="button"
            variant="solid"
            colorScheme="blue"
            width="full"
            onClick={handleRegister}
          >
            Register
          </Button>
        </Stack>
      </Box>
    </Center>
  )
}

export default Register
