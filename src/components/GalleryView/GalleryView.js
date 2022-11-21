import React from 'react';
import { useParams, Switch, Route } from 'react-router-dom';

function GalleryView({ galleries }) {
  const { galleryId } = useParams();
  const targetGallery = galleries.find(
    gallery => gallery.gallerynumber === galleryId
  );
  return (
    <div>
      <h1>Hello from GalleryView</h1>
      <h2>{targetGallery.name}</h2>
    </div>
  );
}

export default GalleryView;
