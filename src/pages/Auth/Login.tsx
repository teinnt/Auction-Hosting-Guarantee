import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { Box, Center, Stack, Button, Text, Alert, AlertIcon, Link } from '@chakra-ui/react'

import AuthContext from '../../context/Auth'
import { FormControl } from '../../components'
import { LOGIN_USER } from '../../graphql/mutations/auth'

function Login(): JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const history = useHistory()
  const authObj = useContext(AuthContext)

  const [login] = useMutation(LOGIN_USER)

  const handleLogin = async () => {
    const result = await authObj.login(email, password, login)

    if (result.loginUser.data) {
      history.push('lobby')
    } else {
      setErrorMessage(result.loginUser.error.message)
    }
  }

  return (
    <Center marginTop="15vh">
      <Box w={['90vw', '60vw', '50vw']}>
        <Center marginBottom="10vh">
          <Text fontSize="4xl">Login</Text>
        </Center>

        <form>
          <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md">
            <FormControl value={email} handleChange={setEmail} placeholder="Email" type="email" />
            <FormControl value={password} handleChange={setPassword} placeholder="Password" type="password" />

            <Link textAlign="right" color="blue.600" href="#/register">
              Don&apos;t have an account?
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
              onClick={handleLogin}
            >
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Center>
  )
}

export default Login
