// Separação dos controllers que ão responsáveis por executar ações quando uma rota é chamada
import { randomUUID } from "node:crypto"
// Biblioteca para gerar id aleatorio

export function create ({ request, response, database}) {
    //recuperar informações da requisição
    const { nome, email, senha } = request.body

    const cadastroCoordenador = {
        idCoordenador: randomUUID(),
        nome,
        email,
        senha,
        status: "open",
        created_at: new Date(),
        updated_at: new Date(),
    } 

    database.insert("cadastro", cadastroCoordenador)

    return response.writeHead(201).end(JSON.stringify(cadastroCoordenador))
}