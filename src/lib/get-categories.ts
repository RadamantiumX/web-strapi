import { query } from "./strapi";

const { STRAPI_HOST } = process.env

// Para conseguir la localización, solo tenemos que colocar el parametro "locale=es", o el valor que queremos en el idioma.

export function getCategories() {
    return query("product-categories?fields[0]=name&fields[1]=slug&fields[2]=description&populate[image][fields][0]=url")
    .then(res=>{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return res.data.map((category:any) =>{
            const { name, slug, description, image:rawImage } = category // renombramos la imagen
            const image = `${STRAPI_HOST}/${rawImage.url}` // Obtenemos la URL de la imagen para utilizar en el "src"
            return { name, slug, description, image }
        })
    })
}