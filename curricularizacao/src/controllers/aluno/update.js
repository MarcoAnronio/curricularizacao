export function update ({ request, response, database }) {
    const { id } = request.params
    const { cpf } = request.body

    database.update("cadastro", id, {
        cpf,
        email,
        updated_at: new Date()
    })

    return response.end()
}