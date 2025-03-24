import React from "react";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function bacninh() {
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
              style={{ backgroundImage: "url(./IMG/BN1.png)" }}
            >
              <div className="content">
                <div className="title">Bắc Ninh</div>
                <div className="name">Chùa Đồng Kỵ</div>
                <div className="des">
                  Tại đây, ngày 9-3-1945, Ban Thường vụ Trung ương Đảng đã họp
                  Hội nghị mở rộng và ra bản Chỉ thị lịch sử “Nhật Pháp bắn nhau
                  và hành động của chúng ta”; sau đó để phòng bị động, Hội nghị
                  đã được chuyển đến nhà thờ họ Nguyễn ở làng Đình Bảng (Từ
                  Sơn).
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/BN1.png)" }}
            >
              <div className="content">
                <div className="title">Bắc Ninh</div>
                <div className="name">Chùa Đồng Kỵ</div>
                <div className="des">
                  Tại đây, ngày 9-3-1945, Ban Thường vụ Trung ương Đảng đã họp
                  Hội nghị mở rộng và ra bản Chỉ thị lịch sử “Nhật Pháp bắn nhau
                  và hành động của chúng ta”; sau đó để phòng bị động, Hội nghị
                  đã được chuyển đến nhà thờ họ Nguyễn ở làng Đình Bảng (Từ
                  Sơn).
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
