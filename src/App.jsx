import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import Create from './pages/Create'
import Edit from './pages/Edit'
import Blog from './pages/Blog'
function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
          <Route path='/blog/:id' element={<Blog/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
