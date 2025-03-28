import React from "react";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function phuyen() {
  return (
    <>
      <div>
        <header>
          <nav>
            <Link href="/" className="active">
              Trang chủ
            </Link>
            <Link href="/">Giới thiệu</Link>
            <Link href="/">Dịch vụ</Link>
            <Link href="/">Liên hệ</Link>
          </nav>
        </header>
        <div className="carousel">
          <div className="list">
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/PY.jpg)" }}
            >
              <div className="content">
                <div className="title">Phú Yên</div>
                <div className="name">Di tích chùa Khánh Sơn</div>
                <div className="des">
                  Năm 1945, Chùa Khánh Sơn được Tỉnh ủy Phú Yên chọn làm địa
                  điểm tập hợp lực lượng để chuẩn bị Tổng khởi nghĩa Cách mạng
                  Tháng Tám
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/PY.jpg)" }}
            >
              <div className="content">
                <div className="title">Phú Yên</div>
                <div className="name">Di tích chùa Khánh Sơn</div>
                <div className="des">
                  Năm 1945, Chùa Khánh Sơn được Tỉnh ủy Phú Yên chọn làm địa
                  điểm tập hợp lực lượng để chuẩn bị Tổng khởi nghĩa Cách mạng
                  Tháng Tám
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
