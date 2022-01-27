import {useState} from 'react';
import Map from '../components/mainScreen/map/map';
import Profile from '../components/mainScreen/profile/profile';
import Sidebar from '../components/sidebar/sidebar';
import About from '../components/mainScreen/about/about';
import Financial from '../components/mainScreen/financials/financials';

export default function Home() {
  const [selectedScreen, setSelectedScreen] = useState('Profile');
  const allScreens = [
    {Profile: Profile},
    {Map: Map},
    {About: About},
    {Financial: Financial},
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
