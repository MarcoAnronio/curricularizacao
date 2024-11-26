export function index({ request, response, database }) {
    try {
        // Recuperar o idAluno da query string
        const { idAluno } = request.query;

        // Verificar se o idAluno foi enviado
        if (!idAluno) {
            response.writeHead(400, { "Content-Type": "application/json" });
            return response.end(
                JSON.stringify({ error: "O parâmetro 'idAluno' é obrigatório." })
            );
        }

        // Consultar a tabela 'cadastro' com o filtro por idAluno
        const cadastro = database
            .select("cadastro")
            .filter((registro) => registro.idAluno === idAluno);

        // Verificar se há registros encontrados
        if (cadastro.length === 0) {
            response.writeHead(404, { "Content-Type": "application/json" });
            return response.end(
                JSON.stringify({ error: "Nenhum registro encontrado para o idAluno fornecido." })
            );
        }

        // Retornar os registros encontrados
        response.writeHead(200, { "Content-Type": "application/json" });
        return response.end(JSON.stringify(cadastro));
    } catch (error) {
        // Tratar erros inesperados
        console.error("Erro no controller index:", error);

        response.writeHead(500, { "Content-Type": "application/json" });
        return response.end(
            JSON.stringify({ error: "Erro ao consultar os registros de cadastro." })
        );
    }
}
