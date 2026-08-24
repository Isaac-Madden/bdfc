import React from 'react';
import { useAzureBlobs } from '../Hooks/useAzureBlobs';
import '../Styles/PageStyles/ClubDocumentsPage.css';

const ClubDocumentsPage: React.FC = () => {
  const { documents, loading, hasError } = useAzureBlobs('club-documents');

  return ( 
    <div className="ClubDocumentsPage">
      <h2>Club Documents</h2>
      
      {loading && <div className="documents-loading">Loading documents...</div>}
      {hasError && !loading && <div className="documents-error">Unable to load documents.</div>}

      {!loading && !hasError && (
        <div className="directory-container">
          {documents.length > 0 ? (
            documents.map(doc => {
              const friendlyName = doc.fileName
                .split('.')[0]
                .replace(/-/g, ' ')
                .replace(/\b\w/g, char => char.toUpperCase());

              return (
                <a 
                  key={doc.url}
                  href={doc.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="directory-card"
                >
                  <h3>{friendlyName}</h3>
                  <p>Click to view or download the official club document.</p>
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