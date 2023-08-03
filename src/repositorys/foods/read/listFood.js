import { prisma } from "../../../services";

export const getFood = async (id) =>{

    const food = await prisma.food.findUnique({
        where: {id}
    });

    return food;
}