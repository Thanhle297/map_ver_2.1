import React from "react";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function tuyenquang() {
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
              style={{ backgroundImage: "url(./IMG/TQ1.jpg)" }}
            >
              <div className="content">
                <div className="title">Tuyên Quang</div>
                <div className="name">Khu di tích Tân Trào</div>
                <div className="des">
                  Gồm 138 di tích, cụm di tích. Khu di tích là nơi Chủ tịch Hồ
                  Chí Minh cùng các cơ quan Trung ương ở và làm việc trong thời
                  kỳ tiền khởi nghĩa và thời kỳ kháng chiến chống thực dân Pháp,
                  gồm các di tích tiêu biểu như: Đình Hồng Thái, Cụm di tích Nà
                  Nưa, Đình Tân Trào, cây đa Tân Trào…
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/TQ1.jpg)" }}
            >
              <div className="content">
                <div className="title">Tuyên Quang</div>
                <div className="name">Khu di tích Tân Trào</div>
                <div className="des">
                  Gồm 138 di tích, cụm di tích. Khu di tích là nơi Chủ tịch Hồ
                  Chí Minh cùng các cơ quan Trung ương ở và làm việc trong thời
                  kỳ tiền khởi nghĩa và thời kỳ kháng chiến chống thực dân Pháp,
                  gồm các di tích tiêu biểu như: Đình Hồng Thái, Cụm di tích Nà
                  Nưa, Đình Tân Trào, cây đa Tân Trào…
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
