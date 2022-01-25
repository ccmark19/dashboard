import {useState} from 'react';
const sidebar = ({allScreens, setSelectedScreen}) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const sideBarButtonClick = (data) => {
    setSelectedScreen(data);
  };
  const icons = {
    Profile:
      'M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2',
    Map: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    About:
      'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  };

  return (
    <div>
      {showSidebar ? (
        <button
          className="bg-green1-p000 text-green2-p500 rounded-lg flex text-4xl items-center cursor-pointer fixed left-10 top-6 z-50"
          onClick={() => setShowSidebar(!showSidebar)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      ) : (
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          xmlns="http://www.w3.org/2000/svg"
          className="bg-green1-p000 text-green2-p500 rounded-lg h-16 w-16 fixed z-30 flex items-center cursor-pointer left-10 top-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
      <ul
        className={`top-0 left-0 p-10 text-white fixed h-full z-40  ease-in-out duration-300 bg-blue1-n625  ${
          showSidebar ? 'translate-x-0 ' : '-translate-x-full'
        }`}>
        {allScreens.map((item, index) => {
          let temp = Object.keys(item)[0];
          return (
            <li
              key={index}
              type="button"
              className="hover:bg-blue1-p125 rounded-md p-3 mt-20 text-4xl font-semibold text-white bg-yellow-600 transition ease-in-out hover:-translate-y-1  hover:bg-indigo-500 duration-300"
              onClick={() => sideBarButtonClick(temp)}>
              <a className="inline-flex items-center">
                <span className="mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={icons[temp]}
                    />
                  </svg>
                </span>
                {temp}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default sidebar;
