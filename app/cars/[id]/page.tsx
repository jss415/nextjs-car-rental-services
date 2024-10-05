import { fetchCarDetails } from "@/lib/actions/fetchCarDetails";
import BreadCrumbs from "../../../components/BreadCrumb/BreadCrumbs";
import ShareButton from "@/components/Cars/ShareButton";
import ImageContainer from "@/components/Cars/ImageContainer";
import CarRating from "@/components/Home/CarRating";
import CarInfoGrid from "@/components/Cars/CarInfoGrid";
import CarDescription from "@/components/Cars/CarDescription";
import UserInfo from "@/components/Cars/UserInfo";
import CarAmenities from "@/components/Cars/CarAmenities";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";
import SubmitReview from "@/components/Reviews/SubmitReviews";
import CarReviews from "@/components/Reviews/CarReviews";

const DynamicMap = dynamic(() => import("@/components/Cars/CarMap"), {
  ssr: false,
  loading: () => <Skeleton className="h-[400px] w-full" />,
});

const DynamicBookingWrapper = dynamic(
  () => import("@/components/Bookings/BookingWrapper"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-[200px] w-full" />,
  }
);

async function CarDetailsPage({ params }: { params: { id: string } }) {
  const car = await fetchCarDetails(params.id);

  if (!car) {
    return <div>Car not found</div>; // Handle the case where the car does not exist
  }

  const firstName = car.user.firstName;
  const profileIamge = car.user.profileImage;

  return (
    <>
      <BreadCrumbs names={[`${car.name}`]} />
      <header className="flex justify-between items-center mt-4">
        <h1>
          <span className="text-4xl font-bold">{car.name}: </span>
          <span className="text-3xl">{car.tagline}</span>
        </h1>
        <ShareButton name={car.name} carId={car.id} />
      </header>
      <ImageContainer images={car.images} className="mt-12" />
      <section className="lg:grid lg:grid-cols-12 gap-x-12 mt-12">
        <div className="lg:col-span-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">{car.name}</h1>
            <CarRating inPage={false} carId={car.id} />
          </div>
          <CarInfoGrid
            category={car.category}
            doors={car.doors}
            passengers={car.passengers}
          />
          <UserInfo
            user={{
              profileImage: profileIamge,
              firstName: firstName,
            }}
          />
          <CarDescription description={car.description} />
          <CarAmenities amenities={car.amenities} />
          <DynamicMap location={[car.latitude, car.longitude]} />
          <CarReviews carId={car.id} />
          <SubmitReview carId={car.id} />
        </div>
        <div className="lg:col-span-4 flex flex-col items-center">
          <DynamicBookingWrapper
            carId={car.id}
            price={car.price}
            bookings={car.bookings}
          />
        </div>
      </section>
    </>
  );
}

export default CarDetailsPage;
