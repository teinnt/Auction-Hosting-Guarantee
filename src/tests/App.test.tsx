import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Home from '../pages/Home'

test('renders learn react link', () => {
  render(<Home />)
  const linkElement = screen.getByText(/AUCKLAND HOSTING AND GUARANTEE/i)
  expect(linkElement).toBeInTheDocument()
})
