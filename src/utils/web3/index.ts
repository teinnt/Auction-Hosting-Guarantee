import Web3 from 'web3'
import HDWalletProvider from '@truffle/hdwallet-provider'

import ItemFactory from '../../ethereum/abis/ItemFactory.json'

const web3 = new Web3(
  new HDWalletProvider({
    mnemonic: process.env.REACT_APP_MNEMONIC || '',
    providerOrUrl: process.env.REACT_APP_RINKEBY_URL || '',
  })
)

const getAccount = async () => (await web3.eth.getAccounts())[0]

const getFactoryAddress = () => ItemFactory.networks['4'].address

export { web3, getAccount, getFactoryAddress }
