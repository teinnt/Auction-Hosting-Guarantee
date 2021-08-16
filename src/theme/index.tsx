import React from 'react'
import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

function ThemeProvider({ children }: { children: React.ReactNode }): JSX.Element {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default ThemeProvider
