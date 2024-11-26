import { create } from "../controllers/professor/create.js"
import { index } from "../controllers/professor/index.js"
import { update } from "../controllers/professor/update.js"
import { updateStatus } from "../controllers/professor/updateStatus.js"
import { remove } from "../controllers/professor/remove.js"

export const professor = [
    {
        method: "POST",
        path: "/professor",
        controller: create,
    },

    {
        method: "GET",
        path: "/professor",
        controller: index,
    },

    {
        method: "PUT",
        path: "/professor/:id",
        controller: update,
    },

    {
        method: "PATCH",
        path: "/professor/:id/close",
        controller: updateStatus,
    },

    {
        method: "DELETE",
        path: "/professor/:id",
        controller: remove,
    }
]