const volumesTbl = ({store_res}) => {
  let volumes_data;
  if (store_res.volumes != null) {
    let volumesArr = [];
    Object.entries(store_res.volumes).map(
      (item) =>
        (volumesArr = [
          ...volumesArr,
          [
            item[0],
            parseFloat(item[1]['left']['current']),
            parseFloat(item[1]['left']['pending']),
            parseFloat(item[1]['right']['current']),
            parseFloat(item[1]['right']['pending']),
          ],
        ]),
    );
    volumes_data = volumesArr;
  }
  return (
    <>
      <div className="flex mx-5 px-5 text-grey1-1000">
        <div className="flex flex-col">
          <div className="w-full">
          <div className="mb-3 text-center">Volumes</div>
            <div className="border border-grey1-600">
              <table className="bg-grey1-1400 table-auto overflow-auto">
                <thead>
                  <tr className="border-b border-grey1-600">
                    <th class="p-5 text-gray-500 border-r border-grey1-600">
                      #
                    </th>
                    <th
                      className="p-5 text-gray-500 border-r border-grey1-600"              
                      scope="col">
                      Center Name
                    </th>
                    <th
                      className="p-5 text-gray-500 border-r border-grey1-600"                      
                      scope="col">
                      Left Current
                    </th>
                    <th
                      className="p-5 text-gray-500 border-r border-grey1-600"                      
                      scope="col">
                      Left Pending
                    </th>
                    <th
                      className="p-5 text-gray-500 border-r border-grey1-600"                      
                      scope="col">
                      Right Current
                    </th>
                    <th
                      className="p-5 text-gray-500 border-r border-grey1-600"                      
                      scope="col">
                      Right Pending
                    </th>
                  </tr>
                </thead>
                <tbody className="text-grey1-300">
                  {volumes_data != null
                    ? Object.values(volumes_data).map((item, key) => (
                        <tr
                          key={item[0]}
                          className="whitespace-nowrap border-b border-grey1-1200"
                          scope="row">
                          <td
                            scope="col"
                            className="px-6 py-4 text-gray-500 border-r border-grey1-1200">
                            <div
                              className="text-gray-900 text-center"
                              key={key}>
                              {item[0]}
                            </div>
                          </td>
                          <td scope="col" className="px-6 py-4 text-gray-500 border-r border-grey1-1200">
                            <div
                              className="p-5 text-gray-900 text-center"
                              key={key}>
                              Business Centre&nbsp;{item[0]}
                            </div>
                          </td>
                          <td scope="col" className="px-6 py-4 text-gray-500 border-r border-grey1-1200">
                            <div
                              className="p-5 text-gray-900 text-center"
                              key={key}>
                              {item[1] == null || isNaN(item[1]) ? 0 : item[1]}
                            </div>
                          </td>
                          <td scope="col" className="px-6 py-4 text-gray-500 border-r border-grey1-1200">
                            <div
                              className="p-5 text-gray-900 text-center"
                              key={key}>
                              {item[2] == null || isNaN(item[2]) ? 0 : item[2]}
                            </div>
                          </td>
                          <td scope="col" className="px-6 py-4 text-gray-500 border-r border-grey1-1200">
                            <div
                              className="p-5 text-gray-900 text-center"
                              key={key}>
                              {item[3] == null || isNaN(item[3]) ? 0 : item[3]}
                            </div>
                          </td>
                          <td scope="col" className="px-6 py-4 text-gray-500 border-r border-grey1-1200">
                            <div
                              className="p-5 text-gray-900 text-center"
                              key={key}>
                              {item[4] == null || isNaN(item[4]) ? 0 : item[4]}
                            </div>
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default volumesTbl;
