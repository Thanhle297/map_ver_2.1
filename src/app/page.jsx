'use client'
import MapComponents from "../components/MapComponents";
import dynamic from "next/dynamic";
import { useEffect } from "react";
const MapComponentWithTimeline = dynamic(() =>
  import("../components/MapComponents")
);

export default function Home() {
  useEffect(() => {
    document.body.className = ""; // Reset style của body khi vào trang chính
  }, []);

  return <MapComponents />;
}
