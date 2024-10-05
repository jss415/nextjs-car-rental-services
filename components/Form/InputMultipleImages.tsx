"use client";
import React, { useState } from "react";

export default function InputMultipleImages() {
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      const previewArray = fileArray.map((file) => URL.createObjectURL(file));
      setImagePreviews(previewArray);
    }
  };

  return (
    <div className="mt-6">
      <label className="block mb-2 font-medium text-gray-700">
        Upload Car Images
      </label>
      <input
        type="file"
        name="images"
        accept="image/*"
        multiple
        className="border border-gray-300 p-2 w-full"
        onChange={handleFileChange}
      />
      <p className="text-sm text-gray-500">
        You can upload multiple images (JPG, PNG)
      </p>

      {/* Display image previews */}
      <div className="mt-4 grid grid-cols-4 gap-4">
        {imagePreviews.length > 0 &&
          imagePreviews.map((src, index) => (
            <div key={index} className="relative">
              <img
                src={src}
                alt={`Preview ${index}`}
                className="h-100 w-full object-cover rounded-md"
              />
            </div>
          ))}
      </div>
    </div>
  );
}
