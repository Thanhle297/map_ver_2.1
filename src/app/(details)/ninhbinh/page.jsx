import React from "react";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function ninhbinh() {
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
              style={{ backgroundImage: "url(./IMG/NB.jpg)" }}
            >
              <div className="content">
                <div className="title">Ninh Bình</div>
                <div className="name">Khu căn cứ cách mạng Quỳnh Lưu</div>
                <div className="des">
                  Trong những năm hoạt động và đấu tranh gian khổ (1927 - 1945),
                  Quỳnh Lưu đã kiên trì giữ vững tổ chức cách mạng, luôn là
                  “trung tâm” của phong trào cách mạng tỉnh Ninh Bình, đã đóng
                  góp nhiều công sức, xương máu cho sự nghiệp cách mạng của
                  Đảng. Trận đánh ngày 11/8/1945 là trận đánh đầu tiên của lực
                  lượng vũ trang non trẻ Khu căn cứ Cách mạng Quỳnh Lưu, song đã
                  góp phần quan trọng vào thắng lợi của cuộc Tổng khởi nghĩa
                  tháng Tám năm 1945 mà Đảng bộ và Nhân dân trong tỉnh đã giành
                  được
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/NB.jpg)" }}
            >
              <div className="content">
                <div className="title">Ninh Bình</div>
                <div className="name">Khu căn cứ cách mạng Quỳnh Lưu</div>
                <div className="des">
                  Trong những năm hoạt động và đấu tranh gian khổ (1927 - 1945),
                  Quỳnh Lưu đã kiên trì giữ vững tổ chức cách mạng, luôn là
                  “trung tâm” của phong trào cách mạng tỉnh Ninh Bình, đã đóng
                  góp nhiều công sức, xương máu cho sự nghiệp cách mạng của
                  Đảng. Trận đánh ngày 11/8/1945 là trận đánh đầu tiên của lực
                  lượng vũ trang non trẻ Khu căn cứ Cách mạng Quỳnh Lưu, song đã
                  góp phần quan trọng vào thắng lợi của cuộc Tổng khởi nghĩa
                  tháng Tám năm 1945 mà Đảng bộ và Nhân dân trong tỉnh đã giành
                  được
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
