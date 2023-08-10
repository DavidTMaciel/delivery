import { createNewOrder } from "../../controllers/orders/create/controllers-oder-create"
import { listOrders } from "../../controllers/orders/read/controller-read-order";

 const orderRoutes = app =>{

    app.post("/create/order", createNewOrder)
    app.get("/list/orders", listOrders)
}

export default orderRoutes;