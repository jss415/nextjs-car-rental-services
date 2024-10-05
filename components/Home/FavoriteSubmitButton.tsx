"use client";

import { useFormStatus } from "react-dom";
import { IoReload as ReloadIcon } from "react-icons/io5";
import { Button } from "../ui/button";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export const FavoriteSubmitButton = ({
  isFavorite,
}: {
  isFavorite: boolean;
}) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="icon"
      variant="ghost"
      className="absolute top-3 right-3 bg-white/80 hover:bg-white rounded-full"
    >
      {pending ? (
        <ReloadIcon className="h-5 w-5 animate-spin text-navy-600" />
      ) : isFavorite ? (
        <FaHeart className="h-5 w-5 text-navy-600 hover:text-navy-800 transition-colors duration-200" />
      ) : (
        <FaRegHeart className="h-5 w-5 text-navy-600 hover:text-navy-800 transition-colors duration-200" />
      )}
    </Button>
  );
};
