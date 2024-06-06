import React from 'react'
import { Link } from 'react-router-dom'

function Head() {

  return (
    <div className='flex justify-between items-center p-[1em] px-[2.5em] border-b-2 border-blue-600'>
        <a href="" className='font-[lit] text-2xl font-extrabold text-yellow-300'>Asura<span className='text-blue-600'>Swift</span></a>
        <nav className=''>
            <ul className='flex items-center gap-[4em]'>
            <Link to={"/"}>
              <li><a className='text-xl text-blue-600 hover:underline duration-[0.5s] roboto italic' href="">Home</a></li>
            </Link>
                <Link to={"/descrip"}>
                  <li><a className='text-xl text-blue-600 hover:underline duration-[0.5s] roboto italic' title='About this software' href="">Download</a></li>
                </Link>
                <li><a className='text-xl text-blue-600 hover:underline duration-[0.5s] roboto italic' href="" title='Give your reviews on this app'>Feedback</a></li>
                <li ><a className='text-xl title1 text-blue-600 hover:underline duration-[0.5s] roboto italic' title='Developers Information' href="">Developer?</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Head