import React from "react";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function khanhhoa() {
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
              style={{ backgroundImage: "url(./IMG/KH.png)" }}
            >
              <div className="content">
                <div className="title">Khánh Hòa</div>
                <div className="name">Sân vận động 19-8</div>
                <div className="des">
                  Sân vận động được đặt tên theo sự kiện về ngày tổng khởi nghĩa
                  diễn ra tại đây. Ngày 19-8-1945, dưới sự lãnh đạo của Tỉnh ủy
                  lâm thời và Ủy ban Việt Minh tỉnh, quần chúng ở Nha Trang đã
                  biến cuộc mít tinh của ngụy quyền ủng hộ chính quyền Trần
                  Trọng Kim thành cuộc khởi nghĩa giành chính quyền, hạ cờ bù
                  nhìn, kéo lên cờ đỏ sao vàng và tuyên bố xóa bỏ chế độ bù
                  nhìn.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/KH.png)" }}
            >
              <div className="content">
                <div className="title">Khánh Hòa</div>
                <div className="name">Sân vận động 19-8</div>
                <div className="des">
                  Sân vận động được đặt tên theo sự kiện về ngày tổng khởi nghĩa
                  diễn ra tại đây. Ngày 19-8-1945, dưới sự lãnh đạo của Tỉnh ủy
                  lâm thời và Ủy ban Việt Minh tỉnh, quần chúng ở Nha Trang đã
                  biến cuộc mít tinh của ngụy quyền ủng hộ chính quyền Trần
                  Trọng Kim thành cuộc khởi nghĩa giành chính quyền, hạ cờ bù
                  nhìn, kéo lên cờ đỏ sao vàng và tuyên bố xóa bỏ chế độ bù
                  nhìn.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
