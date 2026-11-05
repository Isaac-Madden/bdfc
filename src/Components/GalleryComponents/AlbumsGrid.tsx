import React from 'react';
import { type Album } from '../../Hooks/useAlbums';

interface AlbumsGridProps {
  albums: Album[];
  onSelectAlbum: (folderName: string) => void;
}

export const AlbumsGrid: React.FC<AlbumsGridProps> = ({ albums, onSelectAlbum }) => {
  if (albums.length === 0) return <p>No albums found.</p>;

  return (
    <div className="albums-grid">
      {albums.map((album) => (
        <button
          key={album.folderName}
          className="album-card"
          onClick={() => onSelectAlbum(album.folderName)}
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
      ))}
    </div>
  );
};