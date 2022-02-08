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
    <>
      <div className="flex mx-5 px-5 text-grey1-1000">
        <div className="flex flex-col">
          <div className="w-full">
          <div className="mb-3 text-center">Downline</div>
            <div className="border border-grey1-600">
              <table className="bg-grey1-1400">
                <thead>
                  <tr className="border-b border-grey1-600">
                    <th
                      className="p-5 text-gray1-500 border-r border-grey1-600"
                      colSpan="2"
                      scope="col">
                      Left
                    </th>
                    <th
                      className="p-5 text-gray-500"
                      colSpan="2"
                      scope="col">
                      Right
                    </th>
                  </tr>
                  <tr className="border-b border-grey1-1200">
                    <th className="p-5 text-gray-500 border-r border-grey1-1200">
                      Active
                    </th>
                    <th className="p-5 text-gray-500 border-r border-grey1-1200">
                      Inactive
                    </th>
                    <th className="p-5 text-gray-500 border-r border-grey1-1200">
                      Active
                    </th>
                    <th className="p-5 text-gray-500">
                      Inactive
                    </th>
                  </tr>
                </thead>
                <tbody className="text-grey1-300">
                  <tr className="whitespace-nowrap">
                    {downline_data != null
                      ? Object.values(downline_data).map((item, key) => (
                          <td className="p-5 border-r border-grey1-1200">
                            <div
                              className="text-gray-900 text-center"
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
    </>
  );
};

export default downlineTbl;
