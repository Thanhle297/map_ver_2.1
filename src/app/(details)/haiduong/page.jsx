import React from "react";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function haiduong() {
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
              style={{ backgroundImage: "url(./IMG/HD1.jpg)" }}
            >
              <div className="content">
                <div className="title">Hải Dương</div>
                <div className="name">Đình Dầu</div>
                <div className="des">
                  Nơi đây đã được chọn là nơi cất giấu vũ khí, nơi thành lập đội
                  tự vệ đầu tiên của tỉnh Hải Dương và là cứ địa lớn để nhân dân
                  tập trung đấu tranh giành chính quyền trong Cách mạng tháng
                  Tám năm 1945. gày 21/1/1992, Đình Đầu của xã Hợp Tiến đã vinh
                  dự được Bộ trưởng Bộ Văn hoá, Thể thao và Du lịch ra Quyết
                  đinhh số 97 xếp hạng Di tích lịch sử văn hoá cấp Quốc gia.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/HD1.jpg)" }}
            >
              <div className="content">
                <div className="title">Hải Dương</div>
                <div className="name">Đình Dầu</div>
                <div className="des">
                  Nơi đây đã được chọn là nơi cất giấu vũ khí, nơi thành lập đội
                  tự vệ đầu tiên của tỉnh Hải Dương và là cứ địa lớn để nhân dân
                  tập trung đấu tranh giành chính quyền trong Cách mạng tháng
                  Tám năm 1945. gày 21/1/1992, Đình Đầu của xã Hợp Tiến đã vinh
                  dự được Bộ trưởng Bộ Văn hoá, Thể thao và Du lịch ra Quyết
                  đinhh số 97 xếp hạng Di tích lịch sử văn hoá cấp Quốc gia.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
