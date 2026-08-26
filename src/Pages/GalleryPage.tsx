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
  // 1. Add state near your other useState hooks
const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

// 2. Navigation handlers for the lightbox
const handleNextImage = () => {
  if (activeAlbum && selectedImageIndex !== null) {
    setSelectedImageIndex((prev) => 
      prev === activeAlbum.images.length - 1 ? 0 : (prev as number) + 1
    );
  }
};

const handlePrevImage = () => {
  if (activeAlbum && selectedImageIndex !== null) {
    setSelectedImageIndex((prev) => 
      prev === 0 ? activeAlbum.images.length - 1 : (prev as number) - 1
    );
  }
};

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

{/* Inside activeAlbum rendering */}
<div className="image-grid">
  {activeAlbum.images.map((img, index) => (
    <img
      key={img.url}
      src={img.url}
      alt={img.fileName}
      className="gallery-image"
      loading="lazy"
      onClick={() => setSelectedImageIndex(index)} /* Open lightbox */
    />
  ))}
</div>

{/* Lightbox Overlay */}
{selectedImageIndex !== null && activeAlbum && (
  <div className="lightbox-overlay" onClick={() => setSelectedImageIndex(null)}>
    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
      <button className="lightbox-close" onClick={() => setSelectedImageIndex(null)}>&times;</button>
      
      <button className="lightbox-nav prev" onClick={handlePrevImage}>&#10094;</button>
      
      <img 
        src={activeAlbum.images[selectedImageIndex].url} 
        alt="Preview" 
        className="lightbox-image" 
      />

      <button className="lightbox-nav next" onClick={handleNextImage}>&#10095;</button>

      {/* Thumbnail Strip at Bottom */}
      <div className="lightbox-thumbnails">
        {activeAlbum.images.map((img, index) => (
          <img
            key={img.url}
            src={img.url}
            alt=""
            className={`lightbox-thumb ${index === selectedImageIndex ? 'active' : ''}`}
            onClick={() => setSelectedImageIndex(index)}
          />
        ))}
      </div>
    </div>
  </div>
)}



            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GalleryPage;