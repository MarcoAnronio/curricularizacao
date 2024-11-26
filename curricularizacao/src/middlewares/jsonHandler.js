// Exporta uma função assíncrona que lida com o corpo das requisições, convertendo para JSON
export async function jsonHandler(request, response) {
    const buffers = []

    for await (const chunk of request){
        buffers.push(chunk)
    }


    // Adicionar dentro da requisição essa propriedade de body para que esteja disponível em todas as requisições
    try {
        request.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error) {
        request.body = null
    }

    response.setHeader("Content-Type", "application/json")
}