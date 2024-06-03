import React from 'react'
import myImage from "../assets/logo2.png"
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"


function Body() {
  return (
    <>
      <section className='flex p-[5.5rem] items-center h-[70vh]  justify-center'>
          <div className='w-[65%] flex flex-col gap-[0.7em] mt-[2em]'>
              <h1 className='text-4xl font-[poppins] font-extrabold capitalize text-blue-600'>A desktop <span className='uppercase'>GUI</span> application that <span className='block'>transfers files on a cross platform basis</span></h1>
              <p className='w-[80%] text- font-[roboto] line font-[sdf]'>AsuraSwift is a cross platform desktop gui application that uses a simple gui interface to transfer files between two computers. </p>
            <div className='flex gap-[2em] mt-[8em]'>
              <i className='fa-brands text-2xl text-blue-600 fa-facebook'></i>
              <i className='fa-brands text-2xl text-blue-600 fa-linkedin'></i>
              <i className='fa-brands text-2xl text-blue-600 fa-twitter'></i>
              <i className='fa-brands text-2xl text-black fa-github'></i>
              <i className='fa-brands text-2xl text-green-600 fa-whatsapp'></i>
          </div>
          </div>
      
          <div>
            <div className='h-[400px] w-[400px] bg-center'><img src={myImage} className='text1' alt="" /></div>
            {/* <div className='w-[200px] h-[200px]'></div> */}
          </div>
      </section>
      <section className='h-[60vh] flex flex-col p-[5.5rem] gap-[2em]'>
          <h2 className='capitalize text-center text-blue-600 font-[poppins] font-bold text-3xl'>Steps to use AsuraSwift Application</h2>
		  <ul className='flex flex-col gap-[1em] list-disc'>
			<li className='text-[1.2em] line'><p>First Get a device to create a hostpot connection</p></li>
			<li className='text-[1.2em] line'><p>Connect the two computers to that device through the hostpot connection</p></li>
			<li className='text-[1.2em] line'><p>The receiver and the sender can click on the</p></li>
			<li className='text-[1.2em] line'><p>The receiver can click the receive button(You can choose either to receive a file or a folder) after clicking the ready button, also the receiver can select the destinaton folder where the file will be stored and received</p></li>
			<li className='text-[1.2em] line'><p>The sender should select the file or folder to be sent before actually pressing the send button again</p></li>
			{/* <li className='text-[1.2em] line'><p>The sender can</p></li> */}
		  </ul>
      </section>
	  <section>
	  </section>
    </>
  )
}

export default Body