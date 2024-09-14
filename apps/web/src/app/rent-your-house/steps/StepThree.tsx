import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React from "react";

const StepThree = () => {
  return (
    <div className="grid place-items-center w-full">
      <div className="flex items-center gap-3">
        <span className="w-6 h-6 bg-black rounded-full grid place-items-center text-white font-semibold text-sm">
          3
        </span>
        <h4 className="text-2xl text-gray-600 font-semibold">Enter Price</h4>
      </div>
      <div className="w-full grid place-items-center m-16">
        <FormControl sx={{ m: 1 }}>
          <InputLabel htmlFor="price">Price</InputLabel>
          <OutlinedInput
            id="price"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Price"
          />
        </FormControl>
      </div>
    </div>
  );
};

export default StepThree;
