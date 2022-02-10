import React from 'react';
import NoImage from '../no-image/NoImage';

import './images.scss';

type Props = {
  image: any,
  index: number,
  size: string
};

function Images({ image, index, size }:Props) {
  const sizeImage = image?.screenshots ? image?.screenshots[index]?.url.replace(/t_thumb/, size) : null;

  return (
    <div>

      {!sizeImage ? <NoImage /> : <img src={sizeImage} alt={image.name} />}
    </div>

  );
}

export default Images;
