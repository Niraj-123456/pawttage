"use client";
import React from "react";
import Image from "next/image";

import { timeStampConvertor } from "@next/utils/timeAndDate";
import { Product } from "../../../types/product";

import {
  StarIcon,
  HeartIcon,
  MapPinIcon,
  CalendarIcon,
} from "@heroicons/react/20/solid";

const ProductCard: React.FC<{ product: Product }> = (props) => {
  const { product } = props;
  return (
    <div className="w-full max-w-full rounded-md shadow-md overflow-hidden">
      <div className="w-full h-44 relative">
        <Image
          src={product?.imageSrc}
          alt={product?.imageAlt}
          fill
          sizes="any"
          className="object-cover object-center border"
        />
        <div
          className="absolute top-2 right-2 cursor-pointe"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <HeartIcon className="w-6 h-6 text-gray-600 stroke-white hover:text-gray-500" />
        </div>
      </div>
      <div className="px-4 py-3">
        <div className="flex justify-between items-center">
          <h6 className="text-sm">{product?.title}</h6>
          <div className="flex items-center gap-1">
            <StarIcon className="w-4 h-4" />
            <span className="text-sm">{product?.rating}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 pt-1">{product?.price}</p>
        <p className="text-xs text-gray-700 flex items-center gap-1 pt-1">
          <MapPinIcon className="w-4 h-4" />
          <span className="font-medium pt-0.5">{product?.location}</span>
        </p>
        <div className="flex items-center text-gray-700 gap-1 pt-1">
          <p className="flex items-center gap-1 whitespace-nowrap">
            <CalendarIcon className="w-4 h-4" />
            <span className="pt-0.5 text-xs">
              {timeStampConvertor(product?.avalability?.from)}
            </span>
          </p>
          {"-"}
          <p className="flex items-center gap-1 whitespace-nowrap">
            <CalendarIcon className="w-4 h-4" />
            <span className="pt-0.5 text-xs">
              {timeStampConvertor(product?.avalability?.to)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
