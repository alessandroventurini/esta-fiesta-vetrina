import manifest from './albums.generated.json';

const assetUrl = (asset) => `${import.meta.env.BASE_URL}${asset}`;

export const albums = manifest.map((album) => ({
  ...album,
  cover: assetUrl(album.cover),
  photos: album.photos.map((photo) => ({
    ...photo,
    original: assetUrl(photo.original),
    thumbnail: assetUrl(photo.thumbnail),
    view: assetUrl(photo.view),
  })),
}));
