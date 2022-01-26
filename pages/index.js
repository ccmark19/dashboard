import {useState} from 'react';
import Map from '../components/mainScreen/map/map';
import Profile from '../components/mainScreen/profile/profile';
import Sidebar from '../components/sidebar/sidebar';
import About from '../components/mainScreen/about/about';

export default function Home() {
  const [selectedScreen, setSelectedScreen] = useState('Profile');
  const allScreens = [{Profile: Profile}, {Map: Map}, {About: About}];
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="flex">
      <aside
        className={`h-screen showSidebar transition ease-in-out delay-150 ${
          showSidebar ? 'w-[14rem]' : null
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
      <main className="w-full h-screen showSidebar transition ease-in-out delay-150 bg-grey1-1400">
        {allScreens.map((item, index) => {
          let Data = item[selectedScreen];
          if (Data) {
            return (
              <div key={index}>
                <Data />
              </div>
            );
          }
        })}
      </main>
    </div>
  );
}
