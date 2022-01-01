const Sidebar = ({ sideItems, setSelectScreen }) => {
  const icons = {
    Profile:
      "M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2",
    Map: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    About:
      "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  };

  return (
    <div className="bg-base-300 h-screen p-1 bg-gradient-to-tl from-indigo-500 via-purple-500 to-pink-500">
      <ul className="menu p-4 h-full shadow-lg bg-base-100 rounded-box">
        <li className="menu-title">
          <span>Menu</span>
        </li>
        {Object.keys(sideItems).map((item, index) => (
          <li
            key={index}
            className="hover-bordered"
            onClick={() => {
              setSelectScreen(item);
            }}
          >
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={icons[item]}
                />
              </svg>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
