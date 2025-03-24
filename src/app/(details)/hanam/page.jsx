import React from "react";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function hanam() {
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
              style={{ backgroundImage: "url(./IMG/HN.jpg)" }}
            >
              <div className="content">
                <div className="title">Hà Nam</div>
                <div className="name">
                  Đình Lũng Xuyên - Di tích lịch sử cấp quốc gia
                </div>
                <div className="des">
                  Trong thời kỳ khởi nghĩa giành chính quyền tại đình Lũng Xuyên
                  lại liên tiếp xảy ra các sự kiện lịch sử: Ngày 15 và ngày 16
                  -8-1945 một cuộc họp cấp tốc của ban cán sự tỉnh Hà Nam được
                  họp tại nhà bà Gái để bàn kế hoạch khởi nghĩa giành chính
                  quyền trong toàn tỉnh. Đêm ngày 19-8-1945 lực lượng chính của
                  cách mạng tập trung ở đình Lũng Xuyên để chờ lệnh xuất phát.
                  Sáng sớm 20-8-1945 tại sân đình Lũng Xuyên 3 tiểu đội vũ trang
                  của huyện đã làm lễ tuyên thệ trước cờ Tổ quốc và tiến quân
                  khởi nghĩa giành chính quyền trong toàn huyện thắng lợi.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/HN.jpg)" }}
            >
              <div className="content">
                <div className="title">Hà Nam</div>
                <div className="name">
                  Đình Lũng Xuyên - Di tích lịch sử cấp quốc gia
                </div>
                <div className="des">
                  Trong thời kỳ khởi nghĩa giành chính quyền tại đình Lũng Xuyên
                  lại liên tiếp xảy ra các sự kiện lịch sử: Ngày 15 và ngày 16
                  -8-1945 một cuộc họp cấp tốc của ban cán sự tỉnh Hà Nam được
                  họp tại nhà bà Gái để bàn kế hoạch khởi nghĩa giành chính
                  quyền trong toàn tỉnh. Đêm ngày 19-8-1945 lực lượng chính của
                  cách mạng tập trung ở đình Lũng Xuyên để chờ lệnh xuất phát.
                  Sáng sớm 20-8-1945 tại sân đình Lũng Xuyên 3 tiểu đội vũ trang
                  của huyện đã làm lễ tuyên thệ trước cờ Tổ quốc và tiến quân
                  khởi nghĩa giành chính quyền trong toàn huyện thắng lợi.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
