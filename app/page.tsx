import Hero from "@/components/Hero/Hero";
import CarsContainer from "@/components/Home/CarsContainer";
import LoadingCards from "@/components/Home/LoadingCards";
import SearchBar from "@/components/Search/SearchBar";
import { Suspense } from "react";

export default function HomePage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="mt-10">
        <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
        <p>Explore the cars you might like</p>
      </div>
      <SearchBar />
      <section>
        <Suspense fallback={<LoadingCards />}>
          <CarsContainer
            category={searchParams?.category}
            search={searchParams?.search}
          />
        </Suspense>
      </section>
    </div>
  );
}
