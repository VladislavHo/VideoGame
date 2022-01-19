import React from 'react'
import {Outlet} from 'react-router-dom'

export default function Main() {
  return (
    <>
    <h3>Main</h3>
    <Outlet/>
    </>
  )
}