/* eslint-disable @typescript-eslint/no-explicit-any */
import { query } from "./strapi";

const { STRAPI_HOST } = process.env


export function getProducts(
    {categoryId,  pageSize, page } : { categoryId: string, pageSize: number, page:string | undefined }
) {
    let url = `products?filters[product_category][slug][$contains]=${categoryId}&populate=images`
    if(page) url += `&pagination[page]=${page}` // SI hay una "url" añadimos la paginacion a la URL
    if(pageSize) url += `&pagination[pageSize]=${pageSize}`
   // if(sort) url += `&sort=price` // Ordenamos por campo

    return query(url)
      .then(res=>{
        const { data, meta } = res
        
        const products = data.map( (product: { name: any; slug: any; description: any; images: any; price: any; }) => {
            const { name, slug, description, images:rawImage, price } = product
            const images = `${STRAPI_HOST}/${rawImage[0].url}`
            return { name, slug, description, images, price }
        })

        return { products, pagination: meta.pagination }
      })
}