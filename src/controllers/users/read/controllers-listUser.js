import { getUser } from "../../../repositorys/users/read/listUser"


export const listUser = async (req, res) =>{

    try{
        const user = await getUser(Number(req.params.id));
        res.status(200).send(user);
    }catch(erro){
        res.status(400).send(erro);
    }
}
