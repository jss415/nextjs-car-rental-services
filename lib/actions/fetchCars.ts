import db from "@/utils/db";

export const fetchCars = async ({
  search = "",
  category,
}: {
  search?: string;
  category?: string;
}) => {
  const cars = await db.car.findMany({
    where: {
      category,
      OR: [
        { name: { contains: search, mode: "insensitive" } },
        { tagline: { contains: search, mode: "insensitive" } },
      ],
    },
    select: {
      id: true,
      name: true,
      tagline: true,
      images: true,
      price: true,
      location: true,
      latitude: true,
      longitude: true,
    },
  });
  return cars;
};
