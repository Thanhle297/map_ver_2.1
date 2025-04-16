let activeElement = null; // Biến lưu trữ ô thời gian đang được chọn
let currentIndex = 14; // Bắt đầu từ ngày 14
const intervalTime = 1000; // Thời gian giữa các mốc (ms)
let autoRunEnabled = false; // Mặc định tắt tự động chạy timeline
let autoRunInterval = null; // Lưu trữ interval

// Hàm tự động chạy timeline
function autoRunTimeline() {
  const element = document.getElementById(`${currentIndex}-8`);

  if (element) {
    element.click(); // Kích hoạt sự kiện click để hiển thị marker
    currentIndex++;

    if (currentIndex > 28) {
      currentIndex = 14; // Quay lại ngày đầu tiên
    }
  } else {
    console.error(`Phần tử với id ${currentIndex}-8 không tồn tại!`);
  }
}

// Hàm bật tự động chạy timeline
function startAutoRunTimeline() {
  if (!autoRunEnabled) return;
  autoRunInterval = setInterval(autoRunTimeline, intervalTime);
}

// Hàm tắt tự động chạy timeline
function stopAutoRunTimeline() {
  clearInterval(autoRunInterval);
  autoRunInterval = null;
}

// Hàm toggle bật/tắt tự động chạy timeline
function toggleAutoRunTimeline() {
  autoRunEnabled = !autoRunEnabled;
  if (autoRunEnabled) {
    startAutoRunTimeline();
  } else {
    stopAutoRunTimeline();
  }
}

// Không tự động chạy timeline khi tải trang
// Người dùng cần nhấn nút để bật tự động chạy

// Thêm id cho nút bật/tắt và thay text bằng icon bật/tắt của FontAwesome
const toggleButton = document.createElement("button");
toggleButton.id = "toggle-timeline-button"; // Gán id cho nút
const toggleIcon = document.createElement("i");
toggleIcon.className = "fas fa-play"; // Icon mặc định là play

toggleButton.appendChild(toggleIcon);
toggleButton.style.position = "fixed";
toggleButton.style.bottom = "10px";
toggleButton.style.right = "10px";
toggleButton.style.zIndex = "1000";
toggleButton.style.backgroundImage =
  "url(https://cdn.glitch.global/90845d8e-81a9-424d-b13a-0acd2c0b3b63/4b65a8b55dcdf3ee10db8703ec2b3be6.jpg?v=1700156070316)";
toggleButton.style.backgroundSize = "cover"; // Đảm bảo hình nền bao phủ toàn bộ nút
toggleButton.style.borderRadius = "50%";
toggleButton.addEventListener("click", function () {
  toggleAutoRunTimeline();
  // Thay đổi icon khi bật/tắt
  if (autoRunEnabled) {
    toggleIcon.className = "fas fa-pause"; // Icon khi đang chạy
  } else {
    toggleIcon.className = "fas fa-play"; // Icon khi dừng
  }
});
document.body.appendChild(toggleButton);

for (let i = 14; i <= 28; i++) {
  const element = document.getElementById(`${i}-8`);

  if (element) {
    element.addEventListener("click", function () {
      var isActive = this.classList.contains("active");

      if (isActive) {
        // Hiển thị lại tất cả marker khi bỏ chọn
        markers.forEach(function (markerObj) {
          markerObj.marker.getElement().style.display = "block";
        });

        this.classList.remove("active");
        activeElement = null;
      } else {
        // Chỉ hiển thị các marker có chứa ngày tương ứng
        markers.forEach(function (markerObj) {
          if (
            Array.isArray(markerObj.date) &&
            markerObj.date.includes(`${i}-8`)
          ) {
            // Kiểm tra trong mảng
            markerObj.marker.getElement().style.display = "block";
          } else {
            markerObj.marker.getElement().style.display = "none";
          }
        });

        this.classList.add("active");

        if (activeElement && activeElement !== this) {
          activeElement.classList.remove("active");
        }

        activeElement = this;
      }
    });
  } else {
    console.error(`Phần tử với id ${i}-8 không tồn tại!`);
  }
}
