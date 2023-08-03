import { updateUser } from "../../../repositorys/users/update";


export const updateUserId = async (req, res) =>{
    
    try{
        const id = Number(req.params.id);
        const updateData = req.body;
        const user = await updateUser(id,updateData)

        res.status(200).send(user);
    }catch(err){
        res.status(400).send(err);
        console.log(err);
    };
}