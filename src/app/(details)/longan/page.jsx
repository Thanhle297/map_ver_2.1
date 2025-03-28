import React from "react";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function longan() {
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
              style={{ backgroundImage: "url(./IMG/LA.jpg)" }}
            >
              <div className="content">
                <div className="title">Long An</div>
                <div className="name">Di tích lịch sử nhà Tổng Thận</div>
                <div className="des">
                  Sau khi giành chính quyền thành công, Nhà Tổng Thận được chọn
                  làm trụ sở hoạt động công khai của Tỉnh ủy Tân An. Tại đây,
                  Tỉnh ủy tổ chức 3 cuộc họp quyết định những vấn đề quan trọng
                  về xây dựng chính quyền sau Cách mạng Tháng Tám tại Tân An.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/LA1.png)" }}
            >
              <div className="content">
                <div className="title">Long An</div>
                <div className="name">Di tích lịch sử nhà Tổng Thận</div>
                <div className="des">
                  Sau khi giành chính quyền thành công, Nhà Tổng Thận được chọn
                  làm trụ sở hoạt động công khai của Tỉnh ủy Tân An. Tại đây,
                  Tỉnh ủy tổ chức 3 cuộc họp quyết định những vấn đề quan trọng
                  về xây dựng chính quyền sau Cách mạng Tháng Tám tại Tân An.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
