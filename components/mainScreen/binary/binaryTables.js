const binaryTables = ({store_res}) => {
  let name_arr = [];
  let user_name_arr = [];
  let name_arr_sb = [];
  let user_name_arr_sb = [];
  let name_arr_launch = [];
  let user_name_arr_launch = [];

  let name_subStr = 'Name: [';
  let user_name_subStr = ' Username:[';
  let end_subStr = ']';
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
    <div>
      <div className="table-auto">
        <div className="text-secondary">
          <span>Top Product Purchases Last 30 Days</span>
          {console.log('store_res->', store_res)}
        </div>
        <div>
          <table className="table-auto bg-orange">
            <thead>
              <tr>
                <th>#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
              </tr>
            </thead>
            <tbody>
              {store_res != null && store_res.length != 0
                ? store_res.map((item) => (
                    <tr key={store_res.indexOf(item)}>
                      <td scope="row">{store_res.indexOf(item) + 1}</td>
                      <td>{name_arr[store_res.indexOf(item)]}</td>
                      <td>{user_name_arr[store_res.indexOf(item)]}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default binaryTables;
