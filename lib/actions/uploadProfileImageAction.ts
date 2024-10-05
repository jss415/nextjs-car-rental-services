"use server";

import { uploadImage } from "@/utils/supabase";
import { getAuthUser } from "../auth/getAuthUser";
import { imageSchema } from "../schemas/user";
import db from "@/utils/db";
import { revalidatePath } from "next/cache";

export const uploadProfileImageAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const current_user = await getAuthUser();

  try {
    const image = formData.get("image") as File;
    const validatedFields = imageSchema.parse({ image });
    const imagePath = await uploadImage(validatedFields.image);
    await db.user.update({
      where: {
        clerkId: current_user.id,
      },
      data: {
        profileImage: imagePath,
      },
    });
    revalidatePath("/profile");
  } catch (error) {
    return { message: "there was an error..." };
  }

  return { message: "Profile image updated successfully" };
};
