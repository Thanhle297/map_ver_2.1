import React from "react";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function thaibinh() {
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
              style={{ backgroundImage: "url(./IMG/TB.jpg)" }}
            >
              <div className="content">
                <div className="title">Thái Bình</div>
                <div className="name">Chùa Đoan Túc</div>
                <div className="des">
                  Nơi hội họp của Việt Minh thị xã Thái Bình, nơi tập trung lực
                  lượng hình thành các đoàn quân khởi nghĩa đêm ngày 18-8-1945
                  và là nơi xuất phát của đoàn quân khởi nghĩa tiến vào giành
                  chính quyền ở Thị xã Thái Bình sáng 19-8-1945.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/TB4.jpg)" }}
            >
              <div className="content">
                <div className="title">Thái Bình</div>
                <div className="name">Chùa Đoan Túc</div>
                <div className="des">
                  Nơi hội họp của Việt Minh thị xã Thái Bình, nơi tập trung lực
                  lượng hình thành các đoàn quân khởi nghĩa đêm ngày 18-8-1945
                  và là nơi xuất phát của đoàn quân khởi nghĩa tiến vào giành
                  chính quyền ở Thị xã Thái Bình sáng 19-8-1945.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
