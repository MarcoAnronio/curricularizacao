import { randomUUID } from "node:crypto";

export function create({ request, response, database }) {
    // Desestrutura os parâmetros do corpo da requisição
    const { idAluno, idAssistente, descricao } = request.body;

    // Verificar se idAluno e descricao são fornecidos na requisição
    if (!idAluno || !descricao) {
        return response
            .writeHead(400)
            .end(JSON.stringify({ error: "O parâmetro 'idAluno' e 'descricao' são obrigatórios." }));
    }

    // Criação do novo plano de intervenção
    const planoIntervencao = {
        idPlanoIntervencao: randomUUID(),
        idAluno,
        idAssistente,
        descricao,
        created_at: new Date(),
    };

    // Inserção do plano de intervenção no banco de dados
    database.insert("planointervencao", planoIntervencao);

    // Retorna resposta de sucesso com o objeto do plano de intervenção criado
    return response
        .writeHead(201)
        .end(JSON.stringify(planoIntervencao));
}
