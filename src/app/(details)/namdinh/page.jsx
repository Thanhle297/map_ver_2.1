import React from "react";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function namdinh() {
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
              style={{ backgroundImage: "url(./IMG/ND.jpg)" }}
            >
              <div className="content">
                <div className="title">Nam Định</div>
                <div className="name">Cột cờ Nam Định</div>
                <div className="des">
                  Vào thời điểm sôi sục của Cách mạng Tháng Tám năm 1945, hình
                  ảnh lá cờ đỏ sao vàng tung bay phấp phới trên đỉnh Cột cờ Nam
                  Định đã trở thành biểu tượng thiêng liêng của chiến thắng và
                  niềm tự hào của người dân Thành Nam.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/ND.jpg)" }}
            >
              <div className="content">
                <div className="title">Nam Định</div>
                <div className="name">Cột cờ Nam Định</div>
                <div className="des">
                  Vào thời điểm sôi sục của Cách mạng Tháng Tám năm 1945, hình
                  ảnh lá cờ đỏ sao vàng tung bay phấp phới trên đỉnh Cột cờ Nam
                  Định đã trở thành biểu tượng thiêng liêng của chiến thắng và
                  niềm tự hào của người dân Thành Nam.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
