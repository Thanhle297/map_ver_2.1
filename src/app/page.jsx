'use client'

import MapComponents from "../components/MapComponents";
import dynamic from "next/dynamic";
import { useEffect } from "react";
const MapComponentWithTimeline = dynamic(() =>
  import("../components/MapComponents")
);

export default function Home() {
  useEffect(() => {
    // Đảm bảo các lớp Bootstrap vẫn được giữ lại khi chuyển trang
    const bootstrapClasses = Array.from(document.body.classList)
      .filter(cls => cls.startsWith('bootstrap-') || cls.startsWith('bs-'))
      .join(' ');
    
    document.body.className = bootstrapClasses; // Giữ lại các lớp Bootstrap
  }, []);

  return <MapComponents />;
}
