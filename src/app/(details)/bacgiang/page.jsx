import React from "react";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function bacgiang() {
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
              style={{ backgroundImage: "url(./IMG/BG1.jpg)" }}
            >
              <div className="content">
                <div className="title">Bắc Giang</div>
                <div className="name">
                  Di Tích an toàn khu II Hiệp Hòa,Bắc Giang
                </div>
                <div className="des">
                  An toàn khu II huyện Hiệp Hòa là một hệ thống các di tích lịch
                  sử gắn liền với nơi nuôi giấu, bảo vệ an toàn cho cán bộ cấp
                  cao của Đảng thời kỳ tiền khởi nghĩa. Di tích gồm 8 địa điểm:
                  Nhà ông Ngô Văn Thấu (cụ Đồ Ba), nhà ông Nguyễn Văn Chế, nhà
                  ông Ngô Văn Đông (Lý Đông), Soi Đền, đình Vân Xuyên, đình Chợ
                  Vân, đình Xuân Biều và chùa Y Sơn. Trong số đó, đình Xuân
                  Biều, xã Xuân Cẩm là nơi diễn ra cuộc mít tinh giành chính
                  quyền cấp xã đầu tiên trong Cách mạng tháng Tám năm 1945 ở
                  tỉnh Bắc Giang và cũng là một trong những cuộc khởi nghĩa
                  giành chính quyền cấp xã sớm trên toàn quốc.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/BG1.jpg)" }}
            >
              <div className="content">
                <div className="title">Bắc Giang</div>
                <div className="name">
                  Di Tích an toàn khu II Hiệp Hòa,Bắc Giang
                </div>
                <div className="des">
                  An toàn khu II huyện Hiệp Hòa là một hệ thống các di tích lịch
                  sử gắn liền với nơi nuôi giấu, bảo vệ an toàn cho cán bộ cấp
                  cao của Đảng thời kỳ tiền khởi nghĩa. Di tích gồm 8 địa điểm:
                  Nhà ông Ngô Văn Thấu (cụ Đồ Ba), nhà ông Nguyễn Văn Chế, nhà
                  ông Ngô Văn Đông (Lý Đông), Soi Đền, đình Vân Xuyên, đình Chợ
                  Vân, đình Xuân Biều và chùa Y Sơn. Trong số đó, đình Xuân
                  Biều, xã Xuân Cẩm là nơi diễn ra cuộc mít tinh giành chính
                  quyền cấp xã đầu tiên trong Cách mạng tháng Tám năm 1945 ở
                  tỉnh Bắc Giang và cũng là một trong những cuộc khởi nghĩa
                  giành chính quyền cấp xã sớm trên toàn quốc.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
