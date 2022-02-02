const smallChartContainer = ({graph}) => {
  return (
    <div className="mx-5 p-5 rounded-lg grid grid-cols-1 2xl:grid-cols-4  xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 text-white gap-4">
      <div
        className="
          bg-grey1-1400 
          text-grey1-1000 
            rounded-lg pt-10 p-4
            h-fit 
            ">
        {graph}
      </div>
    </div>
  );
};

export default smallChartContainer;
