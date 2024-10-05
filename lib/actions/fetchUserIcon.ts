import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
import db from "@/utils/db";

export const fetchUserIcon = async () => {
  const current_user = await currentUser();
  if (!current_user) return null;

  const user = await db.user.findUnique({
    where: {
      clerkId: current_user.id,
    },
    select: {
      profileImage: true,
    },
  });
  return user?.profileImage;
};
