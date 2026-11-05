import React, { useState } from 'react';
import { useAzureBlobs } from '../Hooks/useAzureBlobs';
import { useAlbums } from '../Hooks/useAlbums';
import '../Styles/PageStyles/GalleryPage.css';
import { GalleryHeader } from '../Components/GalleryComponents/GalleryHeader';
import { AlbumsGrid } from '../Components/GalleryComponents/AlbumsGrid';
import { AlbumDetail } from '../Components/GalleryComponents/AlbumDetail';

const GalleryPage: React.FC = () => {
  const { documents, loading, hasError } = useAzureBlobs('club-pictures');
  const albums = useAlbums(documents);
  const [selectedFolder, setSelectedFolder] = useState<string | null>(null);
  const activeAlbum = albums.find((album) => album.folderName === selectedFolder);

  return (
    <div className="GalleryPage">
      <GalleryHeader />

      {loading && <div className="gallery-loading">Loading gallery...</div>}
      {hasError && !loading && <div className="gallery-error">Unable to load images.</div>}

      {!loading && !hasError && (
        <>
          {!selectedFolder ? (
            <AlbumsGrid albums={albums} onSelectAlbum={setSelectedFolder} />
          ) : (
            <AlbumDetail album={activeAlbum} onBack={() => setSelectedFolder(null)} />
          )}
        </>
      )}
    </div>
  );
};

export default GalleryPage;