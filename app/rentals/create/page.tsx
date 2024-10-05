import FormContainer from "@/components/Form/FormContainer";
import InputAmenities from "@/components/Form/InputAmenities";
import InputCategories from "@/components/Form/InputCategories";
import InputCounter from "@/components/Form/InputCounter";
import InputForm from "@/components/Form/InputForm";
import InputMultipleImages from "@/components/Form/InputMultipleImages";
import InputPrice from "@/components/Form/InputPrice";
import InputTextArea from "@/components/Form/InputTextArea";
import SubmitButton from "@/components/Form/SubmitButton";
import { createCarAction } from "@/lib/actions/createCarAction";

function CreateCar() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        Create a car rental
      </h1>
      <div className="border p-8 rounded-md">
        <h3 className="text-lg mb-2 font-medium">Car Rental Information</h3>
        <p className="text-gray-500 text-sm mb-6">
          Please provide details about the car rental, including the car's name,
          tagline, price, and key features. This information will help users
          find the right car based on categories such as number of passengers,
          features, and a description of what sets this car apart.
        </p>
        <FormContainer action={createCarAction}>
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <InputForm
              name="name"
              type="text"
              label="Name (20 limit)"
              defaultValue="Cabin in Latvia"
            />
            <InputForm
              name="tagline"
              type="text"
              label="Tagline (30 limit)"
              defaultValue="Dream Getaway Awaits You Here!"
            />
            <InputPrice />
            <InputCategories />
          </div>
          <InputTextArea
            name="description"
            labelText="Description (10 - 1000 Words)"
          />
          <InputCounter detail="passengers" />
          <InputCounter detail="doors" />

          <h3 className="text-lg mt-8 mb-4 font-medium">
            Accommodation Details
          </h3>
          <InputAmenities />
          <InputMultipleImages />

          <SubmitButton text="create rental" className="mt-12" />
        </FormContainer>
      </div>
    </section>
  );
}
export default CreateCar;
