import React from "react";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function binhdinh() {
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
              style={{ backgroundImage: "url(./IMG/BD.png)" }}
            >
              <div className="content">
                <div className="title">Bình Định</div>
                <div className="name">Cột cờ thành Bình Định</div>
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
              style={{ backgroundImage: "url(./IMG/BD.png)" }}
            >
              <div className="content">
                <div className="title">Bình Định</div>
                <div className="name">Cột cờ thành Bình Định</div>
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
