import React from "react";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function sonla() {
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
              style={{ backgroundImage: "url(./IMG/SL.jpg)" }}
            >
              <div className="content">
                <div className="title">Sơn La</div>
                <div className="name">Nhà Tù Sơn La</div>
                <div className="des">
                  Di tích lịch sử Nhà tù Sơn La nằm trên đỉnh đồi Khau Cả, thuộc
                  tổ 9, phường Tô Hiệu, thành phố Sơn La, tỉnh Sơn La. Nhà tù
                  Sơn La đã trở thành nơi đào tạo, bồi dưỡng những chiến sỹ cộng
                  sản xuất sắc, đóng góp chung vào thắng lợi của cuộc Tổng khởi
                  nghĩa tháng Tám năm 1945, tiêu biểu như các đồng chí: Tô Hiệu,
                  Lê Duẩn, Trường Chinh, Nguyễn Lương Bằng, Văn Tiến Dũng, Lê
                  Đức Thọ, Nguyễn Văn Trân, Lê Thanh Nghị, Trần Quốc Hoàn,...
                  Tại Sơn La, Chi bộ nhà tù được thành lập vào tháng 12/1939,
                  lãnh đạo phong trào cách mạng phát triển mạnh mẽ. Tháng
                  8/1945, phong trào cách mạng sôi nổi, với Trung đội du kích
                  Mường Chanh bao vây nhà chánh phìa, giành thắng lợi. Ngày
                  21/8/1945, cuộc họp lãnh đạo khởi nghĩa phân công nhiệm vụ cho
                  các châu, ngay đêm 22/8, các lực lượng vũ trang tỏa ra khắp
                  các châu. Khởi nghĩa nhanh chóng thắng lợi ở các châu Mường
                  La, Thuận Châu, Mai Sơn, Yên Châu và Phù Yên. Tại tỉnh lỵ Sơn
                  La, ngày 25/8, địch đầu hàng, và ngày 26/8, cuộc mít tinh lớn
                  được tổ chức, Ủy ban cách mạng lâm thời ra mắt, tuyên bố thắng
                  lợi hoàn toàn của khởi nghĩa.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/SL2.png)" }}
            >
              <div className="content">
                <div className="title">Sơn La</div>
                <div className="name">Cột cờ thành Sơn La</div>
                <div className="des">
                  Di tích lịch sử Nhà tù Sơn La nằm trên đỉnh đồi Khau Cả, thuộc
                  tổ 9, phường Tô Hiệu, thành phố Sơn La, tỉnh Sơn La. Nhà tù
                  Sơn La đã trở thành nơi đào tạo, bồi dưỡng những chiến sỹ cộng
                  sản xuất sắc, đóng góp chung vào thắng lợi của cuộc Tổng khởi
                  nghĩa tháng Tám năm 1945, tiêu biểu như các đồng chí: Tô Hiệu,
                  Lê Duẩn, Trường Chinh, Nguyễn Lương Bằng, Văn Tiến Dũng, Lê
                  Đức Thọ, Nguyễn Văn Trân, Lê Thanh Nghị, Trần Quốc Hoàn,...
                  Tại Sơn La, Chi bộ nhà tù được thành lập vào tháng 12/1939,
                  lãnh đạo phong trào cách mạng phát triển mạnh mẽ. Tháng
                  8/1945, phong trào cách mạng sôi nổi, với Trung đội du kích
                  Mường Chanh bao vây nhà chánh phìa, giành thắng lợi. Ngày
                  21/8/1945, cuộc họp lãnh đạo khởi nghĩa phân công nhiệm vụ cho
                  các châu, ngay đêm 22/8, các lực lượng vũ trang tỏa ra khắp
                  các châu. Khởi nghĩa nhanh chóng thắng lợi ở các châu Mường
                  La, Thuận Châu, Mai Sơn, Yên Châu và Phù Yên. Tại tỉnh lỵ Sơn
                  La, ngày 25/8, địch đầu hàng, và ngày 26/8, cuộc mít tinh lớn
                  được tổ chức, Ủy ban cách mạng lâm thời ra mắt, tuyên bố thắng
                  lợi hoàn toàn của khởi nghĩa.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
