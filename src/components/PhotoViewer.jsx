import { useRef, useState } from 'react';
import useDialog from '../hooks/useDialog';

const ViewerImage = ({ photo, alt }) => {
  const [status, setStatus] = useState('loading');
  return (
    <>
      {status !== 'loaded' && <p role={status === 'error' ? 'alert' : 'status'} className="absolute text-sm text-fiesta-cream/80 text-center px-5">{status === 'error' ? 'Questa foto non è disponibile. Puoi passare alla successiva.' : 'Caricamento foto…'}</p>}
      <img src={photo.view} alt={alt} onLoad={() => setStatus('loaded')} onError={() => setStatus('error')} draggable={false} className={`max-w-full max-h-full w-auto h-auto object-contain ${status === 'loaded' ? 'opacity-100' : 'opacity-0'}`} />
    </>
  );
};

const PhotoViewer = ({ album, index, onChange, onClose }) => {
  const dialogRef = useDialog();
  const touchRef = useRef(null);
  const photo = album.photos[index];
  const previous = () => { if (index > 0) onChange(index - 1); };
  const next = () => { if (index < album.photos.length - 1) onChange(index + 1); };

  return (
    <dialog
      ref={dialogRef}
      aria-label={`Foto di ${album.day} — ${album.name}`}
      className="photo-dialog"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onKeyDown={(event) => {
        if (event.altKey || event.ctrlKey || event.metaKey) return;
        if (event.key === 'ArrowLeft') { event.preventDefault(); previous(); }
        if (event.key === 'ArrowRight') { event.preventDefault(); next(); }
      }}
    >
      <header className="viewer-header flex items-center justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[.1em] text-fiesta-blue m-0">{album.day} · OktoberFiesta 2026</p>
          <p className="font-extrabold text-sm mt-1 mb-0">{album.name}</p>
        </div>
        <button type="button" onClick={onClose} aria-label="Chiudi foto" className="viewer-control text-xl">×</button>
      </header>
      <div
        className="relative min-h-0 flex items-center justify-center p-2"
        style={{ touchAction: 'pan-y pinch-zoom' }}
        onTouchStart={(event) => { touchRef.current = event.touches.length === 1 ? { x: event.touches[0].clientX, y: event.touches[0].clientY } : null; }}
        onTouchMove={(event) => { if (event.touches.length !== 1) touchRef.current = null; }}
        onTouchEnd={(event) => {
          const start = touchRef.current;
          touchRef.current = null;
          if (!start || !event.changedTouches.length) return;
          const dx = event.changedTouches[0].clientX - start.x;
          const dy = event.changedTouches[0].clientY - start.y;
          if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
          if (dx < 0) next(); else previous();
        }}
      >
        <ViewerImage key={photo.id} photo={photo} alt={`${album.day} — foto ${index + 1} di ${album.photos.length}`} />
      </div>
      <footer className="viewer-footer">
        <div className="flex items-center justify-between gap-4 max-w-[560px] mx-auto">
          <button type="button" aria-label="Foto precedente" className="viewer-control" onClick={previous} disabled={index === 0}>←</button>
          <p className="font-mono text-xs m-0" aria-live="polite">{index + 1} / {album.photos.length}</p>
          <button type="button" aria-label="Foto successiva" className="viewer-control" onClick={next} disabled={index === album.photos.length - 1}>→</button>
        </div>
        <div className="max-w-[560px] mx-auto mt-3 text-center">
          <a href={photo.original} download={`EstaFiesta-2026-${album.id}-${photo.filename}`} className="fiesta-button bg-fiesta-red text-fiesta-cream w-full">Scarica foto originale</a>
          <p className="text-[11px] text-fiesta-cream/70 mt-3 mb-0 leading-relaxed">
            Problemi a salvarla?{' '}
            <a href={photo.original} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-fiesta-cream">Apri l’originale</a>
            {' '}e salvala dal browser.
          </p>
        </div>
      </footer>
    </dialog>
  );
};

export default PhotoViewer;
