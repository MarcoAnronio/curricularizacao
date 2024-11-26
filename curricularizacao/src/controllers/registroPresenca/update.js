export function update({ request, response, database }) {
    const { id } = request.params; // ID do registro a ser atualizado
    const { idAluno, idAtividade, presenca, data } = request.body;

    // Verificar se o registro existe
    const registro = database.select("cadastro").find((registro) => registro.idRegistroPresenca === id);
    if (!registro) {
        return response.writeHead(404).end(JSON.stringify({ error: "Registro de presença não encontrado." }));
    }

    // Validar e verificar se idAluno e idAtividade existem nas tabelas correspondentes
    if (idAluno) {
        const aluno = database.select("alunos").find((aluno) => aluno.id === idAluno);
        if (!aluno) {
            return response.writeHead(404).end(JSON.stringify({ error: "Aluno não encontrado." }));
        }
    }

    if (idAtividade) {
        const atividade = database.select("atividades").find((atividade) => atividade.id === idAtividade);
        if (!atividade) {
            return response.writeHead(404).end(JSON.stringify({ error: "Atividade não encontrada." }));
        }
    }

    // Validar o campo 'presenca'
    let presencaBoolean = registro.presenca; // Valor padrão, caso 'presenca' não seja enviado
    if (presenca) {
        presencaBoolean = presenca.toLowerCase() === "sim" ? true : presenca.toLowerCase() === "não" ? false : null;
        if (presencaBoolean === null) {
            return response.writeHead(400).end(JSON.stringify({ error: "O campo 'presenca' deve ser 'sim' ou 'não'." }));
        }
    }

    // Validar o campo 'data'
    let dataValida = registro.data; // Valor padrão, caso 'data' não seja enviado
    if (data) {
        dataValida = new Date(data);
        if (isNaN(dataValida)) {
            return response.writeHead(400).end(JSON.stringify({ error: "A data fornecida é inválida." }));
        }
    }

    // Atualizar os dados do registro
    database.update("cadastro", id, {
        idAluno: idAluno ?? registro.idAluno,
        idAtividade: idAtividade ?? registro.idAtividade,
        presenca: presencaBoolean,
        data: dataValida,
        created_at: registro.created_at, // Mantém a data original de criação
        updated_at: new Date(), // Atualiza a data de modificação
    });

    // Resposta de sucesso
    return response.writeHead(200).end(JSON.stringify({ message: "Registro atualizado com sucesso." }));
}
