import { useState } from "react";
import Map from "../components/map/Map";
import Profile from "../components/profile/Profile";
import Sidebar from "../components/sidebar/Sidebar";

export default function Home() {
  const [selectScreen, setSelectScreen] = useState("Profile");
  const sideItems = {
    Profile: Profile,
    Map: Map,
    Sidebar: Sidebar,
  };
  return (
    <div>
      <div>
        <p className="text-3xl font-bold underline bg-orange-700">
          Hello world!
        </p>
        <ul>
          {Object.entries(sideItems).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      {/* <div>{sideItems.selectScreen}</div> */}
    </div>
  );
}
