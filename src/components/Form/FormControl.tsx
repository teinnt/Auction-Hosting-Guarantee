import React from 'react'
import { Input, InputGroup, FormControl as FormControlChakra } from '@chakra-ui/react'

interface FormProps {
  value: string
  type: 'email' | 'text' | 'password'
  placeholder: string
  handleChange(arg: string): void
}

const FormControl: React.FC<FormProps> = ({ value, handleChange, placeholder, type }) => (
  <FormControlChakra>
    <InputGroup>
      <Input type={type} placeholder={placeholder} onChange={(e) => handleChange(e.target.value)} value={value} />
    </InputGroup>
  </FormControlChakra>
)
export default FormControl
