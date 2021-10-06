import Web3 from 'web3'
import ItemFactory from '../../ethereum/abis/ItemFactory.json'

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.REACT_APP_RINKEBY || ''))

const getAccount = async () => (await web3.eth.getAccounts())[0]

const getFactoryAddress = () => ItemFactory.networks['5777'].address

export { web3, getAccount, getFactoryAddress }
