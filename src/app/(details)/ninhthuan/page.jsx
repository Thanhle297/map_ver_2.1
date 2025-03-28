import React from "react";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function ninhthuan() {
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
              style={{ backgroundImage: "url(./IMG/ninhthuan.png)" }}
            >
              <div className="content">
                <div className="title">Ninh Thuận</div>
                <div className="name">Miếu Năm Bà</div>
                <div className="des">
                  Trong cách mạng tháng 8 năm 1945, Miếu là nơi tổ chức các cuộc
                  họp bí mật của chính quyền Việt Minh, là nơi tổ chức các hoạt
                  động nuôi giấu cán bộ cách mạng, hội họp của Dân quân du kích
                  địa phương.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/ninhthuan.png)" }}
            >
              <div className="content">
                <div className="title">Ninh Thuận</div>
                <div className="name">Miếu Năm Bà</div>
                <div className="des">
                  Trong cách mạng tháng 8 năm 1945, Miếu là nơi tổ chức các cuộc
                  họp bí mật của chính quyền Việt Minh, là nơi tổ chức các hoạt
                  động nuôi giấu cán bộ cách mạng, hội họp của Dân quân du kích
                  địa phương.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
