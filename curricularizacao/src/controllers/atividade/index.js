export function index({ request, response, database }) {
    const { idAluno } = request.query;

    const filters = idAluno ? { idAluno } : null;

    // Recupera as atividades
    const atividades = database.select("atividade", filters);

    return response.end(JSON.stringify(atividades));
}
