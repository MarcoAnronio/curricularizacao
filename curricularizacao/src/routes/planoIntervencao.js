import { create } from "../controllers/planoIntervencao/create.js"
import { index } from "../controllers/planoIntervencao/index.js"

export const planoIntervencao = [
    {
        method: "POST",
        path: "/planointervencao",
        controller: create,
    },

    {
        method: "GET",
        path: "/planointervencao/:id",
        controller: index,
    }
]