export function update ({ request, response, database }) {
    const { id } = request.params
    const { cpf } = request.body

    database.update("cadastro", id, {
        cpf,
        email,
        senha,
        updated_at: new Date()
    })

    return response.end()
}