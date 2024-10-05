import BreadCrumbs from "@/components/BreadCrumb/BreadCrumbs";
import CarsList from "@/components/Home/CarsList";
import { fetchFavoritesByUser } from "@/lib/actions/fetchFavoritesByUser";

export default async function FavoritesPage() {
  const favorites = await fetchFavoritesByUser();
  console.log("favorites ", favorites);
  const cars = favorites.map((favorite) => favorite.car);

  return (
    <section>
      <>
        <BreadCrumbs names={["Your Favorites Page"]} />
        <h1 className="text-3xl font-bold mt-2">Your Favorites Page</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          View and manage your favorite rental cars.
        </p>
        <CarsList cars={cars} />
      </>
    </section>
  );
}
