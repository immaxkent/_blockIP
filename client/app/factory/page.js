"use client";

import React from "react";
import Upload from "../components/Upload";
import Store from "../components/Store";
import Minter from "../components/Minter";
import EASAttest from "../components/EASAttest";
import { useEffect, useState } from "react";

export default function Factory() {
  //here, we can execute the committment of IP data. The process goes:
  //1. upload data to web3.storage / IPFS and return a CID
  //2. mint an NFT link the URI to the CID
  //3. create an attestation of the issuance
  //4. store these datas locally as a json

  const [cid, setCid] = useState(null);
  const [toAddress, setToAddress] = useState(null);

  const [fromAddress, setFromAddress] = useState('');
  const [hash, setHash] = useState(null);
  const [attestationId, setAttestationId] = useState(null);

  const [currentStep, setCurrentStep] = useState("store");

  const handleChange = (e) => {};

  return (
    <main className="flex flex-col items-center p-12">
      <div className="flex flex-row items-center p12">
        <h2 className="flex items-center justify-center gap-2">
          <span className="mt-2 font-bold">IP Admission Factory</span>
        </h2>
      </div>
      {
        currentStep === "store" ? (
          <Store setCid={setCid} setCurrentStep={setCurrentStep} />
        ) : (
          ""
        ) // store the PDF and return the CID, storing it in the state via setCid
      }
      {currentStep === "minter" ? <Minter setHash={setHash} cid={cid} toAddress={toAddress} setToAddress={setToAddress} setFromAddress={setFromAddress} setCurrentStep={setCurrentStep}/> : ""}
      {currentStep === "attest" ? <EASAttest cid={cid} fromAddress={fromAddress} toAddress={toAddress} hash={hash} setAttestationId={setAttestationId} setCurrentStep={setCurrentStep}/> : ""}
      {currentStep === "completed" ? (
        <div>
          IP Issued!! Head over to Explore to check out your uploaded IP
        </div>
      ) : ""}
    </main>
  );
}
