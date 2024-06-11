import React from 'react'
import { Link } from 'react-router-dom'

function Foot() {
  return (
    <section className='border-t-2 border-blue-600 bg-white p-[1em] sm:p-[2em] sm:pt-[2em] flex flex-col justify-between items-center'>
        <ul className='sm:flex hidden sm:flex-row items-center justify-center gap-[4em] '>
                {/* <li><a href="">Home</a></li> */}
                <Link to={"/descrip"}>
                  <li><a className='text-xl text-blue-600  roboto italic' href=""><i className='fa-solid hover:scale-125 duration-[0.5s] sm:text-2xl mr-[5px] text-black fa-download'></i>Download</a></li>
                </Link>
                <li><a className='text-xl text-blue-600  roboto italic' href=""><i className='fa-solid hover:scale-125 duration-[0.5s] text-2xl mr-[5px] text-black fa-reply'></i>Feedback</a></li>
                
                <h2 className='text-4xl font-[lit] text-center font-bold text-blue-600'><span className='text-yellow-300'>Asura</span>Swift</h2>
                
                <li><a className='text-xl text-blue-600  roboto italic' href=""><i className='fa-solid hover:scale-125 duration-[0.5s] text-2xl mr-[5px] text-black fa-person'></i>Developer</a></li>
                <li><a className='text-xl text-blue-600  roboto italic' href=""><i className='fa-brands hover:scale-125 duration-[0.5s] text-2xl mr-[5px] text-black fa-github'></i>Github</a></li>
                
            </ul>
            <ul className='sm:hidden flex justify-center gap-[.5em]'>
                {/* <li><a href="">Home</a></li> */}
                <div>
                  <Link to={"/descrip"}>
                    <li><a className='text-[1em] text-blue-600  roboto italic' href=""><i className='fa-solid hover:scale-125 min-[300px]:text-[1em] duration-[0.5s] text-[1em] mr-[5px] text-black fa-download'></i>Download</a></li>
                  </Link>
                  <li><a className='text[1em] text-blue-600  roboto italic' href=""><i className='fa-solid hover:scale-125 min-[300px]:text-[1em] duration-[0.5s] text-[1em] mr-[5px] text-black fa-reply'></i>Feedback</a></li>
                </div>
                
                <h2 className='text-[1em] font-[lit] text-center font-bold text-blue-600'><span className='text-yellow-300'>Asura</span>Swift</h2>
                
                <div>
                  <li><a className='text[1em] text-blue-600  roboto italic' href=""><i className='fa-solid hover:scale-125 min-[300px]:text-[1em] duration-[0.5s] text-2xl mr-[5px] text-black fa-person'></i>Developer</a></li>
                  <li><a className='text-xl text-blue-600  roboto italic' href=""><i className='fa-brands hover:scale-125 min-[300px]:text-[1em] duration-[0.5s] text-2xl mr-[5px] text-black fa-github'></i>Github</a></li>
                </div>
                
            </ul>
            <a href="#" className='absolute right-[45%] sm:mt-0 mt-[2.5em]  sm:right-[2em]'><i className='fa-solid fa-arrow-up text-2xl hover:text-blue-600 hover:bg-[white] duration-[0.5s]  shadow-md hover:shadow-blue-600 animate-bounce bg-blue-600 text-white sm:w-[50px] w-[40px] h-[40px] flex items-center justify-center rounded-[50%] sm:h-[50px]'></i></a>
    </section>
  )
}

export default Foot