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
  // Thêm nguồn dữ liệu cho Hoàng Sa & Trường Sa
  map.addSource("hoangsa-truongsa", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [111.5, 16.5],
                [112.0, 16.5],
                [112.0, 17.0],
                [111.5, 17.0],
                [111.5, 16.5],
              ],
            ],
          },
          properties: { name: "Quần đảo Hoàng Sa" },
        },
        {
          type: "Feature",
          geometry: {
            type: "Polygon",
            coordinates: [
              [
                [114.0, 9.0],
                [115.0, 9.0],
                [115.0, 10.0],
                [114.0, 10.0],
                [114.0, 9.0],
              ],
            ],
          },
          properties: { name: "Quần đảo Trường Sa" },
        },
      ],
    },
  });

  // Thêm lớp hiển thị biên giới Hoàng Sa & Trường Sa
  map.addLayer({
    id: "hoangsa-truongsa-border",
    type: "line",
    source: "hoangsa-truongsa",
    paint: {
      "line-color": "#ff0000",
      "line-width": 2,
      "line-dasharray": [2, 2],
    },
  });

  // Thêm nhãn tên quần đảo
  map.addLayer({
    id: "hoangsa-truongsa-label",
    type: "symbol",
    source: "hoangsa-truongsa",
    layout: {
      "text-field": ["get", "name"],
      "text-font": ["Open Sans Bold"],
      "text-size": 14,
      "text-anchor": "top",
    },
    paint: {
      "text-color": "#ff0000",
      "text-halo-color": "#ffffff",
      "text-halo-width": 2,
    },
  });

  console.log("Đã thêm Hoàng Sa & Trường Sa vào bản đồ!");

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
