import { auth } from "@clerk/nextjs/server";
import FavoriteSignIn from "./FavoriteSignIn";
import FavoriteToggleForm from "./FavoriteToggleForm";
import { fetchFavoriteById } from "@/lib/actions/fetchFavoriteById";

export default async function FavoriteToggleButton({
  carId,
}: {
  carId: string;
}) {
  const { userId } = auth();

  if (!userId) return <FavoriteSignIn />;

  const favoriteId = await fetchFavoriteById({ carId });

  return <FavoriteToggleForm favoriteId={favoriteId} carId={carId} />;
}
