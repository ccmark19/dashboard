import { useRef, useEffect, useState, useCallback } from "react";
// import hexDataset from "../../src/datasets/ne_110m_admin_0_countries.geojson";

const Map = () => {
  let Globe = () => null;
  if (typeof window !== "undefined") Globe = require("react-globe.gl").default;

  // const [countries, setCountries] = useState({ features: [] });
  const globeEl = useRef();
  const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: "#d74aab",
  }));

  useEffect(() => {
    // Auto-rotate
    globeEl.current.controls().autoRotate = true;
    globeEl.current.controls().autoRotateSpeed = 0.1;
  }, []);

  return (
    <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      arcsData={arcsData}
      arcColor={"color"}
      arcDashGap={2}
      arcDashAnimateTime={3000}
      arcsTransitionDuration={3000}
      arcStroke={0.5}
    />
  );
};

export default Map;
