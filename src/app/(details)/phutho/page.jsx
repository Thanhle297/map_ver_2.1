import React from "react";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function phutho() {
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
              style={{ backgroundImage: "url(./IMG/PT.jpg)" }}
            >
              <div className="content">
                <div className="title">Phú Thọ</div>
                <div className="name">Chiến Khu Vạn Thắng</div>
                <div className="des">
                  Từ khi căn cứ du kích Vạn Thắng có cán bộ của Đảng trực tiếp
                  lãnh đạo và huấn luyện, rất đông thanh niên trai tráng trong
                  và ngoài vùng Đồng Lương tham gia tụ nghĩa khiến lực lượng du
                  kích ngày càng phát triển.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/PT.jpg)" }}
            >
              <div className="content">
                <div className="title">Phú Thọ</div>
                <div className="name">Chiến Khu Vạn Thắng</div>
                <div className="des">
                  Từ khi căn cứ du kích Vạn Thắng có cán bộ của Đảng trực tiếp
                  lãnh đạo và huấn luyện, rất đông thanh niên trai tráng trong
                  và ngoài vùng Đồng Lương tham gia tụ nghĩa khiến lực lượng du
                  kích ngày càng phát triển.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
