import { IconType } from "react-icons";
import { FaCar } from "react-icons/fa";
import { FaTruckFront } from "react-icons/fa6";
import { PiJeepBold } from "react-icons/pi";
import { MdElectricCar } from "react-icons/md";
import { BsFillTruckFrontFill } from "react-icons/bs";
import { FaMotorcycle } from "react-icons/fa";

export type CategoryLabel =
  | "sedan"
  | "suv"
  | "electric"
  | "truck"
  | "van"
  | "motorcycle";

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export const categories: Category[] = [
  {
    label: "sedan",
    icon: FaCar,
  },
  {
    label: "suv",
    icon: PiJeepBold,
  },
  {
    label: "truck",
    icon: FaTruckFront,
  },
  {
    label: "electric",
    icon: MdElectricCar,
  },
  {
    label: "van",
    icon: BsFillTruckFrontFill,
  },
  {
    label: "motorcycle",
    icon: FaMotorcycle,
  },
];
