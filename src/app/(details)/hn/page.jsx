import Link from "next/link";
import Script from "next/script";
import React from "react";
import "./style.scss";
// import "/public/HN/style.css"

export default function HN() {
  return (
    <>
      {/* <link rel="stylesheet" href="./HN/style.css" /> */}

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
              style={{ backgroundImage: "url(HN/img/HN10.jpg)" }}
            >
              <div className="content">
                <div className="title">HÀ NỘI</div>
                <div className="name">Cột Cờ Hà Nội</div>
                <div className="des">
                  Trong thời kỳ Pháp thuộc, Cột cờ Hà Nội được quân Pháp dùng để
                  làm đài quan sát. Năm 1945, sau khi Cách mạng tháng Tám thành
                  công, lá cờ đỏ sao vàng lần đầu tiên được treo lên Cột cờ Hà
                  Nội.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(HN/img/HN3.jpg)" }}
            >
              <div className="content">
                <div className="title">HÀ NỘI</div>
                <div className="name">Quảng trường Ba Đình</div>
                <div className="des">
                  Quảng trường Ba Đình, Hà Nội là nơi Chủ tịch Hồ Chí Minh đã
                  đọc bản Tuyên ngôn độc lập khai sinh ra nước Việt Nam Dân chủ
                  Cộng hòa, ngày 2/9/1945, sau sự toàn thắng của cuộc Cách mạng
                  Tháng Tám.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(HN/img/HN1.jpg)" }}
            >
              <div className="content">
                <div className="title">Hà Nội</div>
                <div className="name">Nhà Hát Lớn</div>
                <div className="des">
                  Nhà hát Lớn Hà Nội và quảng trường trước nhà hát là nơi diễn
                  ra những sự kiện lịch sử trọng đại gắn liền với cuộc Cách mạng
                  Tháng Tám. Ngày 17/8/1945, một cuộc mít-tinh do chính phủ bù
                  nhìn Trần Trọng Kim tổ chức tại đây đã biến thành một cuộc
                  biểu dương lực lượng cách mạng của Việt Minh. Ngày 19/8/1945,
                  một cuộc mít-tinh lớn của cách mạng diễn ra ở quảng trường Nhà
                  hát lớn. Đoàn biểu tình sau đó tỏa thành nhiều mũi tiến hành
                  tổng khởi nghĩa trên toàn thành phố.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(HN/img/Hn4.jpg)" }}
            >
              <div className="content">
                <div className="title">Hà Nội</div>
                <div className="name">Bắc Bộ Phủ</div>
                <div className="des">
                  Bắc Bộ phủ (nay ở số 12 phố Ngô Quyền, Hà Nội) từng là nơi đặt
                  trụ sở chính quyền thực dân ở Bắc kỳ. Sau khi Nhật đảo chính
                  Pháp ngày 9/3/1945, tòa nhà được đổi thành Phủ khâm sai của
                  chính phủ Trần Trọng Kim. Khi tổng khởi nghĩa nổ ra ở Hà Nội
                  ngày 19/8/1945, lực lượng Việt Minh cùng nhân dân Hà Nội đã
                  tiến công và chiếm giữ tòa nhà mang tính biểu tượng của chế độ
                  thực dân này.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(HN/img/HN6.jpg)" }}
            >
              <div className="content">
                <div className="title">Hà Nội</div>
                <div className="name">Nhà 48 Hàng Ngang</div>
                <div className="des">
                  Nằm giữa khu phố cổ Hà Nội, ngôi nhà 48 Hàng Ngang (quận Hoàn
                  Kiếm, Hà Nội) của nhà tư sản Trịnh Văn Bô đã được TW Đảng chọn
                  làm nơi ở và làm việc của Chủ tịch Hồ Chí Minh trong những
                  ngày đầu Người từ chiến khu Việt Bắc trở về thủ đô tháng
                  8/1945. Tại đây, nhiều chủ trương, chính sách quan trọng của
                  cuộc Cách mạng Tháng Tám đã được đề ra. Đặc biệt, tại một căn
                  phòng trên tầng 2 của ngôi nhà này, Hồ Chủ tịch đã soạn thảo
                  bản “Tuyên ngôn độc lập” khai sinh ra nước Việt Nam Dân chủ
                  Cộng hòa.
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(HN/img/HN7.jpg)" }}
            >
              <div className="content">
                <div className="title">Hà Nội</div>
                <div className="name">nhà số 101 trần hưng đạo</div>
                <div className="des">
                  Ngôi nhà số 101 Trần Hưng Đạo là một điểm di tích quan trọng
                  trong chuỗi những di tích cách mạng, kháng chiến ở Hà Nội. Tấm
                  biển đá hình chữ nhật trước cửa tòa nhà 5 tầng vẫn ghi rõ nội
                  dung “Ngày 18/8/1945, nơi đây là trụ sở Ủy ban quân sự cách
                  mạng Hà Nội (Ủy ban khởi nghĩa)
                </div>
              </div>
            </div>
            <div
              className="item"
              style={{ backgroundImage: "url(HN/img/HN8.jpg)" }}
            >
              <div className="content">
                <div className="title">Hà Nội</div>
                <div className="name">Trại Bảo an binh</div>
                <div className="des">
                  Trại Bảo an binh ở Hà Nội là nơi đã diễn ra cuộc đấu trí giữa
                  lực lượng cách mạng với quân đội được trang bị vũ khí hạng
                  nặng của Nhật Bản. Bằng sự biểu dương sức mạnh quần chúng và
                  lý lẽ của các nhà lãnh đạo cách mạng, quân Nhật đã chấp nhận
                  rút lui, ta hoàn toàn làm chủ Trại Bảo an binh, góp phần vào
                  thắng lợi của cuộc Tổng khởi nghĩa ở Hà Nội.
                </div>
              </div>
            </div>
            {/* <div
              className="item"
              style={{ backgroundImage: "url(HN/img/HN10.jpg)" }}
            >
              <div className="content">
                <div className="title">Hà Nội</div>
                <div className="name">Cột Cờ Hà Nội</div>
                <div className="des">
                  Trong thời kỳ Pháp thuộc, Cột cờ Hà Nội được quân Pháp dùng để
                  làm đài quan sát. Năm 1945, sau khi Cách mạng tháng Tám thành
                  công, lá cờ đỏ sao vàng lần đầu tiên được treo lên Cột cờ Hà
                  Nội.
                </div>
              </div>
            </div> */}
          </div>
          {/*next prev button*/}
          <div className="arrows">
            <button className="prev">&lt;</button>
            <button className="next">&gt;</button>
          </div>
          {/* time running */}
          {/* <div class="timeRunning"></div> */}
        </div>
      </div>

      <Script src="./JS/app.js"></Script>
    </>
  );
}
