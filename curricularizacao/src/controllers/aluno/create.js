// Separação dos controllers que ão responsáveis por executar ações quando uma rota é chamada
import { randomUUID } from "node:crypto"
// Biblioteca para gerar id aleatorio

export function create ({ request, response, database}) {
    //recuperar informações da requisição
    const { nome, cpf, email, nata_nasc } = request.body

    const cadastroAluno = {
        idAluno: randomUUID(),
        nome,
        cpf,
        email,
        nata_nasc,
        status: "open",
        created_at: new Date(),
        updated_at: new Date(),
    } 

    database.insert("cadastro", cadastroAluno)

    return response.writeHead(201).end(JSON.stringify(cadastroAluno))
}