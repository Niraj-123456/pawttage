const Loading = () => {
  return (
    <div className="px-12 py-12 grid grid-cols-6 gap-x-6 gap-y-3">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, index) => (
        <div key={index}>
          {/* <Skeleton
            variant="rectangular"
            width={255}
            height={180}
            sx={{ borderRadius: "5px 5px 0 0" }}
          />
          <div className="mt-2">
            <Skeleton />
            <Skeleton width={"60%"} />
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Loading;
