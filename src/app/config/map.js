import mapboxgl from "mapbox-gl";


export function initializeMap() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoidGhhbmhsZTA0IiwiYSI6ImNtN2YyOXg1eTBqeWsya29lbGpkODJwYjIifQ.Hvx-Dl8T8M3JSnnT06Fgsg";

  // Kiểm tra phần tử chứa bản đồ có tồn tại không
  const mapContainer = document.getElementById("map");
  if (!mapContainer) {
    console.error("Phần tử chứa bản đồ không tồn tại.");
    return;
  }

  // Tạo bản đồ Mapbox
  const map = new mapboxgl.Map({
    container: "map", // Sử dụng ID chính xác
    style: "mapbox://styles/thanhle04/cm7lum30i00ux01si3f1u96uy",
    center: [105.8542, 21.0285],
    zoom: 6,
  });

  map.on("load", () => {
    console.log("Bản đồ đã load");

    // Thêm nguồn dữ liệu biên giới quốc gia
    map.addSource("country-boundaries", {
      type: "vector",
      url: "mapbox://mapbox.country-boundaries-v1",
    });

    // Thêm lớp hiển thị biên giới
    map.addLayer({
      id: "country-boundaries",
      type: "line",
      source: "country-boundaries",
      "source-layer": "country_boundaries",
      paint: {
        "line-color": "#000000",
        "line-width": 1,
      },
    });

    // Lọc để chỉ hiển thị Việt Nam
    map.setFilter("country-boundaries", ["==", ["get", "iso_3166_1"], "VN"]);

    // Xử lý sự kiện "Reset North"
    document.getElementById("resetNorthBtn")?.addEventListener("click", () => {
      map.rotateTo(0, { duration: 1000 });
      map.flyTo({ center: [105.8542, 21.0285], zoom: 6, duration: 1000 });
    });
  });

  return map; // Trả về đối tượng bản đồ nếu cần dùng tiếp
}
