import React from 'react'
import myImage from "./../assets/img1.jpg"
import myImage1 from "./../assets/img3.jpg"
import myImage2 from "./../assets/img2.jpg"

function Steps() {
  return (
    <section className=' flex flex-col p-[3em] sm:p-[5.5rem] pt-[2em] gap-[2em] items-center justify-center '>
          <h2 className='capitalize text-center pb-[1em] text-blue-600 font-[poppins] font-bold text-2xl sm:text-3xl'>Steps to use AsuraSwift Application</h2>
		  <ul className='flex flex-col gap-[1em] list-disc'>
			  <li className='text-[1.2em] line'><p>First Get a device to create a hostpot connection. It might be a phone, mifi or router</p></li>

			  <li className='text-[1.2em] line'><p>Connect the two computers to that device through the hostpot connection</p></li>
			  <li className='text-[1.2em] line'><p>The receiver can click the receive button(You can choose either to receive a file or a folder) after clicking the ready button, also the receiver can select the destinaton folder where the file will be stored and received</p></li>
			  <div className='h-full w-full flex sm:flex-row flex-col items-center justify-between sm:px-[4em] py-[2em] gap-[1em]'>
			  	<img src={myImage} className='sm:w-[350px] sm:h-[200px]' alt="" />
				<i className='fa-solid sm:block hidden fa-arrow-right text-4xl text-blue-600'></i>
				<i className='fa-solid sm:hidden block fa-arrow-down text-4xl text-blue-600'></i>
			  	<img src={myImage1} className='sm:w-[350px] sm:h-[200px]' alt="" />
			  </div>
			  <li className='text-[1.2em] line'><p>The sender should click the button, then select the file or folder to be sent. After  the selection, the sender should click the send button again to send the file or folder</p></li>
			  <div className='h-full w-full flex sm:flex-row flex-col items-center justify-between sm:px-[4em] py-[2em] gap-[1em]'>
			  	<img src={myImage} className='sm:w-[350px] sm:h-[200px]' alt="" />
				<i className='fa-solid sm:block hidden fa-arrow-right text-4xl text-blue-600'></i>
				<i className='fa-solid sm:hidden block fa-arrow-down text-4xl text-blue-600'></i>
			  	<img src={myImage2} className='sm:w-[350px] sm:h-[200px]' alt="" />
			  </div>
			{/* <li className='text-[1.2em] line'><p>The sender can</p></li> */}
		  </ul>
      </section>
  )
}

export default Steps