import { randomUUID } from "node:crypto"; // Para gerar UUID único

export function create({ request, response, database }) {
    // Desestrutura os parâmetros do corpo da requisição
    const { idAluno, idProfessor, idCoordenador, nomes, turmas, dataInicio, dataFim } = request.body;

    // Verificar se os parâmetros necessários foram fornecidos
    if (!idAluno || !idProfessor || !idCoordenador || !nomes || !turmas || !dataInicio || !dataFim) {
        return response
            .writeHead(400)
            .end(JSON.stringify({ error: "Os parâmetros 'idAluno', 'idProfessor', 'idCoordenador', 'nomes', 'turmas', 'dataInicio' e 'dataFim' são obrigatórios." }));
    }

    // Criação da nova atividade
    const atividade = {
        idAtividade: randomUUID(), // Gerando UUID para a atividade
        idAluno,
        idProfessor,
        idCoordenador,
        nomes,
        turmas,
        dataInicio,
        dataFim,
        created_at: new Date(),
        updated_at: new Date(),
    };

    // Inserção da atividade no banco de dados
    database.insert("atividade", atividade);

    // Retorna resposta de sucesso com a atividade criada
    return response
        .writeHead(201)
        .end(JSON.stringify(atividade));
}
