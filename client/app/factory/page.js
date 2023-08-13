import React from 'react';
import Upload from '../components/Upload';
import Store from '../components/Store';

export default function Factory() {
    //here, we can execute the committment of IP data. The process goes:
    //1. upload data to web3.storage / IPFS and return a CID

    
    //2. mint an NFT link the URI to the CID
    //3. upload these metadatas to Polybase
    return (
      
      <main className="flex flex-col items-center p-12">
        <div className="flex flex-row items-center p12">
          <h2 className="flex items-center justify-center gap-2">
            <span className="mt-2 font-bold">IP Admission Factory</span>
          </h2>
        </div>
          <Store />
          
        </main>
        

    )
}