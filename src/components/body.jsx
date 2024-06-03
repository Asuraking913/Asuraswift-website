import React from 'react'

function Body() {
  return (
    <section className='flex p-[5.5rem] items-center h-[80vh]'>
        <div className='w-[65%] flex flex-col gap-[0.7em]'>
            <h1 className='text-4xl font-[poppins] font-extrabold capitalize text-blue-600'>A desktop <span className='uppercase'>GUI</span> application that <span className='block'>transfers files on a cross platform basis</span></h1>
            <p className='w-[80%] text-black line font-[roboto]'>AsuraSwift is a cross platform desktop gui application that uses a simple gui interface to transfer files between two computers. </p>
        </div>
    </section>
  )
}

export default Body