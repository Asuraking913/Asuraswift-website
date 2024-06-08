import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Head() {

  const [nav , setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center p-[1em] px-[1em] sm:px-[2.5em] border-b-2 border-blue-600'>
        <a href="" className='font-[lit] text-2xl font-extrabold text-yellow-300'>Asura<span className='text-blue-600'>Swift</span></a>
        <i onClick={handleNav} className='fa-solid sm:hidden cursor-pointer fa-bars text-4xl text-blue-600'></i>
        {
          nav ? <nav className='hidden sm:block'>
                  <ul className='flex items-center gap-[4em]'>
                    <li><Link to={"/"} className='text-xl text-blue-600 hover:underline duration-[0.5s] roboto italic' >Home</Link></li>
                    <li><Link to={"/descrip"} className='text-xl text-blue-600 hover:underline duration-[0.5s] roboto italic' title='About this software'>Download</Link></li>
                    <li><Link className='text-xl text-blue-600 hover:underline duration-[0.5s] roboto italic' title='Give your reviews on this app'>Feedback</Link></li>
                    <li ><Link to={"/dev"} className='text-xl title1 text-blue-600 hover:underline duration-[0.5s] roboto italic' title='Developers Information'>Developer?</Link></li>
                    </ul>
                </nav>
          :
          <nav className='fixed top-0 bg-white w-full h-full right-0'>
            <i onClick={handleNav} className='fa-solid fa-times cursor-pointer text-blue-600 fixed text-4xl right-[.5em] top-[.5em]'></i>
            <ul className='flex flex-col h-screen items-center justify-center gap-[2.4em]'>
              <li className='bg-white p-[1em] hover:scale-110 duration-[0.5s] px-[4em] shadow-md shadow-blue-600 rounded-[2em]'><Link to={"/"} className='text-xl text-blue-600 hover:underline duration-[0.5s] roboto italic' >Home</Link></li>
              <li className='bg-white p-[1em] hover:scale-110 duration-[0.5s] px-[4em] shadow-md shadow-blue-600 rounded-[2em]'><Link to={"/descrip"} className='text-xl text-blue-600 hover:underline duration-[0.5s] roboto italic' title='About this software'>Download</Link></li>
              <li className='bg-white p-[1em] hover:scale-110 duration-[0.5s] px-[4em] shadow-md shadow-blue-600 rounded-[2em]'><Link className='text-xl text-blue-600 hover:underline duration-[0.5s] roboto italic' title='Give your reviews on this app'>Feedback</Link></li>
              <li className='bg-white p-[1em] hover:scale-110 duration-[0.5s] px-[4em] shadow-md shadow-blue-600 rounded-[2em]' ><Link to={"/dev"} className='text-xl title1 text-blue-600 hover:underline duration-[0.5s] roboto italic' title='Developers Information'>Developer?</Link></li>
            </ul>
        </nav>
        }
    </div>
  )
}

export default Head