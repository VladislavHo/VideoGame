import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/header/Header'
import Main from './pages/Main'
import Games from './pages/Games'
import './style.scss'

export default function App() {
  return(
    <>
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path = '/' element={<Main/>}>
                <Route path ='games' element ={<Games/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    
    </>
  )
}