function isNumeric(numberToCheck: string): boolean {
  if (!isNaN(Number(numberToCheck))) {
    return true
  }

  return false
}

const randomNumber = (length: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length

  let result = ''
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }

  return result
}

export { isNumeric, randomNumber }
