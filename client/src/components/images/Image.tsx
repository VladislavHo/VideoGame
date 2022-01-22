import React, { useState } from 'react'

export default function Images({image, index = 0, size = 't_thumb'}) {

  const sizeImage =image?.screenshots[index]?.url.replace(/t_thumb/, size)

  // t_thumb
  return (
    <>
    {!image?.screenshots ? 'no' : <img src={sizeImage} alt="" />}
    
    </>
  )
}

// {!el.screenshots ? 'no' : <img src={el?.screenshots[0]?.url} alt="" />}