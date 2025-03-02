import React from "react";
import Link from "next/link";
import Script from "next/script";

export default function thanhhoa() {
  return (
    <>
    <link rel="stylesheet" href="./THANH_HOA/style.css" />
      <div>
        <header>
          <nav>
            <Link href="/" className="active">
              Home
            </Link>
            <Link href="#">About</Link>
            <Link href="#">Portfolio</Link>
            <Link href="#">Services</Link>
            <Link href="#">Contact</Link>
          </nav>
        </header>
        <div className="carousel">
          <div className="list">
            <div
              className="item"
              style={{ backgroundImage: "url(THANH_HOA/img/TH1.jpg)" }}
            >
              <div className="content">
                <div className="title">Thanh Hóa</div>
                <div className="name">chiến khu du kích ngọc trạo</div>
                <div className="des">
                  Chiến khu du kích Ngọc Trạo - một trong những chiến khu du
                  kích đầu tiên của cả nước được thành lập, là lực lượng vũ
                  trang đầu tiên, tạo tiền đề đấu tranh vũ trang giành chính
                  quyền trong Cách mạng Tháng Tám năm 1945 ở Thanh Hóa.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(THANH_HOA/img/TH1.jpg)" }}
            >
              <div className="content">
                <div className="title">Thanh Hóa</div>
                <div className="name">chiến khu du kích ngọc trạo</div>
                <div className="des">
                  Chiến khu du kích Ngọc Trạo - một trong những chiến khu du
                  kích đầu tiên của cả nước được thành lập, là lực lượng vũ
                  trang đầu tiên, tạo tiền đề đấu tranh vũ trang giành chính
                  quyền trong Cách mạng Tháng Tám năm 1945 ở Thanh Hóa.
                </div>
              </div>
            </div>
            {/*next prev button*/}
            {/* <div class="arrows">
    <button class="prev"><</button>
    <button class="next">></button>
</div> */}
            {/* time running */}
            {/* <div class="timeRunning"></div> */}
          </div>
        </div>
      </div>
      
      <Script src="./THANH_HOA/app.js"></Script>
    </>
  );
}
