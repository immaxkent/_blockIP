import React from 'react';
import someData from "../issuance/issued.json";

//import json file here

export default function Explore() {
    //here, we can explore the uploaded IP data. 
    
    return (


        <main className="flex flex-col items-center p-12">
          <h2 className="flex items-center justify-center gap-2">
            <span className="mt-2 font-bold">Explore All IP</span>
          </h2>

          <div id="data_container">
        {someData.map((itemOfData) => {
          <div>{JSON.stringify(itemOfData)}</div>;
        })}
      </div>
          
        </main>
        

    )
}