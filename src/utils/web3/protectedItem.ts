import { AbiItem } from 'web3-utils'

import { getAccount, web3 } from './index'
import ProtectedItem from '../../ethereum/abis/ProtectedItem.json'

const getItem = (itemAddress: string) => {
  try {
    return new web3.eth.Contract(ProtectedItem.abi as AbiItem[], itemAddress)
  } catch {
    return null
  }
}

const getItemDetails = async (trackId: string, ownerAddress: string) => {
  try {
    const item = getItem(trackId)
    if (!item) {
      return 'Item does not exist.'
    }

    const itemDetails = await item.methods.getDetails(ownerAddress).call()
    return itemDetails
  } catch (error) {
    return 'Current owner address is incorrect.'
  }
}

const updateItemToBid = async (
  itemAddress: string,
  ownerAddress: string,
  location: string,
  price: number
) => {
  const item = getItem(itemAddress)
  if (!item) {
    return 'Item does not exist.'
  }

  const currentOwner = await item.methods.getCurrentOwnerAddress().call()
  if (ownerAddress !== currentOwner) {
    return 'Current owner address is incorrect.'
  }

  const account = await getAccount()

  try {
    await item.methods.updateItemToBid(ownerAddress, price, location).send({ from: account })
  } catch (error) {
    return 'Cannot update item detail'
  }

  return ''
}

const updateItemAfterBid = async (
  itemAddress: string,
  ownerAddress: string,
  price: number,
  confirmCode: string,
  shippingCode: string
) => {
  const item = getItem(itemAddress)
  if (!item) {
    return 'Item does not exist.'
  }

  const account = await getAccount()

  try {
    await item.methods
      .updateItemAfterBid(ownerAddress, price, shippingCode, confirmCode)
      .send({ from: account, gas: '2000000' })
  } catch (error) {
    return 'Cannot update item detail'
  }

  return ''
}

const updateLocation = async (trackId: string, shippingCode: string, location: string) => {
  const item = getItem(trackId)

  const account = await getAccount()

  try {
    await item?.methods.updateLocation(shippingCode, location).send({ from: account })
  } catch (error) {
    return 'Shipping code is invalid!'
  }

  return ''
}

const receiveItem = async (trackId: string, confirmCode: string) => {
  const item = getItem(trackId)

  const account = await getAccount()

  try {
    await item?.methods.receiveItem(confirmCode).send({ from: account })
  } catch (error) {
    return 'Confirmation code is invalid!'
  }

  return ''
}

export { getItemDetails, updateItemToBid, updateItemAfterBid, updateLocation, receiveItem }
