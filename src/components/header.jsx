import React from 'react'

function Head() {
  return (
    <div className='flex justify-between items-center p-[1em] px-[2.5em] border-b-2 border-[#00000056]'>
        <a href="" className='font-[lit] text-2xl font-extrabold text-yellow-300'>Asura<span className='text-blue-600'>Swift</span></a>
        <nav className=''>
            <ul className='flex items-center gap-[4em]'>
                {/* <li><a href="">Home</a></li> */}
                <li><a className='text-[1.2rem] text-blue-600 font-semibold font-[poppins]' href="">About</a></li>
                <li><a className='text-[1.2rem] text-blue-600 font-semibold font-[poppins]' href="">Developer?</a></li>
                <li><a className='text-[1.2rem] text-blue-600 font-semibold font-[poppins]' href="">Feedback</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Head