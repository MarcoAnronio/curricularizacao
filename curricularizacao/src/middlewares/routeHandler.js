import { routes } from "../routes/index.js"
import { Database } from "../database/database.js"
import { extractQueryParams } from "../utils/extractQueryParams.js"

const database = new Database()

export function routeHandler (request, response) {
    const route = routes.find((route) => {
        return route.method === request.method && route.path.test(request.url)
    })

    if(route) {
        // Extrair e tratar parametros, separando-os em chave e valor
        const routeParams = request.url.match(route.path)

        //desestruturando a query da requisição
        const { query, ...params } = routeParams.groups
        request.params = params

        //console.log(extractQueryParams(query))
        request.query = query ? extractQueryParams(query) : {}
        
        return route.controller({ request, response, database })
    }

    return response.writeHead(404).end()
}