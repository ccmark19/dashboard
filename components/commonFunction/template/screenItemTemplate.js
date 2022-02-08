const screenItemTemplate = ({layoutFields, store_res}) => {
  return (
    <>
      {store_res ? (
        <div className="pt-5">
          <div className="mx-5 p-5 rounded-lg grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 text-white gap-4">
          {/* <div className="mx-5 p-5 rounded-lg flex flex-wrap space-x-4"> */}
            {store_res != null
              ? Object.keys(store_res).map((api_res_item, index) => {
                  return layoutFields.map((layout_item) => {
                    if (
                      (typeof store_res[api_res_item] == 'string' ||
                        typeof store_res[api_res_item] == 'number') &&
                      layout_item[api_res_item] != undefined
                    ) {
                      return (
                        <div
                          keys={index}
                          className="                        
                        item-div 
                        text-lg                        
                        bg-grey1-1400 
                        rounded 
                        px-5 
                        py-8                    
                        overflow-hidden 
                        hover:overflow-clip 
                        whitespace-nowrap 
                        hover:whitespace-normal 
                        hover:break-all  
                        transition 
                        ease-in-out 
                        delay-50
                        hover:-translate-y-1 
                        hover:scale-110
                        duration-300 
                        hover:bg-grey1-600 
                        hover:text-grey1-1400">
                          <div className="item-title text-grey1-1000">
                            {layout_item[api_res_item]}
                          </div>
                          <div
                            className={`item-text font-extralight  text-4xl text-grey1-300`}>
                            {store_res[api_res_item]}
                          </div>
                        </div>
                      );
                    }
                  });
                })
              : null}
          </div>
        </div>
      ) : (
        null
      )}
    </>
  );
};
export default screenItemTemplate;
