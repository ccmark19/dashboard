const binaryTables = ({store_res}) => {
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
