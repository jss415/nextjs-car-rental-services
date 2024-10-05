import { Button } from "../ui/button";
import { FaCarSide } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex xl:flex-row flex-col relative z-0 max-w-[1440px] mx-auto mb-10">
      <div className="flex-1 padding-x">
        <h1 className="2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold">
          Find, book or rent a car - quickly and easily!
        </h1>
        <p className="text-[27px] text-black-100 font-light mt-5">
          Booking made easy – reserve your ride in under 5 minutes.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="primary flex items-center justify-center gap-2 px-6 py-3 mt-6"
        >
          <span className="text-primary">Explore cars</span>
          <FaCarSide className="text-primary text-lg" />
        </Button>
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image src="/hero.webp" alt="hero" fill className="object-contain" />
          <div className="absolute -right-1/4 bg-repeat-round -z-10 w-full h-[590px] ">
            <Image src="/hero-bg.png" alt="background" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
