function isNumeric(numberToCheck: string): boolean {
  if (!isNaN(Number(numberToCheck))) {
    return true
  }

  return false
}

// eslint-disable-next-line import/prefer-default-export
export { isNumeric }
