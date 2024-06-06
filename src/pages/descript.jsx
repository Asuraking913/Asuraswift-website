import React from 'react'
import Steps from '../components/steps'
import Head from '../components/header'
import Foot from '../components/footer'
import Dev from '../components/developer'

function Descrip() {
  return (
    <div>
        <Head />
        <Steps />
        <section className=' p-[2.5em] flex  justify-center items-center '>
            <div className='flex w-[50%] justify-between items-center'>
                <button className='flex items-center justify-center text-2xl poppins bg-green-800 hover:bg-green-600 px-[1em] rounded-[5px] py-[.5em] font-semibold text-white'>
                    Download
                    <i className='fa-brands fa-windows text-blue-600 ml-[.5em] text2 text-4xl'></i>
                </button>
                <button className='flex items-center justify-center text-2xl poppins bg-green-800 hover:bg-green-600 px-[1em] rounded-[5px] py-[.5em] font-semibold text-white'>
                    Download
                    <i className='fa-brands fa-linux text-black ml-[.5em] text2 text-4xl'></i>
                </button>
            </div>
        </section>
        <Dev />
        <Foot />
    </div>
  )
}

export default Descrip