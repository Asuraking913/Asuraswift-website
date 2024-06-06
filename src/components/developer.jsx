import React from 'react'
import myImage from "../assets/israel.jpg"

function Dev() {
  return (
    <section className='p-[3em] flex justify-center items-center gap-[10em]'>
        <div><img src={myImage} className='w-[350px] h-[350px] object-cover rounded-[50%]' alt="" /></div>
        <div className='w-[40%] text-center text-xl italic roboto'><p>Israel Shedrack is a python developer with great abilities in python programming language, he has worked on numerous python projects and has experience working with different modules/libraries in python. Other than that Israel is also a Frontend web develoer with extensive knowledge in creating responsive and functional interfaces for different websites</p></div>
    </section>
  )
}

export default Dev