const downlineTbl = ({store_res}) => {
  let downline_data;
  if (store_res.downline != null) {
    let downlineArr = [];
    Object.entries(store_res.downline).map((item) => {
      downlineArr = downlineArr = [...downlineArr, item[1]['L'], item[1]['R']];
    });
    downline_data = downlineArr;
  }

  return (
    <div className="mx-5 p-5 rounded-lg grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 text-white gap-4">
      <div className="container flex justify-center mx-auto text-grey1-1000">
        <div className="flex flex-col">
          <div className="w-full">
            <div className="border border-grey1-600">
              <table className="bg-grey1-1400">
                <thead>
                  <tr className="border-b border-grey1-600">
                    <th
                      className="px-6 py-2 text-xs text-gray-500 border-r border-grey1-600"
                      colSpan="2"
                      scope="col">
                      Left
                    </th>
                    <th
                      className="px-6 py-2 text-xs text-gray-500"
                      colSpan="2"
                      scope="col">
                      Right
                    </th>
                  </tr>
                  <tr className="border-b border-grey1-600">
                    <th className="px-6 py-2 text-xs text-gray-500 border-r border-grey1-600">
                      Active
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500 border-r border-grey1-600">
                      Inactive
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500 border-r border-grey1-600">
                      Active
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500">
                      Inactive
                    </th>
                  </tr>
                </thead>
                <tbody className="text-grey1-300">
                  <tr className="whitespace-nowrap ">
                    {downline_data != null
                      ? Object.values(downline_data).map((item, key) => (
                          <td className="px-6 py-4 border-r border-grey1-600">
                            <div
                              className="text-sm text-gray-900 text-center"
                              key={key}>
                              {item}
                            </div>
                          </td>
                        ))
                      : null}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default downlineTbl;
