import { useState, useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import { Register } from "../../../src/store/Register";
import httpCalls from "../../commonFunction/httpCalls";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
const login = () => {
  //   Chart.register(CategoryScale);
  const [loginRes, setLoginRes] = useState([]);
  const API_Route_Profile = "metrics";
  const layoutFields = Register.useState((s) => s.layoutFields.profile);
  const business_info_res = Register.useState((s) => s.business_info_res);
  // raw api response
  const [data, setData] = useState(null);
  // for year dropdown selection
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  // month array
  let monthArr = [];
  // count array for the select year all existed month
  let countArr = [];
  // prepare chart state
  const [state, setState] = useState(null);
  const [yearArr, setYearArr] = useState(null);
  const [lastActivity, setLastActivity] = useState(null);
  const [totalLogin, setTotalLogin] = useState(null);
  const yearlyRef = useRef();
  const monthStrArr = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  //api call
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const result = await APICall(APICall_name);
  //         if (result) {
  //           setLoginRes(result);
  //         }
  //         processData(result);
  //         setData(result);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchData();
  //   }, [0]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const api_result = await httpCalls(API_Route_Profile).then((res) => {
  //         setLoginRes(res);
  //         processData(res);
  //         setData(res);
  //         console.log(res);
  // Register.update((s) => {
  //   s.business_info_res = res.data;
  // });
  //       });
  //     };
  //     fetchData();
  //   }, [0]);

  useEffect(() => {
    const fetchData = async () => {
      const api_result = await httpCalls(API_Route_Profile);
      console.log(api_result);
      Register.update((s) => {
        s.business_info_res = api_result.data;
      });
    };
    fetchData();
  }, [0]);

  const processData = (data) => {
    if (data != null && selectedYear != null) {
      setYearArr(Object.keys(data.data.info).sort().reverse());
      setLastActivity(data.data.last_record);
      let prepData;
      let selectYearData;
      if (data.data.info[selectedYear] == undefined) {
        selectYearData = data.data.info[Object.keys(data.data.info)[0]];
        setSelectedYear(Object.keys(data.data.info)[0]);
      } else {
        selectYearData = data.data.info[selectedYear];
      }
      prepData = Object.values(selectYearData).filter(
        // prepData = Object.values(data.data.info[selectedYear]).filter(
        (item) => item != null
      );
      if (selectYearData) {
        if (prepData != null || prepData != undefined) {
          prepData = prepData.map((item) => [item.month, item.count]);
          monthArr = prepData.map((item) => {
            return monthStrArr[item[0] - 1];
          });
          countArr = prepData.map((item) => item[1]);
          drawChart(monthArr, countArr);

          setTotalLogin(countArr.reduce((a, b) => a + b));
        }
      }
    }
  };
  const diffYearData = (year) => {
    if (data != null && selectedYear != null) {
      setYearArr(Object.keys(data.data.info).sort().reverse());
      let prepData;
      prepData = Object.values(data.data.info[year]).filter(
        (item) => item != null
      );
      if (prepData != null || prepData != undefined) {
        prepData = prepData.map((item) => [item.month, item.count]);
        monthArr = prepData.map((item) => {
          return monthStrArr[item[0] - 1];
        });
        countArr = prepData.map((item) => item[1]);
        drawChart(monthArr, countArr);

        setTotalLogin(countArr.reduce((a, b) => a + b));
      }
    }
    setSelectedYear(year);
  };

  const drawChart = (monthArr, countArr) => {
    setState({
      labels: monthArr,
      datasets: [
        {
          label: "Login",
          data: countArr,
          fill: true,
          backgroundColor: "#cce3db",
          borderColor: "#329070",
        },
      ],
    });
  };
  return (
    <div>
      <h5 style={{ fontWeight: "bold" }}>My lastest login activity</h5>
      <p>
        <strong>My last login: </strong>
        {lastActivity != null ? lastActivity : "No data"}
      </p>
      <div className="dropdown" style={{ height: "10%" }}>
        <button
          className="btn px-0 dropdown-toggle"
          type="button"
          name="yearlyDropdown"
          id="yearlyDropdown"
          ref={yearlyRef}
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {selectedYear}
        </button>
        <ul className="dropdown-menu" aria-labelledby="yearlyDropdown">
          {yearArr
            ? yearArr.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className={
                        item == selectedYear
                          ? "dropdown-item active"
                          : "dropdown-item"
                      }
                      onClick={() => {
                        diffYearData(item);
                      }}
                    >
                      {item}
                    </a>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
      <p>Total views: {totalLogin != null ? totalLogin : "No data"} </p>
      <Line
        data={
          state != null
            ? state
            : {
                labels: monthArr,
                datasets: [
                  {
                    label: "Login",
                    data: null,
                    fill: true,
                    backgroundColor: "#cce3db",
                    borderColor: "#329070",
                  },
                ],
              }
        }
        options={{
          plugins: {
            legend: {
              position: "right",
              labels: {
                boxWidth: 10,
                boxHeight: 10,
              },
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
              min: 0,
              ticks: {
                callback: function (value) {
                  if (value % 1 === 0) {
                    return value;
                  }
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default login;
