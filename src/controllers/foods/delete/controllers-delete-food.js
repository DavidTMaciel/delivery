import { deleteFood } from "../../../repositorys/foods/delete";

export const deleteFoodId = async (req, res) =>{

    try{
        const food = await deleteFood(Number(req.params.id))
        res.status(200).send(food);

    }catch(err){
        res.status(500).send(err)
    }
}