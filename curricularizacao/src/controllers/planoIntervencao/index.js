export function index({ request, response, database }) {
    const { idAluno } = request.query;

    const filters = idAluno ? { idAluno } : null;

    // Recupera os planos de intervenção
    const planosIntervencao = database.select("planointervencao", filters);

    // Retorna os planos de intervenção
    return response.end(JSON.stringify(planosIntervencao));
}
