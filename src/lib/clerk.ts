import prisma from "./prisma";

export async function getCurrentUser(clerkId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { clerkId },
    });
    return user;
  } catch (error) {
    console.error("Error getting user:", error);
    return null;
  }
}

export async function createOrUpdateUser(clerkId: string, data: {
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
}) {
  try {
    const user = await prisma.user.upsert({
      where: { clerkId },
      update: {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        avatar: data.avatar,
      },
      create: {
        clerkId,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        avatar: data.avatar,
      },
    });
    return user;
  } catch (error) {
    console.error("Error creating/updating user:", error);
    return null;
  }
}
