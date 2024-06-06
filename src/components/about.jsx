import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <section className=' h-[50vh] text-center py-[0em] px-[4em] flex flex-col justify-center items-center'>
            <h2 className='text-3xl text-blue-600 font-bold mb-[1em]'>About AsuraSwift</h2>
            <div className='w-[100%]'>
                <p className='text-xl italic'>
                    AsuraSwift is a desktop GUI applicaton built with the aim of transferring files between two computers wirelessly. It Transfers files through a wifi/Hotspot connection. AsuraSwift was built with python programming language using a light weight module called PySimpleGUI for the frontend interface, while the backend was based on python sockets. The app has a version for both windows and linux operating systems and the great and amazing thing is the app is able to tranfer items between different operating systems. 
                </p>
                <div className='flex justify-end items-center'>
                  <Link to='/descrip'><button className='bg-blue-600 px-[1.5em] py-[.5em] text-white text-xl rounded-[5px] font-semibold mt-[1em] hover:bg-blue-500 duration-[0.5s]' >Read more</button></Link>
                </div>
            </div>
        </section>
  )
}

export default About