"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ImageContainerProps {
  images?: string[];
  className?: string;
}

export default function ImageContainer({
  images = [],
  className,
}: ImageContainerProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!images?.length) {
    return null;
  }

  if (images.length === 1) {
    return (
      <div className={cn("relative w-full aspect-[16/9]", className)}>
        <Image
          src={images[0]}
          alt="Single image"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    );
  }

  return (
    <>
      <div className={cn("grid grid-cols-2 gap-2 aspect-[16/9]", className)}>
        <div className="relative">
          <Image
            src={images[0]}
            alt="Main image"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="grid grid-rows-2 gap-2">
          <div className="relative">
            <Image
              src={images[1]}
              alt="Second image"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          {images.length > 2 && (
            <div className="relative">
              <Image
                src={images[2]}
                alt="Third image"
                fill
                className="object-cover rounded-lg"
              />
              {images.length > 3 && (
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                  <DialogTrigger asChild>
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg cursor-pointer">
                      <span className="text-white text-2xl font-bold">
                        +{images.length - 3}
                      </span>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full h-[80vh] overflow-y-auto p-4">
                    <div className="grid grid-cols-2 gap-4 p-10">
                      {images.map((image, index) => (
                        <div key={index} className="relative aspect-square">
                          <Image
                            src={image}
                            alt={`Image ${index + 1}`}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
