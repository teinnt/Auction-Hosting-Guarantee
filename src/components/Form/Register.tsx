import React, { useState } from 'react'
import {
  Input,
  Button,
  InputGroup,
  Stack,
  Box,
  Link,
  FormControl,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react'

function Register() {
  const [showPassword, setShowPassword] = useState(false)

  const handleShowClick = () => setShowPassword(!showPassword)

  return (
    <Box minW={{ base: '90%', md: '468px' }}>
      <form>
        <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md">
          <FormControl>
            <InputGroup>
              <Input type="email" placeholder="email address" />
            </InputGroup>
          </FormControl>

          <FormControl>
            <InputGroup>
              <Input type={showPassword ? 'text' : 'password'} placeholder="Password" />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <FormControl>
            <InputGroup>
              <Input type={showPassword ? 'text' : 'password'} placeholder="Confirm password" />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormHelperText textAlign="right">
              <Link>Already have an account?</Link>
            </FormHelperText>
          </FormControl>

          <Button borderRadius={0} type="submit" variant="solid" colorScheme="teal" width="full">
            Register
          </Button>
        </Stack>
      </form>
    </Box>
  )
}

export default Register
