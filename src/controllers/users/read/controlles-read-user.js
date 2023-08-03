import { getAll } from "../../../repositorys/users/read/listUsers";


export const listUsers = async (req, res) => {
    try{
        const users = await getAll()
        res.status(200).send(users);

    }catch(erro){
        res.status(400).send(erro);
    };
};