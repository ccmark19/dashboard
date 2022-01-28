import { useState, useEffect } from "react";
import httpCalls from "../../commonFunction/httpCalls";
import Loading from "../../commonFunction/loading";
import { Register } from "../../../src/store/Register";
const profile = () => {
  const API_Route_Profile = "metrics/business_info";
  const layoutFields = Register.useState((s) => s.layoutFields.profile);
  const business_info_res = Register.useState((s) => s.business_info_res);
  useEffect(() => {
    const fetchData = async () => {
      const api_result = await httpCalls(API_Route_Profile);
      Register.update((s) => {
        s.business_info_res = api_result.data;
      });
    };
    fetchData();
  }, [0]);

  return (
    <>
      {business_info_res ? (
        <div className="mt-28 mx-5 p-5 rounded-lg grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 text-white gap-4">
          {business_info_res != null
            ? Object.keys(business_info_res).map((api_res_item, index) => {
                return layoutFields.map((layout_item) => {
                  if (
                    (typeof business_info_res[api_res_item] == "string" ||
                      typeof business_info_res[api_res_item] == "number") &&
                    layout_item[api_res_item] != undefined
                  ) {
                    return (
                      <div
                        keys={index}
                        className="item-div 
                                    overflow-hidden                                                                         
                                    bg-grey1-1400 rounded px-5 py-8 
                                    transition ease-in-out delay-50                               
                                    duration-300 
                                    h-fit
                                    hover:break-all
                                    auto-rows-min                                                       
                                    hover:-translate-y-1 hover:scale-110 hover:bg-grey1-1300"
                      >
                        {/* hover:overflow-clip whitespace-nowrap
                        hover:whitespace-normal hover:break-all hover:text-grey1-100 
                        hover:-translate-y-1 hover:scale-110 hover:bg-grey1-1400 */}
                        <div>{layout_item[api_res_item]}</div>
                        <div className="item-text">
                          {business_info_res[api_res_item]}
                        </div>
                      </div>
                    );
                  }
                });
              })
            : null}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default profile;
