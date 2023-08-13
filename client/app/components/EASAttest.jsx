"use client"
import { EAS, Offchain, SchemaEncoder, SchemaRegistry } from "@ethereum-attestation-service/eas-sdk";
// import { ethers } from 'ethers';
import { useState } from 'react';
const ethers = require('ethers');

function EASAttest() {
    const [name, setName] = useState(''); 
    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [attestationUID, setAttestationUID] = useState('');

    const EASContractAddress = '0x4200000000000000000000000000000000000021'; //optimism-goerli
    const submitAttestation = async () => {
        setAttestationUID('');

        // ATTEMPT 2
        // const wallet = new ethers.Wallet(ethPrivkey, provider);
        // const signer = wallet.provider.getSigner(wallet.address);
        
        // ATTEMPT 1 
        // const signer = provider.getSigner();

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send('eth_requestAccounts', []); // ATTEMPT 3 - successfully prompts MM to connect
        const signer = provider.getSigner();


            const eas = new EAS(EASContractAddress, signer);
            eas.connect(signer);

            const schema = new SchemaEncoder("string name, string message");
            const encodedData = schema.encodeData([
            {name: 'name', value: name, type: "string"},
            {name: 'message', value: message, type: "string"}
            ]);

            const schemaUID = '0xb28844791177681bd44d983e8aaa017f6a378e297271a46fd20d81a5cbadc386';

            const transaction = await eas.attest({
                schema: schemaUID,
                data: {
                    recipient: address,
                    expirationTime: 0,
                    revocable: true,
                    data: encodedData
                }
            })
            
            setIsLoading(true);
            
            const newUID = await transaction.wait();
            setAttestationUID(newUID);


            const newAttestationUID = newUID.data;


            // console.log(check);


            setIsLoading(false);

    }
    return (
        <div className='flex flex-col items-center'>
            <input 
            type='text' placeholder='Enter Name...'
            className='w-72 p-2 mt-4 text-black rounded-md'
            value={(name)}
            onChange= {(e) => setName(e.target.value)}
            ></input>

            <input 
            type='text' placeholder='Enter Address...'
            className='w-72 p-2 mt-4 text-black rounded-md'
            value={(address)}
            onChange= {(e) => setAddress(e.target.value)}
            ></input>

            <input 
            type='text' placeholder='Enter Message'
            className='w-72 p-2 mt-4 text-black rounded-md'
            value={(message)}
            onChange= {(e) => setMessage(e.target.value)}
            ></input>

            <button
            className='w-72 p-2 mt-12 text-white bg-blue-500 rounded-md'
            onClick={submitAttestation}
            >
                Submit Attestation
            </button>

            {isLoading && <p className="text-whit mt-4">Loading...</p>}
            {attestationUID && (
                <p className="mt-4">
                    New Attestation UID: {attestationUID}
                </p>
            )}
            
            
        </div>
    );
}

export default EASAttest;
