import React from "react";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function yenbai() {
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
              style={{ backgroundImage: "url(./IMG/YB.jpg)" }}
            >
              <div className="content">
                <div className="title">Yên Bái</div>
                <div className="name">
                  Chiến khu Vần - Di tích lịch sử cấp Quốc gia
                </div>
                <div className="des">
                  Một sự kiện trọng đại đã diễn ra tại đây, ngày 30/6/1945, Ban
                  cán sự liên tỉnh Phú - Yên (Phú Thọ - Yên Bái) được thành lập
                  - một mốc lịch sử quan trọng đánh dấu sự hình thành Chiến khu.
                  Tại đây, lực lượng Đảng hoạt động có tổ chức, có nền nếp để
                  củng cố phát triển mạnh, nên lần lượt ra đời các tổ chức như:
                  Cứu quốc của Việt Minh; Ủy ban cách mạng lâm thời Chiến khu
                  được thành lập. Đội du kích phát triển mạnh đã đánh bại chính
                  quyền địch tan rã và đánh bại các cuộc tấn công của quân ngụy,
                  quân Nhật.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/YB1.png)" }}
            >
              <div className="content">
                <div className="title">Yên Bái</div>
                <div className="name">
                  Chiến khu Vần - Di tích lịch sử cấp Quốc gia
                </div>
                <div className="des">
                  Một sự kiện trọng đại đã diễn ra tại đây, ngày 30/6/1945, Ban
                  cán sự liên tỉnh Phú - Yên (Phú Thọ - Yên Bái) được thành lập
                  - một mốc lịch sử quan trọng đánh dấu sự hình thành Chiến khu.
                  Tại đây, lực lượng Đảng hoạt động có tổ chức, có nền nếp để
                  củng cố phát triển mạnh, nên lần lượt ra đời các tổ chức như:
                  Cứu quốc của Việt Minh; Ủy ban cách mạng lâm thời Chiến khu
                  được thành lập. Đội du kích phát triển mạnh đã đánh bại chính
                  quyền địch tan rã và đánh bại các cuộc tấn công của quân ngụy,
                  quân Nhật.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
