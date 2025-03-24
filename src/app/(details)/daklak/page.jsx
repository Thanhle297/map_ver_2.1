import React from "react";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function daklak() {
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
              style={{ backgroundImage: "url(./IMG/daklak.jpeg)" }}
            >
              <div className="content">
                <div className="title">Đak Lak</div>
                <div className="name">
                  Di tích lịch sử Trụ sở Ủy ban khởi nghĩa tỉnh Đắk Lắk 1945
                </div>
                <div className="des">
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/daklak2.png)" }}
            >
              <div className="content">
                <div className="title">Đăk Lăk</div>
                <div className="name">
                  Di tích lịch sử Trụ sở Ủy ban khởi nghĩa tỉnh Đắk Lắk 1945
                </div>
                <div className="des">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
