import {useState} from 'react';
import Map from '../components/mainScreen/map/map';
import Profile from '../components/mainScreen/profile/profile';
import Sidebar from '../components/sidebar/sidebar';
import About from '../components/mainScreen/about/about';
import Responsive_sidebar from '../components/sidebar/responsive_sidebar';

export default function Home() {
  const [selectedScreen, setSelectedScreen] = useState('Profile');
  const allScreens = [{Profile: Profile}, {Map: Map}, {About: About}];
  return (
    <div className="flex">
      <aside className="h-screen">
        <Sidebar
          allScreens={allScreens}
          setSelectedScreen={(txt) => {
            setSelectedScreen(txt);
          }}
        />
      </aside>
      <main className="w-full">
        {allScreens.map((item) => {
          let Data = item[selectedScreen];
          if (Data) {
            return <Data />;
          }
        })}
      </main>
    </div>
  );
}
