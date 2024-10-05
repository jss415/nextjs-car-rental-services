"use client";

import { usePathname } from "next/navigation";
import FormContainer from "../Form/FormContainer";
import { toggleFavoriteAction } from "@/lib/actions/toggleFavoriteAction";
import { FavoriteSubmitButton } from "./FavoriteSubmitButton";

interface FavoriteToggleFormProps {
  carId: string;
  favoriteId: string | null;
}

export default function FavoriteToggleForm({
  carId,
  favoriteId,
}: FavoriteToggleFormProps) {
  const pathname = usePathname();
  const toggleAction = toggleFavoriteAction.bind(null, {
    carId,
    favoriteId,
    pathname,
  });
  return (
    <FormContainer action={toggleAction}>
      <FavoriteSubmitButton isFavorite={favoriteId ? true : false} />
    </FormContainer>
  );
}
