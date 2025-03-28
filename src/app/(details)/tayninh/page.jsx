import React from "react";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function tayninh() {
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
                <div className="title">Tây Ninh</div>
                <div className="name">Cầu Quan</div>
                <div className="des">
                  Cầu Quan là khu di tích lịch sử ghi nhớ tội ác của thực dân
                  Pháp đối với nhân dân Việt Nam trong giai đoạn Pháp xâm lược
                  lần thứ hai. Cầu được xây dựng năm 1924, nhưng nổi tiếng hơn
                  sau các cuộc tấn công tàn bạo của Pháp vào năm 1946. Sau khi
                  quân Pháp thất bại trong trận phục kích tại Bàu Năng, chúng đã
                  bắt và giết 11 người, bêu đầu một số nạn nhân tại Cầu Quan. Để
                  tưởng niệm, khu di tích Cầu Quan được tôn tạo với cầu, nhà
                  lồng chợ cũ và tượng đài khắc họa hình ảnh những người mẹ, vợ,
                  con khóc thương người thân hy sinh, thể hiện sức mạnh đấu
                  tranh và lòng căm thù giặc, giáo dục truyền thống yêu nước cho
                  thế hệ mai sau.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/CQ.jpg)" }}
            >
              <div className="content">
                <div className="title">Tây Ninh</div>
                <div className="name">Cột cờ thành Tây Ninh</div>
                <div className="des">
                  Cầu Quan là khu di tích lịch sử ghi nhớ tội ác của thực dân
                  Pháp đối với nhân dân Việt Nam trong giai đoạn Pháp xâm lược
                  lần thứ hai. Cầu được xây dựng năm 1924, nhưng nổi tiếng hơn
                  sau các cuộc tấn công tàn bạo của Pháp vào năm 1946. Sau khi
                  quân Pháp thất bại trong trận phục kích tại Bàu Năng, chúng đã
                  bắt và giết 11 người, bêu đầu một số nạn nhân tại Cầu Quan. Để
                  tưởng niệm, khu di tích Cầu Quan được tôn tạo với cầu, nhà
                  lồng chợ cũ và tượng đài khắc họa hình ảnh những người mẹ, vợ,
                  con khóc thương người thân hy sinh, thể hiện sức mạnh đấu
                  tranh và lòng căm thù giặc, giáo dục truyền thống yêu nước cho
                  thế hệ mai sau.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
