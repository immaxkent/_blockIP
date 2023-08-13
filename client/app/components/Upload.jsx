'use client';

import React, { useRef, useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { Web3Storage } from "web3.storage";


// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const Upload = () => {

  const filePondRef = useRef(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [cid, setCid] = useState(null);
  const client = new Web3Storage({ token: process.env.REACT_APP_WEB3_STORAGE_TOKEN });

  const uploadToWeb3Storage = async () => {
    const files = new Blob(filePondRef.current.getFiles());
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(files);
    reader.onloadend = async () => {
        const buffer = Buffer.from(reader.result);
        try {
          const cid = await client.put(buffer);
          console.log("File uploaded to web3Storage with CID " + cid);
        } catch (error) {
          console.error("Error uploading to web3Storage: ", error);
        }
    };
    // const cid = await client.put(files);
    // console.log("got here");
    // setCid(cid);
    // console.log('stored files with cid:', cid);
    // return cid;
  }

  const handleInit = () => {
    console.log("FilePond instance has initialized", filePondRef.current);
  };

    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////

  const handleUpdateFiles = (fileItems) => {
    // Store uploaded files in local storage
    const fileNames = fileItems.map((fileItem) => fileItem.file.name);
    localStorage.setItem("uploadedFiles", JSON.stringify(fileNames));
    
    //   const handleUpdateFiles = async (fileItems) => {
        // const uploadedPaths = await Promise.all(
            //   fileItems.map(async (fileItem) => {
                //     const path = await uploadToWeb3Storage(fileItem.file);
                //     return path;
                //   })
                // );
                
                // Filter out null values (failed uploads)
                const validPaths = fileItems.filter((path) => path !== null);
                
                setUploadedFiles(validPaths);
            };


    //////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////

  return (
    <div>
      <h1>File Upload</h1>
      <FilePond
        ref={filePondRef}
        allowMultiple={true}
        oninit={handleInit}
        onupdatefiles={handleUpdateFiles}
      />
      {!uploadedFiles && <div>
        <h2>Uploaded Files</h2>
        <ul>
          {uploadedFiles.map((fileName, index) => (
            <li key={index}>{fileName}</li>
            
          ))}
        </ul>
      </div>}
      <button onClick={uploadToWeb3Storage}>Upload to Web3 Storage</button>
      {cid && <p>CID: {cid}</p>}
    </div>
  );
};

export default Upload;