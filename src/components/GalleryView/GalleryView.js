import React from 'react';
import { useParams, Switch, Route } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile/ArtImageTile';

function GalleryView({ galleries }) {
  const { galleryId } = useParams();
  const targetGallery = galleries.find(
    gallery => gallery.gallerynumber === galleryId
  );
  console.log(
    '🚀 ~ file: GalleryView.js ~ line 10 ~ GalleryView ~ targetGallery',
    targetGallery
  );
  return (
    <div>
      <h1>Hello from GalleryView</h1>
      <h2>{targetGallery.name}</h2>
      {targetGallery.objects.map(object => (
        <ArtImageTile object={object} />
      ))}
    </div>
  );
}

export default GalleryView;
