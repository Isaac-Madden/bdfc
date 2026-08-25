import React, { useState, useMemo } from 'react';
import { useAzureBlobs, type AzureDocument } from '../Hooks/useAzureBlobs';
import '../Styles/PageStyles/GalleryPage.css';
import bdfc_club_logo from '../assets/bdfc_club_logo.png';

interface Album {
  folderName: string;
  coverImage: string;
  images: AzureDocument[];
}

const GalleryPage: React.FC = () => {
  const { documents, loading, hasError } = useAzureBlobs('club-pictures');
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);

  const albums: Album[] = useMemo(() => {
    const grouped: Record<string, AzureDocument[]> = {};

    documents.forEach((doc) => {
      const pathSegments = doc.rawName.split('/');
      
      if (pathSegments.length > 2) {
        const folderName = pathSegments[1];
        if (!grouped[folderName]) {
          grouped[folderName] = [];
        }
        grouped[folderName].push(doc);
      }
    });

    return Object.keys(grouped)
      .sort((a, b) => b.localeCompare(a)) 
      .map((folderName) => ({
        folderName,
        coverImage: grouped[folderName][0]?.url || '', 
        images: grouped[folderName],
      }));
  }, [documents]);

 
  const activeAlbum = albums.find((album) => album.folderName === selectedFolder);

  return (
    <div className="GalleryPage">
      <header className="calendar-header">
        <img src={bdfc_club_logo} alt="Bradford Disability Football Club Logo" className="club-logo" />
        <h2>Club Gallery</h2>
        <p>Check out our latest photos from matches and events.</p>
      </header>

      {loading && <div className="gallery-loading">Loading gallery...</div>}
      {hasError && !loading && <div className="gallery-error">Unable to load images.</div>}

      {!loading && !hasError && (
        <>
          {!selectedFolder && (
            <div className="albums-grid">
              {albums.length > 0 ? (
                albums.map((album) => (
                  <button
                    key={album.folderName}
                    className="album-card"
                    onClick={() => setSelectedFolder(album.folderName)}
                  >
                    {album.coverImage && (
                      <div className="album-cover-wrapper">
                        <img src={album.coverImage} alt={album.folderName} className="album-cover" />
                      </div>
                    )}
                    <div className="album-info">
                      <h3>{album.folderName}</h3>
                      <p>{album.images.length} Photos</p>
                    </div>
                  </button>
                ))
              ) : (
                <p>No albums found.</p>
              )}
            </div>
          )}

          {selectedFolder && activeAlbum && (
            <div className="album-detail-view">
              <div className="album-header">
                <button className="back-button" onClick={() => setSelectedFolder(null)}>
                  &larr; Back to Albums
                </button>
                <h3>{activeAlbum.folderName}</h3>
              </div>

              <div className="image-grid">
                {activeAlbum.images.map((img) => (
                  <img
                    key={img.url}
                    src={img.url}
                    alt={img.fileName}
                    className="gallery-image"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GalleryPage;