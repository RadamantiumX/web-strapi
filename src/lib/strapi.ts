const { STRAPI_HOST, STRAPI_TOKEN } = process.env

// Conectar a STRAPI
// Tenemos que pasarle la URL que queremos consultar
export function query(url: string) {
    return fetch(`${STRAPI_HOST}/api/${url}`,{
        headers:{
            Authorization: `Bearer ${STRAPI_TOKEN}`
        }
    }).then(res => res.json())
}