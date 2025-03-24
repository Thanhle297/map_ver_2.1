import React from "react";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function langson() {
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
              style={{ backgroundImage: "url(./IMG/LS.jpg)" }}
            >
              <div className="content">
                <div className="title">Lạng Sơn</div>
                <div className="name">
                  Di tích lịch sử Khởi nghĩa Bắc Sơn - Di tích quốc gia đặc biệt
                </div>
                <div className="des">
                  Khu di tích là an toàn khu nuôi giấu, bảo vệ các cơ quan, cán
                  bộ cao cấp của Trung ương, Xứ ủy Bắc kỳ trong thời gian hoạt
                  động cách mạng tại Bắc Sơn, nơi đặt trạm liên lạc thông suốt
                  giữa Trung ương với Xứ uỷ Bắc kỳ cùng các địa bàn khác và là
                  nơi cung cấp tài liệu cho công tác huấn luyện cán bộ cách mạng
                  của Đảng.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/LS.jpg)" }}
            >
              <div className="content">
                <div className="title">Lạng Sơn</div>
                <div className="name">
                  Di tích lịch sử Khởi nghĩa Bắc Sơn - Di tích quốc gia đặc biệt
                </div>
                <div className="des">
                  Khu di tích là an toàn khu nuôi giấu, bảo vệ các cơ quan, cán
                  bộ cao cấp của Trung ương, Xứ ủy Bắc kỳ trong thời gian hoạt
                  động cách mạng tại Bắc Sơn, nơi đặt trạm liên lạc thông suốt
                  giữa Trung ương với Xứ uỷ Bắc kỳ cùng các địa bàn khác và là
                  nơi cung cấp tài liệu cho công tác huấn luyện cán bộ cách mạng
                  của Đảng.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
