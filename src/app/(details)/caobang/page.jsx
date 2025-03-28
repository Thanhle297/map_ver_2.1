import React from "react";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function caobang() {
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
              style={{ backgroundImage: "url(./IMG/CBANG.jpg)" }}
            >
              <div className="content">
                <div className="title">Cao Bằng</div>
                <div className="name">
                  Khu di tích Pác Pó - Khu di tích quốc gia đặc biệt
                </div>
                <div className="des">
                  Tại Pác Pó, lãnh tụ Nguyễn Ái Quốc đã vạch ra nhiều chủ trương
                  và quyết dịnh quan trọng chuẩn bị cho Cách mạng tháng Tám năm
                  1945: Chủ trì Hội nghị Trung ương Đảng lần thứ 8 tại lán Khuổi
                  Nặm – Pác Pó từ ngày 10/5 đến ngày 19/5/1941. Ngày 4/5/1945,
                  Người rời Pác Pó đi Tân trào (Tuyên Quang) để chỉ đạo cuộc
                  tổng khởi nghĩa giành chính quyền trong cả nước (tháng 8/1945)
                  thắng lợi,…
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/CBANG.jpg)" }}
            >
              <div className="content">
                <div className="title">Cao Bằng</div>
                <div className="name">
                  Khu di tích Pác Pó - Khu di tích quốc gia đặc biệt
                </div>
                <div className="des">
                  Tại Pác Pó, lãnh tụ Nguyễn Ái Quốc đã vạch ra nhiều chủ trương
                  và quyết dịnh quan trọng chuẩn bị cho Cách mạng tháng Tám năm
                  1945: Chủ trì Hội nghị Trung ương Đảng lần thứ 8 tại lán Khuổi
                  Nặm – Pác Pó từ ngày 10/5 đến ngày 19/5/1941. Ngày 4/5/1945,
                  Người rời Pác Pó đi Tân trào (Tuyên Quang) để chỉ đạo cuộc
                  tổng khởi nghĩa giành chính quyền trong cả nước (tháng 8/1945)
                  thắng lợi,…
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
