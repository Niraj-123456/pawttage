import React from "react";
import Image from "next/image";
import RentButton from "./common/RentButton";
import Search from "./Search";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className=" text-black w-full h-[var(--header-height)] max-h-[var(--header-height)] py-2 px-20 flex justify-between items-center border-t-0 border-x-0 border-b-2 border-solid border-gray-100">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 relative">
          <Image
            src="/images/dog.png"
            alt="Dog House"
            fill
            sizes="any"
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>
        <p className="text-lg font-bold">pawttage</p>
      </div>
      <div className="flex gap-5">
        <div className="w-94 mr-10">
          <Search />
        </div>
        <ul className="flex items-center gap-4 text-sm">
          <li className="cursor-pointer">
            <Link href={"/signup"}>Signup</Link>
          </li>
          <li className="cursor-pointer">
            <Link href={"/login"}>Login</Link>
          </li>
        </ul>
        <RentButton />
      </div>
    </div>
  );
};

export default Header;
