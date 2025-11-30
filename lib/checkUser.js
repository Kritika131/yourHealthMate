import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();
//   console.log(user);
  if (!user) {
    return null;
  }
  try {
    const loggedInUser = await prisma.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
      include:{
        transactions:{
            where:{
                type: "CREDIT_PURCHASE" ,
                createdAt:{
                    gte: new Date(new Date().getFullYear(),new Date().getMonth(),1)
                }
            },
            orderBy:{
                createdAt: "desc"
            },
            take:1
        }
      }
    });
    if (loggedInUser) {
      return loggedInUser;
    }
    const name = `${user.firstName} ${user.lastName}`;
    const newUser = await prisma.user.create({
      data: {
        clerkUserId: user.id,
        name: name,
        email: user.emailAddresses[0]?.emailAddress || "",
        imageUrl: user.imageUrl || "",
        transactions: {
          create: {
            type: "CREDIT_PURCHASE",
            amount: 2,
            packageId: "free_user",
          },
        },
      },
    });
  } catch (err) {
    console.log(err);
    return null;
  }
};
