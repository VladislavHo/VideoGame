import React, { useState } from 'react'
import './images.scss'
export default function Images({image, index = 0, size = 't_thumb'}) {
  console.log(image)
  const sizeImage = image?.screenshots ? image?.screenshots[index].url.replace(/t_thumb/, size) : null

  console.log(sizeImage)
  // t_thumb

  return (
    <>
    
    {!sizeImage ? 'no' : <img src={sizeImage} alt={image.name} />}
    
    </>
  )
}

// {!el.screenshots ? 'no' : <img src={el?.screenshots[0]?.url} alt="" />}