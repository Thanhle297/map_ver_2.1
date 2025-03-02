"use client"
import { useEffect,useRef } from "react";
import { initializeMap } from "@/app/config/map";

import Script from "next/script";
import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";


export default function MapComponents() {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      initializeMap(mapContainerRef.current.id);
    }
  }, []);
  return (
    <>
      {/* <link
        href="https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.css"
        rel="stylesheet"
      /> */}
      {/* link icon fone-awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <link rel="stylesheet" href="./CSS/style.css" />

      <div>
        <div id="container">
          <div id="map" />
          <div className="time_line_container">
            <div className="timeline bg-light rounded p-3">
              <div className="timeline-item" id="14-8">
                <div className="circle" />
                <div className="date">14 - 8</div>
              </div>
              <div className="timeline-item" id="15-8">
                <div className="circle" />
                <div className="date">15 - 8</div>
              </div>
              <div className="timeline-item" id="16-8">
                <div className="circle" />
                <div className="date">16 - 8</div>
              </div>
              <div className="timeline-item" id="17-8">
                <div className="circle" />
                <div className="date">17 - 8</div>
              </div>
              <div className="timeline-item" id="18-8">
                <div className="circle" />
                <div className="date">18 - 8</div>
              </div>
              <div className="timeline-item" id="19-8">
                <div className="circle" />
                <div className="date">19 - 8</div>
              </div>
              <div className="timeline-item" id="20-8">
                <div className="circle" />
                <div className="date">20 - 8</div>
              </div>
              <div className="timeline-item" id="21-8">
                <div className="circle" />
                <div className="date">21 - 8</div>
              </div>
              <div className="timeline-item" id="22-8">
                <div className="circle" />
                <div className="date">22 - 8</div>
              </div>
              <div className="timeline-item" id="23-8">
                <div className="circle" />
                <div className="date">23 - 8</div>
              </div>
              <div className="timeline-item" id="24-8">
                <div className="circle" />
                <div className="date">24 - 8</div>
              </div>
              <div className="timeline-item" id="25-8">
                <div className="circle" />
                <div className="date">25 - 8</div>
              </div>
              <div className="timeline-item" id="26-8">
                <div className="circle" />
                <div className="date">26 - 8</div>
              </div>
              <div className="timeline-item" id="27-8">
                <div className="circle" />
                <div className="date">27 - 8</div>
              </div>
              <div className="timeline-item" id="28-8">
                <div className="circle" />
                <div className="date">28 - 8</div>
              </div>
            </div>
          </div>
        </div>
        <button id="resetNorthBtn"><i class="fa-solid fa-house"></i></button>
        <div className="glb-search">
          <div className="search">
            <input type="text" id="btn-search" placeholder="Tìm kiếm..." />
            <i id="ico-search" className="fa-solid fa-magnifying-glass" />
          </div>
        </div>
      </div>

      <Script src="https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.js"></Script>
      {/* <Script src="./JS/map.js"></Script> */}
      <Script src="./JS/popup.js"></Script>
      <Script src="./JS/timeline.js"></Script>
    </>
  );
}
