import React from 'react'
import profile from "../../public/profile.png"
const NotFoundContact = () => {
  return (
    <div className='flex m-auto h-[50vh] justify-center gap-4 items-center'>
      <div className="">
      <img src={profile} alt="" />
      </div>
      <h3 className='text-white text-2xl font-semiBold'>Contact Not Found</h3>
    </div>
  )
}

export default NotFoundContact
