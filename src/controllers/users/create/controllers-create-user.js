import { createUser } from "../../../repositorys/users/create";
import bcrypt from 'bcryptjs'
import { userValidation } from "../../../validations/validations";

export const createNewUser = async (req,res)=>{
    try{
        console.log("Dados recebidos na solicitação:", req.body);
        await userValidation.validate(req.body);

        const hashPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = hashPassword;
        const user = await createUser(req.body);
        res.status(200).send(user);
    }catch(err){
        res.status(500).send(err);
        console.error(err);
    }
}