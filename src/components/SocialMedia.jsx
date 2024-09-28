import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

function SocialMedia() {
  return (
    <div className='w-full h-[54px] flex items-center justify-center bg-[#DBDBDB] gap-4'>
        <FaFacebook className='cursor-pointer' />
        <FaInstagram className='cursor-pointer' />
        <FaTiktok className='cursor-pointer' />

    </div>
  )
}

export default SocialMedia