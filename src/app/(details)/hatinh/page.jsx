import Link from "next/link";
import Script from "next/script";
import React from "react";
import "./style.scss";

export default function hatinh() {
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
              style={{ backgroundImage: "url(./IMG/HT1.jpg)" }}
            >
              <div className="content">
                <div className="title">Hà Tĩnh</div>
                <div className="name">Đền Ngọc Mỹ xã Phù Lưu</div>
                <div className="des">
                  Đây là nơi cán bộ Việt Minh treo cờ Tổ quốc, tổ chức mít tinh
                  thị uy, kêu gọi Nhân dân tổng Phù Lưu nổi dậy giành chính
                  quyền, mà nhiều năm về sau những di tích này còn là nơi hoạt
                  động bí mật, cất giấu tài liệu, xây dựng lực lượng chuẩn bị
                  cho khởi nghĩa vũ trang khi thời cơ đến.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/HT1.jpg)" }}
            >
              <div className="content">
                <div className="title">Hà Tĩnh</div>
                <div className="name">Đền Ngọc Mỹ xã Phù Lưu</div>
                <div className="des">
                  Đây là nơi cán bộ Việt Minh treo cờ Tổ quốc, tổ chức mít tinh
                  thị uy, kêu gọi Nhân dân tổng Phù Lưu nổi dậy giành chính
                  quyền, mà nhiều năm về sau những di tích này còn là nơi hoạt
                  động bí mật, cất giấu tài liệu, xây dựng lực lượng chuẩn bị
                  cho khởi nghĩa vũ trang khi thời cơ đến.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/HT2.jpg)" }}
            >
              <div className="content">
                <div className="title">Hà Tĩnh</div>
                <div className="name">đình Đỉnh Lự xã Hồng Lộc</div>
                <div className="des">
                  Đây là nơi cán bộ Việt Minh treo cờ Tổ quốc, tổ chức mít tinh
                  thị uy, kêu gọi Nhân dân tổng Phù Lưu nổi dậy giành chính
                  quyền, mà nhiều năm về sau những di tích này còn là nơi hoạt
                  động bí mật, cất giấu tài liệu, xây dựng lực lượng chuẩn bị
                  cho khởi nghĩa vũ trang khi thời cơ đến.
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
      <Script src="./JS/app.js"></Script>
    </>
  );
}
