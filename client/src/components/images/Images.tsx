import React, { useState } from 'react'
import NoImage from '../no-image/NoImage'
import './images.scss'
export default function Images({image, index = 0, size = 't_thumb'}) {
  const sizeImage = image?.screenshots ? image?.screenshots[index].url.replace(/t_thumb/, size) : null

  // t_thumb

  return (
    <>
    
    {!sizeImage ? <NoImage/> : <img src={sizeImage} alt={image.name} />}
    
    </>
  )
}

// {!el.screenshots ? 'no' : <img src={el?.screenshots[0]?.url} alt="" />}