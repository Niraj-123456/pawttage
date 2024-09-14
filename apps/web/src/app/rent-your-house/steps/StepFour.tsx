"use client";
import { CancelOutlined, CloudUpload, Remove } from "@mui/icons-material";
import { Button, styled } from "@mui/material";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const StepFour = () => {
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files: File[] = Array.from(e.target.files);
      setImages((prev) => [...prev, ...files]);

      const imagePreviews = files.map((file) => URL.createObjectURL(file));

      setPreviews((prev) => [...prev, ...imagePreviews]);
    }
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...images];
    const updatedPreviews = [...previews];
    updatedImages.splice(index, 1);
    updatedPreviews.splice(index, 1);
    setImages(updatedImages);
    setPreviews(updatedPreviews);
  };

  return (
    <div className="grid place-items-center w-full">
      <div className="flex items-center gap-3">
        <span className="w-6 h-6 bg-black rounded-full grid place-items-center text-white font-semibold text-sm">
          4
        </span>
        <h4 className="text-2xl text-gray-600 font-semibold">Upload Images</h4>
      </div>
      <div className="w-full grid place-items-center m-16">
        <Button
          component="label"
          variant="contained"
          startIcon={<CloudUpload />}
        >
          Upload
          <VisuallyHiddenInput
            type="file"
            onChange={handleImageUpload}
            multiple
          />
        </Button>
      </div>
      <div className="border-dashed border-gray-200 rounded-lg w-full min-h-4xl h-full p-4">
        {previews.length <= 0 ? (
          <p className="flex items-center justify-center h-full text-gray-600">
            Uploaded images will appear here
          </p>
        ) : (
          <div className="grid grid-cols-3 gap-2">
            {previews.map((preview, idx) => (
              <div key={idx} className="relative w-60 h-48">
                <Image
                  src={preview}
                  alt={`preview-${idx}`}
                  fill
                  sizes="any"
                  className="w-full h-full object-contain object-center"
                />
                <div
                  className="absolute right-2"
                  onClick={() => handleRemoveImage(idx)}
                >
                  <CancelOutlined className="text-red-600 cursor-pointer hover:text-red-400" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StepFour;
