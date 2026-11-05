import React, { useState } from 'react';
import { type Album } from '../../Hooks/useAlbums';
import { Lightbox } from './Lightbox';

interface AlbumDetailProps {
  album: Album | undefined;
  onBack: () => void;
}

export const AlbumDetail: React.FC<AlbumDetailProps> = ({ album, onBack }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  if (!album) return null;

  return (
    <div className="album-detail-view">
      <div className="album-header">
        <button className="back-button" onClick={onBack}>
          &larr; Back to Albums
        </button>
        <h3>{album.folderName}</h3>
      </div>

      <div className="image-grid">
        {album.images.map((img, index) => (
          <img
            key={img.url}
            src={img.url}
            alt={img.fileName}
            className="gallery-image"
            loading="lazy"
            onClick={() => setSelectedImageIndex(index)}
          />
        ))}
      </div>

      {selectedImageIndex !== null && (
        <Lightbox
          images={album.images}
          currentIndex={selectedImageIndex}
          onClose={() => setSelectedImageIndex(null)}
          onSelect={setSelectedImageIndex}
        />
      )}
    </div>
  );
};