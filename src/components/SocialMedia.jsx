import { useRouter } from 'next/router'
import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'

function SocialMedia() {
  const router = useRouter();
  return (
    <>
    {router.pathname.startsWith("/Login") || router.pathname.startsWith("/Dashboard") ? null : (
    <div className='w-full h-[54px] hidden lg:flex items-center justify-center bg-[#DBDBDB] gap-4'>
        <FaFacebook className='cursor-pointer' />
        <FaInstagram className='cursor-pointer' />
        <FaTiktok className='cursor-pointer' />

    </div>
    )}
    </>
  )

}

export default SocialMedia