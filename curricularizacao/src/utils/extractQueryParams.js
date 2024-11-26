// Realiza a extração de parametros de uma url para buscar dados especificos

export function extractQueryParams (query) {
    return query
    .slice(1)
    .split("&")
    .reduce((queryParams, Param) => {
        const [key, value] = Param.split("=");

        queryParams[key] = value

        return queryParams
    }, {})
}