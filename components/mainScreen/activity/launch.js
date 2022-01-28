import {useState, useEffect, useRef} from 'react';
import {Line} from 'react-chartjs-2';
import httpCalls from '../../commonFunction/httpCalls';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js';

const launch = () => {
  Chart.register(CategoryScale);
  // api call parameter
  const APICall_name = 'launch';
  // raw api response
  const [data, setData] = useState(null);
  // for year dropdown selection
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  // month array
  let monthArr = [];
  // count array for the select year all existed month
  let LACountArr = [];
  let LPCountArr = [];
  let RetailerCountArr = [];
  let VIPCountArr = [];
  // prepare chart state
  const [state, setState] = useState(null);
  const [yearArr, setYearArr] = useState(null);
  const [lastActivity, setLastActivity] = useState(null);
  const [totalLaunchHook, setTotalLaunchHook] = useState(null);
  let totalLaunch = [];
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
        const result = await httpCalls(APICall_name);
        processData(result);
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [0]);
  const processData = (data) => {
    if (data != null && selectedYear != null) {
      setYearArr(Object.keys(data.data.info).sort().reverse());

      setLastActivity(
        data.data.last_record.name +
          ' on ' +
          data.data.last_record.date_created +
          ', ' +
          data.data.last_record.member_type,
      );

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
        if (
          prepData != null ||
          prepData != undefined ||
          data.data.info[selectedYear]
        ) {
          for (const [key, value] of Object.entries(prepData)) {
            LACountArr = [...LACountArr, value['LA']];
            LPCountArr = [...LPCountArr, value['LP']];
            RetailerCountArr = [...RetailerCountArr, value['Retailer']];
            VIPCountArr = [...VIPCountArr, value['VIP']];
            monthArr = [...new Set(monthArr), monthStrArr[key - 1]];
            totalLaunch = [
              ...totalLaunch,
              value['LA'],
              value['LP'],
              value['Retailer'],
              value['VIP'],
            ];
          }
          drawChart(
            monthArr,
            RetailerCountArr,
            LPCountArr,
            LACountArr,
            VIPCountArr,
          );
          setTotalLaunchHook(totalLaunch.reduce((a, b) => a + b));
        }
      }
    }
  };
  const diffYearData = (year) => {
    if (data != null && selectedYear != null) {
      setYearArr(Object.keys(data.data.info).sort().reverse());
      let prepData;
      let selectYearData;
      if (data.data.info[selectedYear] == undefined) {
        selectYearData = data.data.info[Object.keys(data.data.info)[0]];
        setSelectedYear(Object.keys(data.data.info)[0]);
      } else {
        selectYearData = data.data.info[selectedYear];
      }

      prepData = Object.values(selectYearData).filter(
        // prepData = Object.values(data.data.info[year]).filter(
        (item) => item != null,
      );
      if (prepData != null || prepData != undefined) {
        for (const [key, value] of Object.entries(data.data.info[year])) {
          LACountArr = [...LACountArr, value['LA']];
          LPCountArr = [...LPCountArr, value['LP']];
          RetailerCountArr = [...RetailerCountArr, value['Retailer']];
          VIPCountArr = [...VIPCountArr, value['VIP']];
          monthArr = [...new Set(monthArr), monthStrArr[key - 1]];
          totalLaunch = [
            ...totalLaunch,
            value['LA'],
            value['LP'],
            value['Retailer'],
            value['VIP'],
          ];
        }
        drawChart(
          monthArr,
          RetailerCountArr,
          LPCountArr,
          LACountArr,
          VIPCountArr,
        );
        setTotalLaunchHook(totalLaunch.reduce((a, b) => a + b));
      }
    }
    setSelectedYear(year);
  };

  const drawChart = (
    monthArr,
    RetailerCountArr,
    LPCountArr,
    LACountArr,
    VIPCountArr,
  ) => {
    setState({
      labels: monthArr,
      datasets: [
        {
          label: `${RetailerCountArr.reduce((a, b) => a + b)} Retailer`,
          data: RetailerCountArr,
          fill: true,
          backgroundColor: '#e2e2e2',
          borderColor: '#bcbcbc',
          tension: 0.1,
        },
        {
          label: `${LPCountArr.reduce((a, b) => a + b)} LP`,
          data: LPCountArr,
          fill: true,
          backgroundColor: '#f0e6d1',
          borderColor: '#cd9943',
          tension: 0.1,
        },
        {
          label: `${LACountArr.reduce((a, b) => a + b)} LA`,
          data: LACountArr,
          fill: false,
          backgroundColor: '#b5b1b0',
          borderColor: '#292927',
          tension: 0.1,
        },
        {
          label: `${VIPCountArr.reduce((a, b) => a + b)} VIP`,
          data: VIPCountArr,
          fill: true,
          backgroundColor: '#cbd4e5',
          borderColor: '#465e92',
          tension: 0.1,
        },
      ],
    });
  };

  return (
    <div>
      <h5 style={{fontWeight: 'bold'}}>My lastest launch activity</h5>
      <p>
        <strong>My latest shop launches: </strong>
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
      {/* <div className="dropdown">
        <button
          className="btn px-0 dropdown-toggle"
          type="button"
          name="yearlyDropdown"
          id="yearlyDropdown"
          ref={yearlyRef}
          data-bs-toggle="dropdown"
          aria-expanded="false">
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
      </div> */}
      <p>
        Total actions: {totalLaunchHook != null ? totalLaunchHook : 'No data'}
      </p>
      <Line
        data={
          state != null
            ? state
            : {
                labels: monthArr,
                datasets: [
                  {
                    label: 'Retailer',
                    data: null,
                    fill: true,
                    backgroundColor: '#e2e2e2',
                    borderColor: '#bcbcbc',
                  },
                  {
                    label: 'LP',
                    data: null,
                    fill: true,
                    backgroundColor: '#f0e6d1',
                    borderColor: '#cd9943',
                  },
                  {
                    label: 'LA',
                    data: null,
                    fill: false,
                    backgroundColor: '#b5b1b0',
                    borderColor: '#292927',
                  },
                  {
                    label: 'VIP',
                    data: null,
                    fill: true,
                    backgroundColor: '#cbd4e5',
                    borderColor: '#465e92',
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

export default launch;
