import { useState } from "react";
import Map from "../components/map/Map";
import Profile from "../components/profile/Profile";
import Sidebar from "../components/sidebar/Sidebar";
import About from "../components/about/About";

export default function Home() {
  const [selectScreen, setSelectScreen] = useState("Map");
  const sideItems = {
    Profile: Profile,
    Map: Map,
    About: About,
  };
  return (
    <div className="flex">
      <aside className="w-1/6">
        <Sidebar
          sideItems={sideItems}
          setSelectScreen={(txt) => {
            setSelectScreen(txt);
          }}
        />
      </aside>
      <main className="flex-auto">
        {/* {Object.keys(sideItems).map((Item) => {
          // main content area bug, should be able to return each itme based on select screen
          return Item == selectScreen ? <Item /> : null;
        })} */}
        <Map />
      </main>
    </div>
  );
}
