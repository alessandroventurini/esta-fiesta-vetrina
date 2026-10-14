import { useState } from 'react';

const GalleryImage = ({ src, alt, className = '', eager = false }) => {
  const [status, setStatus] = useState('loading');
  return (
    <div className={`overflow-hidden bg-fiesta-panel ${className}`}>
      {status !== 'loaded' && (
        <span className="absolute inset-0 flex items-center justify-center text-fiesta-cream/70 text-xs p-3" aria-hidden="true">
          {status === 'error' ? 'Foto non disponibile' : '•••'}
        </span>
      )}
      {status !== 'error' && (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity ${status === 'loaded' ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />
      )}
    </div>
  );
};

export default GalleryImage;
