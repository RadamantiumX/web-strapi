import Link from 'next/link'
import React from 'react'

export function SortBy({categoryId}:{categoryId:string}) {
  return (
    <>
      <div>
        <Link href={`/categories/${categoryId}`} className='border rounded-md p-2'>Default</Link>
        <Link href={`/categories/${categoryId}?sortBy=price`} className='border rounded-md p-2'>Price 💲</Link>
      </div>
    </>
  )
}
