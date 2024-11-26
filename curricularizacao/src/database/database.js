import fs from "node:fs/promises"

const DATABASE_PATH = new URL("db.json", import.meta.url)

export class Database {
    #database = {}

    // Construtor verifica a existencia de datos, caso não houver utiliza o pesist e adidiona ao banco de dados
    constructor() {
        fs.readFile(DATABASE_PATH, "utf8")
        .then((data) => {
            this.#database = JSON.parse(data)
        })
        .catch(() => {
            this.#persist()
        })
    }

    #persist() {
        fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database))
    }

    insert (table, data) {
        // Verifica se ha a tabela no banco, caso encontre adiciona os dados ao final
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data)
        } else {
            // Caso não encontre a tabela, criara a tabela e adicionara os dados como primeiros elementos, entre [] pois é o primeiro e unico dado por enquanto da tabela
            this.#database[table] = [data]
        }

        //persist para salvar os arquivos
        this.#persist()
    }

    select(table, filters) {
        let data = this.#database[table] ?? []

        // Retorna um valor true ou false se o valor existe na chave que esta utilizando, caso seja encontrado, sera retornado os valores corretos
        if (filters) {
            data = data.filter(( row ) => {
                return Object.entries(filters).some(([key, value]) => {
                    return row[key].toLowerCase().includes(value.toLowerCase())
                })
            })
        }

        return data
    }

    update(table, id, data) {
        const rowIndex = this.#database[table].findIndex(( row ) => 
        row.id === id)
        if(rowIndex > -1){
            this.#database[table][rowIndex] = {
                ...this.#database[table][rowIndex],
                ...data
            }
            this.#persist()
        }
    }

    delete(table, id) {
        const rowIndex = this.#database[table].findIndex(( row ) => row.id === id)

        if(rowIndex > -1){
            this.#database[table].splice(rowIndex, 1)
            this.#persist()
        }
    }
}