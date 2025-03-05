import MapComponents from "../components/MapComponents";
import dynamic from "next/dynamic";

const MapComponentWithTimeline  = dynamic(() => import('../components/MapComponents'));


export default function Home() {
  return (
    <MapComponents/>
  );
}
