import React from 'react'
import {
  Input,
  FormControl as FormControlChakra,
  FormLabel,
  FormHelperText,
} from '@chakra-ui/react'

interface FormProps {
  value: string
  type: 'email' | 'text' | 'password'
  placeholder: string
  handleChange(arg: string): void
  label?: string
  helperText?: string
}

const FormControl: React.FC<FormProps> = ({
  value,
  handleChange,
  placeholder,
  type,
  label,
  helperText,
}) => (
  <FormControlChakra>
    {label ? <FormLabel>{label}</FormLabel> : null}

    <Input
      type={type}
      placeholder={placeholder}
      onChange={(e) => handleChange(e.target.value)}
      value={`${value}`}
    />

    {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
  </FormControlChakra>
)

FormControl.defaultProps = {
  label: '',
  helperText: '',
}

export default FormControl
