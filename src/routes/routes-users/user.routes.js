import { createNewUser } from "../../controllers/users/create/controllers-create-user";
import { deleteUserId } from "../../controllers/users/delete/controllers-delete-user";
import { listUser } from "../../controllers/users/read/controllers-listUser";
import { listUsers } from "../../controllers/users/read/controlles-read-user";
import { updateUserId } from "../../controllers/users/update/controllers-update-user";

const userRoutes = app =>{
    app.post("/create/user", createNewUser)
    app.delete("/delete/user/:id", deleteUserId)
    app.get("/list/users", listUsers)
    app.get("/list/user/:id", listUser)
    app.put("/update/user/:id", updateUserId)
}

export default userRoutes;