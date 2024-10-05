import { redirect } from "next/navigation";
import { getAuthUser } from "../auth/getAuthUser";
import db from "@/utils/db";

export const getUserProfile = async () => {
  const current_user = await getAuthUser();

  const current_profile = db.user.findUnique({
    where: {
      clerkId: current_user.id,
    },
  });

  if (!current_profile) {
    return redirect("/profile/create");
  }
  return current_profile;
};
