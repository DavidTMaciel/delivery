import { prisma } from "../../../services";

export const createOrder = async (foodId, userId)=>{

    const food = await prisma.food.findUnique({where:{id: foodId}})
    const user = await prisma.user.findUnique({where:{id:userId}})

    if(!food) throw new Error("Do not food");

    if(!user) throw new Error("Do not user"); 

    const order = await prisma.order.create({
        data:{
            food:{
                connect:{id: food.id}
            },
            client:{
                connect:{id: user.id}
            }
        },
        select:{
            id: true,
            createdAt: true,
            food:{ 
                select:{
                name: true,
                price: true,
                },               
            },

            client:{
                select:{
                    firstName: true,
                    lastName: true,
                    adrress: true,
                    telephone: true,
                    numbers: true,
                    cep: true,
                }

            }
        }
    });

    return order;

}