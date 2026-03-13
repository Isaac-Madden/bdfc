import React, { useState, useEffect } from 'react';
import '../Styles/PageStyles/GalleryPage.css';

const account = import.meta.env.VITE_AZURE_ACCOUNT_NAME;
const container = import.meta.env.VITE_AZURE_CONTAINER_NAME;
const sas = import.meta.env.VITE_AZURE_SAS_TOKEN;
const baseUrl = `https://${account}.blob.core.windows.net/${container}`;
const listUrl = `${baseUrl}${sas}&restype=container&comp=list&prefix=test-2025`;

const GalleryPage: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!account || !container || !sas) {
      console.error("Missing Azure configuration environment variables.");
      setHasError(true);
      setLoading(false);
      return;
    }

    const fetchImages = async () => {
      try {
        const response = await fetch(listUrl);
        if (!response.ok) throw new Error();
        
        const xmlText = await response.text();
        const xmlDoc = new DOMParser().parseFromString(xmlText, "application/xml");
        const blobElements = Array.from(xmlDoc.getElementsByTagName("Blob"));

        const imageUrls = blobElements.map((blob) => {
          const fileName = blob.getElementsByTagName("Name")[0]?.textContent;
          return `${baseUrl}/${fileName}`;
        });

        setImages(imageUrls);
      } catch {
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="GalleryPage">
      {loading && <div className="gallery-loading">Loading gallery...</div>}
      {hasError && !loading && <div className="gallery-error">Unable to load images.</div>}

      {!loading && !hasError && (
        <div className="image-grid">
          {images.length > 0 ? (
            images.map((url) => (
              <img key={url} src={url} alt="Gallery item" className="gallery-image" loading="lazy" />
            ))
          ) : (
            <p>No images found.</p>
          )}
        </div>
      )}
    </div>
);

};

export default GalleryPage;