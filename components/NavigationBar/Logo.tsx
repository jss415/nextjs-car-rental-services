import Image from "next/image";
import { IoCarSportSharp } from "react-icons/io5";

export default function Logo() {
  return (
    <>
      <Image
        src="/logo.png"
        alt="Car Hub Logo"
        width={100}
        height={100}
        className="object-contain"
      />
    </>
  );
}
