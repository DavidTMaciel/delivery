import { prisma } from "../../../services";

export const updateUser = async (id, updateData) =>{

    const user = await prisma.user.update({
        where: {id}, data: updateData
    })

    return user;
}