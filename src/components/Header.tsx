import React from 'react'
import Image from 'next/image'
import { getHomeInfo } from '@/lib/get-home-info'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'

export default async function Header() {
  const { title, image, description } = await getHomeInfo()
  console.log(image)

  return (
    <div className='h-250 w-full bg-gray-700'>
      <div className='flex flex-row items-center justify-center'>
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-gray-200 text-center'>
        {title}
      </h1>
      <div>
        <BlocksRenderer content={description}/>
          
        
      </div>
      
      <button className='border rounded-md bg-yellow-500 p-3'>Button for action</button>
    </div>
     <Image src={image} alt="alt" width={300} height={300} />
    </div>
    </div>
  )
}
