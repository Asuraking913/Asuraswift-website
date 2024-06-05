import React from 'react'
import Land from './pages/landing'
import "./fonts/font-icons/css/all.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Descrip from './pages/descript'
import About from './components/about'

function App() {
  return (
    <div className='m-0 '>
      <Router>
        <Routes>
          <Route path='/' element = {<Land />}/>
          <Route path='/descrip' element = {<Descrip />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App