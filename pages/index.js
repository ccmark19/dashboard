import {useState} from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Map from '../components/mainScreen/map/map';
import Profile from '../components/mainScreen/profile/profile';
import Activity from '../components/mainScreen/activity/activity';
import Financial from '../components/mainScreen/financial/financial';
import Downline from '../components/mainScreen/downline/downline';
import Binary from '../components/mainScreen/binary/binary';
import Login from '../components/mainScreen/activity/login';
import Order from '../components/mainScreen/activity/order';
import Launch from '../components/mainScreen/activity/launch';
import {data} from 'autoprefixer';

export default function Home() {
  const [selectedScreen, setSelectedScreen] = useState('Profile');
  const allScreens = [
    {Profile: Profile},
    {Activity: Activity},
    {
      Activities: [{Login: Login}, {Order: Order}, {Launch: Launch}],
    },
    {Financial: Financial},
    {Downline: Downline},
    {Binary: Binary},
    {Map: Map},
  ];

  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="flex">
      <aside
        className={`h-screen showSidebar transition ease-in-out delay-150 ${
          showSidebar ? 'w-[20rem]' : null
        }`}>
        <Sidebar
          allScreens={allScreens}
          setSelectedScreen={(txt) => {
            setSelectedScreen(txt);
          }}
          showSidebar={showSidebar}
          setShowSidebar={(txt) => {
            setShowSidebar(txt);
          }}
        />
      </aside>
      <main className="w-full h-screen showSidebar transition ease-in-out delay-150 bg-[#101010]">
        {allScreens.map((item, index) => {
          let Data = item[selectedScreen];
          if (Data) {
            return (
              <div key={index} className="h-full">
                <Data />
              </div>
            );
          }
        })}
      </main>
    </div>
  );
}
