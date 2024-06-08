import React from 'react'
import Dev from '../components/developer'
import Head from '../components/header'
import Foot from '../components/footer'
import myImage from "./../assets/screen05.jpg"
import myImage2 from "./../assets/img.jpg"
import myImage3 from "./../assets/screen53.jpg"


function Developer() {
  return (
    <div>
      <Head />
      <Dev />
      <section className=' flex p-[3em] gap-[3em] justify-center flex-col'>
        <h2 className='text-center text-4xl poppins text-blue-600 font-bold capitalize'>Projects Created</h2>
        <ul className='flex items-center sm:flex-row flex-col justify-center gap-[4em] sm:justify-between'>
          <li className='flex flex-col w-full sm:w-[32%] gap-[1em] text-center justify-center'>
            <a href="https://restaurant-website-one-sigma.vercel.app/" className='hover:scale-110 duration-[0.5s]'><img src={myImage} className='w-[400px] rounded-[.5em] object-cover boxSha  h-[200px]' alt="" /></a>
            <h3 className='text-2xl popppins'>Chefgods website</h3>
            <p className='roboto italic text-[1.2rem]'>A responsive design for a two page restaturant website for the booking and the landing page</p>
          </li>
          <li className='flex flex-col w-full sm:w-[32%] gap-[1em] text-center justify-center'>
          <a href="https://github.com/Asuraking913/AsuraSwift2.0" className='hover:scale-110 duration-[0.5s]'><img src={myImage2} className='w-[400px] rounded-[.5em] object-cover  boxSha h-[200px]' alt="" /></a>
            <h3 className='text-2xl popppins'>AsuraSwift GUI application</h3>
            <p className='roboto italic text-[1.2rem]'>A Desktop application built to transfers files and folders through a local connection</p>
          </li>
          <li className='flex flex-col w-full sm:w-[32%] gap-[1em] text-center justify-center'>
            <a href="https://banking-site-landing-page.vercel.app/" className='hover:scale-110 duration-[0.5s]'><img src={myImage3} className='w-[400px] rounded-[.5em] object-cover  boxSha h-[200px]' alt="" /></a>
            <h3 className='text-2xl popppins'>Bank Site</h3>
            <p className='roboto italic text-[1.2rem]'>A responsive landing page for a banking website</p>
          </li>
        </ul>
      </section>
      <Foot />
    </div>
  )
}

export default Developer