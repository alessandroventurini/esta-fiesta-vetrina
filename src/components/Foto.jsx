import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { albums } from '../data/albums';
import GalleryImage from './GalleryImage';
import PhotoViewer from './PhotoViewer';

const selectedAlbum = () => albums.find((album) => window.location.hash === `#foto/${album.id}`) ?? null;

const Foto = () => {
  const [album, setAlbum] = useState(selectedAlbum);
  const [photoIndex, setPhotoIndex] = useState(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const coversRef = useRef({});
  const lastAlbumRef = useRef(null);

  useEffect(() => {
    const onHashChange = () => { setPhotoIndex(null); setAlbum(selectedAlbum()); };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useLayoutEffect(() => {
    if (!window.location.hash.startsWith('#foto')) return;
    let cancelled = false;
    const positionSection = () => {
      if (!cancelled && window.location.hash.startsWith('#foto')) sectionRef.current?.scrollIntoView({ behavior: 'instant', block: 'start' });
    };
    const frame = requestAnimationFrame(positionSection);
    document.fonts.ready.then(positionSection);
    if (album) {
      lastAlbumRef.current = album.id;
      titleRef.current?.focus({ preventScroll: true });
    } else if (lastAlbumRef.current) {
      coversRef.current[lastAlbumRef.current]?.focus({ preventScroll: true });
    }
    return () => { cancelled = true; cancelAnimationFrame(frame); };
  }, [album]);

  return (
    <section ref={sectionRef} id="foto" aria-label="Album fotografici OktoberFiesta 2026" className="px-[18px] pt-5 pb-[clamp(46px,8vw,90px)] bg-fiesta-cream">
      <div className="max-w-[1180px] mx-auto">
        {album ? (
          <>
            <div className="sticky top-[76px] z-40 flex items-center justify-between gap-3 bg-fiesta-cream py-3 mb-4 border-b border-fiesta-ink/15">
              <a href="#foto" className="fiesta-button bg-fiesta-ink text-fiesta-cream" aria-label="Tutti gli album">← Tutti gli album</a>
              <span className="font-mono text-[11px] uppercase">{album.photos.length} foto</span>
            </div>
            <p className="font-mono text-[11px] tracking-[.12em] uppercase text-fiesta-red mb-3">OktoberFiesta · {album.date}</p>
            <h2 ref={titleRef} tabIndex={-1} className="font-black uppercase tracking-[-.035em] leading-[.98] m-0 mb-4" style={{ fontSize: 'clamp(30px,6vw,60px)' }}>{album.day} / {album.name}</h2>
            <p className="text-sm md:text-base mb-6">Cerca la tua foto. Tocca per ingrandire e scaricare l’originale.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
              {album.photos.map((photo, index) => (
                <button key={photo.id} type="button" onClick={(event) => { event.currentTarget.focus({ preventScroll: true }); setPhotoIndex(index); }} aria-label={`Apri foto ${index + 1} di ${album.day}`} className="p-0 text-left rounded-xl overflow-hidden border-2 border-fiesta-ink bg-fiesta-ink">
                  <GalleryImage src={photo.thumbnail} alt={`${album.day} — foto ${index + 1}`} className="relative aspect-[2/3]" eager={index < 4} />
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <p className="font-mono text-[11px] tracking-[.15em] uppercase text-fiesta-red mt-0 mb-3">OktoberFiesta 2026 · Le foto</p>
            <h2 className="font-black uppercase tracking-[-.04em] leading-[.95] m-0 mb-3 max-w-[18ch]" style={{ fontSize: 'clamp(36px,7vw,74px)' }}>Tre serate. Tutti i ricordi.</h2>
            <p className="text-sm md:text-base leading-relaxed mb-4 max-w-[52ch]">Scegli la serata e ritrova le tue foto.</p>
            <div className="grid gap-3 md:grid-cols-3">
              {albums.map((item, index) => (
                <button
                  key={item.id}
                  ref={(element) => { coversRef.current[item.id] = element; }}
                  type="button"
                  onClick={() => { window.location.hash = `foto/${item.id}`; }}
                  aria-label={`Apri album ${item.day} — ${item.name}`}
                  className="relative h-[124px] md:h-[350px] w-full text-left rounded-[20px] border-2 border-fiesta-ink overflow-hidden bg-fiesta-ink text-fiesta-cream group"
                >
                  <GalleryImage src={item.cover} alt="" eager className="absolute inset-0" />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/10" aria-hidden="true" />
                  <span className="absolute top-3 left-4 font-mono text-[11px] tracking-[.12em]">0{index + 1} / {item.day.toUpperCase()}</span>
                  <span className="absolute top-3 right-3 w-9 h-9 border border-white/50 rounded-full flex items-center justify-center text-xl group-hover:bg-fiesta-red transition-colors" aria-hidden="true">↗</span>
                  <span className="absolute left-4 right-4 bottom-3.5">
                    <span className="block font-black uppercase text-[23px] md:text-[28px] tracking-[-.03em] leading-[1]">{item.name}</span>
                    <span className="block mt-2 font-mono text-[10px] tracking-[.08em]">{item.date} · {item.photos.length} foto</span>
                  </span>
                </button>
              ))}
            </div>
            <p className="font-mono text-[10px] tracking-[.08em] uppercase text-fiesta-ink/60 mt-5 mb-0">364 foto. Un weekend da ricordare.</p>
          </>
        )}
      </div>
      {album && photoIndex !== null && <PhotoViewer album={album} index={photoIndex} onChange={setPhotoIndex} onClose={() => setPhotoIndex(null)} />}
    </section>
  );
};

export default Foto;
