import React from 'react';
import { type AzureDocument } from '../../Hooks/useAzureBlobs';

interface LightboxProps {
  images: AzureDocument[];
  currentIndex: number;
  onClose: () => void;
  onSelect: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  onClose,
  onSelect,
}) => {
  const handleNext = () => {
    onSelect(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const handlePrev = () => {
    onSelect(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>&times;</button>
        
        <button className="lightbox-nav prev" onClick={handlePrev}>&#10094;</button>
        
        <img src={images[currentIndex].url} alt="Preview" className="lightbox-image" />

        <button className="lightbox-nav next" onClick={handleNext}>&#10095;</button>

        <div className="lightbox-thumbnails">
          {images.map((img, index) => (
            <img
              key={img.url}
              src={img.url}
              alt=""
              className={`lightbox-thumb ${index === currentIndex ? 'active' : ''}`}
              onClick={() => onSelect(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};