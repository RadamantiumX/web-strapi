/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Link from 'next/link';
import { getProducts } from '@/lib/get-products';
import Image from 'next/image';
import { Pagination } from '@/components/Pagination';
import { SortBy } from '@/components/SortBy';

const PAGE_SIZE = 3 // Resultados por pagina
export default async function CategoryPage({ params, searchParams }:{ params: { categoryId: string }, searchParams:{page:string} }) {
    
    const { categoryId } = params
    const page = searchParams.page
    const { products, pagination } = await getProducts({ categoryId, page , pageSize:PAGE_SIZE })
    console.log(products)
    if (products.length === 0) return (<><p className="">No Products founded!</p> <Link href="/">Back</Link></>)
  return (
    <>
    <Link href="/">Return</Link>
    <SortBy categoryId={categoryId}/>
    <div className='flex flex-row justify-center gap-5'>
     {
        products.map((product:any, index:any)=>(
            <div key={index}>
                <h3>{product.name}</h3>
                
                <Image src={product.images} alt="alt" width={200} height={200} />
                <p><span>$ {product.price}</span></p>
            </div>
        ))
     }

     </div>
     <Pagination page={pagination.page} pageSize={PAGE_SIZE} pageCount={pagination.pageCount} total={pagination.total}/>
    </>
  )
}
