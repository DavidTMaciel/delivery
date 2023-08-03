import { prisma } from "../../../services";

export const getAllFoods = async () =>{

    const foods = await prisma.food.findMany();

    return foods;
}