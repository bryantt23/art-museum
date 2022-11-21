import React from 'react';
import { useParams, Switch, Route, Link } from 'react-router-dom';

function ArtDescription({ galleries }) {
  const { galleryId, artId } = useParams();
  const targetGallery = galleries.find(
    gallery => gallery.gallerynumber === galleryId
  );
  const targetObject = targetGallery.objects.find(
    object => object.id === Number(artId)
  );
  console.log(
    '🚀 ~ file: ArtDescription.js ~ line 13 ~ ArtDescription ~ targetObject',
    targetObject
  );
  const image = targetObject.images[0],
    title = targetObject.title;
  return (
    <div>
      <h3>Art Description</h3>

      <h2>
        Title:
        <Link to={{ pathname: targetObject['url'] }} target='_blank'>
          {targetObject['title']}
        </Link>
      </h2>
      <img style={{ height: 100 }} src={image['baseimageurl']} />
      <p>Description: {image.description}</p>
      <p>Technique: {image.technique}</p>
      <p>Copyright: {image.copyright}</p>

      {/* {JSON.stringify(targetObject)} */}
      <Link to={`/galleries/${galleryId}`}>Back to Gallery </Link>
    </div>
  );
}

export default ArtDescription;
