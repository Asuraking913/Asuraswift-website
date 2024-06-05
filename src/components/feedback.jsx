import React from 'react'

function Feed() {
  return (
    <div>
        <form action="" className=''>
              <p className='flex gap-[1em] '><input type="text" placeholder='youremail@gmail.com' className='border-2 rounded-[.2em] border-black p-[.5em]'/><button className='capitalize text-white poppins p-[.5em] text-xl font-semibold px-[1em] rounded-[.2em] h-full bg-green-800 hover:bg-green-600 duration-[0.5s]'>Subscribe</button></p>
            </form>

            <p className='text-blue-600 roboto text-semibold text-xl capitalize'><i className='fa-solid fa-copyright'></i> All rights reserved</p>
    </div>
  )
}

export default Feed