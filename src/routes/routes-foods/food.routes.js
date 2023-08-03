import { createNewFood } from "../../controllers/foods/create/controllers-create-food";
import { listFoods } from "../../controllers/foods/read/controllers-listAll";
import { listFood } from "../../controllers/foods/read/controllers-listFood";
import { updateFoodId } from "../../controllers/foods/update";

const foodRoutes = app =>{
    app.post("/create-food", createNewFood);
    app.get("/list-foods", listFoods);
    app.get("/list-food/:id", listFood);
    app.put("/update-food", updateFoodId);

}

export default foodRoutes;