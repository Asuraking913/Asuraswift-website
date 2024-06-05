import React from 'react'
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
  return (
    <>
      <section className='flex p-[3em] pb-[0em] items-center h-[70vh]  justify-center'>
          <div className='w-[65%] flex flex-col gap-[0.7em] mt-[2em]'>
              <h1 className='text-4xl font-[poppins] font-extrabold capitalize text-blue-600'>A desktop <span className='uppercase'>GUI</span> application that <span className='block'>transfers files on a cross platform basis</span></h1>
              <p className='w-[80%] text- roboto italic text-xl line '>AsuraSwift is a cross platform desktop gui application that uses a simple gui interface to transfer files between two computers. </p>
            <div className='flex gap-[2em] mt-[8em]'>
              <a href=""><i className='fa-brands hover:scale-125 duration-[0.5s] text-2xl text-blue-600 fa-facebook'></i></a>
              <a href=""><i className='fa-brands hover:scale-125 duration-[0.5s] text-2xl text-blue-600 fa-linkedin'></i></a>
              <a href=""><i className='fa-brands hover:scale-125 duration-[0.5s] text-2xl text-blue-600 fa-twitter'></i></a>
              <a href=""><i className='fa-brands hover:scale-125 duration-[0.5s] text-2xl text-black fa-github'></i></a>
              <a href=""><i className='fa-brands hover:scale-125 duration-[0.5s] text-2xl text-green-600 fa-whatsapp'></i></a>
          </div>
          </div>
      
          <div>
            <div className='h-[400px] w-[400px] bg-center'><img src={myImage} className='text1' alt="" /></div>
            {/* <div className='w-[200px] h-[200px]'></div> */}
          </div>
      </section>
          <About />
	  <section className='h-[80vh] flex items-center flex-col p-[4em] gap-[2em]'>
      <h2 className='capitalize text-center font-[poppins] text-3xl text-blue-600 font-bold'>App view</h2>
      <div className='w-[100%]'>
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
      <div className='flex justify-center flex-col items-center'>
          <button className='bg-green-700 text-xl rounded-[8px] font-bold hover:bg-green-600 duration-[0.5s] text-white poppins p-[0.7em] px-[1.5em]'>Download AsuraSwift</button>
        </div>
	  </section>
    <section className='flex justify-between p-[3em] px-[6em] px items-center border-t-2 border-blue-600'>
      <div className='flex flex-col justify-center items-center text-center'>
        <h2 className='capitalize font-[poppins] blue-600 text-3xl font-bold text-blue-600 text-center'>Having Issues with the app?</h2>
        <p className='roboto italic w-[40ch] text-[1.2em] line'>Fill out the form with your details and complaint, We would surely try to reach out as soon as possible</p>
      </div>
      <form action="" className='flex flex-col gap-[2em]'>
        <p className='flex justify-center gap-[.7em] font-[poppins]'>
          <label htmlFor="name" className='text-[1em] font-semibold'>Name:</label>
          <input className='border-[1.5px] rounded-[2px] border-black text-black w-full text-xl px-[2px] capitalize' type="text" placeholder='Jane Doe' />
        </p>
        <p className='flex justify-center gap-[.7em] font-[poppins]'>
          <label htmlFor="email" className='text-[1em] font-semibold'>Email:</label>
          <input className='border-[1.5px] rounded-[2px] border-black text-black w-full text-xl px-[2px] ' type="text" placeholder='jandedoe913@gmailcom' />
        </p>
        <p className='flex justify-center gap-[.7em] font-[poppins] flex-col'>
          <label htmlFor="comlaint" className='text-[1em] font-semibold'>Complaint:</label>
          <textarea name="complaint" id="complaint" cols="30" rows="5" className='border-1 p-[1px] rounded-[2px] border-black text-black outline outline-1'></textarea>
        </p>
        <button className='w-full bg-green-800 hover:bg-green-600 duration-[0.5s] p-[.5em] px-[1em] text-xl text-white font-semibold rounded-[5px]'>Submit</button>
      </form>
    </section>
    <Foot />
    </>
  )
}

export default Body