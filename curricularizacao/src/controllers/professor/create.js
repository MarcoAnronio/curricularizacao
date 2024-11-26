// Separação dos controllers que ão responsáveis por executar ações quando uma rota é chamada
import { randomUUID } from "node:crypto"
// Biblioteca para gerar id aleatorio

export function create ({ request, response, database}) {
    //recuperar informações da requisição
    const { nome, cpf, email, senha, } = request.body

    const cadastroProfessor = {
        idProfessor: randomUUID(),
        nome,
        cpf,
        email,
        senha,
        status: "open",
        created_at: new Date(),
        updated_at: new Date(),
    } 

    database.insert("cadastro", cadastroProfessor)

    return response.writeHead(201).end(JSON.stringify(cadastroProfessor))
}