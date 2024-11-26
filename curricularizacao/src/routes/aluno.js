import { create } from "../controllers/aluno/create.js"
import { index } from "../controllers/aluno/index.js"
import { update } from "../controllers/aluno/update.js"
import { updateStatus } from "../controllers/aluno/updateStatus.js"
import { remove } from "../controllers/aluno/remove.js"

export const aluno = [
    {
        method: "POST",
        path: "/aluno",
        controller: create,
    },

    {
        method: "GET",
        path: "/aluno",
        controller: index,
    },

    {
        method: "PUT",
        path: "/aluno/:id",
        controller: update,
    },

    {
        method: "PATCH",
        path: "/aluno/:id/close",
        controller: updateStatus,
    },

    {
        method: "DELETE",
        path: "/aluno/:id",
        controller: remove,
    }
]