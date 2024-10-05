"use server";
import { revalidatePath } from "next/cache";
import { getAuthUser } from "../auth/getAuthUser";
import { profileSchema } from "../schemas/user";
import db from "@/utils/db";

export const updateProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  const current_user = await getAuthUser();
  try {
    const rawData = Object.fromEntries(formData);

    const validatedFields = profileSchema.parse(rawData);

    await db.user.update({
      where: {
        clerkId: current_user.id,
      },
      data: validatedFields,
    });
    revalidatePath("/profile");
    return { message: "Profile updated successfully" };
  } catch (error) {
    return {
      message: "An error occurred",
    };
  }
};
