import { deleteUser } from "../../../repositorys/users/delete";

export const deleteUserId = async (req, res) =>{
    try{
        const user = await deleteUser(req.params.id)
        res.status(200).send(user);
    }catch(err){
        res.status(400).send(err);
    }
   
}