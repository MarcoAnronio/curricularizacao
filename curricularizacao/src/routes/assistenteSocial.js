import { create } from "../controllers/assistenteSocial/create.js"
import { index } from "../controllers/assistenteSocial/index.js"
import { update } from "../controllers/assistenteSocial/update.js"
import { updateStatus } from "../controllers/assistenteSocial/updateStatus.js"
import { remove } from "../controllers/assistenteSocial/remove.js"

export const assistenteSocial = [
    {
        method: "POST",
        path: "/assistentesocial",
        controller: create,
    },

    {
        method: "GET",
        path: "/assistentesocial",
        controller: index,
    },

    {
        method: "PUT",
        path: "/assistentesocial/:id",
        controller: update,
    },

    {
        method: "PATCH",
        path: "/assistentesocial/:id/close",
        controller: updateStatus,
    },

    {
        method: "DELETE",
        path: "/assistentesocial/:id",
        controller: remove,
    }
]