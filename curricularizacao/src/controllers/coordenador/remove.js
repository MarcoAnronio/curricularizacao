export function remove ({ request, response, database }) {
    const { id } = request.params

    database.delete("cadastro", id)

    return response.end()
}