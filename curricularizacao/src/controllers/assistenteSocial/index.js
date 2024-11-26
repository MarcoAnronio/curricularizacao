export function index({ request, response, database }) {
    //retorna apenas o valor do parametro na requisição
    const { status } = request.query

    const filters = status ? { status } : null

    const cadastro = database.select("cadastro", filters)
    
    return response.end(JSON.stringify(cadastro))
}