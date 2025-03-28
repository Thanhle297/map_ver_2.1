import React from "react";
import Link from "next/link";
import "./style.scss";

export default function thanhhoa() {
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
          </div>
        </div>
      </div>
    </>
  );
}
