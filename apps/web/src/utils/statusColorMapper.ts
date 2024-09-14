export const availabilityColorMapper = (status: string) => {
  let color = "#065f46";
  let borderColor = "#bef264";
  switch (status) {
    case "Not Available":
      color = "#991b1b";
      borderColor = "#fecaca";
      break;

    case "In Review":
      color = "#6b21a8";
      borderColor = "#e9d5ff";
      break;

    case "Booked":
      color = "#075985";
      borderColor = "#bae6fd";
      break;

    default:
      color;
      borderColor;
  }

  return { color, borderColor };
};
