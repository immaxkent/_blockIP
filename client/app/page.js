import Image from "next/image";
import EASAttest from "./components/EASAttest.jsx";
import someData from "../../datas/someData.json";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-12">
      <h2 className="flex items-center justify-center gap-2">
        <Image src="/judge.png" height={90} width={90} alt="judge" />
        <span className="mt-2 font-bold">Attester Tester</span>
      </h2>
      <EASAttest />
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
