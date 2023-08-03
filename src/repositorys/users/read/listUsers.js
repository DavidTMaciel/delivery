import { prisma } from "../../../services";

export const getAll = async ()=>{

    const users = await prisma.user.findMany({
        select:{
            id: true,
            firstName:true,
            lastName:true,
            email:true,
            adrress:true,
            telephone:true,
            numbers:true,
            cep:true,
            password:false,
        }
    })

    return users;
}