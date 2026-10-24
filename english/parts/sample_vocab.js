  const SAMPLE_VOCABULARY = [
    // -------------------------------------------------------------
    // CẤP ĐỘ A1 (Dễ - Cơ bản hàng ngày)
    // -------------------------------------------------------------
    {
      id: 'vocab_a1_1',
      word: 'Greeting',
      phonetic: '/ˈɡriː.tɪŋ/',
      pos: 'noun',
      level: 'A1',
      meaning: '1. [Giao tiếp] Lời chào hỏi, sự chào đón thân mật;\n2. [Văn bản] Lời chúc mừng đầu thư hoặc thiệp mừng',
      example: 'A warm greeting helps make a friendly first impression.',
      topic: 'Giao tiếp',
      status: 'learning',
      createdAt: 1729000001000
    },
    {
      id: 'vocab_a1_2',
      word: 'Polite',
      phonetic: '/pəˈlaɪt/',
      pos: 'adjective',
      level: 'A1',
      meaning: '1. [Giao tiếp] Lịch sự, lễ phép, nhã nhặn;\n2. [Xã hội] Đúng chuẩn mực giao tế, thanh lịch',
      example: 'It is always polite to say please and thank you.',
      topic: 'Giao tiếp',
      status: 'learning',
      createdAt: 1729000002000
    },
    {
      id: 'vocab_a1_3',
      word: 'Delicious',
      phonetic: '/dɪˈlɪʃ.əs/',
      pos: 'adjective',
      level: 'A1',
      meaning: '1. [Ẩm thực] Thơm ngon, ngon miệng, khoái khẩu;\n2. [Cảm giác] Rất thú vị, đem lại sự khoan khoái dễ chịu',
      example: 'Vietnamese pho is one of the most delicious soups in the world.',
      topic: 'Đời sống',
      status: 'mastered',
      createdAt: 1729000003000
    },
    {
      id: 'vocab_a1_4',
      word: 'Careful',
      phonetic: '/ˈker.fəl/',
      pos: 'adjective',
      level: 'A1',
      meaning: '1. [Hành vi] Cẩn thận, cẩn trọng, chú ý đề phòng;\n2. [Công việc] Chu đáo, tỉ mỉ từng chi tiết nhỏ',
      example: 'Please be careful when you cross the busy street.',
      topic: 'Đời sống',
      status: 'learning',
      createdAt: 1729000004000
    },
    {
      id: 'vocab_a1_5',
      word: 'Travel',
      phonetic: '/ˈtræv.əl/',
      pos: 'verb',
      level: 'A1',
      meaning: '1. [Du lịch] Đi du lịch, tham quan danh lam thắng cảnh;\n2. [Vận động] Đi lại, di chuyển (ánh sáng, âm thanh truyền đi)',
      example: 'I love to travel and explore historical cities across Asia.',
      topic: 'Du lịch',
      status: 'mastered',
      createdAt: 1729000005000
    },
    {
      id: 'vocab_a1_6',
      word: 'Habit',
      phonetic: '/ˈhæb.ɪt/',
      pos: 'noun',
      level: 'A1',
      meaning: '1. [Tâm lý/Đời sống] Thói quen hàng ngày, tập quán sinh hoạt;\n2. [Trang phục] Y phục tu sĩ tôn giáo đặc trưng',
      example: 'Reading 15 minutes each day is a wonderful habit to cultivate.',
      topic: 'Đời sống',
      status: 'learning',
      createdAt: 1729000006000
    },

    // -------------------------------------------------------------
    // CẤP ĐỘ A2 (Dễ - Sơ cấp giao tiếp)
    // -------------------------------------------------------------
    {
      id: 'vocab_a2_1',
      word: 'Comfortable',
      phonetic: '/ˈkʌm.fɚ.t̬ə.bəl/',
      pos: 'adjective',
      level: 'A2',
      meaning: '1. [Cảm giác/Đồ dùng] Thoải mái, êm ái, tiện nghi;\n2. [Tài chính] Đầy đủ, sung túc không lo thiếu thốn',
      example: 'These sneakers are extremely comfortable for walking all day.',
      topic: 'Đời sống',
      status: 'learning',
      createdAt: 1729000007000
    },
    {
      id: 'vocab_a2_2',
      word: 'Schedule',
      phonetic: '/ˈskedʒ.uːl/',
      pos: 'noun',
      level: 'A2',
      meaning: '1. [Công việc] Lịch trình làm việc, thời khóa biểu;\n2. [Hành động] Lên kế hoạch, ấn định thời gian công tác',
      example: 'Let us check the flight schedule before leaving for the airport.',
      topic: 'Công việc',
      status: 'learning',
      createdAt: 1729000008000
    },
    {
      id: 'vocab_a2_3',
      word: 'Advice',
      phonetic: '/ədˈvaɪs/',
      pos: 'noun',
      level: 'A2',
      meaning: '1. [Giao tiếp] Lời khuyên, ý kiến tham vấn chân thành;\n2. [Chuyên môn] Lời chỉ dẫn pháp lý/tài chính chính thức',
      example: 'My teacher gave me valuable advice on how to practice listening.',
      topic: 'Giao tiếp',
      status: 'learning',
      createdAt: 1729000009000
    },
    {
      id: 'vocab_a2_4',
      word: 'Improve',
      phonetic: '/ɪmˈpruːv/',
      pos: 'verb',
      level: 'A2',
      meaning: '1. [Học tập/Kỹ năng] Cải thiện, tiến bộ, nâng cao năng lực;\n2. [Sức khỏe] Hồi phục, chuyển biến tích cực hơn',
      example: 'Daily flashcard review will rapidly improve your vocabulary.',
      topic: 'Học tập',
      status: 'mastered',
      createdAt: 1729000010000
    },
    {
      id: 'vocab_a2_5',
      word: 'Opportunity',
      phonetic: '/ˌɑː.pɚˈtuː.nə.t̬i/',
      pos: 'noun',
      level: 'A2',
      meaning: '1. [Sự nghiệp] Cơ hội phát triển, thời cơ thuận lợi;\n2. [Học tập] Dịp may hiếm có để mở mang tri thức',
      example: 'This scholarship is an amazing opportunity to study abroad.',
      topic: 'Học tập',
      status: 'learning',
      createdAt: 1729000011000
    },
    {
      id: 'vocab_a2_6',
      word: 'Prepare',
      phonetic: '/prɪˈper/',
      pos: 'verb',
      level: 'A2',
      meaning: '1. [Công việc/Đời sống] Chuẩn bị, sửa soạn chu đáo trước;\n2. [Tâm lý] Sẵn sàng tinh thần đón nhận thử thách',
      example: 'They prepared thoroughly for the company job interview.',
      topic: 'Công việc',
      status: 'learning',
      createdAt: 1729000012000
    },
    {
      id: 'vocab_a2_7',
      word: 'Protect',
      phonetic: '/prəˈtekt/',
      pos: 'verb',
      level: 'A2',
      meaning: '1. [An ninh/Đời sống] Bảo vệ, che chở, giữ an toàn;\n2. [Pháp lý/Kinh tế] Bảo hộ quyền tác giả, nhãn hiệu thương mại',
      example: 'Remember to wear sunscreen to protect your skin from the sun.',
      topic: 'Đời sống',
      status: 'learning',
      createdAt: 1729000013000
    },
    {
      id: 'vocab_a2_8',
      word: 'Success',
      phonetic: '/səkˈses/',
      pos: 'noun',
      level: 'A2',
      meaning: '1. [Sự nghiệp] Sự thành công, thắng lợi, thành tựu lớn;\n2. [Xã hội] Người hoặc sự việc thành đạt vang dội',
      example: 'Consistency and discipline are fundamental keys to long-term success.',
      topic: 'Công việc',
      status: 'mastered',
      createdAt: 1729000014000
    },
    {
      id: 'vocab_a2_9',
      word: 'Express',
      phonetic: '/ɪkˈspres/',
      pos: 'verb',
      level: 'A2',
      meaning: '1. [Giao tiếp] Bày tỏ, diễn đạt tình cảm hoặc quan điểm;\n2. [Vận tải] Tốc hành, chuyển phát nhanh (express delivery);\n3. [Tính từ] Rõ ràng, dứt khoát',
      example: 'Music helps people express feelings that words cannot describe.',
      topic: 'Giao tiếp',
      status: 'mastered',
      createdAt: 1729000015000
    },

    // -------------------------------------------------------------
    // CẤP ĐỘ B1 (Trung cấp - Giao tiếp công sở & đời sống tự tin)
    // -------------------------------------------------------------
    {
      id: 'vocab_b1_1',
      word: 'Appreciate',
      phonetic: '/əˈpriː.ʃi.eɪt/',
      pos: 'verb',
      level: 'B1',
      meaning: '1. [Giao tiếp] Trân trọng, cảm kích, biết ơn sâu sắc;\n2. [Nghệ thuật] Thưởng thức cái hay, cái đẹp của tác phẩm;\n3. [Tài chính] Gia tăng giá trị tài sản theo thời gian',
      example: 'I deeply appreciate your continuous support and constructive advice.',
      topic: 'Giao tiếp',
      status: 'learning',
      createdAt: 1729000016000
    },
    {
      id: 'vocab_b1_2',
      word: 'Deadline',
      phonetic: '/ˈded.laɪn/',
      pos: 'noun',
      level: 'B1',
      meaning: '1. [Công việc] Hạn chót hoàn thành nhiệm vụ/dự án;\n2. [Báo chí] Giờ chót nộp bài để kịp giờ xuất bản',
      example: 'Our team worked diligently to submit the project before the deadline.',
      topic: 'Công việc',
      status: 'mastered',
      createdAt: 1729000017000
    },
    {
      id: 'vocab_b1_3',
      word: 'Feedback',
      phonetic: '/ˈfiːd.bæk/',
      pos: 'noun',
      level: 'B1',
      meaning: '1. [Kinh doanh/Công việc] Ý kiến phản hồi, nhận xét đánh giá;\n2. [Kỹ thuật/Âm thanh] Hiện tượng hú âm phản hồi tín hiệu',
      example: 'Constructive feedback from users allows us to refine the product.',
      topic: 'Công việc',
      status: 'mastered',
      createdAt: 1729000018000
    },
    {
      id: 'vocab_b1_4',
      word: 'Objective',
      phonetic: '/əbˈdʒek.tɪv/',
      pos: 'noun',
      level: 'B1',
      meaning: '1. [Công việc] Mục tiêu, mục đích đã đề ra;\n2. [Đánh giá] Khách quan, công tâm không thiên vị cá nhân',
      example: 'The primary objective of this quarter is increasing user engagement.',
      topic: 'Công việc',
      status: 'learning',
      createdAt: 1729000019000
    },
    {
      id: 'vocab_b1_5',
      word: 'Promote',
      phonetic: '/prəˈmoʊt/',
      pos: 'verb',
      level: 'B1',
      meaning: '1. [Nhân sự] Thăng chức, đề bạt vị trí công tác cao hơn;\n2. [Tiếp thị] Quảng bá, tiếp thị sản phẩm đến khách hàng;\n3. [Xã hội] Thúc đẩy, cổ vũ phong trào',
      example: 'She was promoted to product manager after her outstanding work.',
      topic: 'Công việc',
      status: 'learning',
      createdAt: 1729000020000
    },
    {
      id: 'vocab_b1_6',
      word: 'Reliable',
      phonetic: '/rɪˈlaɪ.ə.bəl/',
      pos: 'adjective',
      level: 'B1',
      meaning: '1. [Tính cách/Đối tác] Đáng tin cậy, giữ đúng lời hứa;\n2. [Hệ thống/Thiết bị] Hoạt động bền bỉ, an toàn ổn định',
      example: 'He is a reliable partner who always delivers high quality results.',
      topic: 'Công việc',
      status: 'learning',
      createdAt: 1729000021000
    },
    {
      id: 'vocab_b1_7',
      word: 'Strategy',
      phonetic: '/ˈstræt̬.ə.dʒi/',
      pos: 'noun',
      level: 'B1',
      meaning: '1. [Kinh doanh/Quân sự] Chiến lược toàn cục, kế hoạch dài hạn;\n2. [Đời sống] Phương pháp, mưu lược khôn ngoan',
      example: 'The company developed an effective digital transformation strategy.',
      topic: 'Công việc',
      status: 'learning',
      createdAt: 1729000022000
    },
    {
      id: 'vocab_b1_8',
      word: 'Enthusiastic',
      phonetic: '/ɪnˌθuː.ziˈæs.tɪk/',
      pos: 'adjective',
      level: 'B1',
      meaning: '1. [Thái độ] Nhiệt huyết, hăng hái, đầy hào hứng;\n2. [Tâm lý] Say mê, tràn đầy năng lượng tích cực',
      example: 'The students were enthusiastic about joining the English speaking club.',
      topic: 'Giao tiếp',
      status: 'learning',
      createdAt: 1729000023000
    },
    {
      id: 'vocab_b1_9',
      word: 'Misunderstand',
      phonetic: '/ˌmɪs.ʌn.dɚˈstænd/',
      pos: 'verb',
      level: 'B1',
      meaning: '1. [Giao tiếp] Hiểu nhầm, hiểu sai ý người khác;\n2. [Quan hệ] Bất đồng, ngộ nhận do thiếu sự trao đổi',
      example: 'Please speak slowly so we do not misunderstand each other.',
      topic: 'Giao tiếp',
      status: 'learning',
      createdAt: 1729000024000
    },

    // -------------------------------------------------------------
    // CẤP ĐỘ B2 (Khá - Tự tin thảo luận chuyên nghiệp)
    // -------------------------------------------------------------
    {
      id: 'vocab_b2_1',
      word: 'Collaborate',
      phonetic: '/kəˈlæb.ə.reɪt/',
      pos: 'verb',
      level: 'B2',
      meaning: '1. [Công việc] Hợp tác, phối hợp làm việc nhóm hiệu quả;\n2. [Học thuật/Nghệ thuật] Cùng đồng sáng tác, nghiên cứu chung',
      example: 'Engineers and designers collaborate closely to build modern software.',
      topic: 'Công việc',
      status: 'learning',
      createdAt: 1729000025000
    },
    {
      id: 'vocab_b2_2',
      word: 'Productive',
      phonetic: '/prəˈdʌk.tɪv/',
      pos: 'adjective',
      level: 'B2',
      meaning: '1. [Năng suất] Đạt hiệu suất cao, làm việc năng suất;\n2. [Kinh tế/Nông nghiệp] Màu mỡ, sinh ra nhiều lợi tức/hoa lợi',
      example: 'Setting clear goals every morning helps you stay highly productive.',
      topic: 'Công việc',
      status: 'learning',
      createdAt: 1729000026000
    },
    {
      id: 'vocab_b2_3',
      word: 'Negotiate',
      phonetic: '/nəˈɡoʊ.ʃi.eɪt/',
      pos: 'verb',
      level: 'B2',
      meaning: '1. [Kinh doanh] Đàm phán, thương lượng điều khoản hợp đồng;\n2. [Giao thông/Địa hình] Vượt qua chướng ngại vật hiểm trở',
      example: 'Both sides met to negotiate a mutually beneficial agreement.',
      topic: 'Giao tiếp',
      status: 'learning',
      createdAt: 1729000027000
    },
    {
      id: 'vocab_b2_4',
      word: 'Clarify',
      phonetic: '/ˈklær.ə.faɪ/',
      pos: 'verb',
      level: 'B2',
      meaning: '1. [Giao tiếp] Làm rõ, giải thích rành mạch điểm khó hiểu;\n2. [Ẩm thực] Lọc trong nước dùng, làm trong bơ (clarified butter)',
      example: 'Could you please clarify the third point in your presentation?',
      topic: 'Giao tiếp',
      status: 'learning',
      createdAt: 1729000028000
    },
    {
      id: 'vocab_b2_5',
      word: 'Efficient',
      phonetic: '/ɪˈfɪʃ.ənt/',
      pos: 'adjective',
      level: 'B2',
      meaning: '1. [Hiệu suất] Tối ưu hóa thời gian và công sức, ít lãng phí;\n2. [Năng lực] Làm việc có tổ chức khoa học, tay nghề cao',
      example: 'Automating repetitive tasks is an efficient way to boost productivity.',
      topic: 'Công việc',
      status: 'learning',
      createdAt: 1729000029000
    },
    {
      id: 'vocab_b2_6',
      word: 'Prioritize',
      phonetic: '/praɪˈɔːr.ə.taɪz/',
      pos: 'verb',
      level: 'B2',
      meaning: '1. [Quản trị] Ưu tiên, sắp xếp việc khẩn cấp lên hàng đầu;\n2. [Chiến lược] Dành nguồn lực trọng tâm cho mục tiêu cốt lõi',
      example: 'You must prioritize urgent customer requests over minor updates.',
      topic: 'Công việc',
      status: 'learning',
      createdAt: 1729000030000
    },
    {
      id: 'vocab_b2_7',
      word: 'Resilient',
      phonetic: '/rɪˈzɪl.jənt/',
      pos: 'adjective',
      level: 'B2',
      meaning: '1. [Tâm lý] Kiên cường, mau hồi phục sau khó khăn thất bại;\n2. [Vật liệu] Có tính đàn hồi tốt, chịu lực dẻo dai khó gãy',
      example: 'Resilient individuals adapt and bounce back stronger after setbacks.',
      topic: 'Đời sống',
      status: 'learning',
      createdAt: 1729000031000
    },
    {
      id: 'vocab_b2_8',
      word: 'Perspective',
      phonetic: '/pɚˈspek.tɪv/',
      pos: 'noun',
      level: 'B2',
      meaning: '1. [Tư duy] Góc nhìn, quan điểm cá nhân, cách nhìn nhận sự việc;\n2. [Hội họa] Phối cảnh, luật xa gần trong không gian tranh',
      example: 'Living in different countries gives you a much broader perspective on life.',
      topic: 'Học thuật',
      status: 'mastered',
      createdAt: 1729000032000
    },

    // -------------------------------------------------------------
    // CẤP ĐỘ C1 (Khó & Nâng cao - Học thuật, IELTS 7.5+, thảo luận chuyên sâu)
    // -------------------------------------------------------------
    {
      id: 'vocab_c1_1',
      word: 'Ambiguity',
      phonetic: '/ˌæm.bɪˈɡjuː.ə.t̬i/',
      pos: 'noun',
      level: 'C1',
      meaning: '1. [Học thuật/Ngôn ngữ] Sự mơ hồ, đa nghĩa, tối nghĩa;\n2. [Tình huống] Sự bất định, nước đôi không rõ ràng rành mạch',
      example: 'Contracts must be written with precision to prevent any legal ambiguity.',
      topic: 'Học thuật',
      status: 'learning',
      createdAt: 1729000033000
    },
    {
      id: 'vocab_c1_2',
      word: 'Meticulous',
      phonetic: '/məˈtɪk.jə.ləs/',
      pos: 'adjective',
      level: 'C1',
      meaning: '1. [Tác phong] Tỉ mỉ, cẩn trọng từng chi tiết nhỏ nhất;\n2. [Chất lượng] Đạt độ chính xác hoàn hảo không tì vết',
      example: 'Her meticulous research yielded groundbreaking discoveries in science.',
      topic: 'Công việc',
      status: 'learning',
      createdAt: 1729000034000
    },
    {
      id: 'vocab_c1_3',
      word: 'Comprehensive',
      phonetic: '/ˌkɑːm.prəˈhen.sɪv/',
      pos: 'adjective',
      level: 'C1',
      meaning: '1. [Bao quát] Toàn diện, bao hàm đầy đủ mọi phương diện;\n2. [Giáo dục] Hệ phổ thông hỗn hợp đa năng',
      example: 'The university offers a comprehensive curriculum for computer engineering.',
      topic: 'Học thuật',
      status: 'learning',
      createdAt: 1729000035000
    },
    {
      id: 'vocab_c1_4',
      word: 'Discrepancy',
      phonetic: '/dɪˈskrep.ən.si/',
      pos: 'noun',
      level: 'C1',
      meaning: '1. [Kiểm toán/Tài chính] Sự chênh lệch, sai số giữa các bản đối chiếu;\n2. [Khoa học] Điểm mâu thuẫn giữa lý thuyết và số liệu thực tế',
      example: 'The auditor found an unexplained discrepancy in the quarterly financial figures.',
      topic: 'Công việc',
      status: 'learning',
      createdAt: 1729000036000
    },
    {
      id: 'vocab_c1_5',
      word: 'Pragmatic',
      phonetic: '/præɡˈmæt̬.ɪk/',
      pos: 'adjective',
      level: 'C1',
      meaning: '1. [Tư duy/Triết học] Thực dụng, coi trọng hiệu quả thực tế hơn lý thuyết;\n2. [Chính trị] Thực tế, linh hoạt theo hoàn cảnh cụ thể',
      example: 'We need a pragmatic approach to resolve this complex operational dilemma.',
      topic: 'Công việc',
      status: 'learning',
      createdAt: 1729000037000
    },
    {
      id: 'vocab_c1_6',
      word: 'Ubiquitous',
      phonetic: '/juːˈbɪk.wə.t̬əs/',
      pos: 'adjective',
      level: 'C1',
      meaning: '1. [Công nghệ] Phổ biến khắp mọi nơi (ubiquitous computing);\n2. [Xã hội] Hiện diện đại trà, nhan nhản mọi ngóc ngách',
      example: 'Smartphones have become ubiquitous in nearly every corner of modern society.',
      topic: 'Công nghệ',
      status: 'learning',
      createdAt: 1729000038000
    },
    {
      id: 'vocab_c1_7',
      word: 'Eloquent',
      phonetic: '/ˈel.ə.kwənt/',
      pos: 'adjective',
      level: 'C1',
      meaning: '1. [Hùng biện] Lưu loát, hùng hồn, có tài thuyết phục cử tọa;\n2. [Biểu cảm] Truyền cảm sâu xa, gợi mở nhiều cảm xúc (eloquent silence)',
      example: 'Her eloquent address moved the audience to give a standing ovation.',
      topic: 'Giao tiếp',
      status: 'learning',
      createdAt: 1729000039000
    },
    {
      id: 'vocab_c1_8',
      word: 'Exacerbate',
      phonetic: '/ɪɡˈzæs.ɚ.beɪt/',
      pos: 'verb',
      level: 'C1',
      meaning: '1. [Tình hình] Làm trầm trọng thêm, khiến mâu thuẫn tệ hại hơn;\n2. [Y tế] Làm cơn đau hoặc bệnh tình trở nặng',
      example: 'Ignoring early feedback will only exacerbate the software defects later.',
      topic: 'Học thuật',
      status: 'learning',
      createdAt: 1729000040000
    },
    {
      id: 'vocab_c1_9',
      word: 'Feasible',
      phonetic: '/ˈfiː.zə.bəl/',
      pos: 'adjective',
      level: 'C1',
      meaning: '1. [Dự án/Kinh doanh] Khả thi, có thể thực hiện thành công;\n2. [Hợp lý] Tiện lợi, có thể chấp nhận được trong thực tiễn',
      example: 'The board concluded that switching to green energy was economically feasible.',
      topic: 'Công việc',
      status: 'learning',
      createdAt: 1729000041000
    },
    {
      id: 'vocab_c1_10',
      word: 'Substantiate',
      phonetic: '/səbˈstæn.ʃi.eɪt/',
      pos: 'verb',
      level: 'C1',
      meaning: '1. [Pháp lý] Chứng minh bằng chứng cứ xác thực trước tòa;\n2. [Học thuật] Luận chứng, củng cố luận điểm bằng cứ liệu vững chắc',
      example: 'You must provide concrete statistical data to substantiate your argument.',
      topic: 'Học thuật',
      status: 'learning',
      createdAt: 1729000042000
    },

    // -------------------------------------------------------------
    // CẤP ĐỘ C2 (Rất khó - Thành thạo như người bản xứ / Học giả)
    // -------------------------------------------------------------
    {
      id: 'vocab_c2_1',
      word: 'Pernicious',
      phonetic: '/pɚˈnɪʃ.əs/',
      pos: 'adjective',
      level: 'C2',
      meaning: '1. [Xã hội/Đạo đức] Độc hại ngấm ngầm, gây tổn hại âm ỉ khó nhận biết;\n2. [Y tế] Ác tính, nguy hiểm chết người (pernicious anemia)',
      example: 'Online disinformation has a pernicious influence on public harmony.',
      topic: 'Học thuật',
      status: 'learning',
      createdAt: 1729000043000
    },
    {
      id: 'vocab_c2_2',
      word: 'Serendipity',
      phonetic: '/ˌser.ənˈdɪp.ə.t̬i/',
      pos: 'noun',
      level: 'C2',
      meaning: '1. [Đời sống] Sự tình cờ may mắn tìm thấy điều quý giá bất ngờ;\n2. [Khoa học] Phát minh/khám phá vĩ đại nhờ sự tình cờ ngẫu nhiên',
      example: 'Meeting her long-lost mentor at an international symposium was pure serendipity.',
      topic: 'Đời sống',
      status: 'learning',
      createdAt: 1729000044000
    },
    {
      id: 'vocab_c2_3',
      word: 'Equanimity',
      phonetic: '/ˌek.wəˈnɪm.ə.t̬i/',
      pos: 'noun',
      level: 'C2',
      meaning: '1. [Tâm thái] Sự điềm tĩnh, an nhiên tự tại trước nghịch cảnh sóng gió;\n2. [Triết lý] Tâm bình thản, không dao động trước khen chê được mất',
      example: 'The seasoned captain navigated the sudden crisis with admirable equanimity.',
      topic: 'Đời sống',
      status: 'learning',
      createdAt: 1729000045000
    },
    {
      id: 'vocab_c2_4',
      word: 'Paradigm',
      phonetic: '/ˈper.ə.daɪm/',
      pos: 'noun',
      level: 'C2',
      meaning: '1. [Khoa học/Tri thức] Hệ hình mẫu chuẩn, khung tư duy căn bản (paradigm shift);\n2. [Ngữ pháp] Bảng biến cách hình vị từ vựng',
      example: 'Quantum computing promises to trigger a radical paradigm shift in technology.',
      topic: 'Công nghệ',
      status: 'learning',
      createdAt: 1729000046000
    },
    {
      id: 'vocab_c2_5',
      word: 'Ephemeral',
      phonetic: '/ɪˈfem.ɚ.əl/',
      pos: 'adjective',
      level: 'C2',
      meaning: '1. [Triết học/Nghệ thuật] Phù du, chóng tàn, ngắn ngủi như bọt nước;\n2. [Sinh học] Cây cỏ có vòng đời cực ngắn',
      example: 'Social media virality is often ephemeral, fading away after a few days.',
      topic: 'Học thuật',
      status: 'learning',
      createdAt: 1729000047000
    },
    {
      id: 'vocab_c2_6',
      word: 'Surreptitious',
      phonetic: '/ˌsɝː.əpˈtɪʃ.əs/',
      pos: 'adjective',
      level: 'C2',
      meaning: '1. [Hành vi] Lén lút, vụng trộm, hành động giấu giếm kĩ càng;\n2. [Mục đích] Bí mật kín đáo để tránh bị phát giác',
      example: 'He cast a surreptitious glance at his notes before answering the examiner.',
      topic: 'Giao tiếp',
      status: 'learning',
      createdAt: 1729000048000
    }
  ];
