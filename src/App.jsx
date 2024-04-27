import React,{ Fragment } from 'react'
import {BrowserRouter,Route,Routes } from 'react-router-dom'
import RoutePath from './routes/RoutePath'

function App() { 

  return (
    <Fragment>   
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<RoutePath/>}/>
      </Routes>
    </BrowserRouter>
  </Fragment>
  )
}

export default App
