import React from "react";
import Link from "next/link";
import "./style.scss";

export default function Thainguyen() {
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
              style={{ backgroundImage: "url(THAI_NGUYEN/img/TN1.jpg)" }}
            >
              <div className="content">
                <div className="title">Thái Nguyên</div>
                <div className="name">Chùa Đản</div>
                <div className="des">
                  Trước Cách mạng Tháng Tám, ngôi chùa được cán bộ Việt Minh lấy
                  làm chốn đi về, gặp gỡ, bàn chuyện đánh Pháp, đuổi Nhật. Ngày
                  16/8/1945, đồng chí Võ Nguyên Giáp đưa quân chủ lực từ Tân
                  Trào sang giải phóng TX. Thái Nguyên. Khi đến Thái Nguyên, Đại
                  tướng đã lựa chọn chùa Đán làm đại bản doanh, tập kết quân,
                  dân, chỉ huy tiến đánh quân Nhật đang co cụm trong trung tâm
                  thị xã.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(THAI_NGUYEN/img/TN1.jpg)" }}
            >
              <div className="content">
                <div className="title">Thái Nguyên</div>
                <div className="name">Chùa Đản</div>
                <div className="des">
                  Trước Cách mạng Tháng Tám, ngôi chùa được cán bộ Việt Minh lấy
                  làm chốn đi về, gặp gỡ, bàn chuyện đánh Pháp, đuổi Nhật. Ngày
                  16/8/1945, đồng chí Võ Nguyên Giáp đưa quân chủ lực từ Tân
                  Trào sang giải phóng TX. Thái Nguyên. Khi đến Thái Nguyên, Đại
                  tướng đã lựa chọn chùa Đán làm đại bản doanh, tập kết quân,
                  dân, chỉ huy tiến đánh quân Nhật đang co cụm trong trung tâm
                  thị xã.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
