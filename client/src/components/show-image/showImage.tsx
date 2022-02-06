import React from 'react'



export default function showImage({img, close, index = 0}) {
  console.log('123121')
  return (
    <div className="img-container">
      <button onClick={close}>X</button>
      <img src={img[index].url} alt="" />

    </div>
  )
}