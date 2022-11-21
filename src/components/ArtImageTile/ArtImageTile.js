import React from 'react';
import { Link, useParams } from 'react-router-dom';

function ArtImageTile({ object, galleryId }) {
  //   console.log(
  //     '🚀 ~ file: ArtImageTile.js ~ line 6 ~ ArtImageTile ~ galleryId',
  //     galleryId
  //   );
  //   console.log(
  //     '🚀 ~ file: ArtImageTile.js ~ line 4 ~ ArtImageTile ~ object',
  //     object
  //   );
  const { images, id } = object;
  return (
    <div>
      <Link to={`/galleries/${galleryId}/art/${id}`}>
        <img style={{ height: 100 }} src={images[0]['baseimageurl']} />
      </Link>
      {/* ArtImageTile */}
      {/* {JSON.stringify(object.images)} */}
      <p></p>
    </div>
  );
}

export default ArtImageTile;
