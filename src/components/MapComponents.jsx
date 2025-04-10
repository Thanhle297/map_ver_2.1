"use client";
import Script from "next/script";
import React, { useEffect } from "react";
import "../styles/style.scss";

export default function MapComponents() {
  // Ngăn chặn Ctrl+U, Ctrl+Shift+I, F12, chuột phải và phát hiện DevTools
  useEffect(() => {
    // Ngăn chặn các phím tắt
    const preventDevTools = (e) => {
      // Ngăn chặn Ctrl+U
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
      }
      
      // Ngăn chặn Ctrl+Shift+I
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
      }
      
      // Ngăn chặn F12
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
    };

    // Ngăn chặn menu chuột phải
    const preventRightClick = (e) => {
      e.preventDefault();
      return false;
    };

    // Phát hiện khi DevTools được mở
    const detectDevTools = () => {
      // Phát hiện DevTools bằng cách kiểm tra kích thước cửa sổ
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;
      
      // Phát hiện DevTools bằng cách sử dụng console.clear
      const checkDevToolsOpen = () => {
        const startTime = new Date();
        console.log();
        console.clear();
        const endTime = new Date();
        return endTime - startTime > 100;
      };

      if (widthThreshold || heightThreshold || checkDevToolsOpen()) {
        // Khi phát hiện DevTools được mở, tải lại trang
        window.location.reload();
      }
    };

    // Thêm event listener khi component được mount
    document.addEventListener('keydown', preventDevTools);
    document.addEventListener('contextmenu', preventRightClick);
    
    // Kiểm tra DevTools định kỳ
    const interval = setInterval(detectDevTools, 1000);

    // Cleanup khi component unmount
    return () => {
      document.removeEventListener('keydown', preventDevTools);
      document.removeEventListener('contextmenu', preventRightClick);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.css"
        rel="stylesheet"
      />
      {/* link icon fone-awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />

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
        <button id="resetNorthBtn">
          <i className="fa-solid fa-house"></i>
        </button>
        <div className="glb-search">
          <div className="search">
            <input type="text" id="btn-search" placeholder="Tìm kiếm..." />
            <i id="ico-search" className="fa-solid fa-magnifying-glass" />
          </div>
        </div>
        <button id="show-hide-btn" title="Ẩn hiện bảng thời gian">
          <i className="fa-solid fa-eye"></i>
        </button>
      </div>

      <Script src="https://api.mapbox.com/mapbox-gl-js/v3.10.0/mapbox-gl.js"></Script>
      <Script src="./JS/map.js"></Script>
      <Script src="./JS/popup.js"></Script>
      <Script src="./JS/timeline.js"></Script>
    </>
  );
}
