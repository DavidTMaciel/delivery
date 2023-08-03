import userRoutes from "./routes-users/user.routes"
import foodRoutes from "./routes-foods/food.routes";

const routes = app =>{
    userRoutes(app)
    foodRoutes(app)
}

export default routes;

