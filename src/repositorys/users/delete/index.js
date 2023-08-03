import { prisma } from "../../../services";

export const deleteUser = async (id) => {

    const user = await prisma.user.delete({
        where:{id}
    })
    return user;
}