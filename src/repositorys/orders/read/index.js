import { prisma } from "../../../services";

export const getAllOrder = async () =>{

    const order = await prisma.order.findMany({
        select:{
            client:{
                select:{
                    firstName: true,
                    telephone: true,
                    adrress: true,
                    numbers: true,
                }
            },
            food:{
                select:{
                    name: true,
                    price: true,
                }
            }
        }
    })

    return order;
}