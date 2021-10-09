import { AbiItem } from 'web3-utils'

import { getAccount, web3 } from '.'
import ProtectedItem from '../../ethereum/abis/ProtectedItem.json'

const getItem = (itemAddress: string) => {
  try {
    return new web3.eth.Contract(ProtectedItem.abi as AbiItem[], itemAddress)
  } catch {
    return null
  }
}

const updateItemDetails = async (
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
    await item.methods.updatePriceToBid(ownerAddress, price).send({ from: account })
    await item.methods.updateLocation(ownerAddress, location).send({ from: account })
  } catch (error) {
    return 'Cannot update item detail'
  }

  return ''
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

export { updateItemDetails, getItemDetails }
