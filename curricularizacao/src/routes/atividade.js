import { create } from "../controllers/atividade/create.js"
import { index } from "../controllers/atividade/index.js"
import { update } from "../controllers/atividade/update.js"
import { remove } from "../controllers/atividade/remove.js"

export const atividade = [
    {
        method: "POST",
        path: "/atividade",
        controller: create,
    },

    {
        method: "GET",
        path: "/atividade",
        controller: index,
    },

    {
        method: "PUT",
        path: "/atividade/:id",
        controller: update,
    },

    {
        method: "DELETE",
        path: "/atividade/:id",
        controller: remove,
    }
]