import React from 'react';
import { NavLink } from 'react-router-dom';
import './GalleryNavigation.css';

function GalleryNavigation({ galleries }) {
  console.log(
    '🚀 ~ file: GalleryNavigation.js ~ line 4 ~ GalleryNavigation ~ galleries',
    galleries
  );
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <h1>GalleryNavigation</h1>
      {galleries.map(gallery => (
        <NavLink key={gallery.id} to={`/galleries/${gallery.galleryid}`}>
          {gallery.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default GalleryNavigation;
