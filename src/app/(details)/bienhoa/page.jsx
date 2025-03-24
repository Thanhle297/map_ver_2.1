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
              style={{ backgroundImage: "url(./IMG/BH.jpg)" }}
            >
              <div className="content">
                <div className="title">Biên Hòa</div>
                <div className="name">Bửu Hưng Tự</div>
                <div className="des">
                  Bửu Hưng Tự là khu di tích lịch sử ghi nhớ tội ác của thực dân
                  Pháp đối với nhân dân Việt Nam trong giai đoạn Pháp xâm lược
                  lần thứ hai. Cầu được xây dựng năm 1924, nhưng nổi tiếng hơn
                  sau các cuộc tấn công tàn bạo của Pháp vào năm 1946. Sau khi
                  quân Pháp thất bại trong trận phục kích tại Bàu Năng, chúng đã
                  bắt và giết 11 người, bêu đầu một số nạn nhân tại Bửu Hưng Tự. Để
                  tưởng niệm, khu di tích Bửu Hưng Tự được tôn tạo với cầu, nhà
                  lồng chợ cũ và tượng đài khắc họa hình ảnh những người mẹ, vợ,
                  con khóc thương người thân hy sinh, thể hiện sức mạnh đấu
                  tranh và lòng căm thù giặc, giáo dục truyền thống yêu nước cho
                  thế hệ mai sau.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/BH.jpg)" }}
            >
              <div className="content">
                <div className="title">Biên Hòa</div>
                <div className="name">Cột cờ thành Biên Hòa</div>
                <div className="des">
                  Bửu Hưng Tự là khu di tích lịch sử ghi nhớ tội ác của thực dân
                  Pháp đối với nhân dân Việt Nam trong giai đoạn Pháp xâm lược
                  lần thứ hai. Cầu được xây dựng năm 1924, nhưng nổi tiếng hơn
                  sau các cuộc tấn công tàn bạo của Pháp vào năm 1946. Sau khi
                  quân Pháp thất bại trong trận phục kích tại Bàu Năng, chúng đã
                  bắt và giết 11 người, bêu đầu một số nạn nhân tại Bửu Hưng Tự. Để
                  tưởng niệm, khu di tích Bửu Hưng Tự được tôn tạo với cầu, nhà
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
