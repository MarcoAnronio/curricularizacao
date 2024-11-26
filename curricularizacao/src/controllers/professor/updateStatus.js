export function updateStatus({ request, response, database }) {
    const { id } = request.params
    const { motivo } = request.body

    database.update("cadastro", id, { status:"closed", motivo })

    return response.end()
}