import React from "react";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function quangbinh() {
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
              style={{ backgroundImage: "url(./IMG/QB.jpg)" }}
            >
              <div className="content">
                <div className="title">Quảng Bình</div>
                <div className="name">Nhà nhóm thôn Trung</div>
                <div className="des">
                  Là nơi tập hợp, huấn luyện lực lượng vũ trang, làm nòng cốt
                  tiến về trung tâm tỉnh lỵ Đồng Hới, giành chính quyền trong
                  Cách mạng tháng Tám 1945 ở Quảng Bình.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/QB.jpg)" }}
            >
              <div className="content">
                <div className="title">Quảng Bình</div>
                <div className="name">Nhà nhóm thôn Trung</div>
                <div className="des">
                  Là nơi tập hợp, huấn luyện lực lượng vũ trang, làm nòng cốt
                  tiến về trung tâm tỉnh lỵ Đồng Hới, giành chính quyền trong
                  Cách mạng tháng Tám 1945 ở Quảng Bình.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
