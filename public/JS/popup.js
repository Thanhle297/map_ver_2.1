var locations = [
  {
    lat: 10.8231,
    lng: 106.6297,
    title: "Sài Gòn",
    description: [
      "Đêm 24-8,quần chúng ngoại thành kéo vào thành phố.",
      "Sáng 25-8, hơn triệu quần chúng tham gia biểu tình tuần hành thị uy, chiếm các công sở của địch.",
    ],
    url: "/sg",
    images: [
      "https://via.placeholder.com/300x200?text=SG+1",
      "https://via.placeholder.com/300x200?text=SG+2",
    ],
    date: ["24-8", "25-8"],
  },
  {
    lat: 21.0285,
    lng: 105.8542,
    title: "Hà Nội",
    description: [
      "Hà Nội, ngày 15-8, lệnh khởi nghĩa về tới Hà Nội.",
      "Ngày 16-8, truyền đơn, biểu ngữ kêu gọi khởi nghĩa xuất hiện khắp nơi.",
      "Chiều 17-8, Tổng hội viên chức tổ chức mít tỉnh tại Nhà hát lớn. Đảng bộ Hà đã huy động quần chúng tuần hành qua các phố sau cuộc mít tỉnh, kêu gọi khởi nghĩa",
      "Ngày 18-8, quần chúng tiếp tục biểu tình tuần hành.",
      "Sáng 19-8, cuộc khởi nghĩa thắng lợi hoàn toàn.",
    ],
    url: "/hn",
    images: [
      "https://media.vietnamplus.vn/images/a7fbfd9e5c1d6608653ae975a700bd65da1d5a3d4473ce567871e19941f8b0303f2458653d009a2d8eee45b35527a284a74f6b1bfe70b3203772c7979020cefa/khoi_nghia.jpg",
      "https://file3.qdnd.vn/data/images/0/2022/08/06/duyhoan_kh/vua-hung-180520.jpg?dpi=150&quality=100&w=870",
      "https://file3.qdnd.vn/data/images/0/2022/07/25/huyentrang_km/2.jpg",
      "https://file3.qdnd.vn/data/images/0/2022/07/25/huyentrang_km/2.jpg",
      "https://file3.qdnd.vn/data/images/0/2022/07/25/huyentrang_km/2.jpg",
    ],
    date: ["15-8", "16-8", "17-8", "18-8", "19-8"],
  },
  {
    lat: 16.4637,
    lng: 107.5909,
    title: "Thừa Thiên Huế",
    description: [
      "Ngày 23/8,Đảng bộ Ủy ban khối nghĩa Thừa Thiên - Huế huy động quần chúng nội,ngoại thành tiến hành biểu dương lực lượng.",
      "Ngày 30/8,Vua Bảo Đại tuyên bố thoái vị.Chế độ phong kiến Việt Nam hoàn toàn sụp đổ.",
    ],
    url: "/hue",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_cVWE27TCsMUIM_GZy-TeDZ0eKtvNYKNnmA&s",
      "https://mediafile.qdnd.vn/images/2022/8/29/nnnx3008.jpg",
    ],
    date: ["23-8"],
  },
  {
    lat: 19.807,
    lng: 105.7795,
    title: "Thanh Hóa",
    description: [
      "Sáng ngày 19-8-1945, quần chúng cách mạng và tự vệ với băng cờ, khẩu hiệu, vũ khí thô sơ tổ chức biểu tình xuất phát từ phố Lò Chum đến phố Trường Thi, về ngã tư chùa Hai Voi qua phố Paul-Bert, đến khách sạn Reynard.",
      "Chiều ngày 20-8-1945, UBNDCM lâm thời thị xã Thanh Hóa ra mắt đồng bào.",
    ],
    url: "/thanhhoa",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzg0Sn74v4XmyEXlMwegwUJJ98Dv6v1HxqA&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzg0Sn74v4XmyEXlMwegwUJJ98Dv6v1HxqA&s",
    ],
    date: ["20-8"],
  },
  {
    lat: 21.598,
    lng: 105.8445,
    title: "Thái Nguyên",
    description: [
      "Chiều 16/8/1945, một đơn vị quân Giải phóng do các đồng chí: Võ Nguyên Giáp và Trần Đăng Ninh trực tiếp chỉ huy xuất phát từ Tân Trào (Sơn Dương, Tuyên Quang) tiến về đánh Nhật ở thị xã Thái Nguyên.",
      "Chiều 20-8, tại sân vận động Thái Nguyên, đồng chí Võ Nguyên Giáp thay mặt Ủy ban Khởi nghĩa toàn quốc tuyên bố xóa bỏ chính quyền của địch, thành lập Ủy ban Nhân dân cách mạng lâm thời tỉnh Thái Nguyên, do đồng chí Lê Trung Đình làm Chủ tịch.",
    ],
    url: "/thainguyen",
    images: ["./IMG/cmt8.jpg", "./IMG/cmt8.jpg"],
    date: ["16-8", "20-8"],
  },
  {
    lat: 21.8225,
    lng: 105.2122,
    title: "Tuyên Quang",
    description: [
      "Ngày 21-8-1945, cuộc khởi nghĩa giành chính quyền ở thị xã Tuyên Quang giành thắng lợi.",
      " Sáng ngày 22-8-1945, thị xã Tuyên Quang sôi động náo nhiệt, cờ đỏ sao vàng, biểu ngữ được giương cao khắp các ngả đường.",
    ],
    url: "/tuyenquang",
    images: ["./IMG/cmt8.jpg", "./IMG/cmt8.jpg"],
    date: ["21-8", "22-8"],
  },
  {
    lat: 21.2719,
    lng: 106.1951,
    title: "Bắc Giang",
    description: [
      "Tỉnh Bắc Giang là một trong những tỉnh đầu tiên khởi nghĩa giành được chính quyền cấp tỉnh vào ngày 18 tháng 8 năm 1945 tại thị xã Phủ Lạng Thương.",
    ],
    url: "/bacgiang",
    images: ["./IMG/cmt8.jpg"],
    date: ["18-8"],
  },
  {
    lat: 20.976,
    lng: 106.3132,
    title: "Hải Dương",
    description: [
      "Ngày 17.8.1945, huyện Cẩm Giàng khởi nghĩa thành công, mở đầu cho Tổng khởi nghĩa giành chính quyền ở Hải Dương",
    ],
    url: "/haiduong",
    images: ["./IMG/cmt8.jpg"],
    date: ["18-8"],
  },
  {
    lat: 18.338,
    lng: 105.9042,
    title: "Hà Tĩnh",
    description: [
      "Ngày 17-8-1945, Ủy ban Khởi nghĩa phân khu Nam Hà ra lệnh cho các huyện Thạch Hà, Cẩm Xuyên giành chính quyền, tạo hậu thuẫn cho Hà Tĩnh. Quần chúng cách mạng bao vây Đồn Trường, giải phóng tù nhân và buộc huyện trưởng giao ấn tín",
      "Sáng 18-8, Ủy ban Khởi nghĩa yêu cầu quân Nhật không can thiệp và tổ chức bao vây tỉnh lỵ, Tỉnh trưởng Hà Văn Đại đầu hàng, trao trả chính quyền. Cuộc khởi nghĩa thành công, chính quyền cách mạng lâm thời ra mắt vào trưa cùng ngày.",
    ],
    url: "/hatinh",
    images: ["./IMG/cmt8.jpg", "./IMG/cmt8.jpg"],
    date: ["17-8", "18-8"],
  },
  {
    lat: 15.58,
    lng: 108.1482,
    title: "Quảng Nam",
    description: [
      "Đêm 17.8.1945, nhận thấy tình hình thuận lợi, Thường trực Ủy ban bạo động báo cáo và được Tỉnh ủy quyết định khởi nghĩa giành chính quyền ở Hội An.",
    ],
    url: "/quangnam",
    images: ["./IMG/cmt8.jpg"],
    date: ["18-8"],
  },
  {
    lat: 20.4474,
    lng: 106.3279,
    title: "Thái Bình",
    description: [
      "Vào tháng 8/1945, nhân dân Thái Bình khởi nghĩa giành chính quyền dù chưa nhận lệnh từ Trung ương. Từ 18-23/8/1945, chính quyền ở các cấp đều về tay nhân dân. Ngày 25/8/1945, 1 vạn người tham dự mít tinh chào mừng Ủy ban nhân dân cách mạng lâm thời. Thắng lợi này mở ra kỷ nguyên độc lập, tự do cho Thái Bình",
    ],
    url: "./thaibinh",
    images: ["./IMG/cmt8.jpg"],
    date: ["19-8"],
  },
  {
    lat: 21.3089,
    lng: 105.6049,
    title: "Phúc Yên",
    description: [
      "Cuộc khởi nghĩa giành chính quyền đã thắng lợi ở các huyện Yên Lãng (20-8-1945), Đông Anh (21-8-1945), Đa Phúc (23-8-1945). Ngày 30-8-1945, Ủy ban nhân dân cách mạng lâm thời tỉnh Phúc Yên thành lập.",
    ],
    images: ["./IMG/cmt8.jpg"],
    date: ["21-8"],
  },
  {
    lat: 12.2451,
    lng: 109.1943,
    title: "Khánh Hòa",
    description: [
      "Đêm 12-8: Lãnh đạo Việt Minh tỉnh họp và thống nhất phát động khởi nghĩa trong toàn tỉnh.",
      "Trưa 19-8: Từng đoàn người kéo về sân vận động Nha Trang, các đội tự vệ cách mạng và lực lượng yêu nước bám chặt  quan lại và những người Việt gian đầu sỏ để sẵn sàng trấn áp ngay hành động chống đối của họ.",
      " Đến 15 giờ, 19-8, lá cờ đỏ sao vàng được kéo lên, tuyên bố xóa bỏ chính quyền bù nhìn, giành chính quyền về tay Mặt trận Việt Minh",
    ],
    url: "/khanhhoa",
    images: ["./IMG/cmt8.jpg", "./IMG/cmt8.jpg", "./IMG/cmt8.jpg"],
    date: ["19-8"],
  },
  {
    lat: 21.186,
    lng: 106.0763,
    title: "Bắc Ninh",
    description: [
      "Cuộc khởi nghĩa giành chính quyền tại Bắc Ninh diễn ra nhanh chóng và giành thắng lợi: Huyện Tiên Du (17/8), Từ Sơn (18/8), Lang Tài, Yên Phong (19/8), Gia Bình, Thuận Thành (20/8), Tỉnh lỵ thành phố Bắc Ninh và Võ Giàng (20/8), Văn Giang (21/8), Quế Dương (22/8). Thành công này đánh dấu sự sụp đổ hoàn toàn của chính quyền tay sai phát-xít Nhật tại tỉnh Bắc Ninh.",
    ],
    url: "/bacninh",
    images: ["./IMG/cmt8.jpg"],
    date: ["20-8"],
  },
  {
    lat: 20.2506,
    lng: 105.9745,
    title: "Ninh Bình",
    description: [
      "Sáng ngày 19/8/1945, huyện lỵ Gia Viễn được giải phóng.",
      " Ngày 20/8/1945, huyện lỵ Gia Khánh và tỉnh lỵ Ninh Bình cũng được giải phóng.",
      "Sau khi giành chính quyền tại tỉnh, ngày 21/8/1945, Việt Minh ở các huyện Yên Mô, Yên Khánh và Kim Sơn đã lãnh đạo quần chúng khởi nghĩa giành chính quyền.",
      " Ngày 25/8/1945, UBND Cách mạng lâm thời tỉnh Ninh Bình được thành lập, đánh dấu kết thúc thắng lợi cuộc khởi nghĩa trong Cách mạng Tháng Tám trên toàn tỉnh.",
    ],
    url: "/ninhbinh",
    images: [
      "./IMG/cmt8.jpg",
      "./IMG/cmt8.jpg",
      "./IMG/cmt8.jpg",
      "./IMG/cmt8.jpg",
    ],
    date: ["19-8", "20-8", "21-8", "25-8"],
  },
  {
    lat: 21.7229,
    lng: 104.9113,
    title: "Yên Bái",
    description: [
      "Ngày 21/8, Ủy ban Khởi nghĩa chính thức tiếp quản thị xã, địa bàn cuối cùng của tỉnh Yên Bái được giải phóng.",
      "Ngày 22/8/1945, hàng ngàn người dân thị xã và các vùng xung quanh tập trung ở vườn hoa Nhà Kèn, dự mít tinh chào mừng khởi nghĩa Yên Bái thắng lợi, chấm dứt chế độ thực dân, phong kiến, một kỷ nguyên mới ra đời, kỷ nguyên của một nước độc lập, tự do.",
    ],
    url: "/yenbai",
    images: ["./IMG/cmt8.jpg", "./IMG/cmt8.jpg"],
    date: ["20-8"],
  },
  {
    lat: 22.147,
    lng: 105.8348,
    title: "Bắc Kạn",
    description: [
      "Ngày 21-8-1945, các đơn vị quân giải phóng, lực lượng tự vệ và nhân dân vùng giải phóng tiến vào thị xã, xóa bỏ chính quyền tay sai của Nhật",
      "Ngày 23-8-1945, đoàn xe chở 400 quân Nhật rút khỏi thị xã Bắc Kạn, toàn tỉnh Bắc Kạn sạch bóng quân thù.",
    ],
    images: ["./IMG/cmt8.jpg", "./IMG/cmt8.jpg"],
    date: ["21-8"],
  },
  {
    lat: 20.4373,
    lng: 106.1621,
    title: "Nam Định",
    description: [
      "Sau quá trình đấu tranh của nhân dân, ngày 21-8, cuộc mít tinh lớn được tổ chức tại Dốc Lò Trâu (phía đường Hưng Yên, phía phải đường Trường Chinh hiện nay). Trước lễ đài rợp màu băng rôn, cờ đỏ sao vàng, gần ba vạn nhân dân nội, ngoại thành mừng vui khởi nghĩa thắng lợi và lắng nghe hiệu triệu của Việt Minh về thực hiện 10 chính sách của Mặt trận Việt Minh. Uỷ ban Khởi nghĩa tuyên bố xóa bỏ chính quyền bù nhìn, thiết lập chính quyền cách mạng.",
    ],
    url: "/namdinh",
    images: ["./IMG/cmt8.jpg"],
    date: ["21-8"],
  },
  {
    lat: 19.2342,
    lng: 104.92,
    title: "Nghệ An",
    description: [
      "Cuộc khởi nghĩa giành chính quyền tháng 8/1945 trong cả tỉnh Nghệ An rộng lớn đã thắng lợi rực rỡ trong vòng 9 ngày. Thắng lợi của cuộc khởi nghĩa giành chính quyền ở Nghệ An là kết quả của cả một quá trình đấu tranh, lâu dài, đầy gian khổ, hi sinh và phức tạp của các tầng lớp nhân dân, kể từ lúc thực dân Pháp đặt chân lên đất Nghệ An. Đó cũng là tất yếu của những cuộc diễn tập nhiều xương máu, hi sinh của Đảng bộ và nhân dân tỉnh Nghệ An.",
    ],
    url: "/nghean",
    images: ["./IMG/cmt8.jpg"],
    date: ["21-8"],
  },
  {
    lat: 11.5675,
    lng: 108.9886,
    title: "Ninh Thuận",
    description: [
      "Ngày 21/8/1945, khởi nghĩa giành chính quyền trong Cách mạng Tháng Tám năm 1945 ở Ninh Thuận thành công, chính quyền về tay Nhân dân. Ninh Thuận tự hào là một trong ba tỉnh giành chính quyền thắng lợi sớm nhất miền Nam (sau Quảng Nam 18/8 và Khánh Hòa 19/8).",
    ],
    url: "/ninhthuan",
    images: ["./IMG/cmt8.jpg"],
    date: ["21-8"],
  },
  {
    lat: 22.6667,
    lng: 106.25,
    title: "Cao Bằng",
    description: [
      "Rạng sáng 21/8/1945, dưới sự hỗ trợ của nhân dân, một bộ phận quân giải phóng tỉnh đã vượt sông Hiến tiến vào thị xã.",
      " Sáng 22/8/1945, UBND lâm thời tỉnh và thị xã tổ chức cuộc tuần hành trên đường phố để biểu dương lực lượng cách mạng, sau đó tổ chức mít tinh tuyên bố xóa bỏ chính quyền Nhật và tay sai, đồng thời thành lập UBND lâm thời thị xã.",
    ],
    url: "/caobang",
    images: ["./IMG/cmt8.jpg", "./IMG/cmt8.jpg"],
    date: ["22-8"],
  },
  {
    lat: 20.6469,
    lng: 106.0511,
    title: "Hưng Yên",
    description: [
      "Tại tỉnh Hưng Yên, từ ngày 14 đến ngày 21/8/1845 cuộc khởi nghĩa vũ trang giành chính quyền thắng lợi lần lượt tại các huyện trên địa bàn tỉnh.",
      "Ngày 22/8/1945, hàng vạn người tiến vào tỉnh lỵ biểu tình, mít tinh giành chính quyền, Ủy ban Nhân dân Cách mạng lâm thời tỉnh Hưng Yên được thành lập",
    ],
    url: "/hungyen",
    images: ["./IMG/cmt8.jpg", "./IMG/cmt8.jpg"],
    date: ["22-8"],
  },
  {
    lat: 20.8449,
    lng: 106.6881,
    title: "Kiến An (Hải Phòng)",
    description: [
      "Tháng Tám năm 1945, Hải Phòng - Kiến An sục sôi hào khí cách mạng cùng cả nước. Bắt đầu từ tiếng trống Kim Sơn, giành chính quyền ở huyện Kiến Thụy ngày 15-8-1945, huyện An Lão (17-8), Vĩnh Bảo (20-8), Tiên Lãng (20-8), Thủy Nguyên (22-8); để đến sáng ngày 23-8-1945, tại cuộc mít tinh có cả vạn người tham gia ở trung tâm thành phố, Ủy ban khởi nghĩa thành phố tuyên bố xóa bỏ chính quyền tay sai phát xít Nhật, thành lập Ủy ban cách mạng lâm thời Hải Phòng.",
    ],
    images: ["./IMG/cmt8.jpg"],
    date: ["22-8"],
  },
  {
    lat: 10.5359,
    lng: 106.4131,
    title: "Tân An (Long An)",
    description: [
      " Ngày 21-8-1945, Tỉnh ủy Tân An chớp thời cơ lãnh đạo nhân dân trong tỉnh đứng lên khởi nghĩa giành chính quyền trong phạm vi toàn tỉnh. Cuộc khởi nghĩa giành chính quyền trong toàn tỉnh Tân An sau hơn 24 giờ, kể từ 13 giờ ngày 21-8 đến chiều 22-8",
    ],
    url: "/longan",
    images: ["./IMG/cmt8.jpg"],
    date: ["22-8"],
  },
  {
    lat: 20.8133,
    lng: 105.213,
    title: "Hòa Bình",
    description: [
      "Trong vòng 7 ngày (từ ngày 20 - 26/8/1945), Đảng bộ tỉnh chỉ có 9 đảng viên đã lãnh đạo Nhân dân các dân tộc trong tỉnh nổi dậy giành chính quyền thắng lợi trọn vẹn, góp phần cùng cả nước lập nên thắng lợi vĩ đại trong Cách mạng Tháng Tám năm 1945.",
    ],
    images: ["./IMG/cmt8.jpg"],
    date: ["23-8"],
  },
  {
    lat: 17.467,
    lng: 106.6223,
    title: "Quảng Bình",
    description: [
      " Trong đêm 22 rạng sáng ngày 23 tháng 8 năm 1945, cuộc khởi nghĩa giành chính quyền nổ ra và thắng lợi ở các phủ lỵ, huyện lỵ,Quảng Ninh, Bố Trạch, Lệ Thủy, Quảng Trạch, Tuyên Hóa. Đa số Ủy ban khởi nghĩa các phủ, huyện lập tức chuyển thành Ủy ban Nhân dân cách mạng lâm thời ra mắt nhân dân ngay sau khi chiếm xong phủ ly, huyện ly. Riêng huyện Tuyên Hóa, ngày 25 tháng 8 năm 1945, tỉnh cử cán bộ lên cùng với Mặt trận Việt Minh huyện tổ chức mít tinh tuyên bố giải tán ngụy quyền cấp huyện, thành lập chính quyền cách mạng.",
    ],
    url: "/quangbinh",
    images: ["./IMG/cmt8.jpg"],
    date: ["23-8"],
  },
  {
    lat: 16.75,
    lng: 107.2,
    title: "Quảng Trị",
    description: [
      "5 giờ sáng ngày 23/8/1945, đồng chí Trần Hữu Dực trèo lên tầng trên dinh tỉnh trưởng (tức Tòa công sứ Pháp) giật phăng lá cờ bù nhìn xuống, kéo lên lá cờ đỏ sao vàng tung bay kiêu hãnh. Ở hành cung trong thành Dương Đậu, cờ cách mạng cũng được kéo lên, chấm dứt chế độ phong kiến, thực dân.",
      "Đến 9 giờ ngày 23/8/1945, trước tòa công sứ Pháp, một cuộc mít tinh lớn được tổ chức với hàng ngàn quần chúng nhân dân tham gia. Thay mặt Ủy ban khởi nghĩa tỉnh, đồng chí Trần Hữu Dực trịnh trọng tuyên bố: xóa bỏ chính quyền cũ, thành lập chính quyền cách mạng.",
    ],
    images: ["./IMG/cmt8.jpg", "./IMG/cmt8.jpg"],
    date: ["23-8"],
  },
  {
    lat: 13.782,
    lng: 109.2198,
    title: "Bình Định",
    description: [
      "Trong chín ngày, từ 23 đến 31 tháng 8 năm 1945, cuộc khởi nghĩa trong toàn tỉnh đã giành được thắng lợi rực rỡ. Với thắng lợi của Cách mạng tháng Tám, nhân dân Bình Định thoát khỏi cảnh sống của dân nô lệ, trở thành người làm chủ đất nước.",
    ],
    url: "/binhdinh",
    images: ["./IMG/cmt8.jpg"],
    date: ["23-8"],
  },
  {
    lat: 11.75,
    lng: 108.25,
    title: "Lâm Đồng",
    description: [
      "Chỉ trong vòng 7 ngày (từ 22 đến 28/8/1945) với khí thế cách mạng của quần chúng nhân dân mà hạt nhân là lãnh đạo các chi bộ Đảng, các tổ chức quần chúng và lực lượng tự vệ, nhân dân hai tỉnh Lâm Viên và Đồng Nai Thượng (Lâm Đồng ngày nay) đã tiến hành khởi nghĩa giành chính quyền thắng lợi, thành lập chính quyền Việt Minh từ tỉnh đến cơ sở.",
    ],
    images: ["./IMG/cmt8.jpg"],
    date: ["23-8"],
  },
  {
    lat: 13.9833,
    lng: 108.0,
    title: "Gia Lai",
    description: [
      "Đúng 10 giờ sáng 23-8-1945, các tầng lớp nhân dân thị xã, các vùng lân cận; đại diện lực lượng khởi nghĩa của huyện An Khê và lực lượng binh lính bảo an giác ngộ dự cuộc mít tinh lớn tại sân vận động trung tâm thị xã Pleiku dưới rừng cờ đỏ sao vàng Tổ quốc tung bay, trong niềm kiêu hãnh, hân hoan vui mừng của mọi người. Tại cuộc mít tinh, ông Trần Ngọc Vỹ, đại diện lực lượng quần chúng khởi nghĩa tuyên bố xóa bỏ hoàn toàn bộ máy chính quyền cũ, thành lập chính quyền cách mạng, kêu gọi đồng bào các dân tộc trong tỉnh triệt để thi hành các chủ trương, chính sách đoàn kết dân tộc của Mặt trận Việt Minh, ủng hộ Ủy ban Dân tộc giải phóng do Hồ Chí Minh làm Chủ tịch",
    ],
    images: ["./IMG/cmt8.jpg"],
    date: ["23-8"],
  },
  {
    lat: 9.2941,
    lng: 105.7278,
    title: "Bạc Liêu",
    description: [
      "Sáng 23/8/1945, lực lượng ta tập trung bao vây khép kín dinh Tỉnh trưởng. Trước khí thế cách mạng sôi sục, Tỉnh trưởng Thiện buộc phải đầu hàng. Sau đó, liên tiếp những cuộc mít-tinh gây áp lực cho phe địch sau đó đã diễn ra. Từ ngày 23 - 25/8 ở Bạc Liêu, chính quyền của địch từ tỉnh đến quận và cơ sở đã về tay Nhân dân.",
    ],
    images: ["./IMG/cmt8.jpg"],
    date: ["23-8"],
  },
  {
    lat: 20.5833,
    lng: 105.9167,
    title: "Hà Nam",
    description: [
      "Ban Cán sự Việt Minh họp kiểm điểm tình hình mọi mặt và quyết định khởi nghĩa vào ngày 24/8 để cùng phối hợp lực lượng khởi nghĩa giành chính quyền tỉnh lỵ ở thị xã Phủ Lý. Vào hồi 5 giờ sáng ngày 24/8, hơn một ngàn tự vệ cùng đông đảo quần chúng cách mạng tiến về tập kết tại cơ sở Thượng Tổ. Sau khi lực lượng cách mạng bao vây chính quyền địch ở thị xã Phủ Lý, bọn ngụy quyền ở Thanh Liêm khiếp nhược trước thế lực của Cách mạng, vội vã đầu hàng.",
    ],
    url: "/hanam",
    images: ["./IMG/cmt8.jpg"],
    date: ["24-8"],
  },
  {
    lat: 20.95,
    lng: 107.0833,
    title: "Quảng Yên (Quảng Ninh)",
    description: [
      "Ngày 19-8-1945, nhân dân Hà Nội giành được chính quyền trọn vẹn. Tin vui này đã thôi thúc nhân dân Quảng Ninh tiếp tục đứng lên",
      "Ngày 24-8-1945, tại TX Quảng Yên, UBND Cách mạng lâm thời của tỉnh đã ra mắt nhân dân.",
    ],
    images: ["./IMG/cmt8.jpg", "./IMG/cmt8.jpg"],
    date: ["24-8"],
  },
  {
    lat: 12.6667,
    lng: 108.05,
    title: "Đắk Lắk",
    description: [
      "Chiều ngày 24/8/1945, tại sân vận động thị xã, cuộc mít tinh giành chính quyền diễn ra trước sự chứng kiến của hơn 3.000 nhân dân thuộc mọi giai cấp, dân tộc. Đại diện của Việt Minh lên lễ đài, nhân danh cách mạng tuyên bố xóa bỏ chế độ thống trị của Nhật và tay sai, tuyên bố thành lập chính quyền cách mạng.",
    ],
    url: "/daklak",
    images: ["./IMG/cmt8.jpg"],
    date: ["24-8"],
  },
  {
    lat: 13.1167,
    lng: 109.3,
    title: "Phú Yên",
    description: [
      "Ngay sau khi nhận mệnh lệnh tổng khởi nghĩa của Xứ ủy Trung kỳ, ngày 23/8/1945, Tỉnh ủy lâm thời và Ủy ban Việt Minh lâm thời tỉnh họp quyết định tổng khởi nghĩa vào nửa đêm 24/8/1945.",
      "Trong đêm 24 rạng sáng 25/8/1945, Ủy ban Khởi nghĩa lần lượt chiếm đồn khố xanh Sông Cầu, kéo đến dinh tỉnh trưởng, ra lệnh tỉnh trưởng đầu hàng giao nộp tài liệu, ấn tín cho Ủy ban Khởi nghĩa; tuyên bố chính quyền thực dân phong kiến bị xóa bỏ.",
    ],
    url: "/phuyen",
    images: ["./IMG/cmt8.jpg", "./IMG/cmt8.jpg"],
    date: ["24-8"],
  },
  {
    lat: 10.3603,
    lng: 106.3639,
    title: "Gò Công (Tiền Giang)",
    description: [
      "Cách mạng Tháng Tám năm 1945 ở Gò Công thành công nhanh chóng là do toàn dân đoàn kết, đồng lòng vùng dậy khởi nghĩa giành lại chính quyền về tay nhân dân dưới sự lãnh đạo của Đảng.",
    ],
    images: ["./IMG/cmt8.jpg"],
    date: ["24-8"],
  },
  {
    lat: 10.3603,
    lng: 106.3639,
    title: "Mỹ Tho (Tiền Giang)",
    description: [
      "Cách mạng Tháng Tám năm 1945 ở Mỹ Tho thành công nhanh chóng là do toàn dân đoàn kết, đồng lòng vùng dậy khởi nghĩa giành lại chính quyền về tay nhân dân dưới sự lãnh đạo của Đảng.",
    ],
    images: ["./IMG/cmt8.jpg"],
    date: ["18-8"],
  },
  {
    lat: 21.8526,
    lng: 106.7615,
    title: "Lạng Sơn",
    description: [
      "Ngay đêm 24/8, các lực lượng vũ trang tiến về giải phóng tỉnh lỵ, rạng sáng 25/8, lực lượng cách mạng tiến vào thị xã. Ngay chiều hôm đó, Tỉnh bộ Việt Minh tổ chức mít tinh tuyên bố xóa bỏ chính quyền thực dân phong kiến, công bố 10 chính sách của Việt Minh, kêu gọi Nhân dân đoàn kết bảo vệ quê hương, ủng hộ Chính phủ lâm thời do Chủ tịch Hồ Chí Minh đứng đầu",
    ],
    url: "/langson",
    images: ["./IMG/cmt8.jpg"],
    date: ["25-8"],
  },
  {
    lat: 21.3833,
    lng: 105.2333,
    title: "Phú Thọ",
    description: [
      "Đến ngày 22/8/1945 tất cả 11 phủ, châu, huyện của tỉnh Phú Thọ đã tiến hành khởi nghĩa thành công. Sáng ngày 25-8-1945, theo đúng kế hoạch đã vạch ra, các thành viên UBND cách mạng lâm thời tỉnh đã dẫn đầu từng đơn vị LLVT đến tiếp quản các công sở. Công việc chiếm đóng các công sở, xóa bỏ chính quyền bù nhìn tay sai Nhật diễn ra mau lẹ. Ngày 25/8/1945 cũng là ngày kết thúc thắng lợi cuộc khởi nghĩa trong Cách mạng tháng Tám trên phạm vi toàn tỉnh",
    ],
    url: "/phutho",
    images: ["./IMG/cmt8.jpg"],
    date: ["25-8"],
  },
  {
    lat: 14.35,
    lng: 107.9833,
    title: "Kon Tum",
    description: [
      "Tháng 8-1945, cùng với cả nước, ngày 25-8-1945, nhân dân Kon Tum đã nổi dậy giành chính quyền. Chính quyền cách mạng tổ chức lại tỉnh Kon Tum thành 4 đơn vị hành chính gồm các huyện Đăk Glei, Đăk Tô, Konplong và thành phố Kon Tum.",
    ],
    images: ["./IMG/cmt8.jpg"],
    date: ["25-8"],
  },
  {
    lat: 11.1,
    lng: 108.1,
    title: "Bình Thuận",
    description: [
      "Đến ngày 24/8/1945, chính quyền tỉnh Bình Thuận và huyện Hàm Thuận đã về tay nhân dân. Sau ngày khởi nghĩa, Ủy ban Nhân dân cách mạng lâm thời tỉnh Bình Thuận được thành lập.",
    ],
    images: ["./IMG/cmt8.jpg"],
    date: ["25-8"],
  },
  {
    lat: 10.2333,
    lng: 106.375,
    title: "Bến Tre",
    description: [
      "Ngày 23/8/1945, Ủy ban Khởi nghĩa tỉnh Bến Tre quyết định khởi nghĩa, căng biểu ngữ, rải truyền đơn kêu gọi nhân dân nổi dậy.",
      "Sáng 24/8, Việt Minh công khai hoạt động, lấy Câu lạc bộ Thị xã làm trụ sở. Các lực lượng cách mạng từ các quận phối hợp tấn công giành chính quyền.",
      " Ngày 25/8, nhân dân các làng Hưng Khánh Trung, Phước Mỹ Trung rải truyền đơn, căng biểu ngữ. Cùng ngày, Ủy ban Khởi nghĩa tấn công Dinh Thủ hộ, kho bạc, trại giam, và Dinh Tỉnh trưởng, khiến quân Bảo an binh không dám phản kháng, chính quyền thân Nhật bị lật đổ. Chính quyền cách mạng được thành lập vào 17 giờ ngày 25/8. Khởi nghĩa giành thắng lợi ở các quận Mỏ Cày, Ba Tri, Thạnh Phú.",
      "Sáng 26/8, UBND Cách mạng lâm thời do Phạm Văn Bạch làm Chủ tịch ra mắt nhân dân tại Sân vận động tỉnh.",
    ],
    images: [
      "./IMG/cmt8.jpg",
      "./IMG/cmt8.jpg",
      "./IMG/cmt8.jpg",
      "./IMG/cmt8.jpg",
    ],
    date: ["25-8"],
  },
  {
    lat: 10.35,
    lng: 107.0833,
    title: "Bà Rịa-Vũng Tàu",
    description: [
      "Ngày 15/8/1945, Nhật Hoàng đầu hàng đồng minh, Xứ ủy Nam Kỳ quyết định khởi nghĩa tại Tân An.",
      "Ngày 23/8/1945, Chi bộ Bà Rịa sử dụng lực lượng TNTP để giành chính quyền.",
      "Đêm 24/8, anh Trần Ngọc Anh treo cờ đỏ sao vàng trên nóc Nhà Tròn tại thị xã Bà Rịa.",
      " Sáng 25/8, cuộc mít tinh diễn ra, thủ lĩnh TNTP tuyên bố độc lập và tỉnh trưởng Lê Thành Long từ chức. TNTP tiếp tục giành chính quyền tại các địa phương như Long Điền, Đất Đỏ và Vũng Tàu.",
      "Đêm 25/8, Xứ ủy Nam Kỳ quyết định giải phóng tù chính trị ở Côn Đảo. Cách mạng Tháng Tám đã thành công, mở ra một trang sử mới cho Bà Rịa - Vũng Tàu.",
      " Ngày 28/8, tại Vũng Tàu, Dương Bạch Mai tuyên bố chính quyền đã về tay Nhân dân.",
    ],
    images: [
      "./IMG/cmt8.jpg",
      "./IMG/cmt8.jpg",
      "./IMG/cmt8.jpg",
      "./IMG/cmt8.jpg",
      "./IMG/cmt8.jpg",
    ],
  },
  {
    lat: 10.5,
    lng: 105.25,
    title: "Long Xuyên (An Giang)",
    description: [
      "Chỉ trong vòng 7 ngày (từ ngày 22 đến 28/8/1945), nhân dân Long Xuyên và Châu Đốc, dưới sự lãnh đạo của Đảng, đã kiên cường đứng lên, lật đổ ách thống trị của bọn thực dân và tay sai, giải phóng mình khỏi 78 năm sống trong nô lệ và áp bức dưới chế độ phong kiến. Họ đã giành lại quyền làm chủ cuộc đời, mở ra một trang sử mới đầy hy vọng cho dân tộc.",
    ],
    images: ["./IMG/cmt8.jpg"],
    date: ["25-8"],
  },
  {
    lat: 10.5,
    lng: 105.25,
    title: "Châu Đốc (An Giang)",
    description: [
      "Chỉ trong vòng 7 ngày (từ ngày 22 đến 28/8/1945), nhân dân Long Xuyên và Châu Đốc, dưới sự lãnh đạo của Đảng, đã kiên cường đứng lên, lật đổ ách thống trị của bọn thực dân và tay sai, giải phóng mình khỏi 78 năm sống trong nô lệ và áp bức dưới chế độ phong kiến. Họ đã giành lại quyền làm chủ cuộc đời, mở ra một trang sử mới đầy hy vọng cho dân tộc.",
    ],
    images: ["./IMG/cmt8.jpg"],
    date: ["26-8"],
  },
  {
    lat: 10.25,
    lng: 105.9667,
    title: "Vĩnh Long",
    description: [
      "Vào ngày 28/8/1945, Ủy ban Khởi nghĩa tỉnh Vĩnh Long tổ chức một cuộc mít tinh lớn tại sân vận động Vĩnh Long (nay là UBND Tỉnh Vĩnh Long), thu hút hàng vạn người tham gia. Các đoàn người từ các khu vực xung quanh thị xã tụ tập, cờ đỏ sao vàng bay rợp trời, cùng với nhiều khẩu hiệu, băng rôn được treo khắp nơi. Người dân tỉnh Vĩnh Long cùng nhau tham gia khởi nghĩa giành lại chính quyền.",
    ],
    images: ["./IMG/cmt8.jpg"],
    date: ["25-8"],
  },
  {
    lat: 9.9333,
    lng: 106.35,
    title: "Trà Vinh",
    description: [
      'Vào tháng 5/1945, tổ chức Thanh niên Tiền phong Trà Vinh được thành lập, sau đó tổ chức Thanh niên Tiền phong xã Long Vĩnh ra đời dưới sự lãnh đạo của Đỗ Xuân Quang. Tổ chức này phát triển lực lượng, xâm nhập vào hàng ngũ binh lính địch và thực hiện công tác binh địch vận. Đình Khánh Hưng trở thành nơi hội họp, huấn luyện các lực lượng cách mạng và tổ chức "Tuần lễ vàng" để quyên góp tiền và dụng cụ chế tạo vũ khí. Đình Khánh Hưng cũng là cơ sở quan trọng bảo vệ các cán bộ cách mạng.',
    ],
    images: ["./IMG/cmt8.jpg"],
    date: ["25-8"],
  },
  {
    lat: 9.6,
    lng: 105.9739,
    title: "Sóc Trăng",
    description: [
      "Ngày 9/3/1945, Nhật đảo chính Pháp và tiến chiếm Sóc Trăng",
      "Ngày 15/3/1945, Ủy ban cai trị được thành lập, do Đốc phủ sứ Võ Văn Đảnh đứng đầu.",
      "Ngày 17/3/1945, Đội thanh niên bảo an ra đời, tuyên bố bảo vệ an ninh và độc lập dân tộc, nhưng chưa rõ ràng về chính trị. Tỉnh ủy lâm thời Sóc Trăng giải thích sự thật và hướng dẫn đội theo đường lối của Đảng.",
      "Ngày 25/3/1945, Đội thanh niên bảo an tổ chức mít tinh và phá bỏ tượng đồng “Hai Hình” của thực dân Pháp, tạo động lực lớn cho cuộc tổng khởi nghĩa giành chính quyền tại Sóc Trăng.",
    ],
    images: [
      "./IMG/cmt8.jpg",
      "./IMG/cmt8.jpg",
      "./IMG/cmt8.jpg",
      "./IMG/cmt8.jpg",
    ],
    date: ["25-8"],
  },
  {
    lat: 11.3333,
    lng: 106.1,
    title: "Tây Ninh",
    description: [
      "Ở Tây Ninh, Tổng khởi nghĩa Tháng Tám ở Tây Ninh đã diễn ra nhanh chóng và giành thắng lợi hoàn toàn, chỉ trong một ngày đêm (25/8/1945), chính quyền ngụy từ tỉnh đến quận đều sụp đổ hoàn toàn, và ba ngày sau chính quyền các xã đều thuộc về tay Nhân dân.",
    ],
    url: "/tayninh",
    images: ["./IMG/cmt8.jpg"],
    date: ["25-8"],
  },
  {
    lat: 21.3333,
    lng: 103.9,
    title: "Sơn La",
    description: [
      "Tháng 8/1945, khởi nghĩa giành chính quyền nổ ra mạnh mẽ ở Sơn La. Ngày 19/8, Mường Chanh thắng lợi, lan rộng ra các châu khác như Mường La, Thuận Châu, Mai Sơn, Yên Châu. Phù Yên giành chính quyền sớm nhất (23/7). Ngày 25/8, tỉnh lỵ Sơn La đầu hàng. Ngày 26/8, mít tinh lớn tại đồi Khau Cả, Ủy ban cách mạng lâm thời ra mắt, tuyên bố Sơn La hoàn toàn giải phóng.",
    ],
    url: "/sonla",
    images: ["./IMG/cmt8.jpg"],
    date: ["25-8"],
  },
  {
    lat: 10.95,
    lng: 106.8167,
    title: "Biên Hòa",
    description: [
      "Chỉ trong đêm 25 và buổi sáng 26-8, các cơ quan, công sở ở tỉnh Biên Hòa hầu hết bị lực lượng của ta chiếm giữ, bố trí canh gác, bảo vệ chặt chẽ. Trước áp lực mạnh mẽ của phong trào cách mạng, tỉnh trưởng Biên Hòa buộc phải bàn giao chính quyền. Tổng khởi nghĩa thành công trên phạm vi toàn tỉnh",
    ],
    images: ["./IMG/cmt8.jpg"],
    date: ["26-8"],
  },
  {
    lat: 10.0452,
    lng: 105.7469,
    title: "Cần Thơ",
    description: [
      "Sáng 26/8/1945, hơn 20.000 người dân từ Cần Thơ và các quận lân cận tập trung tại sân vận động Cần Thơ (hiện nay là Hội trường thành uỷ), mang cờ, khẩu hiệu và băng rôn. Trên lễ đài, đồng chí Huỳnh Phan Hộ đại diện Ủy ban Giải phóng Dân tộc tỉnh kêu gọi đồng bào đoàn kết giành chính quyền. Sau buổi mít tinh, trước khí thế quật khởi của quần chúng, Tỉnh trưởng Lưu Văn Tào phải giao chính quyền và giải tán chính quyền bù nhìn. Đồng chí Trần Ngọc Quế tuyên bố chính quyền về tay Nhân dân, bãi bỏ thuế vô lý, trả tự do cho tù chính trị, bảo vệ tài sản nhân dân và tịch thu tài sản thực dân Pháp. Cuộc khởi nghĩa lan rộng, thành công tại nhiều địa phương trong tỉnh, đánh dấu thắng lợi của Cách mạng Tháng Tám ở Cần Thơ.",
    ],
    images: ["./IMG/cmt8.jpg"],
    date: ["26-8"],
  },
  {
    lat: 15.1205,
    lng: 108.7923,
    title: "Quảng Ngãi",
    description: [
      "Đến rạng sáng ngày 30/8/1945, hàng chục vạn quần chúng từ khắp các địa phương trong tỉnh kéo về tỉnh lỵ cùng quần chúng nhân dân ở Thị xã Quảng Ngãi tham dự mít tinh chào mừng lễ ra mắt Ủy ban nhân dân cách mạng lâm thời tỉnh Lê Trung Đình.",
    ],
    url: "/quangngai",
    images: ["./IMG/cmt8.jpg"],
    date: ["28-8"],
  },
  {
    lat: 10.9804,
    lng: 106.6519,
    title: "Thủ Dầu Một",
    description: [
      "Đêm 24/8/1945, tại TX.Thủ Dầu Một, lực lượng tự vệ và nhân dân đã tấn công tỉnh lỵ. Lực lượng cách mạng ồ ạt tấn công khiến lính Nhật, bọn bảo an, cảnh sát chính quyền phản động phải đầu hàng không điều kiện. Lá cờ đỏ sao vàng tung bay phất phới trên dinh Tỉnh trưởng. Chính quyền đã về tay nhân dân.",
    ],
    images: ["./IMG/cmt8.jpg"],
    date: ["25-8"],
  },
  {
    lat: 10.2909,
    lng: 105.756,
    title: "Sa Đéc (Đồng Tháp)",
    description: [
      "Tháng 8 năm 1945, khi phát xít Nhật đầu hàng, Tỉnh ủy lâm thời Sa Đéc đã quyết định khởi nghĩa giành chính quyền vào ngày 25 tháng 8. Tại Cao Lãnh, hàng nghìn người dân đã chiếm giữ các cơ quan trọng yếu và buộc quận trưởng phải giao chính quyền. Cùng ngày, tại Sa Đéc, tỉnh trưởng cũng phải bàn giao chính quyền cho Ủy ban khởi nghĩa trước áp lực của quần chúng. Trước đó, ngày 22 tháng 8, Hồng Ngự đã giành chính quyền thành công. Đến 14 giờ ngày 25 tháng 8, toàn bộ chính quyền tỉnh Sa Đéc thuộc về tay nhân dân. Thắng lợi này là kết quả của sự lãnh đạo đúng đắn của Đảng, sức mạnh đoàn kết của nhân dân, và sự kế thừa từ các phong trào cách mạng trước đó, viết nên trang sử vẻ vang của Đồng Tháp.",
    ],
    images: ["./IMG/cmt8.jpg"],
    date: ["25-8"],
  },
  {
    lat: 10.0125,
    lng: 105.0809,
    title: "Rạch Giá (Kiên Giang)",
    description: [],
    images: ["./IMG/cmt8.jpg"],
    date: ["27-8"],
  },
  {
    lat: 10.0125,
    lng: 105.0809,
    title: "Đồng Nai Thượng (Lâm Đồng)",
    description: [],
    images: ["./IMG/cmt8.jpg"],
    date: ["28-8"],
  },
  {
    lat: 10.3847,
    lng: 104.4876,
    title: "Hà Tiên (Kiên Giang)",
    description: [],
    images: ["./IMG/cmt8.jpg"],
    date: ["28-8"],
  },
  {
    lat: 21.892,
    lng: 105.2128,
    title: "Tân Trào (Tuyên Quang)",
    description: [
      "Nơi họp Hội nghị toàn quốc của Đảng  (từ ngày 10 đến 15/8/1945) thành lập Ủy ban Khởi nghĩa toàn quốc và Đại hội Quốc dân (ngày 16 và ngày 17/8/1945)",
    ],
    images: ["./IMG/cmt8.jpg"],
    date: ["14-8", "15-8", "16-8", "17-8"],
  },
];

var currentPopup = null;
var markers = [];

locations.forEach(function (location, index) {
  const customMarker = document.createElement("div");
  customMarker.innerHTML = `
  <svg width="40" height="50" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Phần nền marker (thon gọn hơn) -->
    <path fill="red" d="M12 2C7.5 2 3.5 5 3.5 10c0 4.5 4.5 10.5 8.5 14 4-3.5 8.5-9.5 8.5-14 0-5-4-8-8.5-8z"/>
    
    <circle cx="12" cy="10" r="5.5" fill="white"/>

    <circle cx="12" cy="10" r="4.8" fill="red"/>

    <polygon fill="yellow" points="12,7 13.2,9.2 15.5,9.5 13.8,11 14.2,13 12,12 9.8,13 10.2,11 8.5,9.5 10.8,9.2"/>
  </svg>
`;
  customMarker.style.width = "50px";
  customMarker.style.height = "50px";
  // {color :"red"}
  var marker = new mapboxgl.Marker(customMarker)
    .setLngLat([location.lng, location.lat])
    .addTo(map);

  markers.push({
    marker: marker,
    date: location.date,
  });

  // Tạo HTML cho slideshow
  let slidesHTML = "";
  location.images.forEach((img, imgIndex) => {
    let content = location.description[imgIndex] || "Không có mô tả.";
    slidesHTML += `
                                        <div class="mySlides" data-location="${index}">
                                            <img src="${img}" style="width:100%">
                                            <div class="slide-content">${content}</div>
                                        </div>
                                    `;
  });

  // Tạo popup với slideshow
  var popup = new mapboxgl.Popup({ closeButton: true }).setHTML(`
<h1>${location.title}</h1>
<div class="slideshow-container">
    ${slidesHTML}
    <a class="prev" onclick="plusSlides(-1, ${index})">❮</a>
    <a class="next" onclick="plusSlides(1, ${index})">❯</a>
</div>
<button class="link" onclick="window.location.href='${location.url}'">Xem thêm thông tin</button>
`);

  marker.setPopup(popup);

  marker.getElement().addEventListener("click", function () {
    if (currentPopup) {
      currentPopup.remove();
    }
    popup.addTo(map);
    currentPopup = popup;
    showSlides(1, index); // Hiển thị slide đầu tiên
  });
});

// Quản lý slide cho từng popup
function showSlides(n, locationIndex) {
  let slides = document.querySelectorAll(
    `.mySlides[data-location="${locationIndex}"]`
  );
  let slideIndex = n;

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  return slideIndex;
}

// Hàm chuyển slide
window.plusSlides = function (n, locationIndex) {
  let currentSlide = 1;
  let slides = document.querySelectorAll(
    `.mySlides[data-location="${locationIndex}"]`
  );
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].style.display === "block") {
      currentSlide = i + 1;
    }
  }
  showSlides(currentSlide + n, locationIndex);
};

// Tìm kiếm khu vực và di chuyển đến vị trí tương ứng
document.getElementById("btn-search").addEventListener("input", function (e) {
  const searchTerm = e.target.value.toLowerCase();

  if (searchTerm === "") {
    // Nếu ô tìm kiếm trống, di chuyển bản đồ trở về trung tâm ban đầu
    map.flyTo({
      center: [105.8542, 21.0285], // Trung tâm ban đầu của bản đồ (Hà Nội)
      zoom: 6, // Phóng to ở mức độ 6
      speed: 0.5,
      curve: 1,
      easing: function (t) {
        return t;
      },
    });

    // Ẩn tất cả popup khi không tìm thấy khu vực nào
    // markers.forEach((markerObj) => {
    //   markerObj.marker.getPopup().remove(); // Xóa popup khi không có tìm kiếm
    // });
  } else {
    // Tìm khu vực có tên tương ứng với nội dung trong ô tìm kiếm
    const foundLocation = locations.find((location) =>
      location.title.toLowerCase().includes(searchTerm)
    );

    if (foundLocation) {
      // Di chuyển bản đồ tới vị trí của khu vực tìm được
      map.flyTo({
        center: [foundLocation.lng, foundLocation.lat],
        zoom: 8,
        speed: 0.5,
        curve: 1,
        easing: function (t) {
          return t;
        },
      });

      // Hiển thị popup của vị trí tìm được
      markers.forEach((markerObj) => {
        if (markerObj.title === foundLocation.title) {
          markerObj.marker.getPopup().addTo(map); // Hiển thị popup cho khu vực tìm thấy
        } else {
          markerObj.marker.getPopup().remove(); // Ẩn popup của các khu vực khác
        }
      });
    } else {
      // Nếu không tìm thấy khu vực nào, ẩn tất cả các popup
      markers.forEach((markerObj) => {
        markerObj.marker.getPopup().remove(); // Xóa popup khi không tìm thấy
      });
    }
  }
});
