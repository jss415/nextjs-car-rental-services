"use client";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import Image from "next/image";
import InputImage from "./InputImage";
import FormContainer from "./FormContainer";
import { uploadProfileImageAction } from "@/lib/actions/uploadProfileImageAction";

type actionFunction = (
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;

interface InputImageContainerProps {
  image: string;
  name: string;
  action: actionFunction;
  text: string;
  children?: React.ReactNode;
}

export default function InputImageContainer(props: InputImageContainerProps) {
  const { image, name, action, text } = props;

  const userIcon = (
    <Avatar className="h-16 w-16">
      <AvatarImage alt="Profile Image" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  );

  return (
    <div className="flex items-center gap-4">
      {image ? (
        <Image
          src={image}
          width={100}
          height={100}
          className="rounded-md object-cover mb-4 w-24 h-24"
          alt={name}
        />
      ) : (
        userIcon
      )}
      <FormContainer action={uploadProfileImageAction}>
        <InputImage />
        <Button variant="outline">Upload Profile Image</Button>
      </FormContainer>
    </div>
  );
}
