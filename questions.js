const QUESTION_BANK = [
  {
    id: 1,
    question: "Ngày truyền thống Hội LHTN Việt Nam là ngày nào?",
    options: ["15/10/1956", "26/03/1931", "15/10/1964", "19/08/1945"],
    answer: "15/10/1956"
  },
  {
    id: 2,
    question: "Hội LHTN Việt Nam là tổ chức xã hội rộng rãi của thanh niên và các tổ chức thanh niên Việt Nam yêu nước theo:",
    options: [
      "Tư tưởng Hồ Chí Minh và lý tưởng của Đảng CSVN",
      "Khuynh hướng độc lập dân tộc phi chính trị",
      "Mục tiêu kinh tế tư nhân và hội nhập quốc tế",
      "Lý tưởng giải phóng giai cấp công nhân thuần túy"
    ],
    answer: "Tư tưởng Hồ Chí Minh và lý tưởng của Đảng CSVN"
  },
  {
    id: 3,
    question: "Bài ca chính thức của Hội LHTN Việt Nam là bài gì?",
    options: [
      "“Lên Đàng” – Nhạc Lưu Hữu Phước, lời Huỳnh Văn Tiểng",
      "“Thanh niên làm theo lời Bác” – Hoàng Hòa",
      "“Khát vọng tuổi trẻ” – Vũ Hoàng",
      "“Hành khúc thanh niên Việt Nam” – Văn Cao"
    ],
    answer: "“Lên Đàng” – Nhạc Lưu Hữu Phước, lời Huỳnh Văn Tiểng"
  },
  {
    id: 4,
    question: "Lời hứa của hội viên Hội LHTN Việt Nam bắt đầu bằng câu:",
    options: [
      "“Vinh dự là người hội viên Hội LHTN Việt Nam, tôi xin hứa:…”",
      "“Tôi xin thề trước cờ Tổ quốc và chân dung Bác Hồ:…”",
      "“Là thanh niên Việt Nam thế hệ mới, tôi cam kết:…”",
      "“Tuyệt đối trung thành với lý tưởng của Đoàn, tôi nguyện:…”"
    ],
    answer: "“Vinh dự là người hội viên Hội LHTN Việt Nam, tôi xin hứa:…”"
  },
  {
    id: 5,
    question: "Đối tượng nào được xét công nhận là hội viên Hội LHTN Việt Nam?",
    options: [
      "Công dân Việt Nam từ 15 đến 35 tuổi, tán thành điều lệ Hội, tự nguyện gia nhập Hội",
      "Công dân Việt Nam từ 16 đến 30 tuổi đang sinh hoạt Đoàn",
      "Tất cả công dân Việt Nam từ đủ 18 tuổi trở lên",
      "Thanh niên Việt Nam có thành tích học tập và lao động xuất sắc"
    ],
    answer: "Công dân Việt Nam từ 15 đến 35 tuổi, tán thành điều lệ Hội, tự nguyện gia nhập Hội"
  },
  {
    id: 6,
    question: "Hội LHTN Việt Nam có mấy chức năng?",
    options: ["2 chức năng", "3 chức năng", "4 chức năng", "5 chức năng"],
    answer: "2 chức năng"
  },
  {
    id: 7,
    question: "Hội LHTN Việt Nam có mấy nhiệm vụ?",
    options: ["5 nhiệm vụ", "3 nhiệm vụ", "4 nhiệm vụ", "6 nhiệm vụ"],
    answer: "5 nhiệm vụ"
  },
  {
    id: 8,
    question: "Khẩu hiệu của Hội LHTN Việt Nam là:",
    options: [
      "“Vì Tổ quốc Việt Nam giàu mạnh và văn minh. Thanh niên” – “Tiến”",
      "“Không có việc gì khó, chỉ sợ lòng không bền”",
      "“Đâu cần thanh niên có, việc gì khó có thanh niên”",
      "“Thanh niên Việt Nam: Đoàn kết - Sáng tạo - Cống hiến”"
    ],
    answer: "“Vì Tổ quốc Việt Nam giàu mạnh và văn minh. Thanh niên” – “Tiến”"
  },
  {
    id: 9,
    question: "Hội viên Hội LHTN Việt Nam có mấy quyền?",
    options: ["4 quyền", "2 quyền", "3 quyền", "5 quyền"],
    answer: "4 quyền"
  },
  {
    id: 10,
    question: "Hội viên Hội LHTN Việt Nam có mấy nhiệm vụ?",
    options: ["3 nhiệm vụ", "2 nhiệm vụ", "4 nhiệm vụ", "5 nhiệm vụ"],
    answer: "3 nhiệm vụ"
  },
  {
    id: 11,
    question: "Thành viên tập thể của Hội LHTN Việt Nam bao gồm:",
    options: [
      "Đoàn TNCS Hồ Chí Minh, Hội Sinh viên Việt Nam, Hội các nhà Doanh nghiệp trẻ Việt Nam là thành viên tập thể của Hội; các tổ chức thanh niên theo ngành nghề, sở thích; các đội hình thanh niên xung phong; tập thể thanh niên Việt Nam đang học tập, lao động công tác ở nước ngoài tuân thủ theo pháp luật nước sở tại, được nước sở tại cho phép thành lập tổ chức, tán thành Điều lệ Hội, có đơn xin gia nhập là thành viên tập thể của Hội.",
      "Chỉ bao gồm Đoàn TNCS Hồ Chí Minh và Đội TNTP Hồ Chí Minh",
      "Tất cả các tổ chức chính trị - xã hội tại Việt Nam",
      "Chỉ bao gồm Hội Sinh viên Việt Nam và các câu lạc bộ khởi nghiệp trẻ"
    ],
    answer: "Đoàn TNCS Hồ Chí Minh, Hội Sinh viên Việt Nam, Hội các nhà Doanh nghiệp trẻ Việt Nam là thành viên tập thể của Hội; các tổ chức thanh niên theo ngành nghề, sở thích; các đội hình thanh niên xung phong; tập thể thanh niên Việt Nam đang học tập, lao động công tác ở nước ngoài tuân thủ theo pháp luật nước sở tại, được nước sở tại cho phép thành lập tổ chức, tán thành Điều lệ Hội, có đơn xin gia nhập là thành viên tập thể của Hội."
  },
  {
    id: 12,
    question: "Hội LHTN Việt Nam tổ chức và hoạt động theo nguyên tắc nào?",
    options: [
      "tự nguyện,tự quản; hiệp thương dân chủ; đoàn kết chân thành, tôn trọng lẫn nhau; hợp tácbình đẳng, phối hợp và thống nhất hành động.",
      "Tập trung dân chủ, chỉ đạo trực tiếp từ cấp trên xuống cấp dưới",
      "Biểu quyết theo đa số quá bán và tự chủ tài chính hoàn toàn",
      "Phân cấp ủy quyền và chịu sự điều hành trực tiếp của Mặt trận Tổ quốc"
    ],
    answer: "tự nguyện,tự quản; hiệp thương dân chủ; đoàn kết chân thành, tôn trọng lẫn nhau; hợp tácbình đẳng, phối hợp và thống nhất hành động."
  },
  {
    id: 13,
    question: "Hội LHTN Việt Nam được tổ chức ở mấy cấp?",
    options: ["4 cấp", "3 cấp", "5 cấp", "2 cấp"],
    answer: "4 cấp."
  },
  {
    id: 14,
    question: "Hội LHTN Việt Nam được tổ chức ở những cấp nào?",
    options: [
      "Cấp Trung ương. Cấp tỉnh, thành phố trực thuộc Trung ương và tương đương. Cấp quận, huyện, thị xã thành phố thuộc tỉnh và tương đương.",
      "Cấp Trung ương và Cấp Tỉnh",
      "Cấp Tỉnh, Cấp Huyện và Cấp Xã",
      "Cấp Trung ương, Cấp Chi hội và Cấp Câu lạc bộ cơ sở"
    ],
    answer: "Cấp Trung ương. Cấp tỉnh, thành phố trực thuộc Trung ương và tương đương. Cấp quận, huyện, thị xã thành phố thuộc tỉnh và tương đương."
  },
  {
    id: 15,
    question: "Nhiệm kỳ của Đại hội, hội nghị đại biểu cấp quận huyện và tương đương trở lên là:",
    options: ["5 năm 1 lần", "3 năm 1 lần", "4 năm 1 lần", "2 năm 1 lần"],
    answer: "5 năm 1 lần"
  },
  {
    id: 16,
    question: "Nhiệm kỳ của Đại hội, hội nghị đại biểu cấp phường xã và thị trấn là:",
    options: ["5 năm 1 lần", "2 năm 1 lần", "3 năm 1 lần", "4 năm 1 lần"],
    answer: "5 năm 1 lần"
  },
  {
    id: 17,
    question: "Đại hội, Hội nghị đại biểu Hội LHTN Việt Nam có các nhiệm vụ nào sau đây?",
    options: [
      "1- Thảo luận và thông qua báo cáo tổng kết nhiệm kỳ của Uỷ ban Hội cùng cấp.2- Quyết định các chủ trương, chương trình hoạt động nhiệm kỳ mới. 3- Hiệp thương cử ra Uỷ ban Hội cùng cấp.4- Thảo luận, đóng góp vào dự thảo các văn kiện và hiệp thương cử đại biểu đidự Đại hội, Hội nghị Đại biểu cấp trên (nếu có).",
      "Chỉ xét kết nạp hội viên mới và khen thưởng định kỳ hằng năm",
      "Bầu Ban Bí thư Trung ương Đoàn và định hướng đường lối thanh niên",
      "Chỉ tổng kết hoạt động tình nguyện mùa hè xanh và công tác từ thiện"
    ],
    answer: "1- Thảo luận và thông qua báo cáo tổng kết nhiệm kỳ của Uỷ ban Hội cùng cấp.2- Quyết định các chủ trương, chương trình hoạt động nhiệm kỳ mới. 3- Hiệp thương cử ra Uỷ ban Hội cùng cấp.4- Thảo luận, đóng góp vào dự thảo các văn kiện và hiệp thương cử đại biểu đidự Đại hội, Hội nghị Đại biểu cấp trên (nếu có)."
  },
  {
    id: 19,
    question: "Điều lệ Hội LHTN Việt Nam hiện hành có bao nhiêu chương và điều?",
    options: ["7 chương – 28 điều", "6 chương – 25 điều", "8 chương – 32 điều", "5 chương – 20 điều"],
    answer: "7 chương – 28 điều"
  },
  {
    id: 20,
    question: "Thành viên tập thể có vai trò nòng cốt trong mọi hoạt động của Hội LHTN Việt Nam là:",
    options: [
      "Đoàn Thanh niên Cộng sản Hồ Chí Minh",
      "Hội Sinh viên Việt Nam",
      "Hội Doanh nhân trẻ Việt Nam",
      "Hội Thầy thuốc trẻ Việt Nam"
    ],
    answer: "Đoàn Thanh niên Cộng sản Hồ Chí Minh"
  },
  {
    id: 21,
    question: "Số lượng thành viên Uỷ ban Hội LHTN cấp quận, huyện là:",
    options: ["từ 25 đến 33 Uỷ viên", "từ 15 đến 25 Uỷ viên", "từ 30 đến 45 Uỷ viên", "từ 10 đến 20 Uỷ viên"],
    answer: "từ 25 đến 33 Uỷ viên"
  },
  {
    id: 22,
    question: "Số lượng thành viên Uỷ ban Hội LHTN phường, xã, thị trấn là:",
    options: ["từ 15 đến 25 Uỷ viên", "từ 9 đến 15 Uỷ viên", "từ 25 đến 33 Uỷ viên", "từ 5 đến 10 Uỷ viên"],
    answer: "từ 15 đến 25 Uỷ viên"
  },
  {
    id: 23,
    question: "Tháng 6 năm 1945, Xứ uỷ Nam kỳ đưa đồng chí Phạm Ngọc Thạch và một số anh em thành lập ra tổ chức thanh niên nào?",
    options: ["Thanh niên tiền phong", "Thanh niên Cứu quốc", "Thanh niên xung phong", "Đoàn Thanh niên Dân chủ"],
    answer: "Thanh niên tiền phong"
  },
  {
    id: 24,
    question: "Chủ tịch Hồ Chí Minh ký sắc lệnh số 38 về việc thành lập Nha thanh niên và thể thao vào thời gian nào?",
    options: ["27 – 3 – 1946", "15 – 10 – 1956", "26 – 3 – 1931", "19 – 8 – 1945"],
    answer: "27 – 3 – 1946"
  },
  {
    id: 25,
    question: "Chủ tịch Hội LHTN Việt Nam đầu tiên là ai?",
    options: [
      "Đại tướng Nguyễn Chí Thanh",
      "Đồng chí Phạm Ngọc Thạch",
      "Đồng chí Hà Quang Dự",
      "Giáo sư Phạm Huy Thông"
    ],
    answer: "Đại tướng Nguyễn Chí Thanh"
  },
  {
    id: 26,
    question: "Đại hội Liên đoàn Thanh niên Việt Nam lần I được tổ chức khi nào và ở đâu?",
    options: [
      "tháng 10/1956 tại Căn cứ địa Việt Bắc",
      "tháng 2/1950 tại Thủ đô Hà Nội",
      "tháng 12/1961 tại Tân Trào, Tuyên Quang",
      "tháng 3/1954 tại Điện Biên Phủ"
    ],
    answer: "tháng 10/1956 tại Căn cứ địa Việt Bắc"
  },
  {
    id: 27,
    question: "Đại tướng Nguyễn Chí Thanh quê quán ở đâu?",
    options: ["Thừa Thiên – Huế", "Quảng Bình", "Nghệ An", "Hà Tĩnh"],
    answer: "Thừa Thiên – Huế"
  },
  {
    id: 28,
    question: "Đại hội Liên đoàn Thanh niên VN lần II quyết định thành lập Hội LHTN VN và coi đây là Đại hội lần I, được tổ chức khi nào?",
    options: ["08/10/1956 tại Hà Nội", "15/10/1956 tại Việt Bắc", "26/03/1956 tại Hải Phòng", "12/10/1961 tại Hà Nội"],
    answer: "08/10/1956 tại Hà Nội"
  },
  {
    id: 29,
    question: "Trong Đại hội Hội LHTN Việt Nam lần I (tháng 10/1956), ai được bầu là Chủ tịch Hội?",
    options: [
      "Đại tướng Nguyễn Chí Thanh.",
      "Anh Trần Bạch Đằng",
      "Giáo sư Phạm Huy Thông",
      "Đồng chí Vũ Mão"
    ],
    answer: "Đại tướng Nguyễn Chí Thanh."
  },
  {
    id: 30,
    question: "Đại hội Hội LHTN Việt Nam lần II được tổ chức thời gian và địa điểm nào?",
    options: ["tháng 12/1961 tại Hà Nội", "tháng 10/1956 tại Hà Nội", "tháng 12/1965 tại TP. Hồ Chí Minh", "tháng 09/1970 tại Hà Nội"],
    answer: "tháng 12/1961 tại Hà Nội"
  },
  {
    id: 31,
    question: "Trong Đại hội Hội LHTN Việt Nam lần II (1961), ai được bầu là Chủ tịch Hội?",
    options: ["Giáo sư Phạm Huy Thông", "Đại tướng Nguyễn Chí Thanh", "Anh Trần Bạch Đằng", "Ông Hồ Đức Việt"],
    answer: "Giáo sư Phạm Huy Thông"
  },
  {
    id: 32,
    question: "Ngày 9/8/1964, sau 4 ngày giặc Mỹ ném bom miền Bắc, 26 vạn thanh niên, sinh viên xuống đường tuần hành với tinh thần:",
    options: ["“Ba Sẵn sàng”", "“Năm xung phong”", "“Quyết tử cho Tổ quốc quyết sinh”", "“Hát cho đồng bào tôi nghe”"],
    answer: "“Ba Sẵn sàng”"
  },
  {
    id: 33,
    question: "Hội LHTN Giải phóng miền Nam được thành lập vào thời gian nào?",
    options: ["Ngày 24/4/1962", "Ngày 15/10/1956", "Ngày 20/12/1960", "Ngày 30/4/1975"],
    answer: "Ngày 24/4/1962"
  },
  {
    id: 34,
    question: "Ai được bầu là Chủ tịch Hội LHTN Giải phóng miền Nam?",
    options: ["Anh Trần Bạch Đằng", "Đồng chí Nguyễn Văn Trỗi", "Giáo sư Phạm Huy Thông", "Đồng chí Nguyễn Thái Bính"],
    answer: "Anh Trần Bạch Đằng"
  },
  {
    id: 35,
    question: "Năm 1965, một phong trào lớn được phát động trong thanh niên miền Nam, đó là phong trào:",
    options: ["“Năm xung phong”", "“Ba sẵn sàng”", "“Tiếng hát át tiếng bom”", "“Thanh niên tình nguyện”"],
    answer: "“Năm xung phong”"
  },
  {
    id: 36,
    question: "Anh hùng liệt sĩ Nguyễn Văn Trỗi hy sinh vào thời điểm nào?",
    options: ["ngày 15/10/1964", "ngày 26/03/1965", "ngày 15/10/1956", "ngày 02/09/1969"],
    answer: "ngày 15/10/1964"
  },
  {
    id: 37,
    question: "Cuối năm 1969, phong trào của sinh viên học sinh bùng lên thu hút hàng chục vạn thanh niên tham gia là:",
    options: ["“Hát cho đồng bào tôinghe”", "“Xếp bút nghiên lên đường chiến đấu”", "“Ba sẵn sàng”", "“Dậy mà đi”"],
    answer: "“Hát cho đồng bào tôinghe”"
  },
  {
    id: 38,
    question: "Giữa năm 1972, người thanh niên Việt Nam yêu nước dõng dạc nói “Tôi là người Việt Nam” và bị sát hại là:",
    options: ["Nguyễn Thái Bính", "Nguyễn Văn Trỗi", "Trần Văn Ơn", "Lý Tự Trọng"],
    answer: "Nguyễn Thái Bính"
  },
  {
    id: 39,
    question: "Ngày Truyền thống Hội LHTN Việt Nam đươc quyết định từ bao giờ?",
    options: ["15/10/1956", "26/03/1931", "08/10/1956", "15/10/1964"],
    answer: "15/10/1956"
  },
  {
    id: 40,
    question: "Tháng 9/1988, Hội nghị đánh giá công tác thanh niên TW Hội LHTN Việt Nam đã bầu ai làm Chủ tịch Hội?",
    options: ["Anh Hà Quang Dự", "Đồng chí Hồ Đức Việt", "Đại tướng Nguyễn Chí Thanh", "Chị Trương Thị Mai"],
    answer: "Anh Hà Quang Dự"
  },
  {
    id: 41,
    question: "Đại hội đại biểu Hội LHTN Việt Nam toàn quốc lần III được tổ chức vào thời gian nào?",
    options: ["tháng 12/1994", "tháng 10/1992", "tháng 01/2000", "tháng 12/1988"],
    answer: "tháng 12/1994"
  },
  {
    id: 42,
    question: "Tại Đại hội đại biểu Hội LHTN toàn quốc lần III (1994), ai được bầu làm Chủ tịch Hội LHTN Việt Nam?",
    options: ["Ông Hồ Đức Việt", "Anh Hà Quang Dự", "Chị Trương Thị Mai", "Anh Nguyễn Phước Lộc"],
    answer: "Ông Hồ Đức Việt"
  },
  {
    id: 43,
    question: "Tại Đại hội toàn quốc lần III (1994), Hội LHTN Việt Nam đã đề ra các cuộc vận động nào?",
    options: [
      "\"Tiết kiệm, tích luỹ\", \"Chống mù chữ, chống thất học\", “Hiến máu nhân đạo\"",
      "\"Thanh niên lập nghiệp\", \"Tuổi trẻ giữ nước\"",
      "\"Ba sẵn sàng\", \"Năm xung phong\"",
      "\"Đồng hành với thanh niên lập thân\", \"Xung kích phát triển kinh tế\""
    ],
    answer: "\"Tiết kiệm, tích luỹ\", \"Chống mù chữ, chống thất học\", “Hiến máu nhân đạo\""
  },
  {
    id: 44,
    question: "Đại hội đại biểu Hội LHTN toàn quốc lần IV được tổ chức vào thời gian nào?",
    options: ["từ 13 đến 15/01/2000", "từ 15 đến 18/10/1999", "từ 20 đến 22/12/2004", "từ 10 đến 12/03/2001"],
    answer: "từ 13 đến 15/01/2000"
  },
  {
    id: 45,
    question: "Tại Đại hội đại biểu Hội LHTN toàn quốc lần IV (2000), ai được bầu làm Chủ tịch Hội LHTN Việt Nam?",
    options: ["chị Trương Thị Mai.", "ông Hồ Đức Việt", "anh Hoàng Bình Quân", "anh Võ Văn Thưởng"],
    answer: "chị Trương Thị Mai."
  },
  {
    id: 46,
    question: "Tại Đại hội đại biểu Hội LHTN toàn quốc lần IV (2000), Đại hội nhất trí thông qua bao nhiêu cuộc vận động?",
    options: ["5 cuộc vận động", "3 cuộc vận động", "4 cuộc vận động", "6 cuộc vận động"],
    answer: "5 cuộc vận động"
  },
  {
    id: 47,
    question: "Câu nói “Mỗi thanh niên hãy sống những ngày đẹp nhất, hãy bắt tay vào những công việc bình thường nhưng có ích cho đời” là của ai?",
    options: [
      "Đồng chí Nguyễn Văn Linh",
      "Chủ tịch Hồ Chí Minh",
      "Đồng chí Lê Duẩn",
      "Đại tướng Võ Nguyên Giáp"
    ],
    answer: "Đồng chí Nguyễn Văn Linh"
  },
  {
    id: 48,
    question: "Nghi thức Hội là hệ thống những quy định:",
    options: [
      "về nghi thức, thủ tục, đội hình, đội ngũ được áp dụng chính thức cho sinh hoạt và hoạt động của tổ chức Hội Liên hiệp Thanh niên (LHTN) Việt Nam",
      "về các bài hát và trò chơi sinh hoạt thanh niên tập thể",
      "về quy chế thi đua khen thưởng hằng năm của các cấp Hội",
      "về điều lệ kết nạp Đoàn viên và Đội viên thiếu niên tiền phong"
    ],
    answer: "về nghi thức, thủ tục, đội hình, đội ngũ được áp dụng chính thức cho sinh hoạt và hoạt động của tổ chức Hội Liên hiệp Thanh niên (LHTN) Việt Nam"
  },
  {
    id: 49,
    question: "Nghi thức Hội góp phần:",
    options: [
      "rèn luyện, giáo dục hội viên - thanh niên biết tôn trọng, yêu mến tổ chức Hội và cùng xây dựng tổ chức Hội ngày càng vững mạnh",
      "tuyển chọn các cán bộ chuyên trách cho cơ quan nhà nước",
      "phân loại học lực và hạnh kiểm của học sinh - sinh viên",
      "thay thế các điều lệ và nghị quyết của tổ chức Đoàn"
    ],
    answer: "rèn luyện, giáo dục hội viên - thanh niên biết tôn trọng, yêu mến tổ chức Hội và cùng xây dựng tổ chức Hội ngày càng vững mạnh"
  },
  {
    id: 50,
    question: "Có mấy cách chào theo Nghi thức Hội?",
    options: ["2 cách chào", "1 cách chào", "3 cách chào", "4 cách chào"],
    answer: "2 cách chào"
  },
  {
    id: 51,
    question: "Động tác chào (trong nghi lễ), “Năm ngón tay vung lên, tay giơ cao, tầm ngang vai” có ý nghĩa:",
    options: [
      "thể hiện sức trẻ, ý chí vươn lên, trung thành với Tổ quốc, tôn trọng lẽ phải công bằng.",
      "thể hiện sự phục tùng mệnh lệnh tuyệt đối của chỉ huy",
      "thể hiện tinh thần sẵn sàng xung kích trong mọi nhiệm vụ quân sự",
      "thể hiện lòng biết ơn vô hạn đối với các thế hệ đi trước"
    ],
    answer: "thể hiện sức trẻ, ý chí vươn lên, trung thành với Tổ quốc, tôn trọng lẽ phải công bằng."
  },
  {
    id: 52,
    question: "Động tác chào (trong nghi lễ), “Lòng bàn tay hướng về phía trước, năm ngón tay thẳng về thái dương và đưa lên” có ý nghĩa:",
    options: [
      "luôn tâm niệm phải sống đẹp, có lòng nhân ái, sẵn sàng giúp đỡ mọi người",
      "luôn giữ vững kỷ luật, tác phong nhanh nhẹn của thanh niên",
      "thể hiện sự tôn trọng các bậc tiền bối và lãnh đạo",
      "khẳng định sức mạnh đoàn kết không thể phá vỡ"
    ],
    answer: "luôn tâm niệm phải sống đẹp, có lòng nhân ái, sẵn sàng giúp đỡ mọi người"
  },
  {
    id: 53,
    question: "Động tác chào (trong nghi lễ), “Năm ngón tay khép lại” có ý nghĩa:",
    options: [
      "thể hiện sự đoàn kết, thống nhất trong tổ chức",
      "thể hiện sự nghiêm trang, trật tự và kỷ luật cao",
      "thể hiện sự khép mình trước cái xấu và tiêu cực",
      "thể hiện 5 ngón tay trên một bàn tay cùng chung một lý tưởng"
    ],
    answer: "thể hiện sự đoàn kết, thống nhất trong tổ chức"
  },
  {
    id: 54,
    question: "Trong động tác đứng, tư thế nghỉ thì chân chùng xuống là:",
    options: ["cả 2 chân", "chân trái", "chân phải", "luân phiên đổi chân liên tục"],
    answer: "cả 2 chân"
  },
  {
    id: 55,
    question: "Trong động tác ngồi trên gót, trước khi ngồi xuống thì hội viên cần làm gì?",
    options: [
      "Đưa chân phải chéo ra sau gót chân trái rồi từ từ ngồi xuống",
      "Ngồi sụp xuống ngay lập tức không cần chỉnh chân",
      "Bước chân trái lên trước nửa bước",
      "Nhảy lùi về phía sau một bước"
    ],
    answer: "Đưa chân phải chéo ra sau gót chân trái rồi từ từ ngồi xuống"
  },
  {
    id: 56,
    question: "Trong động tác quay, hai tay lúc nào cũng:",
    options: ["trong tư thế nghiêm", "buông lỏng tự nhiên đung đưa", "nắm chặt ngang thắt lưng", "đưa ra phía trước ngực"],
    answer: "trong tư thế nghiêm"
  },
  {
    id: 57,
    question: "Động tác quay đằng sau, chân nào làm trụ để thực hiện quay?",
    options: ["2 gót chân", "gót chân phải và mũi chân trái", "gót chân trái và mũi chân phải", "2 mũi bàn chân"],
    answer: "2 gót chân"
  },
  {
    id: 58,
    question: "Trong Nghi thức Hội, đội hình đội ngũ của chi hội luôn triển khai:",
    options: ["bên trái người chỉ huy", "bên phải người chỉ huy", "phía trước mặt người chỉ huy", "phía sau lưng người chỉ huy"],
    answer: "bên trái người chỉ huy"
  },
  {
    id: 59,
    question: "Trong Nghi thức Hội có tất cả bao nhiêu đội hình?",
    options: ["4 đội hình", "3 đội hình", "5 đội hình", "6 đội hình"],
    answer: "4 đội hình"
  },
  {
    id: 60,
    question: "Trong các đội hình, khẩu lệnh của chỉ huy là:",
    options: ["Chi hội tập hợp", "Toàn thể chú ý", "Tất cả tập hợp", "Chi hội nghiêm"],
    answer: "Chi hội tập hợp"
  },
  {
    id: 61,
    question: "Trong Nghi thức Hội có tất cả bao nhiêu cự ly?",
    options: ["4 cự ly", "2 cự ly", "3 cự ly", "5 cự ly"],
    answer: "4 cự ly"
  },
  {
    id: 62,
    question: "Chuẩn trong Nghi thức Hội là:",
    options: ["Tuỳ thuộc chỉ huy chỉ định", "Luôn là người đứng đầu hàng dọc bên phải", "Luôn là người đứng bên trái chỉ huy", "Mặc định là Chi hội phó"],
    answer: "Tuỳ thuộc chỉ huy chỉ định"
  },
  {
    id: 63,
    question: "Đội hình đội ngũ nào trong Nghi thức Hội không có chuẩn?",
    options: ["vòng tròn", "hàng dọc", "hàng ngang", "chữ U"],
    answer: "vòng tròn"
  },
  {
    id: 64,
    question: "Trong Nghi thức Hội, có mấy trường hợp điểm số – báo cáo?",
    options: ["2 trường hợp", "1 trường hợp", "3 trường hợp", "4 trường hợp"],
    answer: "2 trường hợp"
  }
];