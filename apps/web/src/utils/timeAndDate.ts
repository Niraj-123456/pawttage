export const timeStampConvertor = (timestamp: number) => {
  const timestampInMilli = timestamp * 1000;
  return new Date(timestampInMilli).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
