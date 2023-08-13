'use client';

import { useState, useEffect } from 'react'
// import { contractAddress } from '../../utils/config.json'
import { ethers } from 'ethers'
// import axios from 'axios'
import * as Loader from 'react-loader-spinner'
import BlockIPFactory from '../../utils/BlockIPFactory.json'
// import fs from 'fs';
import { deployedContractAddress as theContractAddress } from '@/utils/config';

const Minter = ({ setHash, cid, setToAddress, setCurrentStep, setFromAddress }) => {
	const [mintedNFT, setMintedNFT] = useState(null)
	const [miningStatus, setMiningStatus] = useState(null)
	const [loadingState, setLoadingState] = useState(0)
	const [txError, setTxError] = useState(null)
	const [currentAccount, setCurrentAccount] = useState('')
	const [correctNetwork, setCorrectNetwork] = useState(false)

    // const contractAddressObject = JSON.parse(fs.readFileSync('../../utilsconfig.json', 'utf8'));
    // const contractAddress = contractAddressObject[0].deployedContractAddress;

	// Checks if wallet is connected
	const checkIfWalletIsConnected = async () => {
		const { ethereum } = window
		if (ethereum) {
			console.log('Ethereum window object exists, here: ', ethereum)
		} else {
			console.log('Connect wallet please')
		}

		const accounts = await ethereum.request({ method: 'eth_accounts' })

		if (accounts.length !== 0) {
			console.log('Account ', accounts[0])
			setCurrentAccount(accounts[0])
			setFromAddress(accounts[0])
		} else {
			console.log('No account connected!')
		}
	}

	// Prompts connection of MM via Wallet Connect button
	const connectWallet = async () => {
		try {
			const { ethereum } = window

			if (!ethereum) {
				console.log('Metamask not detected')
				return
			}
			let chainId = await ethereum.request({ method: 'eth_chainId' })
			console.log('Connected to chain:' + chainId)

			const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

			console.log('Account connected is ', accounts[0])
			setCurrentAccount(accounts[0])
		} catch (error) {
			console.log('Error when connecting to metamask', error)
		}
	}

	// Checks if wallet is connected to the correct network
	const checkCorrectNetwork = async () => {
		const { ethereum } = window
		let chainId = await ethereum.request({ method: 'eth_chainId' })
		console.log('Connected to chain:' + chainId)

		const optimismChainId = '0x1a4'
        const baseChainId = '0x14a33'
        const zoraChainId = '0x1'

		// const devChainId = 1337
		// const localhostChainId = `0x${Number(devChainId).toString(16)}`

		if (chainId == optimismChainId || chainId == baseChainId || chainId == zoraChainId) {
			setCorrectNetwork(true)
		} else {
			setCorrectNetwork(false)
		}
	}

	useEffect(() => {
		checkIfWalletIsConnected()
		checkCorrectNetwork()
	}, [])

	// execute mint of blockIPNFT
	const mintBIPNFT = async () => {
		try {
			const { ethereum } = window

			if (ethereum) {
				const provider = new ethers.providers.Web3Provider(ethereum)
				const signer = provider.getSigner()
				const nftContract = new ethers.Contract(
					theContractAddress,
					BlockIPFactory.abi,
					signer,
                    
				)

				let nftTx = await nftContract.mintBlockIP(toAddress, cid, {gasLimit: 5000000})
				console.log('Canst thou mine... ', nftTx.hash)
				setMiningStatus(0)

				let tx = await nftTx.wait()
				setLoadingState(1)
				console.log('MINED, YOU DWARFISH PRINCE!', tx)
				// let event = tx.events[0]
				// let value = event.args[2]
				// let tokenId = value.toNumber()
				// setTokenId(tokenId)
				setHash(tx.transactionHash)
        setCurrentStep("attest")

				// getMintedNFT(tokenId)
			} else {
				console.log("Ethereum object doesn't exist!")
			}
		} catch (error) {
			console.log('Minting process error: ', error)
			setTxError(error.message)
		}
	}

	// Gets the minted NFT data
	const getMintedNFT = async (tokenId) => {
		try {
			const { ethereum } = window

			if (ethereum) {
				const provider = new ethers.providers.Web3Provider(ethereum)
				const signer = provider.getSigner()
				const nftContract = new ethers.Contract(
					theContractAddress,
					NFT.abi,
					signer
				)

				let tokenUri = await nftContract.tokenURI(tokenId)
				// let data = await axios.get(tokenUri)
				// let meta = data.data

				setMiningStatus(1)
				// setMintedNFT(meta.image)
			} else {
				console.log("Ethereum object doesn't exist!")
			}
		} catch (error) {
			console.log(error)
			setTxError(error.message)
		}
	}

	return (
		<div className='flex flex-col items-center pt-32 bg-[#0B132B] text-[#d3d3d3] min-h-screen'>
			<div className='trasition hover:rotate-180 hover:scale-105 transition duration-500 ease-in-out'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='60'
					height='60'
					fill='currentColor'
					viewBox='0 0 16 16'
				>
					<path d='M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z' />
				</svg>
			</div>
			<h2 className='text-3xl font-bold mb-20 mt-12'>
			 Issue BlockIP
			</h2>
			<div>
				<label>
					Recipient Etheruem Address: <br/>
				</label>
				<input onChange={e => setToAddress(e.target.value)} />
			</div>
			{currentAccount === '' ? (
				<button
					className='text-2xl font-bold py-3 px-12 bg-black shadow-lg shadow-[#ffffff] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out'
					onClick={connectWallet}
				>
					Connect Wallet
				</button>
			) : correctNetwork ? (
				<button
					className='text-2xl font-bold py-3 px-12 bg-black shadow-lg shadow-[#ffffff] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out'
					onClick={mintBIPNFT}
				>
					Mint NFT
				</button>
			) : (
				<div className='flex flex-col justify-center items-center mb-20 font-bold text-2xl gap-y-3'>
					<div>.........................................................</div>
					<div className='flex flex-col justify-content:center align-items:center'>Please connect to the Optimism, Base or Zora Testnets and reload the page</div>
					<div></div>
					<div>.........................................................</div>
				</div>
			)}

			
			{loadingState === 0 ? (
				miningStatus === 0 ? (
					txError === null ? (
						<div className='flex flex-col justify-center items-center'>
							<div className='text-lg font-bold'>
								Processing your transaction
							</div>
							<Loader.TailSpin
								className='flex justify-center items-center pt-12'
								type='TailSpin'
								color='#d3d3d3'
								height={40}
								width={40}
							/>
						</div>
					) : (
						<div className='text-lg text-red-600 font-semibold'>{txError}</div>
					)
				) : (
					<div></div>
				)
			) : (
				<div className='flex flex-col justify-center items-center'>
					<div className='font-semibold text-lg text-center mb-4'>
						Your BlockIP NFT has been minted!
					</div>
					<img
						src={mintedNFT}
						alt=''
						className='h-60 w-60 rounded-lg shadow-2xl shadow-[#6FFFE9] hover:scale-105 transition duration-500 ease-in-out'
					/>
				</div>
			)}
		</div>
	)
}

export default Minter;