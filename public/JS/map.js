mapboxgl.accessToken =
  "pk.eyJ1IjoidGhhbmhsZTA0IiwiYSI6ImNtN2YyOXg1eTBqeWsya29lbGpkODJwYjIifQ.Hvx-Dl8T8M3JSnnT06Fgsg";
// mapboxgl.accessToken = 'pk.eyJ1IjoidGhhbmhsZTA0IiwiYSI6ImNtN2YyOXg1eTBqeWsya29lbGpkODJwYjIifQ.Hvx-Dl8T8M3JSnnT06Fgsg';

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/thanhle04/cm7lum30i00ux01si3f1u96uy",
  // style: "mapbox://styles/mapbox/streets-v12",
  center: [105.8542, 21.0285],
  zoom: 6,
});
map.on("load", () => {
  const sources = map.getStyle().sources;
  console.log("Danh sách nguồn dữ liệu trong bản đồ:", sources);


  // rs hướng bắc
  // Thêm sự kiện click cho nút "Reset North"
  document
    .getElementById("resetNorthBtn")
    .addEventListener("click", function () {
      map.rotateTo(0, {
        // Quay bản đồ về hướng Bắc (0 độ)
        duration: 1000, // Thời gian quay lại hướng Bắc (ms)
      });
      map.flyTo({
        center: [105.8542, 21.0285], // Quay lại trung tâm ban đầu
        zoom: 6,
        duration: 1000, // Thời gian di chuyển về center (ms)
      });
    });

  // Lấy danh sách các lớp có trong bản đồ
  const layers = map.getStyle().layers;

  // Log danh sách các lớp để kiểm tra
  console.log(
    "Danh sách lớp trong bản đồ:",
    layers.map((layer) => layer.id)
  );
  // Thêm nguồn dữ liệu biên giới quốc gia từ Mapbox
  map.addSource("country-boundaries", {
    type: "vector",
    url: "mapbox://mapbox.country-boundaries-v1", // Tileset biên giới quốc gia của Mapbox
  });

  // Thêm lớp hiển thị biên giới
  map.addLayer({
    id: "country-boundaries",
    type: "line",
    source: "country-boundaries",
    "source-layer": "country_boundaries",
    paint: {
      "line-color": "#000000", // Màu đỏ cho biên giới
      "line-width": 1,
    },
  });

  console.log("Đã thêm lớp country-boundaries!");

  // Lọc để chỉ hiển thị Việt Nam
  map.setFilter("country-boundaries", ["==", ["get", "iso_3166_1"], "VN"]);
  if (layers.some((layer) => layer.id === "admin-0-boundary")) {
    map.setPaintProperty("admin-0-boundary", "line-color", [
      "case",
      ["==", ["get", "iso_3166_1"], "VN"],
      "#000000",
      "#fff",
    ]);
  } else {
    console.warn("Lớp 'admin-0-boundary' không tồn tại");
  }
  if (layers.some((layer) => layer.id === "admin-1-boundary")) {
    map.setPaintProperty("admin-1-boundary", "line-color", [
      "case",
      ["==", ["get", "iso_3166_1"], "VN"],
      "#000000",
      "#ffffff",
    ]);
  } else {
    console.warn("Lớp 'admin-1-boundary' không tồn tại");
  }
});
