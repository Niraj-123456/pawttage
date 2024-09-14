import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="w-full py-20 px-20">
      <div className="flex gap-40">
        <div className="flex flex-col items-center">
          <div className="relative w-16 h-16">
            <Image
              src="/images/dog.png"
              alt="Dog House"
              fill
              sizes="any"
              style={{
                objectFit: "contain",
                objectPosition: "center",
              }}
            />
          </div>
          <p className="uppercase font-bold">Dog House</p>
        </div>
        <div className="flex gap-16">
          <div>
            <h3 className="text-xl font-medium">Links</h3>
            <ul className="mt-2 capitalize text-sm">
              <li className="footer-links">link 1</li>
              <li className="footer-links">link 2</li>
              <li className="footer-links">link 3</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium">Dog House</h3>
            <ul className="mt-2 capitalize text-sm">
              <li className="footer-links">About</li>
              <li className="footer-links">Contact</li>
              <li className="footer-links">Blog</li>
              <li className="footer-links">Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className="py-2 flex gap-10">
          <p className="text-sm">&copy; 2023 Pawttage</p>

          <ul className="text-sm flex gap-3">
            <li>
              <a className="hover:underline">Terms</a>
            </li>
            <li>
              <a className="hover:underline">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
