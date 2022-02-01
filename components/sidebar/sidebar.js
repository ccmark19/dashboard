const sidebar = ({
  allScreens,
  setSelectedScreen,
  showSidebar,
  setShowSidebar,
}) => {
  const sideBarButtonClick = (data) => {
    setSelectedScreen(data);
  };
  const icons = {
    Profile: (
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
          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
        />
      </svg>
    ),
    Map: (
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
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    Financial: (
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
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    Activity: (
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    Activities: (
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    Binary: (
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
          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
        />
      </svg>
    ),
    Downline: (
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
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    Login: (
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
          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
        />
      </svg>
    ),
    Launch: (
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
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    ),
    Order: (
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
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
  };

  return (
    <div className="h-full bg-grey1-1400" style={{width: 'inherit'}}>
      {showSidebar ? (
        <button
          className="transition ease-in-out hover:scale-110 duration-300 opacity-25 hover:opacity-100 bg-purple1-700 text-grey1-100 rounded-lg flex text-4xl items-center cursor-pointer fixed left-[1.5em] top-6 z-50"
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
          className="transition ease-in-out hover:scale-110 duration-300 opacity-25 hover:opacity-100 bg-purple1-700 text-grey1-100 rounded-lg h-16 w-16 fixed z-30 flex items-center cursor-pointer left-[3.35em] top-6"
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
      <div
        className={`top-0 left-0 p-10 text-white fixed h-full z-40 justify-between flex flex-col ${
          showSidebar ? 'translate-x-0 ' : '-translate-x-full'
        }`}
        style={{width: 'inherit'}}>
        <div className="mt-20 ">
          <hr className="text-grey1-1200 h-3 mb-5" />
          <ul>
            {allScreens.map((item, index) => {
              let tempKey = Object.keys(item)[0];
              let tempValue = Object.values(item)[0];
              return (
                <li
                  key={index}
                  type="button"
                  className={`${
                    tempValue
                      ? 'p-3 rounded-md text-xl font-semibold text-white transition'
                      : 'dropdown dropdown-end p-0 '
                  }`}
                  // onClick={() => sideBarButtonClick(tempKey)}
                >
                  {typeof tempValue == 'object' ? (
                    <>
                      <ul className="sub-menu">
                        <li>
                          <p className="p-0 flex unclickbale">
                            <span className="mr-3">{icons[tempKey]}</span>
                            {tempKey}
                          </p>
                          <ul className="menu mt-2">
                            {Object.values(tempValue).map((subItem, index) => {
                              let subItemKey = Object.keys(subItem)[0];
                              return (
                                <li
                                  key={index}
                                  className="pl-3"
                                  id={subItemKey}>
                                  <a
                                    className="inline-flex items-center"
                                    key={index}
                                    id={subItemKey}
                                    onClick={(event) => {
                                      sideBarButtonClick(event.target.id);
                                    }}>
                                    <span className="mr-3">
                                      {icons[subItemKey]}
                                    </span>
                                    {subItemKey}
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <a
                      className="inline-flex items-center"
                      key={index}
                      onClick={(event) => {
                        sideBarButtonClick(event.target.id);
                      }}
                      id={tempKey}>
                      <span className="mr-3">{icons[tempKey]}</span>
                      {tempKey}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="bottom-0 whitespace-normal truncate max-w-xs flex flex-col items-center">
          <hr className="w-full text-grey1-1200 h-3 mb-5" />
          <div className="avatar">
            <div className="mb-3 w-24 h-24 mask mask-squircle ">
              <img src="http://daisyui.com/tailwind-css-component-profile-1@94w.png" />
            </div>
          </div>
          <span>Welcome! testpci</span>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
