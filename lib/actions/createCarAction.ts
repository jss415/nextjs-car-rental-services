"use server";
import { getAuthUser } from "../auth/getAuthUser";
import { carSchema } from "../schemas/cars";
import { uploadImage } from "@/utils/supabase";
import db from "@/utils/db";
import { getRandomCity } from "@/utils/cities";

export const createCarAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  const user = await getAuthUser();
  try {
    const car_images = formData.getAll("images") as File[];
    const rawData = Object.fromEntries(formData);
    const validatedFields = carSchema.parse(rawData);

    const imageUrls: string[] = [];

    for (const image of car_images) {
      const imageUrl = await uploadImage(image); // Use the imported function
      imageUrls.push(imageUrl);
    }

    const randomCity = getRandomCity();

    await db.car.create({
      data: {
        name: validatedFields.name,
        tagline: validatedFields.tagline,
        category: validatedFields.category,
        images: imageUrls, // Save image URLs in the database
        description: validatedFields.description,
        price: validatedFields.price,
        passengers: validatedFields.passengers,
        doors: validatedFields.doors,
        amenities: validatedFields.amenities,
        location: randomCity.city,
        latitude: randomCity.lat,
        longitude: randomCity.long,
        userId: user.id,
      },
    });

    return { message: "Rental created sucessfully." };
  } catch (error) {
    console.log(error);
    return { message: "there was an error..." };
  }
};
