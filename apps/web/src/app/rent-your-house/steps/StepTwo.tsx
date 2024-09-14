import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const locations = [
  { label: "Alabama", id: "AL" },
  { label: "Alaska", id: "AK" },
  { label: "Arizona", id: "AZ" },
  { label: "Arkansas", id: "AR" },
  { label: "California", id: "CA" },
  { label: "Colorado", id: "CO" },
  { label: "Connecticut", id: "CT" },
  { label: "Delaware", id: "DE" },
  { label: "Florida", id: "FL" },
  { label: "Georgia", id: "GA" },
  { label: "Hawaii", id: "HI" },
  { label: "Idaho", id: "ID" },
  { label: "Illinois", id: "IL" },
  { label: "Indiana", id: "IN" },
  { label: "Iowa", id: "IA" },
  { label: "Kansas", id: "KS" },
  { label: "Kentucky", id: "KY" },
  { label: "Louisiana", id: "LA" },
  { label: "Maine", id: "ME" },
  { label: "Maryland", id: "MD" },
  { label: "Massachusetts", id: "MA" },
  { label: "Michigan", id: "MI" },
  { label: "Minnesota", id: "MN" },
  { label: "Mississippi", id: "MS" },
  { label: "Missouri", id: "MO" },
  { label: "Montana", id: "MT" },
  { label: "Nebraska", id: "NE" },
  { label: "Nevada", id: "NV" },
  { label: "New Hampshire", id: "NH" },
  { label: "New Jersey", id: "NJ" },
  { label: "New Mexico", id: "NM" },
  { label: "New York", id: "NY" },
  { label: "North Carolina", id: "NC" },
  { label: "North Dakota", id: "ND" },
  { label: "Ohio", id: "OH" },
  { label: "Oklahoma", id: "OK" },
  { label: "Oregon", id: "OR" },
  { label: "Pennsylvania", id: "PA" },
  { label: "Rhode Island", id: "RI" },
  { label: "South Carolina", id: "SC" },
  { label: "South Dakota", id: "SD" },
  { label: "Tennessee", id: "TN" },
  { label: "Texas", id: "TX" },
  { label: "Utah", id: "UT" },
  { label: "Vermont", id: "VT" },
  { label: "Virginia", id: "VA" },
  { label: "Washington", id: "WA" },
  { label: "West Virginia", id: "WV" },
  { label: "Wisconsin", id: "WI" },
  { label: "Wyoming", id: "WY" },
];

const StepTwo = () => {
  return (
    <div className="grid place-items-center w-full">
      <div className="flex items-center gap-3">
        <span className="w-6 h-6 bg-black rounded-full grid place-items-center text-white font-semibold text-sm">
          2
        </span>
        <h4 className="text-2xl text-gray-600 font-semibold">
          Choose location
        </h4>
      </div>
      <div className="w-full grid place-items-center m-16">
        <Autocomplete
          id="location"
          options={locations}
          renderInput={(params) => <TextField {...params} label="Location" />}
          className="w-96"
        />
      </div>
    </div>
  );
};

export default StepTwo;
