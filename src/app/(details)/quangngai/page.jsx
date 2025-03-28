import React from "react";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function quangngai() {
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
              style={{ backgroundImage: "url(./IMG/CQ.jpg)" }}
            >
              <div className="content">
                <div className="title">Quảng Ngãi</div>
                <div className="name">Di tích Khởi nghĩa Ba Tơ</div>
                <div className="des">
                  Di tích Quốc gia đặc biệt Địa điểm về cuộc khởi nghĩa Ba Tơ
                  vừa được Thủ tướng ra Quyết định xếp hạng là Di tích quốc gia
                  đặc biệt, gắn liền với Cuộc khởi nghĩa Ba Tơ ngày 11/3/1945 và
                  sự ra đời, hoạt động của Đội du kích Ba Tơ anh hùng. Các điểm
                  di tích này phân bố chủ yếu trên địa bàn các xã Ba Vinh, Ba
                  Động, Ba Thành và thị trấn Ba Tơ, huyện Ba Tơ. Lịch sử Việt
                  Nam hiện đại ghi nhận Khởi nghĩa Ba Tơ là cuộc khởi nghĩa từng
                  phần đầu tiên trong cả nước nổ ra và giành thắng lợi. Cuộc
                  khởi nghĩa Ba Tơ là một trang ngời sáng trong lịch sử Quảng
                  Ngãi và lịch sử cả nước.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/QNgai2.jpeg)" }}
            >
              <div className="content">
                <div className="title">Quảng Ngãi</div>
                <div className="name">Di tích Khởi nghĩa Ba Tơ</div>
                <div className="des">
                  Di tích Quốc gia đặc biệt Địa điểm về cuộc khởi nghĩa Ba Tơ
                  vừa được Thủ tướng ra Quyết định xếp hạng là Di tích quốc gia
                  đặc biệt, gắn liền với Cuộc khởi nghĩa Ba Tơ ngày 11/3/1945 và
                  sự ra đời, hoạt động của Đội du kích Ba Tơ anh hùng. Các điểm
                  di tích này phân bố chủ yếu trên địa bàn các xã Ba Vinh, Ba
                  Động, Ba Thành và thị trấn Ba Tơ, huyện Ba Tơ.<br></br> Lịch
                  sử Việt Nam hiện đại ghi nhận Khởi nghĩa Ba Tơ là cuộc khởi
                  nghĩa từng phần đầu tiên trong cả nước nổ ra và giành thắng
                  lợi. Cuộc khởi nghĩa Ba Tơ là một trang ngời sáng trong lịch
                  sử Quảng Ngãi và lịch sử cả nước.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
