import { createNewUser } from "../../controllers/users/create/controllers-create-user";

const userRoutes = app =>{
    app.post("/create/user", createNewUser)
}

export default userRoutes;