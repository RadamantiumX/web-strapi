import React from 'react'
import Link from 'next/link'

export  function Pagination(
    { page, pageSize, pageCount, total }:
    { page: number, pageSize: number, pageCount: number, total: number }
) {
   const isFirstPage = page === 1
   const isLastPage = page === pageCount
   const prevPage = page - 1
   const nextPage = page + 1

   // Ternario: Si es la ultima pagina, no ponemos URL, pero si no, le ponemos la page que obtenemos del queryParam
   const prevPageUrl = isFirstPage ? "#" : `?page=${prevPage}` 
   const nextPageUrl = isLastPage ? "#" : `?page=${nextPage}`
  return (
    <div className='flex flex-col items-center mt-8'>
      <span className='text-sm text-gray-200'>
        Showing{" "}
      
      <span className='font-semibold text-gray-200 '>
        {(page - 1) * pageSize + 1}
      </span>{" "}
        to{" "}
      <span className='font-semibold text-gray-200 '>
        {Math.min(pageSize + page - 1, total)}
      </span>{" "}
      of{" "}
      <span className='font-semibold text-gray-200'>
        {total}
      </span>{" "} 
      Products
      </span>

      <div className='inline-flex mt-2 xs:mt-0'>
        <Link href={prevPageUrl}>
         👈
        </Link>
        <Link href={nextPageUrl}>
        👉
        </Link>
      </div>
    </div>
  )
}
