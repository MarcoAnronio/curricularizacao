//Arquivo que utiliza expressões regulares para extrair parametros da URL, como buscar alunos apenas com o status: closed

export function parseRoutePath(path) {
    const routeParametersRegex = /:([a-zA-Z]+)/g

    const params = path.replaceAll(routeParametersRegex, "(?<$1>[a-z0-9-_]+)")

    const pathRegex = new RegExp(`^${params}(?<query>\\?(.*))?$`)

    return pathRegex
}

//$ para pegar o primeiro grupo criado de routeParametersRegex, -_ para pegar tanto maiusculo quanto minusculo