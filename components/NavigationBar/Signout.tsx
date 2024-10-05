"use client";

import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";

function SignOut() {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: "You have been signed out." });
  };
  return (
    <SignOutButton redirectUrl="/">
      <button
        className="w-full text-left text-sm py-2 px-2 hover:bg-gray-100"
        onClick={handleLogout}
      >
        Logout
      </button>
    </SignOutButton>
  );
}
export default SignOut;
