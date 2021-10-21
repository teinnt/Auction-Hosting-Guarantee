import React, { FormEvent } from 'react'
import { Box, FormControl as ChakraFormControl, FormLabel, Input } from '@chakra-ui/react'

interface CaptureImageProps {
  handleCapture: (e: FormEvent<HTMLInputElement>) => any
  label: string
}

const CaptureImage: React.FC<CaptureImageProps> = ({ handleCapture, label }) => (
  <>
    <ChakraFormControl id="email" w="fit-content">
      <FormLabel
        p="2"
        paddingInline="4"
        borderRadius="6"
        width="fit-content"
        htmlFor="img"
        backgroundColor="gray.100"
      >
        {label}
      </FormLabel>
      <Input
        type="file"
        id="img"
        name="img"
        hidden
        onChange={(e: FormEvent<HTMLInputElement>) => handleCapture(e)}
      />
    </ChakraFormControl>
    <Box mb="1.5" color="green.400" borderRadius="full">
      OK
    </Box>
  </>
)

export default CaptureImage
