import React from "react";
import Link from "next/link";
import Script from "next/script";
import "./style.scss";

export default function nghean() {
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
              style={{ backgroundImage: "url(./IMG/NA.jpeg)" }}
            >
              <div className="content">
                <div className="title">Nghệ An</div>
                <div className="name">Đình Trung</div>
                <div className="des">
                  Trong phong trào Xô-Viết Nghệ Tĩnh 1930-1931, Đình Trung là
                  nơi diễn ra các hoạt động đấu tranh cách mạng của nhân dân ta.
                  Sau chính quyền Xô - Viết bị đàn áp, Đình Trung vẫn là địa
                  điểm diễn ra nhiều cuộc biểu tình của nhân dân đòi quyền lợi
                  chính đáng cho cộng đồng. Ngày 17/8/1945, Đình Trung lại chứng
                  kiến sự kiện Việt Minh lãnh đạo nhân dân làng Yên khởi nghĩa
                  giành chính quyền và chính quyền mới vẫn chọn Đình Trung làm
                  trụ sở làm việc.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(./IMG/NA.jpeg)" }}
            >
              <div className="content">
                <div className="title">Nghệ An</div>
                <div className="name">Đình Trung</div>
                <div className="des">
                  Trong phong trào Xô-Viết Nghệ Tĩnh 1930-1931, Đình Trung là
                  nơi diễn ra các hoạt động đấu tranh cách mạng của nhân dân ta.
                  Sau chính quyền Xô - Viết bị đàn áp, Đình Trung vẫn là địa
                  điểm diễn ra nhiều cuộc biểu tình của nhân dân đòi quyền lợi
                  chính đáng cho cộng đồng. Ngày 17/8/1945, Đình Trung lại chứng
                  kiến sự kiện Việt Minh lãnh đạo nhân dân làng Yên khởi nghĩa
                  giành chính quyền và chính quyền mới vẫn chọn Đình Trung làm
                  trụ sở làm việc.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
