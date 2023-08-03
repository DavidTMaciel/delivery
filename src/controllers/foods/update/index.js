import { updateFood } from "../../../repositorys/foods/update";

export const updateFoodId = async (req, res) => {

    try{
        const updateData = req.body;
        const food = await updateFood(Number(req.params.id), updateData);

        res.status(200).status(food);

    }catch(err){
        res.status(400).send(err)
    }
}