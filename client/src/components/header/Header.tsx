import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <>
    <h3>Header</h3>
    <Link to = '/games'>Games</Link>
    </>
  )
}