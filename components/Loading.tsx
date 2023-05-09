import React from 'react'
import LoadingImg from '../public/loading.gif'
import Image from 'next/image'

export default function Loading() {
  return (
    <div className='mx-auto items-center'>
      <Image
        src={LoadingImg}
        height={100}
        width={100}
        loading="lazy"
        alt={"loading"}
      />
      <h1 className='text-xl text-gray-700 font-bold mx-auto pb-14'>Loading...</h1>
    </div>
  )
}
