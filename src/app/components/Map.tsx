"use strict";
import { FC, useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Map: FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [amapLoaded, setAmapLoaded] = useState<any>();
  const [mapLoading, setMapLoading] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("@amap/amap-jsapi-loader").then((AMapLoader) => {
        AMapLoader.load({
          key: "788e08def03f95c670944fe2c78fa76f",
          version: "2.0",
        }).then((AMap) => {
          setAmapLoaded(AMap);
        });
      });
    }
  }, []);
  const onMarkerClick = () => {
    console.log("marker clicked");
    setMapLoading(!mapLoading);
  };
  useEffect(() => {
    if (amapLoaded) {
      const map = new amapLoaded.Map("map-container", {
        center: [113.7289, 22.987976],
        zoom: 18,
      });
      const marker = new amapLoaded.Marker({
        map: map,
        position: [113.7289, 22.987976], //位置
      });
      marker.on("click", onMarkerClick);
      setMapLoading(true);
    }
  }, [amapLoaded]);
  console.log(mapLoading);
  useEffect(() => {
    if (
      mapLoading &&
      document.getElementById("map-marker") &&
      typeof window !== "undefined"
    ) {
      console.log(document.getElementById("map-marker"));
      ReactDOM.createPortal(
        <div id="map-marker">2</div>,
        document.getElementById("map-marker") as Element
      );
    }
  }, [mapLoading]);

  return (
    <>
      <div id="map-container" className="map-container h-120" />
    </>
  );
};

export default Map;
