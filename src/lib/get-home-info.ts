import { query } from "./strapi";

const { STRAPI_HOST } = process.env

export function getHomeInfo() {
    return query("home?populate=cover") // Le pasamos la URL a la función, para completar el fetch
      .then(res => {
        const { title, description, cover } = res.data
        const image = `${STRAPI_HOST}/${cover.url}`
        return { title, description, image } // Devolvemos la "data"
      })
}