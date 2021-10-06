import { create } from 'ipfs-http-client'

const ipfs = create({ url: process.env.REACT_APP_IPFS_URL })

const addImage = async (file: File | undefined) => {
  if (!file) return ''

  const result = await ipfs.add(file)
  return result.path
}

// eslint-disable-next-line import/prefer-default-export
export { addImage }
