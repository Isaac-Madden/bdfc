import React, { useState, useEffect } from 'react';
import '../Styles/PageStyles/GalleryPage.css';

const account = import.meta.env.VITE_AZURE_ACCOUNT_NAME;
const container = import.meta.env.VITE_AZURE_CONTAINER_NAME;
const sas = import.meta.env.VITE_AZURE_SAS_TOKEN;
const url = `https://${account}.blob.core.windows.net/${container}/${sas}&restype=container&comp=list&prefix=test-2025`;

const GalleryPage: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {

    if (!account || !container || !sas) {
      return console.error("Missing Azure config");
    }

    const fetchImages = async () => {
      const response = await fetch(url);
      const xmlText = await response.text();
      const xmlDoc = new DOMParser().parseFromString(xmlText, "application/xml");
      const blobElements = xmlDoc.getElementsByTagName("Blob");
      const blobArray = Array.from(blobElements);

      const imageUrls = blobArray.map((blob) => {
        const nameTag = blob.getElementsByTagName("Name")[0];
        const fileName = nameTag.textContent;
        return `https://${account}.blob.core.windows.net/${container}/${fileName}`;
      });

      setImages(imageUrls);
    };

    fetchImages();
  }, []);

  return (
    <div className="GalleryPage">
      <div className="image-grid">
        {images.map((url) => (
            <img key={url} src={url} alt="Gallery item" className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;