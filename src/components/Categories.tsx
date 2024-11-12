/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { getCategories } from '@/lib/get-categories'
import Image from 'next/image'
import Link from 'next/link'


export default async function Categories() {
    const categories = await getCategories()
    if (categories.length === 0) return null
  return (
    <section className='h-screen'>
        <div className='flex flex-col'>
            <h3>All Categories</h3>
        </div>
        <div className='flex flex-row gap-x-20 justify-center'>
            {categories.map((category:any)=>(
                <>
                <Link href={`/categories/${category.slug}`}>
                  <div key={category.key}>
                    <p>{category.name}</p>
                    <p>{category.description}</p>
                    <Image src={category.image} alt="alt" width={200} height={400} />
                  </div>
                  </Link>
                </>
            ))}
        </div>
    </section>
  )
}
