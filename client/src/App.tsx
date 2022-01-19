import React, { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/header/Header'
import Main from './pages/Main'
import Games from './pages/Games'
import PopapUserForm from './components/user-form/PopapUserForm'
import './style.scss'

export default function App() {
  const [isUserForm, setIsUserForm] = useState(false)

  

  const isOpenUserForm = () => setIsUserForm(true)
  const isCloseUserForm = () => setIsUserForm(false)

  return(
    <>
    <BrowserRouter>
        {isUserForm && (<PopapUserForm isClose = {isCloseUserForm}/>)} 
         <Header isOpen = {isOpenUserForm}/>
        <Routes>
            <Route path = '/' element={<Main/>}>
                <Route path ='games' element ={<Games/>}/>
            </Route>
        </Routes>
        
    </BrowserRouter>
    
    </>
  )
}