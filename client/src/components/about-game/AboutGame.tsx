import React from 'react'


export default function AboutGame({game}) {
  console.log(game)
  return (
    <h3>{game.name}</h3>
  )
}