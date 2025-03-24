import React from "react";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function hungyen() {
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
              style={{ backgroundImage: "url(./IMG/HY.jpg)" }}
            >
              <div className="content">
                <div className="title">Hưng Yên</div>
                <div className="name">Đình Thổ Cốc</div>
                <div className="des">
                  Đình Thổ Cốc là nơi may cờ đỏ sao vàng, biểu ngữ, in truyền
                  đơn, áp phích và phát lệnh tổng khởi nghĩa giành chính quyền
                  trong toàn tỉnh. Năm 1997, đình Thổ Cốc được Bộ Văn hóa -
                  Thông tin (nay là Bộ Văn hóa, Thể thao và Du lịch) xếp hạng di
                  tích “Kiến trúc nghệ thuật” cấp quốc gia.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/HY.jpg)" }}
            >
              <div className="content">
                <div className="title">Hưng Yên</div>
                <div className="name">Đình Thổ Cốc</div>
                <div className="des">
                  Trong những năm hoạt động và đấu tranh gian khổ (1927 - 1945),
                  Quỳnh Lưu đã kiên trì giữ vững tổ chức cách mạng, luôn là
                  “trung tâm” của phong trào cách mạng tỉnh Hưng Yên, đã đóng
                  góp nhiều công sức, xương máu cho sự nghiệp cách mạng của
                  Đảng. Trận đánh ngày 11/8/1945 là trận đánh đầu tiên của lực
                  lượng vũ trang non trẻ Đình Thổ Cốc, song đã góp phần quan
                  trọng vào thắng lợi của cuộc Tổng khởi nghĩa tháng Tám năm
                  1945 mà Đảng bộ và Nhân dân trong tỉnh đã giành được
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
