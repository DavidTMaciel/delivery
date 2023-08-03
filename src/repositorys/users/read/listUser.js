import { prisma } from "../../../services";

export const getUser = async (id) =>{
    
    const user = await prisma.user.findUnique({
        where: {id}, 
        select: {
            id: true,
            firstName:true,
            lastName:true,
            email:true,
            adrress:true,
            telephone:true,
            numbers:true,
            cep:true,
            password:false,
        },
    });

    return user;
}