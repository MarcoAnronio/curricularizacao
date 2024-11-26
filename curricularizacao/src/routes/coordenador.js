import { create } from "../controllers/coordenador/create.js"
import { index } from "../controllers/coordenador/index.js"
import { update } from "../controllers/coordenador/update.js"
import { updateStatus } from "../controllers/coordenador/updateStatus.js"
import { remove } from "../controllers/coordenador/remove.js"

export const coordenador = [
    {
        method: "POST",
        path: "/coordenador",
        controller: create,
    },

    {
        method: "GET",
        path: "/coordenador",
        controller: index,
    },

    {
        method: "PUT",
        path: "/coordenador/:id",
        controller: update,
    },

    {
        method: "PATCH",
        path: "/coordenador/:id/close",
        controller: updateStatus,
    },

    {
        method: "DELETE",
        path: "/coordenador/:id",
        controller: remove,
    }
]