import { useEffect, useState } from 'react'
import Web3 from 'web3'

declare global {
  interface Window {
    ethereum: any
    web3: any
  }
}

const loadMetaMask = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    await window.ethereum.enable()
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider)
  } else {
    return false
  }

  return true
}

const useMetaMask = () => {
  const [userAccount, setUserAccount] = useState('')

  useEffect(() => {
    const loadUserAccount = async () => {
      const enabledMetaMask = await loadMetaMask()

      if (enabledMetaMask) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        setUserAccount(accounts[0])

        window.ethereum.on('chainChanged', () => {
          window.location.reload()
        })

        window.ethereum.on('accountsChanged', () => {
          window.location.reload()
        })
      }
    }

    loadUserAccount()
  }, [])

  return { userAccount, loadMetaMask }
}

export default useMetaMask
