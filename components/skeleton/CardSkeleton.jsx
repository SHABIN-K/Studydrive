const CardSkeleton = () => {
  return (
    <div className="grid items-center gap-2 rounded-2xl bg-[#1c1c24] p-4 md:grid-cols-[1fr_auto]">
      <div className="grid grid-cols-[auto_1fr] grid-rows-[3,auto] items-center gap-x-4 gap-y-2">
        <div className="py-1.5">
          <div className="skeleton aspect-square h-full min-w-[50px] overflow-hidden rounded-full object-contain row-span-3 md:h-19" />
        </div>
        <div>
          <h2 className="line-clamp-2 font-medium capitalize">
            <p className="skeleton h-4 w-[100%] rounded-full" />
          </h2>
          <div className="col-span-2 flex flex-wrap gap-4 py-2 md:col-span-1">
            <p className="skeleton h-4 w-[35%] rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
