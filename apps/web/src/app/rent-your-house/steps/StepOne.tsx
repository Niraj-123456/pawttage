import { CheckCircleOutlined, Home } from "@mui/icons-material";
import React, { useState } from "react";

const homes = [
  {
    id: 1,
    icon: <Home className="w-8" />,
    name: "House",
  },
  {
    id: 2,
    icon: <Home className="w-8" />,
    name: "Kennel",
  },
  {
    id: 3,
    icon: <Home className="w-8" />,
    name: "TreeHouse",
  },
  {
    id: 4,
    icon: <Home className="w-8" />,
    name: "Hotel",
  },
  {
    id: 5,
    icon: <Home className="w-8" />,
    name: "Backyard",
  },
];

const StepOne = () => {
  const [selected, setSelected] = useState<number>();

  const handleSelected = (id: number) => {
    setSelected(id);
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-3">
        <span className="w-6 h-6 bg-black rounded-full grid place-items-center text-white font-semibold text-sm">
          1
        </span>
        <h4 className="text-2xl text-gray-600 font-semibold">
          Choose the type of place to rent
        </h4>
      </div>
      <div className="grid grid-cols-4 gap-10 justify-center m-10">
        {homes.map((home) => (
          <div
            key={home.id}
            onClick={() => handleSelected(home.id)}
            className={`relative h-24 w-24 flex flex-col items-center gap-2 ${
              selected === home.id
                ? "ring-2 ring-[var(--primary-color)]"
                : "ring-1 ring-gray-300 hover:shadow-lg hover:ring-gray-300 transition-all duration-300"
            }  p-4 rounded-md text-xl cursor-pointer `}
          >
            {home.icon}
            <span className="text-sm">{home.name}</span>

            <CheckCircleOutlined
              className={`w-5 text-[var(--primary-color)] absolute bottom-[0.2rem] ${
                selected === home.id ? "block" : "hidden"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepOne;
