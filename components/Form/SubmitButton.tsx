"use client";
import { FaArrowRotateRight } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
  className?: string;
  variant?: string;
  text?: string;
}

export default function SubmitButton({
  className = "",
  text = "submit",
  variant,
}: SubmitButtonProps) {
  // Replace with actual hook or logic that tracks form submission status.
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      variant={variant}
      className={`capitalize ${className}`}
      size="lg"
    >
      {pending ? (
        <>
          <FaArrowRotateRight className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
}
