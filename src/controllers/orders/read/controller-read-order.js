import { getAllOrder } from "../../../repositorys/orders/read"


export const listOrders = async (req, res) =>{

    try{
        const order = await getAllOrder();

        res.status(200).send(order)
    }catch(err){
        res.status(400).send(err)
    }
}