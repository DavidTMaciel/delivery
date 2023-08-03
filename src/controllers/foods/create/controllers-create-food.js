import { createFood } from "../../../repositorys/foods/create";

export const createNewFood = async(req, res) =>{
    
    try{
        const food = createFood(req.body);
        res.status(200).send(food);
    }catch(err){
        res.status(400).send(err)
    }

}