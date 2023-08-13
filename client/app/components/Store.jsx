"use client";
import { React, useState } from 'react';
import { Web3Storage } from 'web3.storage';

const Store = ({setCid, setCurrentStep}) => {
    
    const [isUploaded, setIsUploaded] = useState(false);
    const [selectedFiles, setSelectedFiles] = useState(null);
    const client = new Web3Storage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDRGMjFmRkZiYjJGNDRjNDI1ZkEyRGVlNUI3ZTZDNzJlNDQwNzk0NjciLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTE0OTAzNDQwNzQsIm5hbWUiOiJCbG9ja0lQIn0.mQe-QcgTO2jdf_bhCLzBV96D8O1UgcHJXQx-6LA2sPg' });

    const handleFileChange = (event) => {
        event.preventDefault();
        setSelectedFiles(event.target.files);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedFiles) {
            console.log('No file selected');
            return
        }
        try {
            const cid = await client.put(selectedFiles);
            console.log(cid);
            setSelectedFiles(null);
            setCid(cid);
            setCurrentStep("minter")
            return cid;
        } catch (err) {
            console.error(err);
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" id="input" onChange={handleFileChange} />
            <button type="submit">Upload</button>
        </form>

    )
}

export default Store;