"use client";
import React from "react";
import Link from "next/link";
import Button from "ui/components/Button";

const RentButton: React.FC = () => {
  return (
    <Link href={"/rent-your-house"} role="button">
      <Button className="text-red-200">Rent</Button>
    </Link>
  );
};

export default RentButton;
