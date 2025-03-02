import React from "react";
import Link from "next/link";
import Script from "next/script";

export default function hue() {
  return (
    <>
    <link rel="stylesheet" href="./HUE/style.css" />
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
              style={{ backgroundImage: "url(HUE/img/HUE2.png)" }}
            >
              <div className="content">
                <div className="title">HUẾ</div>
                <div className="name">cửa ngọ môn</div>
                <div className="des">
                  Ngày 30/8/1945, hàng vạn người dân tụ tập trước cửa Ngọ Môn
                  (Huế) xem vua Bảo Đại đọc chiếu Thoái vị để trở thành công dân
                  Vĩnh Thụy. Sau đó, cựu hoàng trao ấn, kiếm cho đại diện Việt
                  Minh là ông Trần Huy Liệu.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(HUE/img/HUE2.png)" }}
            >
              <div className="content">
                <div className="title">HUẾ</div>
                <div className="name">cửa ngọ môn</div>
                <div className="des">
                  Ngày 30/8/1945, hàng vạn người dân tụ tập trước cửa Ngọ Môn
                  (Huế) xem vua Bảo Đại đọc chiếu Thoái vị để trở thành công dân
                  Vĩnh Thụy. Sau đó, cựu hoàng trao ấn, kiếm cho đại diện Việt
                  Minh là ông Trần Huy Liệu.
                </div>
              </div>
            </div>
            {/*next prev button*/}
            {/* <div class="arrows">
    <button class="prev"><</button>
    <button class="next">></button>
</div> */}
            {/* time running */}
          </div>
        </div>
      </div>
      <Script src="./HUE/app.js"></Script>
    </>
  );
}
