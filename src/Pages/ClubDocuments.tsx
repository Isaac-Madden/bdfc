import React, { useState, useEffect } from 'react';
import '../Styles/PageStyles/ClubDocumentsPage.css';

const account = import.meta.env.VITE_AZURE_ACCOUNT_NAME;
const container = import.meta.env.VITE_AZURE_CONTAINER_NAME;
const sas = import.meta.env.VITE_AZURE_SAS_TOKEN;
const baseUrl = `https://${account}.blob.core.windows.net/${container}`;
const listUrl = `${baseUrl}${sas}&restype=container&comp=list&prefix=club-documents`;

const ClubDocumentsPage: React.FC = () => {
  const [documents, setDocuments] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!account || !container || !sas) {
      console.error("Missing Azure configuration environment variables.");
      setHasError(true);
      setLoading(false);
      return;
    }

    const fetchDocuments = async () => {
      try {
        const response = await fetch(listUrl);
        if (!response.ok) throw new Error();
        
        const xmlText = await response.text();
        const xmlDoc = new DOMParser().parseFromString(xmlText, "application/xml");
        const blobElements = Array.from(xmlDoc.getElementsByTagName("Blob"));

        const documentUrls = blobElements.map((blob) => {
          const fileName = blob.getElementsByTagName("Name")[0]?.textContent;
          return `${baseUrl}/${fileName}`;
        });

        setDocuments(documentUrls);
      } catch {
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  return ( 
    <div className="ClubDocumentsPage">
      <h2>Club Documents</h2>
      
      {loading && <div className="documents-loading">Loading documents...</div>}
      {hasError && !loading && <div className="documents-error">Unable to load documents.</div>}

      {!loading && !hasError && (
        <div className="directory-container">
          {documents.length > 0 ? (
            documents.map(url => {
              const fileName = url.split('/').pop()?.split('.')[0] || "";
              const friendlyName = fileName
                .replace(/-/g, ' ')
                .replace(/\b\w/g, char => char.toUpperCase());

              return (
                <a 
                  key={url}
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="directory-card"
                >
                  <h3>{friendlyName}</h3>
                  <p>Click to view or download the official club document.</p>
                  <span className="card-link">View Document</span>
                </a>
              );
            })
          ) : (
            <p>No documents found.</p>
          )}
        </div>
      )}
    </div>
  );

};

export default ClubDocumentsPage;