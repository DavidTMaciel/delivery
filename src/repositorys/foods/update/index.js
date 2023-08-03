import { prisma } from "../../../services";

export const updateFood = async (id, updateData) =>{

    const food = await prisma.food.update({
        where: {id}, data: updateData
    })

    return food;
    
}