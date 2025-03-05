import Link from "next/link";
import Script from "next/script";
import React from "react";
import './style.scss';

export default function SG() {
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
              style={{ backgroundImage: "url(SAIGON/img/SG1.jpg)" }}
            >
              <div className="content">
                <div className="title">Sài Gòn</div>
                <div className="name">chợ lớn - Gia định </div>
                <div className="des">
                  Tại Sài Gòn - Chợ Lớn - Gia Định, chấp hành lệnh Tổng khởi
                  nghĩa của Ủy ban kháng chiến toàn quốc, ngày 15 tháng 8 năm
                  1945, Thường vụ Xứ ủy Nam Kỳ đã nhanh chóng thành lập Ủy ban
                  khởi nghĩa do Bí thư Xứ ủy Trần Văn Giàu làm Chủ tịch
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(SAIGON/img/SG1.jpg)" }}
            >
              <div className="content">
                <div className="title">Sài Gòn</div>
                <div className="name">chợ lớn - Gia định </div>
                <div className="des">
                  Tại Sài Gòn - Chợ Lớn - Gia Định, chấp hành lệnh Tổng khởi
                  nghĩa của Ủy ban kháng chiến toàn quốc, ngày 15 tháng 8 năm
                  1945, Thường vụ Xứ ủy Nam Kỳ đã nhanh chóng thành lập Ủy ban
                  khởi nghĩa do Bí thư Xứ ủy Trần Văn Giàu làm Chủ tịch
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(SAIGON/img/SG2.jpg)" }}
            >
              <div className="content">
                <div className="title">SÀi Gòn</div>
                <div className="name">dinh khâm sai</div>
                <div className="des">
                  Khi cuộc cách mạng bùng nổ ở Sài Gòn ngày 24/8/1945, dinh Khâm
                  sai (nay là Bảo tàng Thành phố) là nơi đầu tiên ở thành phố cờ
                  đỏ sao vàng được kéo lên, tung bay trong niềm tin thắng lợi.
                </div>
              </div>
            </div>
            {/*next prev button*/}
            <div className="arrows">
              <button className="prev">&lt;</button>
              <button className="next">&gt;</button>
            </div>
          </div>
        </div>
      </div>
      <Script src="./SAIGON/app.js"></Script>
    </>
  );
}
