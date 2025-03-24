import React from "react";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function quangnam() {
  return (
    <>
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
              style={{ backgroundImage: "url(./IMG/QN.jpg)" }}
            >
              <div className="content">
                <div className="title">Quảng Nam</div>
                <div className="name">Tòa Đốc lý Đà Nẵng</div>
                <div className="des">
                  Đây là nơi đồng chí Lê Văn Hiến - tiếp thu chính quyền trong
                  Cách mạng tháng 8. Lá cờ đỏ sao vàng được kéo lên thay thế cho
                  lá cờ quẻ ly. Đây là thời điểm xác định Thành phố Đà Nẵng và
                  tỉnh Quảng Nam đã hoàn thành một cuộc nổi dậy khởi nghĩa,
                  giành chính quyền.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/QN3.jpg)" }}
            >
              <div className="content">
                <div className="title">Quảng Nam</div>
                <div className="name">Tòa Đốc lý Đà Nẵng</div>
                <div className="des">
                  Đây là nơi đồng chí Lê Văn Hiến - tiếp thu chính quyền trong
                  Cách mạng tháng 8. Lá cờ đỏ sao vàng được kéo lên thay thế cho
                  lá cờ quẻ ly. Đây là thời điểm xác định Thành phố Đà Nẵng và
                  tỉnh Quảng Nam đã hoàn thành một cuộc nổi dậy khởi nghĩa,
                  giành chính quyền.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
