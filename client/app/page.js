import Image from "next/image";
import EASAttest from "./components/EASAttest.jsx";
import someData from "../../datas/someData.json";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-12">
      <div>
        <h1 className="flex items-center justify-center gap-2">
        <span className="mt-2 font-bold">
          Bock IP</span>
      </h1>
      <span><Image src="/judge.png" height={90} width={90} alt="judge" /></span>
      </div>
      <span>

      <div>
        
      </div>

        <div>
        <h2 className="flex items-center justify-center gap-2">
          <span className="mt-2 font-bold">Upload to Web3.Storage</span>
        </h2>
        <p className="flex items-center justify-center gap-2">
          <span className="mt-2 font-bold">Use the IPFS. Free of charge.</span>
          <span className="mt-2 mr-10 ml-10 mb-5 text-white">Upload your verified Intellectual Property documents to the Inter-Planetary Filing System,
          to forever be stored, indellably, as a unique point of reference for clients, ensuring continuity and transparency for critical data. </span>
        </p>
        </div>


        <div>
        <h2 className="flex items-center justify-center gap-2">
          <span className="mt-2 font-bold">Upload to Web3.Storage</span>
        </h2>
        <p className="flex items-center justify-center gap-2">
          <span className="mt-2 font-bold">Use the IPFS. Free of charge.</span>
          <span className="mt-2 mr-10 ml-10 mb-5 text-white">Upload your verified Intellectual Property documents to the Inter-Planetary Filing System,
          to forever be stored, indellably, as a unique point of reference for clients, ensuring continuity and transparency for critical data. </span>
        </p>

        </div>



        <div>
        <h2 className="flex items-center justify-center gap-2">
          <span className="mt-2 font-bold">Upload to Web3.Storage</span>
        </h2>
        <p className="flex items-center justify-center gap-2">
          <span className="mt-2 font-bold">Use the IPFS. Free of charge.</span>
          <span className="mt-2 mr-10 ml-10 mb-5 text-white">Upload your verified Intellectual Property documents to the Inter-Planetary Filing System,
          to forever be stored, indellably, as a unique point of reference for clients, ensuring continuity and transparency for critical data. </span>
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
      <div id="data_container">
        {someData.map((itemOfData) => {
          <div>{json.stingify(itemOfData)}</div>;
        })}
      </div>
    </main>
  );
}
