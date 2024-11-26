export function remove({ request, response, database }) {
    // Obtém o id da atividade a ser removida da URL
    const { id } = request.params;

    // Verifica se a atividade existe antes de tentar remover
    const atividade = database.select("atividade", { idAtividade: id });

    if (atividade.length === 0) {
        // Caso a atividade não exista, retorna um erro 404
        return response
            .writeHead(404)
            .end(JSON.stringify({ error: "Atividade não encontrada." }));
    }

    // Se a atividade existir, realiza a exclusão
    database.delete("atividade", id);

    // Retorna uma resposta de sucesso
    return response.end();
}
