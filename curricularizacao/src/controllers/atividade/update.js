export function update({ request, response, database }) {
    const { id } = request.params; // ID da atividade a ser atualizada
    const { nome, turmas, dataFim } = request.body; // Campos para atualização

    // Verificar se a atividade existe
    const atividade = database.select("atividade", { idAtividade: id }).find((atividade) => atividade.idAtividade === id);
    if (!atividade) {
        return response.writeHead(404).end(JSON.stringify({ error: "Atividade não encontrada." }));
    }

    // Validar e verificar se nome foi fornecido
    if (nome && typeof nome !== "string") {
        return response.writeHead(400).end(JSON.stringify({ error: "O campo 'nome' deve ser uma string." }));
    }

    // Validar e verificar se turmas foi fornecido
    if (turmas && !Array.isArray(turmas)) {
        return response.writeHead(400).end(JSON.stringify({ error: "O campo 'turmas' deve ser uma lista." }));
    }

    // Validar o campo 'dataFim'
    let dataFimValida = atividade.dataFim; // Valor padrão, caso 'dataFim' não seja enviado
    if (dataFim) {
        dataFimValida = new Date(dataFim);
        if (isNaN(dataFimValida)) {
            return response.writeHead(400).end(JSON.stringify({ error: "A data de término fornecida é inválida." }));
        }
    }

    // Atualizar os dados da atividade
    database.update("atividade", id, {
        nome: nome ?? atividade.nome,
        turmas: turmas ?? atividade.turmas,
        dataFim: dataFimValida ?? atividade.dataFim,
        updated_at: new Date(), // Atualiza a data de modificação
    });

    // Resposta de sucesso
    return response.writeHead(200).end(JSON.stringify({ message: "Atividade atualizada com sucesso." }));
}
