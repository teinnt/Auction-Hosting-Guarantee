import { AbiItem } from 'web3-utils'

import * as ipfs from './ipfs'
import { getAccount, getFactoryAddress, web3 } from '.'
import ItemFactory from '../../ethereum/abis/ItemFactory.json'

const itemFactory = new web3.eth.Contract(ItemFactory.abi as AbiItem[], getFactoryAddress())

const createNewItem = async (
  image: File | undefined,
  name: string,
  location: string,
  description: string,
  ownerWalletAddress: string,
  price: number
) => {
  const url = await ipfs.addImage(image)

  const account = await getAccount()

  const items = await itemFactory.methods
    .createNewItem(url, name, location, description, price)
    .send({ from: account })
    .once('receipt', (receipt: any) => {
      // eslint-disable-next-line no-console
      console.log(receipt)
    })

  return items
}

const getItem = async (index: number) => {
  const item = await itemFactory.methods.items(index).call()
  return item
}

export { createNewItem, getItem }
