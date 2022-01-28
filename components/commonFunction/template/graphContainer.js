const graphContainer = ({graph}) => {
  return (
    <div className="flex h-full items-center justify-center">
      <div
        className="
        bg-grey1-1400 
        text-grey1-1000 
          rounded-lg p-10
          h-fit 
          w-[90%]">
        {graph}
      </div>
    </div>
  );
};

export default graphContainer;
