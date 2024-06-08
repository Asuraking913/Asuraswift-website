import React, { useEffect } from 'react'
import myImage from "../assets/logo2.png"
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Autoplay} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import myImage1 from "./../assets/img.jpg"
import myImage2 from "./../assets/img1.jpg"
import myImage3 from "./../assets/img2.jpg"
import myImage4 from "./../assets/img3.jpg"
import myImage5 from "./../assets/img4.jpg"
import Foot from './footer'
import About from './about'

function Body() {

  useEffect(() => {
    document.title = "AsuraSwift"
  })

  return (
    <>
      <section className='flex sm:flex-row min-[400px]:flex-col sm:p-[3em] pb-[0em] items-center min-[400px]:h-[70vh] sm:h-[70vh] justify-center'>
          <div className='sm:w-[65%] w-[90%] flex flex-col sm:items-start items-center gap-[0.7em] mt-[2em]'>
              <h1 className='sm:text-4xl sm:text-left text-center text-3xl font-[poppins] font-extrabold capitalize text-blue-600'>A desktop <span className='uppercase'>GUI</span> application that <span className='sm:block'>transfers files on a cross platform basis</span></h1>
              <p className='w-[80%] text-center sm:text-left roboto italic text-xl line '>AsuraSwift is a cross platform desktop gui application that uses a simple gui interface to transfer files between two computers. </p>
            <div className='flex gap-[2em] mt-[8em]'>
              <a href=""><i className='fa-brands hover:scale-125 duration-[0.5s] text-2xl text-blue-600 fa-facebook'></i></a>
              <a href=""><i className='fa-brands hover:scale-125 duration-[0.5s] text-2xl text-blue-600 fa-linkedin'></i></a>
              <a href=""><i className='fa-brands hover:scale-125 duration-[0.5s] text-2xl text-blue-600 fa-twitter'></i></a>
              <a href=""><i className='fa-brands hover:scale-125 duration-[0.5s] text-2xl text-black fa-github'></i></a>
              <a href=""><i className='fa-brands hover:scale-125 duration-[0.5s] text-2xl text-green-600 fa-whatsapp'></i></a>
          </div>
          </div>
      
          <div>
            <div className='h-[400px] hidden sm:block w-[400px] bg-center'><img src={myImage} className='text1' alt="" /></div>
            {/* <div className='w-[200px] h-[200px]'></div> */}
          </div>
      </section>
          <About />
	  <section className='sm:h-[80vh] flex items-center flex-col p-[4em] gap-[2em]'>
      <h2 className='capitalize text-center font-[poppins] text-3xl text-blue-600 font-bold'>App view</h2>
      <div className='sm:w-[100%] sm:block hidden'>
        <Swiper 
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        loop = {true}
        autoplay = {{delay: 3500}}
        navigation
        pagination = {{clickable: true}}
        >
          <SwiperSlide><img src={myImage1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={myImage2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={myImage3} alt="" /></SwiperSlide>
          <SwiperSlide><img src={myImage4} alt="" /></SwiperSlide>
          <SwiperSlide><img src={myImage5} alt="" /></SwiperSlide>
        </Swiper>
        
      </div>
      <div className='hidden min-[400px]:block sm:hidden w-[100%]'>
        <Swiper 
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={100}
        slidesPerView={1}
        loop = {true}
        autoplay = {{delay: 3500}}
        navigation
        pagination = {{clickable: true}}
        className=''
        >
          <SwiperSlide><img src={myImage1} className='w-[100%] h-[100%] object-cover' alt="" /></SwiperSlide>
          <SwiperSlide><img src={myImage2} className='w-[100%] h-[100%] object-cover' alt="" /></SwiperSlide>
          <SwiperSlide><img src={myImage3} className='w-[100%] h-[100%] object-cover' alt="" /></SwiperSlide>
          <SwiperSlide><img src={myImage4} className='w-[100%] h-[100%] object-cover' alt="" /></SwiperSlide>
          <SwiperSlide><img src={myImage5} className='w-[100%] h-[100%] object-cover' alt="" /></SwiperSlide>
        </Swiper>
        
      </div>
      <div className='flex justify-center flex-col items-center'>
          <button className='bg-green-700 text-xl rounded-[8px] font-bold hover:bg-green-600 duration-[0.5s] text-white poppins p-[0.7em] px-[1.5em]'>Download AsuraSwift</button>
        </div>
	  </section>
    <section className='flex sm:flex-row min-[400px]:flex-col min-[400px]:gap-[4em] justify-between p-[3em] px-[6em] px items-center border-t-2 border-blue-600'>
      <div className='flex flex-col justify-center items-center text-center min-[400px]:gap-[1em] '>
        <h2 className='capitalize text-2xl font-[poppins] sm:text-3xl font-bold text-blue-600 text-center'>Having Issues with the app?</h2>
        <p className='roboto italic w-[40ch]  sm:text-[1.2em] line'>Fill out the form with your details and complaint, We would surely try to reach out as soon as possible</p>
      </div>
      <form action="" className='flex flex-col  gap-[2em] min-[400px]:items-center'>
        <p className='flex justify-center min-[400px]:w-[90%] gap-[.7em] font-[poppins]'>
          <label htmlFor="name" className='text-[1em] font-semibold'>Name:</label>
          <input className='border-[1.5px] rounded-[2px] border-black text-black w-full text-xl px-[2px] capitalize' type="text" id='name' placeholder='Jane Doe' />
        </p>
        <p className='flex justify-center min-[400px]:w-[90%] gap-[.7em] font-[poppins]'>
          <label htmlFor="email" className='text-[1em] font-semibold'>Email:</label>
          <input className='border-[1.5px] rounded-[2px] border-black text-black w-full text-xl px-[2px] ' type="text" id='email' placeholder='janedoe913@gmailcom' />
        </p>
        <p className='flex justify-center min-[400px]:w-[90%] gap-[.7em] font-[poppins] flex-col'>
          <label htmlFor="complaint" className='text-[1em] font-semibold'>Complaint:</label>
          <textarea name="complaint" id="complaint" cols="30" rows="5" className='border-1 p-[1px] rounded-[2px] border-black text-black outline outline-1'></textarea>
        </p>
        <button className='w-full min-[400px]:w-[90%] bg-green-800 hover:bg-green-600 duration-[0.5s] p-[.5em] px-[1em] text-xl text-white font-semibold rounded-[5px]'>Submit</button>
      </form>
    </section>
    <Foot />
    </>
  )
}

export default Body