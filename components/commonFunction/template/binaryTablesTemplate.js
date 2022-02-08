const binaryTablesTemplate = ({layoutFields, store_res, table_name}) => {
  let name_arr = [];
  let user_name_arr = [];

  let name_subStr = 'Name: [';
  let user_name_subStr = ' Username:[';
  let end_subStr = ']';

  // loop table value for each row
  store_res.forEach((element) => {
    const name = element.substring(
      name_subStr.length,
      element.indexOf(end_subStr),
    );
    const user_name = element.substring(
      element.indexOf(user_name_subStr) + user_name_subStr.length,
      element.length - 1,
    );
    name_arr = [...name_arr, name];
    user_name_arr = [...user_name_arr, user_name];
  });

  return (
    <div className="flex justify-center">
      <div className="table-auto mx-5 p-5">
        <div className="mb-3 text-grey1-1000">
          <span> 
            {layoutFields.map((item)=>{
              return item[table_name];
            })}
          </span>
        </div>
        <div>
          <table className="table-auto bg-grey1-1400 text-grey1-600">
            <thead>
              <tr className="border text-gray-500">
                <th className="border-r border-grey1-600 p-6">#</th>
                <th scope="col" className="border-r border-grey1-600 p-3">Name</th>
                <th scope="col" className="border-grey1-600 p-3">Username</th>
              </tr>
            </thead>
            <tbody>
              {store_res != null && store_res.length != 0
                ? store_res.map((item) => (
                    <tr scope="row" key={store_res.indexOf(item)} className="border">
                      <td className="p-5 border-r border-grey1-1200">{store_res.indexOf(item) + 1}</td>
                      <td className="p-5 border-r border-grey1-1200">{name_arr[store_res.indexOf(item)]}</td>
                      <td className="p-5">{user_name_arr[store_res.indexOf(item)]}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default binaryTablesTemplate;
