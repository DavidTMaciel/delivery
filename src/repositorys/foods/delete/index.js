import { prisma } from "../../../services";

export const deleteFood = async (id) =>{

    const food = await prisma.food.delete({
        where: {id}
    })

    return food;
}