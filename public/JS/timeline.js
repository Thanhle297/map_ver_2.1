let activeElement = null; // Biến lưu trữ ô thời gian đang được chọn

// Thêm sự kiện click vào các ô trong timeline từ ngày 14 đến 21
for (let i = 14; i <= 28; i++) {
  const element = document.getElementById(`${i}-8`);

  // Kiểm tra nếu phần tử có tồn tại trong DOM
  if (element) {
    // Sự kiện click
    element.addEventListener("click", function () {
      var isActive = this.classList.contains("active"); // Kiểm tra trạng thái (đã chọn hay chưa)

      if (isActive) {
        // Nếu ô này đã được chọn (click lại), hiển thị lại tất cả marker
        markers.forEach(function (markerObj) {
          markerObj.marker.getElement().style.display = "block"; // Hiển thị lại tất cả các marker
        });

        // Xóa trạng thái active
        this.classList.remove("active");
        activeElement = null; // Đặt lại activeElement là null
      } else {
        // Nếu chưa được chọn, chỉ hiển thị các marker có ngày tương ứng và ẩn các marker khác
        markers.forEach(function (markerObj) {
          if (markerObj.date === `${i}-8`) {
            markerObj.marker.getElement().style.display = "block"; // Hiển thị các marker có ngày tương ứng
          } else {
            markerObj.marker.getElement().style.display = "none"; // Ẩn các marker không phải ngày đó
          }
        });

        // Toggle trạng thái active khi click (giúp click lại hiển thị lại tất cả)
        this.classList.add("active");

        // Nếu có ô active cũ, bỏ active cũ và ẩn các marker không phải của ngày cũ
        if (activeElement && activeElement !== this) {
          activeElement.classList.remove("active"); // Xóa active ở ô cũ
          markers.forEach(function (markerObj) {
            if (markerObj.date !== `${i}-8`) {
              markerObj.marker.getElement().style.display = "none"; // Ẩn các marker không thuộc ô cũ
            }
          });
        }

        activeElement = this; // Cập nhật ô hiện tại đang được chọn
      }
    });
  } else {
    console.error(`Phần tử với id ${i}-8 không tồn tại!`);
  }
}
