import React, { useState } from 'react';
import axios from 'axios'


export const Videos = () => {
    const [videoUrl, setVideoUrl] = useState('');
    const [downloadUrl, setDownloadUrl] = useState('');

    function handleInputChange(e) {
        setVideoUrl(e.target.value);
    }

    async function handleDownload() {
        try {
            const response = await axios('/api/download', {videoUrl});
            setDownloadUrl(response.data.downloadUrl);
        } catch (error) {
            console.log("Error found", error);
        }
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder='Enter your url'
                value={videoUrl}
                onChange={handleInputChange}
            />
            <button onClick={handleDownload}>Download</button>
            {
                downloadUrl && (
                    <a href={downloadUrl} download> Click to download video</a>
                )
            }
        </div>
    );
}

