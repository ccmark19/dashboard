import {useState} from 'react';
import Map from '../components/map/map';
import Profile from '../components/profile/profile';
import Sidebar from '../components/sidebar/Sidebar';
import About from '../components/about/about';

export default function Home() {
  const [selectedScreen, setSelectedScreen] = useState('Profile');
  const allScreens = [{Profile: Profile}, {Map: Map}, {About: About}];
  return (
    <div className="flex">
      <aside className="w-1/6">
        <Sidebar
          allScreens={allScreens}
          setSelectedScreen={(txt) => {
            setSelectedScreen(txt);
          }}
        />
      </aside>
      <main className="flex-auto">
        {allScreens.map((item) => {
          let Data = item[selectedScreen];
          if (Data) {
            return <Data />;
          }
        })}
        {/* {Object.keys(allScreens).map((Item) => {
          // main content area bug, should be able to return each itme based on select screen
          return Item == selectedScreen ? <Item /> : null;
        })} */}
        {/* <Map /> */}
      </main>
    </div>
  );
}
