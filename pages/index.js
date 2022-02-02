import {useState} from 'react';
import Sidebar from '../components/sidebar/sidebar';
import Map from '../components/mainScreen/map/map';
import Profile from '../components/mainScreen/profile/profile';
import Financial from '../components/mainScreen/financial/financial';
import Downline from '../components/mainScreen/downline/downline';
import Binary from '../components/mainScreen/binary/binary';
import Login from '../components/mainScreen/activity/login';
import Order from '../components/mainScreen/activity/order';
import Launch from '../components/mainScreen/activity/launch';
import Head from 'next/head';

export default function Home() {
  const [selectedScreen, setSelectedScreen] = useState('Downline');
  const allScreens = [
    {Profile: Profile},
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
      <Head>
        <title>PPC</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <aside
        className={`h-screen showSidebar transition ease-in-out delay-150 ${
          showSidebar && selectedScreen != 'Map' ? 'w-[20rem]' : null
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
          } else if (Data == undefined) {
            // if user click on sub menu items
            let obj = Object.entries(item)[0].flat();
            if (obj.length > 2) {
              return obj.map((subMenuItem, index) => {
                let SubData = subMenuItem[selectedScreen];
                if (SubData) {
                  return (
                    <div key={index} className="h-full">
                      <SubData />
                    </div>
                  );
                }
              });
            }
          }
        })}
      </main>
    </div>
  );
}
