import {useState, useEffect, useRef} from 'react';
import {Line} from 'react-chartjs-2';
import httpCalls from '../../commonFunction/httpCalls';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js';
import {Register} from '../../../src/store/Register';

const order = () => {
  Chart.register(CategoryScale);
  // api call parameter
  const APICall_name = 'orders';
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
  const [totalOrders, setTotalOrders] = useState(null);
  const yearlyRef = useRef();
  const monthStrArr = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  //api call
  useEffect(() => {
    const fetchData = async () => {
      try {
        const api_result = await httpCalls(APICall_name);
        Register.update((s) => {
          s.chart = api_result.data;
        });
        processData(api_result);
        setData(api_result);
      } catch (error) {
        console.log(error);
      }
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

      if (selectYearData) {
        prepData = Object.values(selectYearData).filter((item) => item != null);
        if (prepData != null || prepData != undefined) {
          prepData = prepData.map((item) => [item.month, item.count]);
          monthArr = prepData.map((item) => {
            return monthStrArr[item[0] - 1];
          });
          countArr = prepData.map((item) => item[1]);
          drawChart(monthArr, countArr);

          setTotalOrders(countArr.reduce((a, b) => a + b));
        }
      }
    }
  };
  const diffYearData = (year) => {
    if (data != null && selectedYear != null) {
      setYearArr(Object.keys(data.data.info).sort().reverse());
      setLastActivity(data.data.last_record);
      let prepData;
      prepData = Object.values(data.data.info[year]).filter(
        (item) => item != null,
      );

      if (prepData != null || prepData != undefined) {
        prepData = prepData.map((item) => [item.month, item.count]);
        monthArr = prepData.map((item) => {
          return monthStrArr[item[0] - 1];
        });
        countArr = prepData.map((item) => item[1]);
        drawChart(monthArr, countArr);

        setTotalOrders(countArr.reduce((a, b) => a + b));
      }
    }
    setSelectedYear(year);
  };

  const drawChart = (monthArr, countArr) => {
    setState({
      labels: monthArr,
      datasets: [
        {
          label: 'Orders',
          data: countArr,
          fill: true,
          backgroundColor: '#edd1c6',
          borderColor: '#bf6650',
        },
      ],
    });
  };

  return (
    <div>
      <h5 style={{fontWeight: 'bold'}}>My lastest order activity</h5>
      <p>
        <strong>My last order: </strong>
        {lastActivity != null ? lastActivity : 'No data'}
      </p>
      <div className="dropdown" style={{height: '10%'}}>
        <div className="dropdown dropdown-right">
          <div
            className="m-1 btn bg-green1-500"
            tabindex="0"
            name="yearlyDropdown"
            id="yearlyDropdown"
            ref={yearlyRef}
            data-bs-toggle="dropdown"
            aria-expanded="false">
            {selectedYear}
          </div>
          <ul
            tabindex="0"
            className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
            {yearArr
              ? yearArr.map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        className={
                          item == selectedYear
                            ? 'dropdown-item active'
                            : 'dropdown-item'
                        }
                        onClick={() => {
                          diffYearData(item);
                        }}>
                        {item}
                      </a>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </div>
      <p>Total orders: {totalOrders != null ? totalOrders : 'No data'} </p>
      <Line
        data={
          state != null
            ? state
            : {
                labels: monthArr,
                datasets: [
                  {
                    label: 'Orders',
                    data: null,
                    fill: true,
                    backgroundColor: '#edd1c6',
                    borderColor: '#bf6650',
                    tension: 0.1,
                  },
                ],
              }
        }
        options={{
          plugins: {
            legend: {
              position: 'right',
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

export default order;
