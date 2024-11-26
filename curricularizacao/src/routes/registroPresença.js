import { create } from "../controllers/registroPresenca/create.js"
import { index } from "../controllers/registroPresenca/index.js"
import { update } from "../controllers/registroPresenca/update.js"

export const registroPresenca = [
    {
        method: "POST",
        path: "/registropresenca",
        controller: create,
    },

    {
        method: "GET",
        path: "/registropresenca/:id",
        controller: index,
    },

    {
        method: "PUT",
        path: "/registropresenca/:id",
        controller: update,
    }
]