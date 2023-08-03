import { getAllFoods } from "../../../repositorys/foods/read/listFoods";

export const listFoods = async (req, res) =>{

    try{
        const foods = await getAllFoods()
        res.status(200).send(foods)
    }catch(err){
        res.status(400).send(err)
    };
};