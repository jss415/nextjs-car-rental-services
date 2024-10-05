import CarTitle from "./CarTitle";

export default function CarDescription({
  description,
}: {
  description: string;
}) {
  return (
    <section className="mt-6">
      <CarTitle text="Description" />
      <p className="text-muted-foreground font-light leading-loose">
        {description}
      </p>
    </section>
  );
}
