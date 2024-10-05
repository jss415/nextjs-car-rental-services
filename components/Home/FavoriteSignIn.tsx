import { SignInButton } from "@clerk/nextjs";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Button } from "../ui/button";

export default function FavoriteSignIn() {
  return (
    <SignInButton mode="modal">
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 right-2 bg-white/80 hover:bg-white"
        asChild
      >
        <FaHeart className="h-5 w-5 text-primary" />
      </Button>
    </SignInButton>
  );
}
