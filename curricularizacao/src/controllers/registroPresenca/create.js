import { randomUUID } from "node:crypto";

export function create({ request, response, database }) {
    // Recuperar informações da requisição
    const { idAluno, idAtividade, presenca, data } = request.body;

    // Validação dos campos obrigatórios
    if (!idAluno || !idAtividade || !presenca || !data) {
        return response.writeHead(400).end(
            JSON.stringify({ error: "Todos os campos são obrigatórios: idAluno, idAtividade, presenca, data." })
        );
    }

    // Validar se idAluno e idAtividade existem nas tabelas correspondentes
    const aluno = database.select("alunos").find((aluno) => aluno.id === idAluno);
    const atividade = database.select("atividades").find((atividade) => atividade.id === idAtividade);

    if (!aluno) {
        return response.writeHead(404).end(JSON.stringify({ error: "Aluno não encontrado." }));
    }

    if (!atividade) {
        return response.writeHead(404).end(JSON.stringify({ error: "Atividade não encontrada." }));
    }

    // Validar e converter o campo 'presenca' para booleano
    const presencaBoolean = presenca.toLowerCase() === "sim" ? true : presenca.toLowerCase() === "não" ? false : null;
    if (presencaBoolean === null) {
        return response.writeHead(400).end(JSON.stringify({ error: "O campo 'presenca' deve ser 'sim' ou 'não'." }));
    }

    // Validar e converter o campo 'data'
    const dataValida = new Date(data);
    if (isNaN(dataValida)) {
        return response.writeHead(400).end(JSON.stringify({ error: "A data fornecida é inválida." }));
    }

    // Criar o objeto de registro de presença
    const RegistroPresenca = {
        idRegistroPresenca: randomUUID(),
        idAluno,
        idAtividade,
        presenca: presencaBoolean,
        data: dataValida,
        created_at: new Date(),
        updated_at: new Date(),
    };

    // Inserir no banco de dados
    database.insert("cadastro", RegistroPresenca);

    // Retornar a resposta de sucesso
    return response.writeHead(201).end(JSON.stringify(RegistroPresenca));
}
