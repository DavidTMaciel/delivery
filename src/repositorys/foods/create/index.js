import { prisma } from "../../../services";

export const createFood = async (data) =>{

    const food = await prisma.food.create({
     data
    })

    return food;
}