"use client"
import { EAS, Offchain, SchemaEncoder, SchemaRegistry } from "@ethereum-attestation-service/eas-sdk";
// import { ethers } from 'ethers';
import { useState } from 'react';
const ethers = require('ethers');
import writeToLocal from './writeToLocal.js';

function EASAttest(cid, fromAddress, toAddress, hash, setAttestationId) {

    const [isLoading, setIsLoading] = useState(false);


    const EASContractAddress = '0x4200000000000000000000000000000000000021'; //optimism-goerli
    const submitAttestation = async () => {


            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send('eth_requestAccounts', []); // ATTEMPT 3 - successfully prompts MM to connect
            const signer = provider.getSigner();
            const eas = new EAS(EASContractAddress, signer);
            eas.connect(signer);

            const schema = new SchemaEncoder("address _to, address _from, string _CID, string _nftHash");
            const encodedData = schema.encodeData([
            {name: '_to', value: toAddress.toAddress, type: "address"},
            {name: '_from', value: fromAddress, type: "address"},
            {name: '_CID', value: cid, type: "string"},
            {name: '_nftHash', value: hash, type: "string"},
            ]);

            const schemaUID = '0xfedbd92ecc310f217b7a53b2b5f5b2d1bbe8a4a7cac7f54c70dbc3e18fc0d555';
            const transaction = await eas.attest({
                schema: schemaUID,
                data: {
                    recipient: toAddress,
                    expirationTime: 0,
                    revocable: true,
                    data: encodedData
                }
            })
            
            setIsLoading(true);
            const newUID = await transaction.wait();
            setAttestationId(newUID);
            setIsLoading(false);
            writeToLocal(toAddress, fromAddress, cid, hash, newUID);
            setCurrentStep('completed');

    }
    return (
        <div className='flex flex-col items-center'>
            
            <button
            className='w-72 p-2 mt-12 text-white bg-blue-500 rounded-md'
            onClick={submitAttestation}
            >
                Submit Attestation
            </button>

            {isLoading && <p className="text-whit mt-4">Loading...</p>}
            
            
            
        </div>
    );
}

export default EASAttest;
