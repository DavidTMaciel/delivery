import { getFood } from "../../../repositorys/foods/read/listFood";

export const listFood = async (req, res) =>{
    try{
        const food = await getFood(Number(req.params.id));
        res.status(200).send(food);
    }catch(err){
        res.status(400).send(err)
    }
       
}