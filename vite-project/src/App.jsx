import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ByCatPage from './Pages/ByCatPage'
import DetailsPage from './Pages/DetailsPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/bycat/:catId" element={<ByCatPage/>} />
            <Route path="/details/:postId" element={<DetailsPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App