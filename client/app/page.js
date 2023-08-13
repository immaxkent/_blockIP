import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-12">
      <div>
        <h1 className="flex items-center justify-center gap-2">
        <span className="mt-2 font-bold">
          Bock IP</span>
      </h1>
      <span className="mb-20"><Image src="/judge.png" height={90} width={90} alt="judge" /></span>
      </div>
      <span>

      <div>
        
      </div>

        <div className="mb-20">
        <h2 className=" mb-20flex items-center justify-center gap-2">
          <span className="mt-2 font-bold">Upload to Web3.Storage</span>
        </h2>
        <p className="flex items-center justify-center gap-2">
          <span className="mt-2 font-bold">Use the IPFS. Free of charge.</span>
          <span className="mt-2 mr-10 ml-10 mb-5 text-white">Upload your verified Intellectual Property documents to the Inter-Planetary Filing System,
          to forever be stored, indellably, as a unique point of reference for clients, ensuring continuity and transparency for critical data. </span>
        </p>
        </div>


        <div className="mb-20">
        <h2 className="mb-20 flex items-center justify-center gap-2">
          <span className="mt-2 font-bold">Mint NFT Receipts. Indellable.</span>
        </h2>
        <p className="flex items-center justify-center gap-2">
          <span className="mt-2 font-bold">Using your choice of network from our market leaders.</span>
          <span className="mt-2 mr-10 ml-10 mb-5 text-white">Use our selection of networks to create and mint your NFTs, representing indellable receipts and transparent ownership
          evidence for anyone issued IP under your governance.</span>
        </p>

        </div>



        <div className="mb-20">
        <h2 className="mb-20 flex items-center justify-center gap-2">
          <span className="mt-2 font-bold">Attest with the Best</span>
        </h2>
        <p className="flex items-center justify-center gap-2">
          <span className="mt-2 font-bold">Use EAS. Forever.</span>
          <span className="mt-2 mr-10 ml-10 mb-5 text-white">The Ethereum Attestation Service serves as your clear record of all IP ever issued. Easy to monitor on your own application,
          and easier to track vias the block explorer. Climb in.</span>
        </p>

        </div>

      </span>
      
      
      <Image
        className="absolute bottom-0 mb-20"
        src="/doc.png"
        height={60}
        width={60}
        alt="doc"
      />

    </main>
  );
}
