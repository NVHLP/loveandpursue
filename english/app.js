/**
 * VocabMaster - English Vocabulary Self-Study Web Application
 * Pure Vanilla JavaScript (ES6+) with localStorage persistence & Web Speech API
 * Featuring multi-level CEFR categorization (A1 to C2) from Easy to Advanced.
 */

(function () {
  'use strict';

  // =========================================================================
  // 1. COMPREHENSIVE SAMPLE VOCABULARY BY LEVELS (A1 -> C2)
  // =========================================================================

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
      id: 'vocab_b1_intl',
      word: 'International',
      phonetic: '/ˌɪn.t̬ɚˈnæʃ.ən.əl/',
      pos: 'adjective',
      level: 'B1',
      meaning: '1. [Quốc tế] (thuộc) quốc tế, toàn cầu (thuộc về hai hay nhiều quốc gia);\n2. [Kinh doanh] Đa quốc gia, thương mại toàn cầu',
      example: 'English has become the dominant international language for business and science.',
      topic: 'Giao tiếp',
      status: 'learning',
      createdAt: 1729000015500
    },
    {
      id: 'vocab_b1_exh',
      word: 'Exhibition',
      phonetic: '/ˌek.səˈbɪʃ.ən/',
      pos: 'noun',
      level: 'B1',
      meaning: '1. [Nghệ thuật] Cuộc triển lãm, buổi trưng bày nghệ thuật hoặc hiện vật;\n2. [Kỹ năng] Màn trình diễn, sự thể hiện kỹ năng xuất sắc',
      example: 'The museum is hosting an international art exhibition this weekend.',
      topic: 'Nghệ thuật',
      status: 'learning',
      createdAt: 1729000015600
    },
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

  const STORAGE_KEY_WORDS = 'vocab_master_words_v4';
  const STORAGE_KEY_USER_BACKUP = 'vocab_master_user_words_backup_v1';
  const STORAGE_KEY_SETTINGS = 'vocab_master_settings_v4';

  // Global App State
  const state = {
    words: [],
    currentTab: 'vocab-list',
    // Vocab List Filters
    searchQuery: '',
    topicFilter: 'ALL',
    levelFilter: 'ALL',
    statusFilter: 'ALL',
    // Flashcard State
    flashcardCards: [],
    flashcardIndex: 0,
    flashcardIsFlipped: false,
    flashcardTopicFilter: 'ALL',
    flashcardLevelFilter: 'ALL',
    flashcardStatusFilter: 'learning',
    // Quiz State
    quiz: {
      active: false,
      questions: [],
      currentIndex: 0,
      score: 0,
      userAnswers: [],
      config: {
        topic: 'ALL',
        level: 'ALL',
        type: 'en-to-vi',
        count: 10
      }
    },
    // Voice & Audio
    selectedVoiceURI: '',
    speechRate: 0.9,
    theme: 'light',
    deleteTargetId: null
  };

  // Helper for CEFR Level representation
  function getLevelInfo(level) {
    const map = {
      'A1': { code: 'A1', label: 'A1 • Dễ', fullLabel: 'A1 (Cơ bản)', className: 'level-a1', tier: 'EASY' },
      'A2': { code: 'A2', label: 'A2 • Sơ cấp', fullLabel: 'A2 (Sơ cấp)', className: 'level-a2', tier: 'EASY' },
      'B1': { code: 'B1', label: 'B1 • Trung cấp', fullLabel: 'B1 (Trung cấp)', className: 'level-b1', tier: 'MEDIUM' },
      'B2': { code: 'B2', label: 'B2 • Khá', fullLabel: 'B2 (Khá)', className: 'level-b2', tier: 'MEDIUM' },
      'C1': { code: 'C1', label: 'C1 • Khó', fullLabel: 'C1 (Nâng cao)', className: 'level-c1', tier: 'HARD' },
      'C2': { code: 'C2', label: 'C2 • Rất khó', fullLabel: 'C2 (Thành thạo)', className: 'level-c2', tier: 'HARD' }
    };
    return map[level] || { code: level || 'B1', label: `${level || 'B1'} • Vừa`, fullLabel: level || 'B1', className: 'level-b1', tier: 'MEDIUM' };
  }

  // Built-in CEFR Lexicon Mapping for Automatic Difficulty Detection
  const CEFR_LEXICON = {
    A1: new Set([
      'hello', 'hi', 'cat', 'dog', 'boy', 'girl', 'man', 'woman', 'book', 'car', 'bus', 'pen', 'bag',
      'sun', 'rain', 'day', 'time', 'year', 'good', 'bad', 'happy', 'sad', 'hot', 'cold', 'big', 'small',
      'red', 'blue', 'green', 'white', 'black', 'one', 'two', 'three', 'four', 'five', 'eat', 'drink',
      'sleep', 'walk', 'run', 'play', 'read', 'write', 'see', 'look', 'hear', 'listen', 'speak', 'talk',
      'come', 'go', 'have', 'do', 'make', 'give', 'take', 'find', 'buy', 'like', 'love', 'want', 'need',
      'help', 'live', 'work', 'study', 'learn', 'greeting', 'polite', 'delicious', 'careful', 'travel',
      'habit', 'food', 'water', 'tea', 'coffee', 'house', 'home', 'room', 'door', 'window', 'school',
      'street', 'city', 'town', 'country', 'friend', 'family', 'father', 'mother', 'brother', 'sister',
      'doctor', 'teacher', 'music', 'picture', 'page', 'game', 'animal', 'bird', 'fish', 'tree'
    ]),
    A2: new Set([
      'schedule', 'comfortable', 'advice', 'improve', 'opportunity', 'prepare', 'protect', 'success',
      'express', 'remind', 'ability', 'accept', 'accident', 'achieve', 'admire', 'adult', 'afford',
      'afraid', 'agree', 'allow', 'alone', 'angry', 'appear', 'arrive', 'attack', 'avoid', 'awake',
      'borrow', 'brave', 'brilliant', 'calm', 'cancel', 'celebrate', 'certain', 'chance', 'character',
      'cheap', 'choice', 'choose', 'collect', 'complain', 'complete', 'connect', 'contain', 'continue',
      'control', 'correct', 'courage', 'cousin', 'crowd', 'damage', 'danger', 'decide', 'deep', 'defend',
      'delay', 'deliver', 'depend', 'describe', 'design', 'destroy', 'discover', 'discuss', 'distance',
      'doubt', 'dream', 'earn', 'education', 'effect', 'empty', 'encourage', 'escape', 'expect',
      'expensive', 'explain', 'explore', 'fail', 'famous', 'fault', 'fear', 'fight', 'foreign', 'forgive',
      'fresh', 'future', 'gentle', 'gift', 'glad', 'goal', 'government', 'gradual', 'guest', 'guide',
      'hate', 'healthy', 'heavy', 'hide', 'honest', 'huge', 'ignore', 'imagine', 'include', 'increase',
      'invite', 'island', 'jealous', 'join', 'joke', 'judge', 'lonely', 'lucky', 'manage', 'market',
      'marry', 'matter', 'member', 'message', 'mistake', 'modern', 'native', 'nature', 'neighbor',
      'nervous', 'normal', 'notice', 'nurse', 'obey', 'obvious', 'offer', 'opinion', 'opposite', 'order',
      'ordinary', 'organize', 'painful', 'passenger', 'patient', 'perfect', 'perform', 'pleasant',
      'pleasure', 'popular', 'possible', 'power', 'prefer', 'present', 'pretend', 'prevent', 'pride',
      'promise', 'proud', 'prove', 'public', 'punish', 'purpose', 'receive', 'refuse', 'regular',
      'relation', 'repair', 'reply', 'report', 'respect', 'responsible', 'result', 'return', 'rich',
      'safe', 'satisfy', 'save', 'search', 'secret', 'seem', 'serious', 'share', 'sharp', 'shout', 'shy',
      'simple', 'skill', 'society', 'solve', 'special', 'spend', 'stage', 'state', 'steal', 'strange',
      'strong', 'succeed', 'sudden', 'suffer', 'suggest', 'suit', 'surprise', 'talent', 'taste',
      'terrible', 'throw', 'tidy', 'total', 'tough', 'trust', 'truth', 'typical', 'unable', 'uncle',
      'unique', 'upset', 'usual', 'valuable', 'variety', 'village', 'visit', 'voice', 'waste', 'weather',
      'weigh', 'welcome', 'wide', 'wild', 'win', 'wish', 'worry', 'wound'
    ]),
    B1: new Set([
      'appreciate', 'deadline', 'feedback', 'objective', 'promote', 'reliable', 'strategy',
      'enthusiastic', 'misunderstand', 'abandon', 'absolute', 'abstract', 'abuse', 'academic', 'accent',
      'access', 'accidental', 'accommodate', 'accurate', 'accuse', 'acid', 'acquire', 'adequate',
      'adjust', 'adopt', 'advance', 'advantage', 'adventure', 'affair', 'affect', 'agency', 'aggressive',
      'agreement', 'aid', 'aim', 'alarm', 'allocate', 'alternative', 'ambition', 'analyze', 'anniversary',
      'announcement', 'anxiety', 'apparent', 'applaud', 'applicant', 'approach', 'approve', 'architect',
      'argue', 'arrangement', 'arrest', 'artificial', 'ashamed', 'assess', 'assume', 'athlete', 'attempt',
      'attitude', 'attract', 'audience', 'authority', 'automatic', 'available', 'aware', 'awkward',
      'backward', 'balance', 'barrier', 'behave', 'beneficial', 'beware', 'bond', 'boundary', 'brief',
      'burden', 'calculate', 'candidate', 'capable', 'capacity', 'career', 'category', 'cease',
      'celebration', 'chamber', 'circumstance', 'citizen', 'client', 'climate', 'collapse', 'colleague',
      'combine', 'comfort', 'commerce', 'commission', 'commit', 'communicate', 'comparison', 'compete',
      'complicate', 'concept', 'conclude', 'conflict', 'confuse', 'consequence', 'consider', 'constant',
      'construct', 'consult', 'consume', 'contact', 'contemporary', 'content', 'continuous', 'contribute',
      'convenient', 'convince', 'corporate', 'crawl', 'creature', 'crucial', 'current', 'custom', 'cycle',
      'debate', 'decay', 'declare', 'decline', 'dedicate', 'defeat', 'deficiency', 'define', 'delicate',
      'demand', 'demonstrate', 'deny', 'departure', 'dependent', 'depress', 'deputy', 'derive', 'deserve',
      'desperate', 'detect', 'determine', 'device', 'dignity', 'dimension', 'disable', 'disaster',
      'discipline', 'disorder', 'dispute', 'distant', 'distinct', 'distribute', 'district', 'diverse',
      'domestic', 'dominate', 'draft', 'drama', 'dramatic', 'duration', 'eager', 'economic', 'edge',
      'edition', 'element', 'eliminate', 'emerge', 'emphasis', 'enable', 'encounter', 'engage', 'enhance',
      'enormous', 'enterprise', 'entertain', 'entire', 'environment', 'episode', 'equal', 'era',
      'essential', 'establish', 'evaluate', 'evident', 'evolution', 'exceed', 'exception', 'exclude',
      'execute', 'exhibit', 'existence', 'expand', 'expectation', 'expense', 'expire', 'export', 'extend',
      'external', 'extract', 'extreme', 'facility', 'factor', 'failure', 'faith', 'feature', 'format',
      'formulate', 'fortune', 'foundation', 'framework', 'frequent', 'function', 'fundamental', 'generate',
      'genuine', 'glance', 'global', 'glorious', 'governor', 'guarantee', 'harmony', 'highlight',
      'identity', 'impact', 'implement', 'implication', 'imply', 'impose', 'incident', 'index',
      'indicate', 'individual', 'infect', 'inform', 'initial', 'initiative', 'innocent', 'input',
      'inquire', 'insert', 'inspect', 'inspire', 'instance', 'instruct', 'insurance', 'intelligence',
      'intend', 'intense', 'internal', 'interpret', 'interrupt', 'intervene', 'invest', 'isolate',
      'issue', 'journal', 'justify', 'labor', 'launch', 'layout', 'league', 'lecture', 'legislation',
      'liable', 'liberal', 'liberate', 'limitation', 'link', 'literary', 'logical', 'maintain', 'major',
      'manual', 'margin', 'marine', 'mature', 'mechanism', 'media', 'mediate', 'memory', 'mental',
      'mention', 'merit', 'method', 'military', 'minister', 'ministry', 'minority', 'miracle', 'modify',
      'mood', 'moral', 'motivate', 'mutual', 'narrative', 'network', 'neutral', 'nominate', 'nonetheless',
      'notify', 'notion', 'obtain', 'occupy', 'occur', 'oppose', 'option', 'orient', 'outline', 'overcome',
      'overseas', 'parallel', 'participant', 'perceive', 'permanent', 'permit', 'perspective',
      'phenomenon', 'phrase', 'policy', 'portion', 'potential', 'poverty', 'precise', 'predict',
      'prevail', 'primitive', 'prioritize', 'privilege', 'procedure', 'productive', 'profession',
      'prohibit', 'propose', 'prospective', 'protest', 'psychological', 'pursue', 'radical', 'reaction',
      'realistic', 'rebel', 'recover', 'recruit', 'reduce', 'refer', 'reform', 'refund', 'register',
      'regulate', 'reject', 'release', 'relevant', 'relief', 'reluctant', 'rely', 'remark', 'remove',
      'require', 'resident', 'resign', 'resolve', 'resort', 'resource', 'restore', 'restrict', 'retain',
      'reveal', 'revenue', 'reverse', 'reward', 'route', 'routine', 'scale', 'scheme', 'scope', 'sector',
      'secure', 'segment', 'select', 'sensitive', 'sequence', 'series', 'severe', 'shift', 'signal',
      'significant', 'site', 'source', 'specific', 'sponsor', 'stability', 'standard', 'status',
      'stimulate', 'structure', 'submit', 'subsequent', 'substantial', 'substitute', 'subtle',
      'sufficient', 'supply', 'support', 'survive', 'suspect', 'sustain', 'symbol', 'target', 'technique',
      'temporary', 'tension', 'theme', 'theory', 'threat', 'tradition', 'tragedy', 'transfer',
      'transform', 'transition', 'transmit', 'transport', 'trigger', 'ultimate', 'undergo', 'undertake',
      'uniform', 'universal', 'update', 'urgent', 'utility', 'valid', 'vehicle', 'version', 'via',
      'virtual', 'visible', 'vision', 'visual', 'volume', 'voluntary', 'volunteer', 'vulnerable',
      'warrant', 'welfare', 'witness', 'yield'
    ]),
    B2: new Set([
      'collaborate', 'productive', 'negotiate', 'clarify', 'efficient', 'prioritize', 'resilient',
      'perspective', 'absurd', 'accessible', 'accumulate', 'acknowledge', 'activist', 'adhere',
      'advocate', 'allocate', 'ambiguous', 'articulate', 'assimilate', 'authentic', 'autonomous',
      'coherent', 'coincide', 'compile', 'complement', 'comprise', 'concede', 'concurrent', 'conform',
      'consensus', 'consolidate', 'constitute', 'constrain', 'contemplate', 'contradiction',
      'controversial', 'conventional', 'converge', 'correlate', 'credible', 'cumulative', 'deplete',
      'designate', 'deteriorate', 'deviance', 'differentiate', 'diminish', 'discrete', 'displace',
      'diverge', 'doctrine', 'donate', 'dubious', 'dynamic', 'ecological', 'elicit', 'eliminate',
      'embody', 'emit', 'empirical', 'encompass', 'endorse', 'enhance', 'equate', 'erode', 'evaluate',
      'evolve', 'explicit', 'exploit', 'feasible', 'fluctuate', 'formulate', 'hierarchy', 'ideology',
      'immune', 'imperative', 'implicit', 'impose', 'deduce', 'inhibit', 'innovate', 'inspect',
      'integrated', 'intensify', 'intervene', 'intrinsic', 'legitimate', 'mediate', 'obscure',
      'propagate', 'reconcile', 'refute', 'synthesize'
    ]),
    C1: new Set([
      'ambiguity', 'meticulous', 'comprehensive', 'discrepancy', 'pragmatic', 'ubiquitous', 'eloquent',
      'exacerbate', 'feasible', 'substantiate', 'aesthetic', 'anomalous', 'alleviate', 'articulate',
      'audacious', 'benevolence', 'candid', 'coalesce', 'cognitive', 'complacency', 'conspicuous',
      'convoluted', 'corroborate', 'delineate', 'depict', 'disdain', 'disseminate', 'divisive',
      'eccentric', 'elucidate', 'embellish', 'eminent', 'emulate', 'exculpate', 'exemplary',
      'formidable', 'gregarious', 'idiosyncratic', 'immutable', 'impetuous', 'inadvertent', 'ineffable',
      'ingenious', 'innocuous', 'insidious', 'lucrative', 'mundane', 'negligible', 'novice', 'obscure',
      'omnipotent', 'ostentatious', 'perpetual', 'plausible', 'pristine', 'proliferate',
      'quintessential', 'redundant', 'resilience', 'scrutinize', 'transient', 'unprecedented',
      'viable', 'vulnerable'
    ]),
    C2: new Set([
      'pernicious', 'serendipity', 'equanimity', 'paradigm', 'ephemeral', 'surreptitious',
      'aberration', 'acrimony', 'ameliorate', 'anachronism', 'antipode', 'antipathy', 'assiduous',
      'arcane', 'bellicose', 'capricious', 'castigate', 'cacophony', 'clandestine', 'deleterious',
      'diaphanous', 'dichotomy', 'dissonance', 'egregious', 'effervescent', 'enigmatic', 'esoteric',
      'evanescent', 'fastidious', 'garrulous', 'hegemonic', 'hegemony', 'iconoclast', 'imperious',
      'inchoate', 'indefatigable', 'inimical', 'intransigent', 'juxtapose', 'loquacious',
      'magnanimous', 'mercurial', 'nefarious', 'obsequious', 'perspicacious', 'phlegmatic',
      'querulous', 'recalcitrant', 'sagacious', 'sycophant', 'taciturn', 'trepidation', 'vacillate',
      'venerate', 'vindicate', 'vitriolic', 'vociferous', 'voracious', 'zealous'
    ])
  };

  /**
   * Intelligently estimate CEFR difficulty level of any English word
   */
  function detectWordDifficulty(rawWord) {
    if (!rawWord || !rawWord.trim()) {
      return { level: 'B1', reason: 'Gõ từ tiếng Anh để tự động nhận diện mức độ', label: 'B1 • Trung cấp' };
    }

    const clean = rawWord.trim().toLowerCase().replace(/[^a-z]/g, '');
    if (clean.length === 0) {
      return { level: 'B1', reason: 'Gõ từ tiếng Anh hợp lệ', label: 'B1 • Trung cấp' };
    }

    // 1. Direct dictionary lookup (exact match)
    for (const lvl of ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']) {
      if (CEFR_LEXICON[lvl] && CEFR_LEXICON[lvl].has(clean)) {
        const info = getLevelInfo(lvl);
        return {
          level: lvl,
          reason: `Từ vựng đối chiếu chuẩn CEFR (${info.label})`,
          label: info.label
        };
      }
    }

    // 2. Inflectional & derivational stem check
    const stems = [
      clean.replace(/(ing|ed|ly|er|est|s|es)$/, ''),
      clean.replace(/tion$/, 'te'),
      clean.replace(/ment$/, ''),
      clean.replace(/able$/, '')
    ];
    for (const stem of stems) {
      if (stem && stem.length >= 3 && stem !== clean) {
        for (const lvl of ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']) {
          if (CEFR_LEXICON[lvl] && CEFR_LEXICON[lvl].has(stem)) {
            const info = getLevelInfo(lvl);
            return {
              level: lvl,
              reason: `Phái sinh từ gốc "${stem}" (${info.label})`,
              label: info.label
            };
          }
        }
      }
    }

    // 3. High-Register Suffix & Prefix Analysis
    const c2Prefixes = [
      'surrep', 'ephem', 'ubiq', 'seren', 'equan', 'anachr', 'bellic', 'capric', 'cacoph',
      'cland', 'delet', 'diaph', 'dichot', 'disson', 'egreg', 'efferv', 'enigm', 'esot',
      'evanes', 'fastid', 'garrul', 'hegem', 'iconoc', 'indefat', 'inimic', 'intrans',
      'juxtap', 'loquac', 'magnan', 'mercur', 'nefar', 'obseq', 'paradig', 'pernic',
      'perspic', 'phlegm', 'querul', 'recalc', 'sagac', 'sycoph', 'tacit', 'trepid',
      'vacill', 'vener', 'vindic', 'vitriol', 'vocif', 'vorac'
    ];
    for (const p of c2Prefixes) {
      if (clean.startsWith(p)) {
        return { level: 'C2', reason: 'Căn tố cổ Hy Lạp / Latin học thuật cao cấp C2', label: 'C2 • Rất khó' };
      }
    }

    const c1c2Suffixes = ['acious', 'icious', 'iferous', 'escent', 'esque', 'itude', 'tude', 'ocracy', 'phobia', 'phile'];
    for (const s of c1c2Suffixes) {
      if (clean.endsWith(s)) {
        return { level: 'C1', reason: `Hậu tố văn phong học thuật nâng cao -${s}`, label: 'C1 • Khó' };
      }
    }

    const b2Suffixes = ['istic', 'ical', 'ize', 'ise', 'ity', 'ive', 'ance', 'ence', 'ate'];
    for (const s of b2Suffixes) {
      if (clean.endsWith(s) && clean.length >= 7) {
        return { level: 'B2', reason: `Cấu trúc từ ghép công sở / học thuật B2 (-${s})`, label: 'B2 • Khá' };
      }
    }

    const b1Suffixes = ['tion', 'sion', 'ment', 'able', 'ible', 'ness', 'less', 'ful'];
    for (const s of b1Suffixes) {
      if (clean.endsWith(s)) {
        return { level: 'B1', reason: `Hậu tố từ vựng trung cấp B1 (-${s})`, label: 'B1 • Trung cấp' };
      }
    }

    // 4. Length & Syllable Heuristics
    const syllables = (clean.match(/[aeiouy]{1,2}/g) || []).length;

    if (clean.length <= 4 && syllables <= 2) {
      return { level: 'A1', reason: 'Từ ngắn thông dụng hàng ngày A1', label: 'A1 • Dễ' };
    }
    if (clean.length <= 6 && syllables <= 2) {
      return { level: 'A2', reason: 'Từ vựng giao tiếp sơ cấp A2', label: 'A2 • Sơ cấp' };
    }
    if (clean.length <= 8 || syllables <= 3) {
      return { level: 'B1', reason: 'Từ vựng đa âm tiết trung cấp B1', label: 'B1 • Trung cấp' };
    }
    if (clean.length <= 11 || syllables === 4) {
      return { level: 'B2', reason: 'Từ ghép chuyên môn B2', label: 'B2 • Khá' };
    }
    if (clean.length >= 12 || syllables >= 5) {
      return { level: 'C1', reason: 'Từ vựng dài phức tạp cấp độ C1', label: 'C1 • Khó' };
    }

    return { level: 'B1', reason: 'Độ khó trung cấp B1', label: 'B1 • Trung cấp' };
  }

  // =========================================================================
  // EXTENSIVE WORD KNOWLEDGE BASE & SMART LINGUISTIC AUTO-GENERATOR
  // =========================================================================

const EXTENDED_CORE_DICTIONARY = {
    'cat': {
      word: 'Cat',
      pos: 'noun',
      phonetic: '/kæt/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Động vật] Con mèo (động vật nuôi nhỏ có lông mềm, bốn chân);\n2. [Sinh học] Thú thuộc họ mèo (sư tử, hổ, báo)',
      example: 'The little cat curled up comfortably on the sofa and fell asleep.'
    },
    'dog': {
      word: 'Dog',
      pos: 'noun',
      phonetic: '/dɔːɡ/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Động vật] Con chó (thú nuôi trung thành, giữ nhà và bầu bạn);\n2. [Thành ngữ] Biểu tượng của sự trung thành và bền bỉ',
      example: 'He takes his dog for a long walk in the park every morning.'
    },
    'apple': {
      word: 'Apple',
      pos: 'noun',
      phonetic: '/ˈæp.əl/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Ẩm thực] Quả táo (trái cây tròn vỏ đỏ hoặc xanh, giòn ngọt);\n2. [Công nghệ] Tập đoàn công nghệ Apple nổi tiếng',
      example: 'Eating a fresh apple every day is great for your overall health.'
    },
    'table': {
      word: 'Table',
      pos: 'noun',
      phonetic: '/ˈteɪ.bəl/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Đồ đạc] Cái bàn (đồ nội thất mặt phẳng có chân để làm việc, ăn uống);\n2. [Dữ liệu/Bảng biểu] Bảng số liệu biểu diễn thông tin thành hàng và cột',
      example: 'They gathered around the dining table to share a warm dinner together.'
    },
    'water': {
      word: 'Water',
      pos: 'noun',
      phonetic: '/ˈwɑː.t̬ɚ/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Tự nhiên] Nước (chất lỏng trong suốt cần thiết cho sự sống);\n2. [Hành động] Tưới nước cho cây cối hoa màu',
      example: 'Be sure to drink plenty of fresh water throughout a hot summer day.'
    },
    'house': {
      word: 'House',
      pos: 'noun',
      phonetic: '/haʊs/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Kiến trúc] Ngôi nhà, căn nhà (công trình xây dựng để sinh sống);\n2. [Cơ quan] Tòa nhà trụ sở, hạ nghị viện hoặc nhà hát',
      example: 'They bought a charming house with a small green garden in the countryside.'
    },
    'car': {
      word: 'Car',
      pos: 'noun',
      phonetic: '/kɑːr/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Giao thông] Xe ô tô, xe hơi (phương tiện di chuyển đường bộ 4 bánh);\n2. [Đường sắt] Toa xe lửa chở khách hoặc hàng hóa',
      example: 'She drove her electric car to work to reduce carbon emissions.'
    },
    'complex': {
      word: 'Complex',
      pos: 'adjective',
      phonetic: '/ˈkɑːm.pleks/',
      level: 'B1',
      topic: 'Khoa học',
      meaning: '1. [Tính chất/Kỹ thuật] Phức tạp, rắc rối, gồm nhiều phần liên kết khó hiểu (a complex problem, complex system);\n2. [Kiến trúc/Đô thị] Khu liên hợp, quần thể phức hợp nhiều công trình (sports complex, shopping complex);\n3. [Tâm lý học] Mặc cảm tâm lý, nỗi ám ảnh tâm lý (inferiority complex: mặc cảm tự ti, guilt complex)',
      example: 'The engineers designed a modern sports complex while solving a highly complex structural challenge.'
    },
    'simple': {
      word: 'Simple',
      pos: 'adjective',
      phonetic: '/ˈsɪm.pəl/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Đặc tính/Đời sống] Đơn giản, dễ hiểu, không cầu kỳ phức tạp;\n2. [Bản chất/Tự nhiên] Thuần túy, mộc mạc, chất phác',
      example: 'The teacher explained the scientific rule in simple terms that everyone could grasp.'
    },
    'system': {
      word: 'System',
      pos: 'noun',
      phonetic: '/ˈsɪs.təm/',
      level: 'A2',
      topic: 'Công nghệ',
      meaning: '1. [Công nghệ/Kỹ thuật] Hệ thống mạng lưới, phần mềm liên kết đồng bộ;\n2. [Xã hội/Thể chế] Thể chế, chế độ quản lý hành chính;\n3. [Cơ thể/Sinh học] Hệ cơ quan sinh học trong cơ thể (immune system)',
      example: 'The hospital upgraded its computer system to streamline patient registrations.'
    },
    'process': {
      word: 'Process',
      pos: 'noun',
      phonetic: '/ˈprɑː.ses/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Quy trình/Công việc] Quy trình, tiến trình các bước thực hiện;\n2. [Sản xuất/Chế biến] Xử lý, gia công nguyên vật liệu hoặc dữ liệu;\n3. [Tự nhiên] Quá trình biến đổi tự nhiên theo thời gian',
      example: 'Applying for an international scholarship is a competitive and rigorous process.'
    },
    'structure': {
      word: 'Structure',
      pos: 'noun',
      phonetic: '/ˈstrʌk.tʃɚ/',
      level: 'B1',
      topic: 'Kiến trúc',
      meaning: '1. [Kiến trúc/Xây dựng] Công trình kiến trúc, kết cấu xây dựng đồ sộ;\n2. [Tổ chức/Hệ thống] Cơ cấu, cấu trúc sắp xếp trật tự hệ thống (organizational structure)',
      example: 'The architect carefully inspected the steel structure of the new high-rise tower.'
    },
    'function': {
      word: 'Function',
      pos: 'noun',
      phonetic: '/ˈfʌŋk.ʃən/',
      level: 'B1',
      topic: 'Công nghệ',
      meaning: '1. [Công năng/Kỹ thuật] Chức năng, công dụng hoạt động của máy móc/bộ phận;\n2. [Xã hội/Sự kiện] Buổi lễ trọng thể, buổi chiêu đãi chính thức;\n3. [Hành động] Hoạt động, vận hành trơn tru',
      example: 'The primary function of this cybersecurity software is protecting sensitive company data.'
    },
    'concept': {
      word: 'Concept',
      pos: 'noun',
      phonetic: '/ˈkɑːn.sept/',
      level: 'B2',
      topic: 'Học thuật',
      meaning: '1. [Nhận thức/Tư duy] Khái niệm, ý niệm trừu tượng hình thành trong tư duy;\n2. [Thiết kế/Sáng tạo] Ý tưởng chủ đạo, mẫu thiết kế thử nghiệm (concept car)',
      example: 'She introduced an innovative marketing concept that dramatically boosted online sales.'
    },
    'factor': {
      word: 'Factor',
      pos: 'noun',
      phonetic: '/ˈfæk.tɚ/',
      level: 'B1',
      topic: 'Khoa học',
      meaning: '1. [Nguyên nhân/Tác động] Yếu tố, nhân tố ảnh hưởng quyết định kết quả;\n2. [Toán học] Thừa số trong phép tính nhân chia',
      example: 'Cost and speed of delivery were the decisive factors in their purchasing choice.'
    },
    'approach': {
      word: 'Approach',
      pos: 'noun',
      phonetic: '/əˈproʊtʃ/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Phương pháp/Tư duy] Cách tiếp cận, phương thức giải quyết vấn đề;\n2. [Di chuyển/Không gian] Sự đến gần, tiếp cận mục tiêu;\n3. [Hành động] Bắt chuyện, đặt vấn đề hợp tác',
      example: 'The researchers adopted a multidisciplinary approach to combat global climate change.'
    },
    'strategy': {
      word: 'Strategy',
      pos: 'noun',
      phonetic: '/ˈstræt̬.ə.dʒi/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Kinh doanh/Quản trị] Chiến lược phát triển dài hạn, kế hoạch hành động quy mô lớn;\n2. [Quân sự/Thể thao] Chiến thuật điều binh, mưu lược thi đấu',
      example: 'The startup devised a digital marketing strategy to expand into European markets.'
    },
    'impact': {
      word: 'Impact',
      pos: 'noun',
      phonetic: '/ˈɪm.pækt/',
      level: 'B1',
      topic: 'Xã hội',
      meaning: '1. [Tác động/Ảnh hưởng] Tác động mạnh mẽ, ảnh hưởng sâu sắc đến đời sống/xã hội;\n2. [Vật lý/Va chạm] Lực va chạm, cú tông mạnh',
      example: 'Technological automation has had a profound impact on the future of employment.'
    },
    'challenge': {
      word: 'Challenge',
      pos: 'noun',
      phonetic: '/ˈtʃæl.ɪndʒ/',
      level: 'B1',
      topic: 'Đời sống',
      meaning: '1. [Khó khăn/Thử thách] Thử thách cam go, nhiệm vụ khó khăn đòi hỏi nỗ lực lớn;\n2. [Đối đầu/Pháp lý] Sự thách thức, sự nghi ngờ tính xác thực',
      example: 'Overcoming budget limitations was the biggest challenge facing the project team.'
    },
    'potential': {
      word: 'Potential',
      pos: 'noun',
      phonetic: '/poʊˈten.ʃəl/',
      level: 'B2',
      topic: 'Học tập',
      meaning: '1. [Khả năng/Tiềm năng] Tiềm năng phát triển, triển vọng thành công trong tương lai;\n2. [Vật lý/Điện học] Điện thế, thế năng tích lũy',
      example: 'The young programmer showed immense potential in developing artificial intelligence models.'
    },
    'perspective': {
      word: 'Perspective',
      pos: 'noun',
      phonetic: '/pɚˈspek.tɪv/',
      level: 'B2',
      topic: 'Học thuật',
      meaning: '1. [Góc nhìn/Quan điểm] Góc nhìn cá nhân, quan điểm nhận định vấn đề khách quan;\n2. [Mỹ thuật/Kiến trúc] Luật phối cảnh, tranh vẽ theo luật xa gần',
      example: 'Traveling to foreign countries gives people a broader perspective on diverse cultures.'
    },
    'context': {
      word: 'Context',
      pos: 'noun',
      phonetic: '/ˈkɑːn.tekst/',
      level: 'B2',
      topic: 'Học thuật',
      meaning: '1. [Ngữ cảnh/Bối cảnh] Bối cảnh lịch sử, hoàn cảnh sự việc diễn ra;\n2. [Ngôn ngữ học] Ngữ cảnh câu văn giúp xác định nghĩa chuẩn của từ vựng',
      example: 'It is crucial to understand the historical context before evaluating the treaty.'
    },
    'capacity': {
      word: 'Capacity',
      pos: 'noun',
      phonetic: '/kəˈpæs.ə.t̬i/',
      level: 'B2',
      topic: 'Công việc',
      meaning: '1. [Sức chứa/Quy mô] Sức chứa tối đa của phòng/phương tiện (seating capacity);\n2. [Năng lực/Chuyên môn] Khả năng tiếp thu, năng lực đảm đương công việc',
      example: 'The newly built auditorium has a seating capacity of over two thousand attendees.'
    },
    'performance': {
      word: 'Performance',
      pos: 'noun',
      phonetic: '/pɚˈfɔːr.məns/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Công việc/Kinh doanh] Hiệu suất làm việc, kết quả thực thi công việc;\n2. [Nghệ thuật/Sân khấu] Buổi biểu diễn, màn trình diễn ca nhạc hoặc kịch nghệ;\n3. [Kỹ thuật/Máy móc] Tính năng vận hành của thiết bị',
      example: 'The company rewarded employees with bonuses for outstanding quarterly performance.'
    },
    'standard': {
      word: 'Standard',
      pos: 'noun',
      phonetic: '/ˈstæn.dɚd/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Quy chuẩn/Chất lượng] Tiêu chuẩn chất lượng, mức chuẩn mực quy định;\n2. [Đời sống/Kinh tế] Mức sống, điều kiện sinh hoạt (standard of living)',
      example: 'Our products strictly adhere to international environmental safety standards.'
    },
    'focus': {
      word: 'Focus',
      pos: 'noun',
      phonetic: '/ˈfoʊ.kəs/',
      level: 'A2',
      topic: 'Công việc',
      meaning: '1. [Tâm điểm/Tập trung] Trọng tâm chú ý, tâm điểm quan sát/thảo luận;\n2. [Quang học/Nhiếp ảnh] Tiêu cự, điểm hội tụ ống kính;\n3. [Hành động] Tập trung cao độ tinh thần',
      example: 'The primary focus of today meeting is reducing operational expenses.'
    },
    'target': {
      word: 'Target',
      pos: 'noun',
      phonetic: '/ˈtɑːr.ɡɪt/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Mục tiêu/Kinh doanh] Chỉ tiêu doanh số, mục đích cụ thể cần đạt được;\n2. [Bia ngắm/Quân sự] Mục tiêu bắn ngắm, bia tập bắn;\n3. [Đối tượng] Hướng tới đối tượng khách hàng cụ thể',
      example: 'The retail brand exceeded its annual sales target by fifteen percent.'
    },
    'purpose': {
      word: 'Purpose',
      pos: 'noun',
      phonetic: '/ˈpɝː.pəs/',
      level: 'B1',
      topic: 'Đời sống',
      meaning: '1. [Mục đích/Ý định] Mục đích tồn tại, lý do thực hiện hành động;\n2. [Ý chí/Nghị lực] Quyết tâm, ý chí kiên định sống có mục đích rõ ràng',
      example: 'The purpose of this training seminar is enhancing employee negotiation skills.'
    },
    'benefit': {
      word: 'Benefit',
      pos: 'noun',
      phonetic: '/ˈben.ə.fɪt/',
      level: 'A2',
      topic: 'Đời sống',
      meaning: '1. [Lợi ích/Giá trị] Lợi ích thiết thực, giá trị tích cực nhận được;\n2. [Chế độ/Phúc lợi] Phúc lợi nhân viên, trợ cấp bảo hiểm xã hội (health benefits);\n3. [Từ thiện] Đêm nhạc quyên góp từ thiện (benefit concert)',
      example: 'Regular physical exercise offers long-term health benefits for both mind and body.'
    },
    'issue': {
      word: 'Issue',
      pos: 'noun',
      phonetic: '/ˈɪʃ.uː/',
      level: 'B1',
      topic: 'Xã hội',
      meaning: '1. [Vấn đề/Bất cập] Vấn đề thời sự quan trọng, việc phức tạp cần giải quyết;\n2. [Xuất bản/Báo chí] Số báo, kỳ phát hành định kỳ (the latest issue);\n3. [Hành động] Phát hành văn bản, cấp phát giấy tờ chính thức',
      example: 'Government delegates gathered to address the urgent issue of urban pollution.'
    },
    'international': {
      word: 'International',
      pos: 'adjective',
      phonetic: '/ˌɪn.t̬ɚˈnæʃ.ən.əl/',
      level: 'B1',
      topic: 'Giao tiếp',
      meaning: '1. [Toàn cầu] Quốc tế, mang tính toàn cầu (thuộc về hai hay nhiều quốc gia);\n2. [Kinh doanh] Đa quốc gia, thương mại quốc tế rộng khắp',
      example: 'The international conference brought together researchers from over fifty nations.'
    },
    'exhibition': {
      word: 'Exhibition',
      pos: 'noun',
      phonetic: '/ˌek.səˈbɪʃ.ən/',
      level: 'B1',
      topic: 'Nghệ thuật',
      meaning: '1. [Nghệ thuật/Văn hóa] Cuộc triển lãm, buổi trưng bày tranh ảnh hoặc hiện vật nghệ thuật;\n2. [Thương mại] Hội chợ triển lãm sản phẩm công nghệ thương mại;\n3. [Kỹ năng] Màn trình diễn, phô diễn kỹ năng (an exhibition match)',
      example: 'The national art gallery is hosting a contemporary photography exhibition.'
    },
    'education': {
      word: 'Education',
      pos: 'noun',
      phonetic: '/ˌedʒ.ʊˈkeɪ.ʃən/',
      level: 'A2',
      topic: 'Học tập',
      meaning: '1. [Giáo dục] Nền giáo dục, sự dạy dỗ và đào tạo tri thức;\n2. [Học vấn] Trình độ học vấn, học lực tích lũy',
      example: 'Quality education is the most powerful tool to reduce poverty worldwide.'
    },
    'government': {
      word: 'Government',
      pos: 'noun',
      phonetic: '/ˈɡʌv.ɚn.mənt/',
      level: 'B1',
      topic: 'Xã hội',
      meaning: '1. [Chính trị] Chính phủ, nội các nhà nước điều hành quốc gia;\n2. [Cai trị] Sự cai trị, quyền lực điều hành đất nước',
      example: 'The government launched a public campaign to support renewable energy.'
    },
    'hospital': {
      word: 'Hospital',
      pos: 'noun',
      phonetic: '/ˈhɑː.spɪ.t̬əl/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Y tế] Bệnh viện, trung tâm khám chữa bệnh và cấp cứu;\n2. [Cơ sở] Nơi chăm sóc sức khỏe bệnh nhân',
      example: 'Doctors and nurses worked tirelessly at the city general hospital.'
    },
    'university': {
      word: 'University',
      pos: 'noun',
      phonetic: '/ˌjuː.nəˈvɝː.sə.t̬i/',
      level: 'A2',
      topic: 'Học tập',
      meaning: '1. [Giáo dục] Trường đại học, viện đại học giảng dạy bậc cao;\n2. [Nghiên cứu] Trung tâm nghiên cứu học thuật',
      example: 'She graduated with high academic honors from Oxford University.'
    },
    'technology': {
      word: 'Technology',
      pos: 'noun',
      phonetic: '/tekˈnɑː.lə.dʒi/',
      level: 'A2',
      topic: 'Công nghệ',
      meaning: '1. [Khoa học] Công nghệ, kỹ thuật ứng dụng phục vụ đời sống;\n2. [Thiết bị] Các phát minh máy móc và giải pháp số hiện đại',
      example: 'Artificial intelligence is a transformative technology reshaping many careers.'
    },
    'development': {
      word: 'Development',
      pos: 'noun',
      phonetic: '/dɪˈvel.əp.mənt/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Tăng trưởng] Sự phát triển kinh tế, sự hoàn thiện bản thân;\n2. [Công nghệ] Quá trình lập trình và phát triển phần mềm (software development);\n3. [Sự kiện] Diễn biến mới của tình huống',
      example: 'Continuous skill development is essential for long-term career growth.'
    },
    'experience': {
      word: 'Experience',
      pos: 'noun',
      phonetic: '/ɪkˈspɪr.i.əns/',
      level: 'A2',
      topic: 'Đời sống',
      meaning: '1. [Kinh nghiệm] Kinh nghiệm chuyên môn tích lũy qua năm tháng;\n2. [Trải nghiệm] Trải nghiệm sống, sự việc đã từng kinh qua;\n3. [Hành động] Trải qua, nếm trải cảm xúc',
      example: 'Traveling alone across Southeast Asia was an unforgettable life experience.'
    },
    'environment': {
      word: 'Environment',
      pos: 'noun',
      phonetic: '/ɪnˈvaɪ.rən.mənt/',
      level: 'B1',
      topic: 'Đời sống',
      meaning: '1. [Tự nhiên] Môi trường sống, thiên nhiên sinh thái bao quanh;\n2. [Công sở] Môi trường làm việc, không khí học tập xung quanh',
      example: 'We must protect our natural environment for future generations.'
    },
    'management': {
      word: 'Management',
      pos: 'noun',
      phonetic: '/ˈmæn.ədʒ.mənt/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Quản trị] Sự quản lý điều hành tổ chức, doanh nghiệp;\n2. [Ban quản trị] Ban giám đốc, ban lãnh đạo công ty',
      example: 'Effective time management helps professionals maintain work-life balance.'
    },
    'communication': {
      word: 'Communication',
      pos: 'noun',
      phonetic: '/kəˌmjuː.nəˈkeɪ.ʃən/',
      level: 'B1',
      topic: 'Giao tiếp',
      meaning: '1. [Giao tiếp] Sự giao tiếp, sự trao đổi thông tin tư tưởng;\n2. [Viễn thông] Hệ thống liên lạc, truyền thông tín hiệu số',
      example: 'Open and honest communication builds deep trust in every partnership.'
    },
    'information': {
      word: 'Information',
      pos: 'noun',
      phonetic: '/ˌɪn.fɚˈmeɪ.ʃən/',
      level: 'A2',
      topic: 'Công nghệ',
      meaning: '1. [Dữ liệu] Thông tin, dữ liệu thu thập được về sự vật/sự việc;\n2. [Tin tức] Tin tức, sự hiểu biết về vấn đề',
      example: 'The library website provides accurate information for university researchers.'
    },
    'community': {
      word: 'Community',
      pos: 'noun',
      phonetic: '/kəˈmjuː.nə.t̬i/',
      level: 'B1',
      topic: 'Xã hội',
      meaning: '1. [Xã hội] Cộng đồng dân cư, tập thể người sống chung một vùng;\n2. [Hội nhóm] Cộng đồng có cùng sở thích/lĩnh vực (tech community)',
      example: 'Local volunteers organized a charity drive to support the elderly community.'
    },
    'organization': {
      word: 'Organization',
      pos: 'noun',
      phonetic: '/ˌɔːr.ɡən.əˈzeɪ.ʃən/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Tổ chức] Cơ quan, tổ chức, đoàn thể hoặc hiệp hội;\n2. [Sắp xếp] Sự sắp xếp ngăn nắp, khả năng tổ chức công việc',
      example: 'The World Health Organization coordinates global health emergencies.'
    },
    'relationship': {
      word: 'Relationship',
      pos: 'noun',
      phonetic: '/rɪˈleɪ.ʃən.ʃɪp/',
      level: 'B1',
      topic: 'Giao tiếp',
      meaning: '1. [Tình cảm] Mối quan hệ thân thiết giữa người với người;\n2. [Mối tương quan] Sự liên quan, liên hệ tương hỗ giữa hai hiện tượng',
      example: 'Mutual respect is the cornerstone of any healthy relationship.'
    },
    'responsibility': {
      word: 'Responsibility',
      pos: 'noun',
      phonetic: '/rɪˌspɑːn.səˈbɪl.ə.t̬i/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Bổn phận] Trách nhiệm, nghĩa vụ bắt buộc phải gánh vác;\n2. [Trọng trách] Nhiệm vụ được giao phó trong công việc',
      example: 'Taking responsibility for mistakes is a hallmark of mature leadership.'
    },
    'opportunity': {
      word: 'Opportunity',
      pos: 'noun',
      phonetic: '/ˌɑː.pɚˈtuː.nə.t̬i/',
      level: 'A2',
      topic: 'Công việc',
      meaning: '1. [Thời cơ] Cơ hội phát triển, thời cơ thuận lợi để thành công;\n2. [Dịp may] Dịp may hiếm có để học hỏi và mở mang tầm mắt',
      example: 'Studying abroad is an incredible opportunity to discover new perspectives.'
    },
    'performance': {
      word: 'Performance',
      pos: 'noun',
      phonetic: '/pɚˈfɔːr.məns/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Hiệu suất] Năng suất công việc, thành tích thể hiện (job performance);\n2. [Nghệ thuật] Buổi biểu diễn văn nghệ, kịch hát;\n3. [Kỹ thuật] Khả năng vận hành của máy móc/phần mềm',
      example: 'Regular feedback helps employees continuously improve their work performance.'
    },
    'department': {
      word: 'Department',
      pos: 'noun',
      phonetic: '/dɪˈpɑːrt.mənt/',
      level: 'A2',
      topic: 'Công việc',
      meaning: '1. [Tổ chức] Phòng ban công ty, khoa viện trường đại học;\n2. [Thương mại] Gian hàng bách hóa (department store)',
      example: 'She was appointed head of the international marketing department.'
    },
    'security': {
      word: 'Security',
      pos: 'noun',
      phonetic: '/səˈkjʊr.ə.t̬i/',
      level: 'B1',
      topic: 'Công nghệ',
      meaning: '1. [Bảo mật] An toàn bảo mật thông tin, an ninh mạng;\n2. [An ninh] Trật tự an ninh xã hội, sự bảo vệ;',
      example: 'Cyber security protocols protect sensitive user data from unauthorized access.'
    },
    'situation': {
      word: 'Situation',
      pos: 'noun',
      phonetic: '/ˌsɪtʃ.uˈeɪ.ʃən/',
      level: 'A2',
      topic: 'Đời sống',
      meaning: '1. [Hoàn cảnh] Tình huống, tình thế hiện tại, hoàn cảnh thực tế;\n2. [Vị trí] Vị trí địa lý tọa lạc của địa danh',
      example: 'Remaining calm during an emergency situation enables rational decision making.'
    },
    'difference': {
      word: 'Difference',
      pos: 'noun',
      phonetic: '/ˈdɪf.ɚ.əns/',
      level: 'A2',
      topic: 'Học tập',
      meaning: '1. [Khác biệt] Điểm khác biệt, sự phân biệt giữa các yếu tố;\n2. [Tác động] Tạo nên sự thay đổi tích cực (make a big difference)',
      example: 'Volunteering a few hours each week can make a real difference in people lives.'
    },
    'protection': {
      word: 'Protection',
      pos: 'noun',
      phonetic: '/prəˈtek.ʃən/',
      level: 'B1',
      topic: 'Đời sống',
      meaning: '1. [Bảo vệ] Sự bảo vệ, che chở an toàn khỏi mối nguy hại;\n2. [Pháp lý] Sự bảo hộ bản quyền, nhãn hiệu thương mại',
      example: 'Sunscreen provides essential protection against harmful ultraviolet rays.'
    },
    'population': {
      word: 'Population',
      pos: 'noun',
      phonetic: '/ˌpɑː.pjəˈleɪ.ʃən/',
      level: 'B1',
      topic: 'Xã hội',
      meaning: '1. [Dân số] Số lượng cư dân, dân số sinh sống trong vùng;\n2. [Sinh học/Thống kê] Quần thể sinh vật, tập mẫu đối tượng',
      example: 'Tokyo is one of the most populous urban metropolitan populations on earth.'
    },
    'generation': {
      word: 'Generation',
      pos: 'noun',
      phonetic: '/ˌdʒen.əˈreɪ.ʃən/',
      level: 'B1',
      topic: 'Xã hội',
      meaning: '1. [Thế hệ] Thế hệ con người sinh cùng thời kỳ (Gen Z, Gen Y);\n2. [Sản xuất] Sự phát điện, tạo ra năng lượng tái tạo',
      example: 'Each new generation brings innovative perspectives and cultural transformations.'
    },
    'celebration': {
      word: 'Celebration',
      pos: 'noun',
      phonetic: '/ˌsel.əˈbreɪ.ʃən/',
      level: 'A2',
      topic: 'Đời sống',
      meaning: '1. [Lễ kỷ niệm] Buổi tiệc mừng, lễ kỷ niệm sự kiện trọng đại;\n2. [Tán dương] Sự tán dương ca ngợi thành tích đạt được',
      example: 'The Lunar New Year celebration unites families with festive traditions and joy.'
    },
    'presentation': {
      word: 'Presentation',
      pos: 'noun',
      phonetic: '/ˌprez.ənˈteɪ.ʃən/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Thuyết trình] Buổi thuyết trình, bài báo cáo trước hội đồng;\n2. [Nghi thức] Lễ trao giải thưởng, sự trao tặng huân chương',
      example: 'Her clear slide presentation convinced investors to fund the startup.'
    },
    'conversation': {
      word: 'Conversation',
      pos: 'noun',
      phonetic: '/ˌkɑːn.vɚˈseɪ.ʃən/',
      level: 'A1',
      topic: 'Giao tiếp',
      meaning: '1. [Trò chuyện] Cuộc trò chuyện, buổi đàm đạo thân mật giữa người với người;\n2. [Đối thoại] Sự đối thoại cởi mở xây dựng',
      example: 'We had an engaging conversation about philosophy over morning coffee.'
    },
    'transportation': {
      word: 'Transportation',
      pos: 'noun',
      phonetic: '/ˌtræn.spɚˈteɪ.ʃən/',
      level: 'A2',
      topic: 'Du lịch',
      meaning: '1. [Giao thông] Hệ thống giao thông vận tải, phương tiện đi lại;\n2. [Vận chuyển] Việc chuyên chở hàng hóa bưu kiện',
      example: 'Electric buses provide clean and sustainable public transportation in cities.'
    },
    'recommendation': {
      word: 'Recommendation',
      pos: 'noun',
      phonetic: '/ˌrek.ə.menˈdeɪ.ʃən/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Khuyến nghị] Lời khuyên, đề xuất giải pháp tối ưu;\n2. [Tiến cử] Thư giới thiệu tiến cử nhân tài (letter of recommendation)',
      example: 'The professor wrote an enthusiastic recommendation for her master application.'
    },
    'understanding': {
      word: 'Understanding',
      pos: 'noun',
      phonetic: '/ˌʌn.dɚˈstæn.dɪŋ/',
      level: 'B1',
      topic: 'Giao tiếp',
      meaning: '1. [Thấu hiểu] Sự thấu hiểu, cảm thông sâu sắc với hoàn cảnh người khác;\n2. [Hiểu biết] Sự am hiểu thấu đáo một lĩnh vực chuyên môn',
      example: 'Cross-cultural understanding fosters international peace and mutual respect.'
    },
    'entertainment': {
      word: 'Entertainment',
      pos: 'noun',
      phonetic: '/en.t̬ɚˈteɪn.mənt/',
      level: 'A2',
      topic: 'Đời sống',
      meaning: '1. [Giải trí] Ngành giải trí nghệ thuật (phim ảnh, âm nhạc);\n2. [Tiêu khiển] Hoạt động vui chơi giải tỏa căng thẳng',
      example: 'The evening gala featured live musical entertainment and acrobatic arts.'
    },
    'hospitality': {
      word: 'Hospitality',
      pos: 'noun',
      phonetic: '/ˌhɑː.spɪˈtæl.ə.t̬i/',
      level: 'B2',
      topic: 'Du lịch',
      meaning: '1. [Lòng mến khách] Sự hiếu khách, lòng đón tiếp nồng ấm chu đáo;\n2. [Ngành dịch vụ] Ngành quản trị khách sạn - nhà hàng - du lịch',
      example: 'Travelers were deeply touched by the warm hospitality of the mountain villagers.'
    },
    'sustainability': {
      word: 'Sustainability',
      pos: 'noun',
      phonetic: '/səˌsteɪ.nəˈbɪl.ə.t̬i/',
      level: 'B2',
      topic: 'Đời sống',
      meaning: '1. [Môi trường] Tính bền vững, phát triển thân thiện sinh thái lâu dài;\n2. [Kinh doanh] Khả năng duy trì tự chủ tài chính ổn định',
      example: 'Corporate sustainability strategies aim to reduce carbon footprints drastically.'
    },
    'destination': {
      word: 'Destination',
      pos: 'noun',
      phonetic: '/ˌdes.təˈneɪ.ʃən/',
      level: 'A2',
      topic: 'Du lịch',
      meaning: '1. [Điểm đến] Điểm đến du lịch, nơi cập bến của chuyến đi;\n2. [Mục tiêu] Đích đến cuối cùng cần chạm tới',
      example: 'Da Nang has emerged as a premier travel destination in Southeast Asia.'
    },
    'confidence': {
      word: 'Confidence',
      pos: 'noun',
      phonetic: '/ˈkɑːn.fə.dəns/',
      level: 'B1',
      topic: 'Giao tiếp',
      meaning: '1. [Tự tin] Lòng tự tin vào năng lực và giá trị bản thân;\n2. [Tin cậy] Sự tin cậy, điều bí mật giãi bày',
      example: 'Practicing speaking aloud every day builds immense English speaking confidence.'
    },
    'knowledge': {
      word: 'Knowledge',
      pos: 'noun',
      phonetic: '/ˈnɑː.lɪdʒ/',
      level: 'A2',
      topic: 'Học tập',
      meaning: '1. [Tri thức] Kiến thức, tri thức sâu rộng thu nhận qua học hỏi;\n2. [Hiểu biết] Sự am hiểu thực tế về một đề tài',
      example: 'Sharing knowledge freely empowers entire communities to thrive.'
    },
    'beautiful': {
      word: 'Beautiful',
      pos: 'adjective',
      phonetic: '/ˈbjuː.t̬ə.fəl/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Thẩm mỹ] Xinh đẹp, kiều diễm, đẹp đẽ mỹ miều;\n2. [Cảm xúc] Tuyệt vời, đẹp đẽ trong tâm hồn (a beautiful soul)',
      example: 'The sunset painted the evening sky with beautiful crimson and purple shades.'
    },
    'important': {
      word: 'Important',
      pos: 'adjective',
      phonetic: '/ɪmˈpɔːr.tənt/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Quan trọng] Trọng đại, hệ trọng, có tầm ảnh hưởng lớn;\n2. [Uy tín] Nhân vật có địa vị cao, có tiếng nói',
      example: 'Sleep hygiene is just as important as diet and regular exercise.'
    },
    'celebrate': {
      word: 'Celebrate',
      pos: 'verb',
      phonetic: '/ˈsel.ə.breɪt/',
      level: 'A2',
      topic: 'Đời sống',
      meaning: '1. [Ăn mừng] Tổ chức tiệc mừng, ăn mừng chiến thắng/ngày vui;\n2. [Tôn vinh] Tán dương, tôn vinh phẩm chất cao quý',
      example: 'Friends gathered at the banquet hall to celebrate her graduation.'
    },
    'encourage': {
      word: 'Encourage',
      pos: 'verb',
      phonetic: '/ɪnˈkɝː.ɪdʒ/',
      level: 'B1',
      topic: 'Giao tiếp',
      meaning: '1. [Động viên] Cổ vũ tinh thần, khích lệ tiếp tục nỗ lực;\n2. [Thúc đẩy] Tạo điều kiện thuận lợi để sự việc phát triển',
      example: 'Great teachers encourage students to think critically and ask questions.'
    },
    'organize': {
      word: 'Organize',
      pos: 'verb',
      phonetic: '/ˈɔːr.ɡən.aɪz/',
      level: 'A2',
      topic: 'Công việc',
      meaning: '1. [Tổ chức] Đăng cai tổ chức sự kiện, điều phối hội nghị;\n2. [Sắp xếp] Sắp xếp đồ đạc, tổ chức công việc ngăn nắp',
      example: 'The youth club decided to organize a beach cleanup drive this Saturday.'
    },
    'participate': {
      word: 'Participate',
      pos: 'verb',
      phonetic: '/pɑːrˈtɪs.ə.peɪt/',
      level: 'B1',
      topic: 'Giao tiếp',
      meaning: '1. [Tham gia] Góp mặt, tham gia tích cực vào hoạt động chung;\n2. [Đóng góp] Góp phần vào thành công tập thể',
      example: 'More than three hundred athletes will participate in the city marathon.'
    },
    'recognize': {
      word: 'Recognize',
      pos: 'verb',
      phonetic: '/ˈrek.əɡ.naɪz/',
      level: 'B1',
      topic: 'Giao tiếp',
      meaning: '1. [Nhận ra] Nhận ra gương mặt, giọng nói quen thuộc;\n2. [Công nhận] Thừa nhận, vinh danh đóng góp xuất sắc',
      example: 'The academy decided to recognize her groundbreaking research in biochemistry.'
    },
    'traditional': {
      word: 'Traditional',
      pos: 'adjective',
      phonetic: '/trəˈdɪʃ.ən.əl/',
      level: 'A2',
      topic: 'Đời sống',
      meaning: '1. [Truyền thống] Mang bản sắc văn hóa cổ truyền lưu giữ qua đời;\n2. [Phong tục] Tuân theo tập quán xưa',
      example: 'Wearing the traditional ao dai on New Year days is a cherished Vietnamese custom.'
    },
    'professional': {
      word: 'Professional',
      pos: 'adjective',
      phonetic: '/prəˈfeʃ.ən.əl/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Chuyên nghiệp] Tác phong làm việc bài bản, tay nghề cao;\n2. [Nghề nghiệp] Thuộc về giới chuyên gia/nghề nghiệp chuyên môn',
      example: 'Always maintain a courteous professional demeanor during business meetings.'
    },
    'successful': {
      word: 'Successful',
      pos: 'adjective',
      phonetic: '/səkˈses.fəl/',
      level: 'A2',
      topic: 'Công việc',
      meaning: '1. [Thành đạt] Đạt thành tựu lớn, thành công vẻ vang;\n2. [Kết quả] Đem lại kết quả thắng lợi như kỳ vọng',
      example: 'The fundraising campaign was successful beyond all initial expectations.'
    },
    'effective': {
      word: 'Effective',
      pos: 'adjective',
      phonetic: '/əˈfek.tɪv/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Hiệu quả] Đem lại kết quả thiết thực rõ rệt;\n2. [Pháp lý] Có hiệu lực thi hành bắt đầu từ thời điểm',
      example: 'Spaced repetition flashcards are an effective method for long-term memorization.'
    },
    'convenient': {
      word: 'Convenient',
      pos: 'adjective',
      phonetic: '/kənˈviː.ni.ənt/',
      level: 'A2',
      topic: 'Đời sống',
      meaning: '1. [Tiện lợi] Thuận tiện, dễ dàng sử dụng, tiết kiệm công sức;\n2. [Thời gian] Phù hợp về mặt thời gian và địa điểm',
      example: 'Mobile banking makes sending money overseas fast and remarkably convenient.'
    },
    'creative': {
      word: 'Creative',
      pos: 'adjective',
      phonetic: '/kriˈeɪ.t̬ɪv/',
      level: 'A2',
      topic: 'Học tập',
      meaning: '1. [Sáng tạo] Giàu trí tưởng tượng, có nhiều ý tưởng độc đáo;\n2. [Nghệ thuật] Đậm chất nghệ thuật và tư duy đổi mới',
      example: 'Solving difficult coding bugs often requires thinking outside the box in a creative way.'
    }
  };

const WORD_KNOWLEDGE_BASE = {
    'pioneer': {
      word: 'Pioneer',
      pos: 'noun',
      phonetic: '/ˌpaɪəˈnɪər/',
      level: 'B2',
      topic: 'Công nghệ',
      meaning: '1. [Công nghệ/Khoa học] Người tiên phong, người mở đường sáng tạo;\n2. [Lịch sử] Người khai hoang mở cõi',
      example: 'She was a pioneer in computer science, paving the way for future generations.'
    },
    'resilience': {
      word: 'Resilience',
      pos: 'noun',
      phonetic: '/rɪˈzɪl.jəns/',
      level: 'B2',
      topic: 'Đời sống',
      meaning: '1. [Tâm lý] Khả năng phục hồi kiên cường sau khó khăn nghịch cảnh;\n2. [Vật liệu] Độ đàn hồi dẻo dai khó gãy',
      example: 'Building mental resilience helps individuals overcome adversity.'
    },
    'resilient': {
      word: 'Resilient',
      pos: 'adjective',
      phonetic: '/rɪˈzɪl.jənt/',
      level: 'B2',
      topic: 'Đời sống',
      meaning: '1. [Tâm lý] Kiên cường, mau hồi phục sau thất bại tổn thương;\n2. [Vật liệu] Có tính đàn hồi tốt, chịu lực dẻo dai',
      example: 'Resilient individuals adapt and bounce back stronger after setbacks.'
    },
    'reconstruct': {
      word: 'Reconstruct',
      pos: 'verb',
      phonetic: '/ˌriː.kənˈstrʌkt/',
      level: 'B2',
      topic: 'Kiến trúc',
      meaning: '1. [Xây dựng/Kiến trúc] Tái thiết, xây dựng lại công trình bị hư hại;\n2. [Điều tra] Tái hiện, dựng lại sự việc/hiện trường',
      example: 'Historians worked diligently to reconstruct the layout of the ancient citadel.'
    },
    'innovation': {
      word: 'Innovation',
      pos: 'noun',
      phonetic: '/ˌɪn.əˈveɪ.ʃən/',
      level: 'B2',
      topic: 'Công nghệ',
      meaning: '1. [Công nghệ/Sáng tạo] Sự đổi mới, sáng kiến cải tiến vượt bậc;\n2. [Kinh doanh] Sản phẩm hoặc mô hình đột phá mới',
      example: 'Technological innovation drives economic growth and creates opportunities.'
    },
    'innovate': {
      word: 'Innovate',
      pos: 'verb',
      phonetic: '/ˈɪn.ə.veɪt/',
      level: 'B2',
      topic: 'Công nghệ',
      meaning: '1. [Hành động] Đổi mới phương pháp, sáng tạo công nghệ mới;\n2. [Kinh doanh] Cách tân mô hình sản phẩm',
      example: 'Companies must continuously innovate to remain competitive.'
    },
    'address': {
      word: 'Address',
      pos: 'verb',
      phonetic: '/əˈdres/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Công việc] Giải quyết, xử lý (vấn đề, khủng hoảng khó khăn);\n2. [Giao tiếp] Bài diễn văn, lời phát biểu trang trọng;\n3. [Đời sống] Địa chỉ nhà, nơi cư trú',
      example: 'The board held an urgent meeting to address customer privacy concerns.'
    },
    'current': {
      word: 'Current',
      pos: 'adjective',
      phonetic: '/ˈkɝː.ənt/',
      level: 'B1',
      topic: 'Đời sống',
      meaning: '1. [Thời sự] Hiện tại, hiện hành, đang diễn ra phổ biến;\n2. [Vật lý/Tự nhiên] Dòng nước chảy, luồng gió; dòng điện;\n3. [Tâm lý] Luồng tư tưởng xã hội',
      example: 'Under current market conditions, agility is a key competitive advantage.'
    },
    'tender': {
      word: 'Tender',
      pos: 'adjective',
      phonetic: '/ˈten.dɚ/',
      level: 'B2',
      topic: 'Đời sống',
      meaning: '1. [Cảm xúc/Ẩm thực] Dịu dàng, trìu mến; thịt mềm ngon dễ nhai;\n2. [Kinh doanh] Hồ sơ mời thầu, việc bỏ thầu dự án;\n3. [Tài chính] Phương tiện thanh toán hợp pháp (legal tender)',
      example: 'The government invited global companies to submit a tender for the railway project.'
    },
    'solution': {
      word: 'Solution',
      pos: 'noun',
      phonetic: '/səˈluː.ʃən/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Công việc] Giải pháp, cách thức tháo gỡ khó khăn;\n2. [Hóa học] Dung dịch hòa tan chất lỏng',
      example: 'Innovation often emerges from finding a simple solution to a complex dilemma.'
    },
    'interest': {
      word: 'Interest',
      pos: 'noun',
      phonetic: '/ˈɪn.trəst/',
      level: 'A2',
      topic: 'Giao tiếp',
      meaning: '1. [Cảm xúc] Sự quan tâm, niềm hứng thú say mê;\n2. [Tài chính] Tiền lãi, lãi suất vay vốn / gửi tiết kiệm;\n3. [Quyền lợi] Quyền lợi thiết thân, cổ phần lợi tức (conflict of interest)',
      example: 'High interest rates influence both corporate borrowing and consumer spending.'
    },
    'sound': {
      word: 'Sound',
      pos: 'adjective',
      phonetic: '/saʊnd/',
      level: 'B1',
      topic: 'Đời sống',
      meaning: '1. [Đánh giá] Vững chắc, hợp lý, đáng tin cậy (sound advice, sound logic);\n2. [Vật lý] Âm thanh, tiếng động vang;\n3. [Y tế] Khỏe mạnh, lành lặn (safe and sound)',
      example: 'Her financial plan was built on sound investment principles and caution.'
    },
    'scale': {
      word: 'Scale',
      pos: 'noun',
      phonetic: '/skeɪl/',
      level: 'B2',
      topic: 'Công việc',
      meaning: '1. [Kinh doanh] Quy mô hoạt động; mở rộng tầm cỡ (scale up);\n2. [Đo lường] Cái cân, thang điểm đánh giá, tỷ lệ bản đồ;\n3. [Sinh học] Vảy cá, vảy bò sát',
      example: 'The startup expanded rapidly to achieve global economies of scale.'
    },
    'execute': {
      word: 'Execute',
      pos: 'verb',
      phonetic: '/ˈek.sə.kjuːt/',
      level: 'B2',
      topic: 'Công việc',
      meaning: '1. [Kinh doanh] Thi hành, triển khai (kế hoạch, hợp đồng, chiến lược);\n2. [Công nghệ] Thực thi mã lệnh, chạy phần mềm máy tính;\n3. [Pháp luật] Thi hành án tử hình, hành quyết',
      example: 'The leadership team must execute the restructuring plan with utmost discipline.'
    },
    'novel': {
      word: 'Novel',
      pos: 'adjective',
      phonetic: '/ˈnɑː.vəl/',
      level: 'B2',
      topic: 'Học thuật',
      meaning: '1. [Ý tưởng/Sáng tạo] Mới lạ, độc đáo, mang tính cách tân chưa từng có;\n2. [Văn học] Cuốn tiểu thuyết văn học',
      example: 'The laboratory pioneered a novel method for synthesizing renewable fuels.'
    },
    'company': {
      word: 'Company',
      pos: 'noun',
      phonetic: '/ˈkʌm.pə.ni/',
      level: 'A1',
      topic: 'Công việc',
      meaning: '1. [Kinh doanh] Công ty, doanh nghiệp;\n2. [Xã hội] Sự bầu bạn, bạn đồng hành (keep someone company);\n3. [Quân sự] Đại đội bộ binh',
      example: 'I truly appreciate your company during this long overseas journey.'
    },
    'deliver': {
      word: 'Deliver',
      pos: 'verb',
      phonetic: '/dɪˈlɪv.ɚ/',
      level: 'A2',
      topic: 'Công việc',
      meaning: '1. [Công việc] Thực hiện cam kết, đem lại kết quả kỳ vọng (deliver results);\n2. [Vận chuyển] Giao hàng, chuyển phát bưu phẩm;\n3. [Giao tiếp] Đọc bài diễn văn, thuyết trình trước cử tọa',
      example: 'Our software engineers consistently deliver exceptional software on time.'
    },
    'capital': {
      word: 'Capital',
      pos: 'noun',
      phonetic: '/ˈkæp.ə.t̬əl/',
      level: 'A2',
      topic: 'Công việc',
      meaning: '1. [Tài chính] Tiền vốn đầu tư, tư bản kinh doanh;\n2. [Địa lý/Chính trị] Thủ đô quốc gia;\n3. [Ngữ pháp] Chữ cái in hoa',
      example: 'Startups require venture capital to accelerate research and product development.'
    },
    'plant': {
      word: 'Plant',
      pos: 'noun',
      phonetic: '/plænt/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Sinh học] Thực vật, cây cối xanh tươi;\n2. [Công nghiệp] Nhà máy chế tạo, cơ sở sản xuất, xí nghiệp;\n3. [Hành động] Gieo trồng mầm cây; cài cắm điệp viên',
      example: 'The automotive company opened a new manufacturing plant in Ohio.'
    },
    'post': {
      word: 'Post',
      pos: 'noun',
      phonetic: '/poʊst/',
      level: 'A1',
      topic: 'Giao tiếp',
      meaning: '1. [Truyền thông/Mạng] Bài đăng trực tuyến, thông điệp chia sẻ;\n2. [Công việc] Vị trí công tác, nhiệm sở đảm nhận;\n3. [Bưu chính] Bưu điện, dịch vụ chuyển phát thư từ',
      example: 'She accepted an overseas diplomatic post in Tokyo.'
    },
    'run': {
      word: 'Run',
      pos: 'verb',
      phonetic: '/rʌn/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Quản trị] Điều hành, quản lý doanh nghiệp/dự án;\n2. [Vận động] Chạy bộ với tốc độ nhanh;\n3. [Công nghệ] Khởi chạy ứng dụng máy tính',
      example: 'He successfully runs a multinational logistics firm based in Singapore.'
    },
    'bank': {
      word: 'Bank',
      pos: 'noun',
      phonetic: '/bæŋk/',
      level: 'A1',
      topic: 'Công việc',
      meaning: '1. [Tài chính] Ngân hàng thương mại, tổ chức tín dụng;\n2. [Địa lý] Bờ sông, bờ đê dốc đứng;\n3. [Hành động] Gửi tiền vào tài khoản tiết kiệm',
      example: 'They sat peacefully on the grassy river bank watching the sunset.'
    },
    'charge': {
      word: 'Charge',
      pos: 'verb',
      phonetic: '/tʃɑːrdʒ/',
      level: 'A2',
      topic: 'Công việc',
      meaning: '1. [Tài chính] Tính phí dịch vụ, đòi tiền thanh toán;\n2. [Pháp luật] Buộc tội, cáo buộc hành vi vi phạm;\n3. [Công nghệ] Sạc pin, nạp năng lượng điện;\n4. [Nhiệm vụ] Phụ trách, trông nom (in charge of)',
      example: 'Who is currently in charge of managing the customer service department?'
    },
    'bill': {
      word: 'Bill',
      pos: 'noun',
      phonetic: '/bɪl/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Tài chính] Hóa đơn thanh toán tiền điện/nước/dịch vụ;\n2. [Pháp lý] Dự luật trình quốc hội thông qua;\n3. [Sinh học] Mỏ chim',
      example: 'Parliament voted overwhelmingly in favor of passing the environmental bill.'
    },
    'check': {
      word: 'Check',
      pos: 'verb',
      phonetic: '/tʃek/',
      level: 'A1',
      topic: 'Công việc',
      meaning: '1. [Công việc/Đời sống] Kiểm tra, rà soát lại thông tin cẩn thận;\n2. [Tài chính] Tấm séc thanh toán; hóa đơn tính tiền;\n3. [Kiểm soát] Kìm hãm, ngăn chặn đà gia tăng (keep in check)',
      example: 'Central banks raise interest rates to keep inflation in check.'
    },
    'court': {
      word: 'Court',
      pos: 'noun',
      phonetic: '/kɔːrt/',
      level: 'A2',
      topic: 'Học thuật',
      meaning: '1. [Pháp luật] Tòa án xét xử, phiên tòa tư pháp;\n2. [Thể thao] Sân thi đấu thể thao (quần vợt, bóng rổ, cầu lông);\n3. [Lịch sử] Triều đình, hoàng cung',
      example: 'Both tennis champions played intensely on the central grass court.'
    },
    'fine': {
      word: 'Fine',
      pos: 'adjective',
      phonetic: '/faɪn/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Sức khỏe/Trạng thái] Tốt đẹp, khỏe mạnh, ổn thỏa;\n2. [Pháp luật] Tiền phạt vi phạm, sự xử phạt hành chính;\n3. [Kích thước/Chất lượng] Hạt mịn, tinh xảo, mỏng manh',
      example: 'Drivers who exceed the speed limit must pay a substantial fine.'
    },
    'match': {
      word: 'Match',
      pos: 'noun',
      phonetic: '/mætʃ/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Thể thao] Trận thi đấu, cuộc tranh tài thể thao;\n2. [Đồ vật] Que diêm tạo lửa;\n3. [Tương thích] Sự hòa hợp tương xứng, cặp đôi xứng lứa vừa đôi',
      example: 'Her stylish navy blue scarf was a perfect match for her winter coat.'
    },
    'ring': {
      word: 'Ring',
      pos: 'noun',
      phonetic: '/rɪŋ/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Trang sức] Nhẫn đeo tay đính đá quý;\n2. [Âm thanh] Tiếng chuông reo, gọi điện thoại;\n3. [Thể thao] Sàn đấu võ đài (boxing ring)',
      example: 'The boxer stepped confidently into the ring ready for the championship.'
    },
    'spring': {
      word: 'Spring',
      pos: 'noun',
      phonetic: '/sprɪŋ/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Thời gian] Mùa xuân đâm chồi nảy lộc tươi vui;\n2. [Kỹ thuật] Lò xo đàn hồi, nhíp giảm chấn;\n3. [Địa chất] Suối nước khoáng tự nhiên phun lên từ lòng đất',
      example: 'The mountain village is renowned for its healing hot mineral springs.'
    },
    'right': {
      word: 'Right',
      pos: 'adjective',
      phonetic: '/raɪt/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Đúng đắn] Đúng đắn, chính xác, hợp lý;\n2. [Phương hướng] Phía bên tay phải, rẽ phải;\n3. [Pháp luật/Xã hội] Quyền lợi chính đáng của công dân, nhân quyền',
      example: 'Access to education and healthcare is a fundamental human right.'
    },
    'point': {
      word: 'Point',
      pos: 'noun',
      phonetic: '/pɔɪnt/',
      level: 'A1',
      topic: 'Giao tiếp',
      meaning: '1. [Giao tiếp] Quan điểm, ý kiến then chốt trong tranh luận;\n2. [Đo lường] Điểm số thi đấu; chấm điểm;\n3. [Hành động] Chỉ tay về hướng đối diện; mũi nhọn',
      example: 'The keynote speaker made an insightful point about renewable energy.'
    },
    'case': {
      word: 'Case',
      pos: 'noun',
      phonetic: '/keɪs/',
      level: 'A2',
      topic: 'Công việc',
      meaning: '1. [Đời sống] Tình huống, trường hợp cụ thể (in this case);\n2. [Pháp lý/Y tế] Vụ án hình sự; ca bệnh chẩn đoán;\n3. [Đồ vật] Cái hộp bảo vệ, bao da, vỏ ốp (phone case)',
      example: 'Detectives gathered sufficient forensic evidence to solve the complex murder case.'
    },
    'matter': {
      word: 'Matter',
      pos: 'noun',
      phonetic: '/ˈmæt̬.ɚ/',
      level: 'A2',
      topic: 'Đời sống',
      meaning: '1. [Đời sống] Vấn đề khó khăn, chuyện rắc rối (What is the matter?);\n2. [Vật lý] Vật chất cấu thành vũ trụ;\n3. [Tầm quan trọng] Có ý nghĩa, đáng kể (It matters)',
      example: 'Kindness and empathy are qualities that truly matter in interpersonal relations.'
    },
    'order': {
      word: 'Order',
      pos: 'noun',
      phonetic: '/ˈɔːr.dɚ/',
      level: 'A1',
      topic: 'Công việc',
      meaning: '1. [Thương mại] Đơn đặt hàng, đặt mua món ăn/sản phẩm;\n2. [Pháp luật] Mệnh lệnh chỉ huy; trật tự an ninh (law and order);\n3. [Trình tự] Thứ tự ngăn nắp có hệ thống',
      example: 'Police officers worked tirelessly to restore public order throughout the city.'
    },
    'party': {
      word: 'Party',
      pos: 'noun',
      phonetic: '/ˈpɑːr.t̬i/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Đời sống] Bữa tiệc liên hoan, buổi lễ kỷ niệm;\n2. [Chính trị] Đảng phái chính trị;\n3. [Pháp luật] Bên tham gia hợp đồng cam kết (third party)',
      example: 'Both signing parties mutually agreed to all revised contractual terms.'
    },
    'power': {
      word: 'Power',
      pos: 'noun',
      phonetic: '/ˈpaʊ.ɚ/',
      level: 'A2',
      topic: 'Công nghệ',
      meaning: '1. [Chính trị/Xã hội] Quyền lực, quyền kiểm soát lãnh đạo;\n2. [Kỹ thuật/Vật lý] Năng lượng điện lực, công suất máy móc;\n3. [Năng lực] Sức mạnh thể chất và tinh thần',
      example: 'The storm knocked out electric power across hundreds of coastal homes.'
    },
    'reason': {
      word: 'Reason',
      pos: 'noun',
      phonetic: '/ˈriː.zən/',
      level: 'A2',
      topic: 'Giao tiếp',
      meaning: '1. [Tư duy] Lý trí, lẽ phải, óc phán đoán minh triết;\n2. [Giải thích] Nguyên nhân, lý do dẫn tới sự việc;\n3. [Tranh luận] Lập luận logic thuyết phục',
      example: 'True wisdom involves listening to reason even during emotionally charged moments.'
    },
    'sense': {
      word: 'Sense',
      pos: 'noun',
      phonetic: '/sens/',
      level: 'A2',
      topic: 'Đời sống',
      meaning: '1. [Sinh lý] Giác quan sinh học (thị giác, thính giác, v.v.);\n2. [Tư duy] Lẽ phải thông thường, lương tri (common sense);\n3. [Ngôn ngữ] Nét nghĩa của từ ngữ',
      example: 'Using common sense helps travelers avoid unnecessary risks in unfamiliar cities.'
    },
    'state': {
      word: 'State',
      pos: 'noun',
      phonetic: '/steɪt/',
      level: 'A2',
      topic: 'Học thuật',
      meaning: '1. [Chính trị] Nhà nước, quốc gia; tiểu bang hành chính;\n2. [Khoa học/Tâm lý] Trạng thái thể chất, thể vật chất hoặc tâm thần;\n3. [Giao tiếp] Tuyên bố chính thức',
      example: 'Meditation guides the human brain into a deeply calm and restorative state.'
    },
    'train': {
      word: 'Train',
      pos: 'noun',
      phonetic: '/treɪn/',
      level: 'A1',
      topic: 'Du lịch',
      meaning: '1. [Giao thông] Đoàn tàu hỏa chạy trên đường ray sắt;\n2. [Giáo dục/Công việc] Huấn luyện, đào tạo kỹ năng chuyên môn;\n3. [Trình tự] Chuỗi sự kiện liên hồi, dòng suy nghĩ',
      example: 'The company launched an intensive bootcamp to train junior software developers.'
    },
    'watch': {
      word: 'Watch',
      pos: 'verb',
      phonetic: '/wɑːtʃ/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Hành động] Quan sát, theo dõi chăm chú, canh chừng;\n2. [Phụ kiện] Chiếc đồng hồ đeo tay xem giờ',
      example: 'He checked his vintage Swiss wrist watch to ensure he arrived punctually.'
    },
    'wave': {
      word: 'Wave',
      pos: 'noun',
      phonetic: '/weɪv/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Tự nhiên/Vật lý] Sóng biển dâng trào; sóng nhiệt; sóng điện từ;\n2. [Cử chỉ] Cử chỉ vẫy tay chào hỏi hoặc ra dấu hiệu',
      example: 'Surfers gathered at dawn to catch the massive Pacific ocean waves.'
    },
    'well': {
      word: 'Well',
      pos: 'adverb',
      phonetic: '/wel/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Trạng từ] Một cách thành thạo, chu đáo, xuất sắc;\n2. [Sức khỏe] Khỏe mạnh, bình an vô sự;\n3. [Địa chất] Giếng nước ngầm, giếng khoan dầu mỏ',
      example: 'Engineers drilled a deep water well to supply drinking water to the desert village.'
    },
    'light': {
      word: 'Light',
      pos: 'noun',
      phonetic: '/laɪt/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Vật lý] Ánh sáng tự nhiên, nguồn chiếu sáng, ngọn đèn;\n2. [Trọng lượng/Màu] Nhẹ cân, thanh mảnh; màu sắc tươi nhạt;\n3. [Hành động] Bật đèn, thắp sáng lửa',
      example: 'Morning sunlight illuminated the tranquil valley with a golden glow.'
    },
    'hard': {
      word: 'Hard',
      pos: 'adjective',
      phonetic: '/hɑːrd/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Độ khó] Khó khăn, gian truân, phức tạp;\n2. [Vật liệu] Cứng cáp, rắn chắc như đá;\n3. [Nỗ lực] Chăm chỉ, hết mình (work hard)',
      example: 'Dedication and hard work pave the pathway toward enduring achievement.'
    },
    'fast': {
      word: 'Fast',
      pos: 'adjective',
      phonetic: '/fæst/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Tốc độ] Nhanh nhẹn, tốc độ cao;\n2. [Sức khỏe/Tôn giáo] Nhịn ăn thanh lọc cơ thể (intermittent fasting);\n3. [Liên kết] Gắn chặt, kiên định',
      example: 'High-speed bullet trains offer passengers a fast and eco-friendly journey.'
    },
    'close': {
      word: 'Close',
      pos: 'verb',
      phonetic: '/kloʊz/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Hành động] Đóng cửa lại, khép lại phiên họp;\n2. [Khoảng cách/Tình cảm] Gần kề, sát sao; thân thiết gắn bó (close friends)',
      example: 'True friends remain close to one another even when separated by oceans.'
    },
    'break': {
      word: 'Break',
      pos: 'verb',
      phonetic: '/breɪk/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Hành động] Làm gãy, vỡ vụn đồ vật;\n2. [Nghỉ ngơi] Giờ giải lao, khoảng nghỉ ngơi ngắn (coffee break);\n3. [Quy tắc] Phá vỡ kỷ lục, vi phạm luật lệ',
      example: 'Taking a brief afternoon break revitalizes your focus and creativity.'
    },
    'call': {
      word: 'Call',
      pos: 'verb',
      phonetic: '/kɑːl/',
      level: 'A1',
      topic: 'Giao tiếp',
      meaning: '1. [Giao tiếp] Gọi điện thoại; gọi tên to tiếng;\n2. [Quyết định] Quyết định phán xét khôn ngoan (good call);\n3. [Kêu gọi] Kêu gọi quyên góp ủng hộ',
      example: 'The committee held an emergency meeting to call for humanitarian aid.'
    },
    'clear': {
      word: 'Clear',
      pos: 'adjective',
      phonetic: '/klɪr/',
      level: 'A1',
      topic: 'Giao tiếp',
      meaning: '1. [Tư duy] Rõ ràng, khúc chiết, minh bạch dễ hiểu;\n2. [Thị giác] Trong trẻo, sáng sủa;\n3. [Hành động] Dọn dẹp sạch sẽ chướng ngại vật',
      example: 'Clear communication between team members prevents unnecessary misunderstandings.'
    },
    'draw': {
      word: 'Draw',
      pos: 'verb',
      phonetic: '/drɑː/',
      level: 'A1',
      topic: 'Học tập',
      meaning: '1. [Nghệ thuật] Vẽ tranh bằng bút chì/mực;\n2. [Thu hút] Thu hút sự chú ý, lôi kéo đám đông; rút thăm trúng thưởng;\n3. [Thể thao] Tỷ số hòa cân bằng',
      example: 'The thrilling international football match ended in an honorable 2-2 draw.'
    },
    'drop': {
      word: 'Drop',
      pos: 'verb',
      phonetic: '/drɑːp/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Hành động] Buông rơi, làm rơi đồ vật;\n2. [Chất lỏng] Giọt nước, giọt tinh dầu nhỏ;\n3. [Chỉ số] Sự sụt giảm số lượng hoặc mức giá',
      example: 'A sharp drop in temperature signals the sudden arrival of winter storms.'
    },
    'fall': {
      word: 'Fall',
      pos: 'verb',
      phonetic: '/fɑːl/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Vận động] Ngã xuống, rơi xuống đất;\n2. [Thời gian] Mùa thu lá vàng rực rỡ;\n3. [Chỉ số] Suy giảm quy mô, sa sút phong độ',
      example: 'Walking in the park during colorful autumn fall is a serene experience.'
    },
    'feel': {
      word: 'Feel',
      pos: 'verb',
      phonetic: '/fiːl/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Cảm giác] Cảm thấy qua xúc giác; sờ chạm;\n2. [Tâm trạng] Cảm nhận rung động nội tâm, trực giác mách bảo;\n3. [Bầu không khí] Không khí tổng thể',
      example: 'He could feel genuine enthusiasm radiating throughout the auditorium.'
    },
    'lead': {
      word: 'Lead',
      pos: 'verb',
      phonetic: '/liːd/',
      level: 'A2',
      topic: 'Công việc',
      meaning: '1. [Lãnh đạo] Dẫn đường, chỉ huy đội ngũ, dẫn đầu cuộc đua;\n2. [Vật liệu] (/led/) Kim loại chì; ngòi bút chì;\n3. [Kinh doanh] Manh mối khách hàng tiềm năng',
      example: 'Effective leaders lead by inspiring examples rather than mere authoritative commands.'
    },
    'minute': {
      word: 'Minute',
      pos: 'noun',
      phonetic: '/ˈmɪn.ɪt/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Thời gian] Phút (khoảng thời gian 60 giây);\n2. [Chi tiết] (/maɪˈnjuːt/) Cực kỳ nhỏ bé, tỉ mỉ từng chi tiết vụn vặt;\n3. [Hội họp] Biên bản ghi chép cuộc họp',
      example: 'The secretary meticulously recorded every key decision in the official meeting minutes.'
    },
    'resume': {
      word: 'Resume',
      pos: 'verb',
      phonetic: '/rɪˈzuːm/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Hành động] (/rɪˈzuːm/) Tiếp tục lại sau khi tạm hoãn;\n2. [Công việc] (/ˈrez.ə.meɪ/) Bản lý lịch xin việc, CV ứng tuyển công tác',
      example: 'Applicants should tailor their professional resume to highlight relevant achievements.'
    },
    'row': {
      word: 'Row',
      pos: 'noun',
      phonetic: '/roʊ/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Bố cục] Hàng ngay ngắn, dãy ghế ngồi trong rạp;\n2. [Thể thao] Chèo thuyền thể thao trên sông;\n3. [Giao tiếp] (/raʊ/) Cuộc cãi vã, tranh chấp ầm ĩ',
      example: 'Our seats were positioned conveniently in the front row of the concert hall.'
    },
    'tear': {
      word: 'Tear',
      pos: 'noun',
      phonetic: '/tɪr/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Sinh lý] (/tɪər/) Giọt nước mắt tuôn trào;\n2. [Hành động] (/ter/) Xé rách giấy/vải, giằng xé vụn',
      example: 'Tears of joy streamed down her face upon receiving the acceptance letter.'
    },
    'wind': {
      word: 'Wind',
      pos: 'noun',
      phonetic: '/wɪnd/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Thời tiết] (/wɪnd/) Ngọn gió, luồng gió mát lành;\n2. [Hành động] (/waɪnd/) Cuộn tròn dây, quấn quanh, lên dây cót đồng hồ',
      example: 'A refreshing ocean wind cooled the travelers as they hiked along the cliffs.'
    },
    'bat': {
      word: 'Bat',
      pos: 'noun',
      phonetic: '/bæt/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Sinh học] Con dơi bay đêm;\n2. [Thể thao] Gậy đánh bóng chày, gậy cricket',
      example: 'Bats play an indispensable ecological role by consuming harmful agricultural pests.'
    },
    'content': {
      word: 'Content',
      pos: 'noun',
      phonetic: '/ˈkɑːn.tent/',
      level: 'B1',
      topic: 'Công nghệ',
      meaning: '1. [Truyền thông] Nội dung bài viết, sách báo, video số;\n2. [Cảm xúc] Bằng lòng, an phận với cuộc sống;\n3. [Hóa học] Hàm lượng tinh chất có trong sản phẩm',
      example: 'Digital creators produce captivating educational content for millions of learners.'
    },
    'subject': {
      word: 'Subject',
      pos: 'noun',
      phonetic: '/ˈsʌb.dʒekt/',
      level: 'A1',
      topic: 'Học tập',
      meaning: '1. [Giáo dục] Môn học, ngành đào tạo;\n2. [Giao tiếp] Đề tài thảo luận, chủ đề bài phát biểu;\n3. [Ngữ pháp/Khoa học] Chủ ngữ trong câu; đối tượng nghiên cứu thử nghiệm',
      example: 'Mathematics was always her favorite academic subject throughout school.'
    },
    'object': {
      word: 'Object',
      pos: 'noun',
      phonetic: '/ˈɑːb.dʒekt/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Vật thể] Đồ vật cụ thể, hiện vật;\n2. [Mục tiêu] Mục đích nhắm tới;\n3. [Hành động] Phản đối, khiếu nại (object to...)',
      example: 'Museum visitors marveled at ancient handcrafted bronze objects on display.'
    },
    'fly': {
      word: 'Fly',
      pos: 'verb',
      phonetic: '/flaɪ/',
      level: 'A1',
      topic: 'Du lịch',
      meaning: '1. [Vận động] Bay lượn trên bầu trời, đi máy bay;\n2. [Côn trùng] Con ruồi',
      example: 'Migratory birds fly thousands of miles every autumn seeking warmer climates.'
    },
    'fair': {
      word: 'Fair',
      pos: 'adjective',
      phonetic: '/fer/',
      level: 'A2',
      topic: 'Giao tiếp',
      meaning: '1. [Đạo đức/Luật] Công bằng, bình đẳng, minh bạch;\n2. [Thương mại] Hội chợ triển lãm thương mại;\n3. [Mô tả] Da trắng, tóc sáng màu; thời tiết thuận lợi khô ráo',
      example: 'A fair judicial trial guarantees that justice is served equitably for all citizens.'
    },
    'contract': {
      word: 'Contract',
      pos: 'noun',
      phonetic: '/ˈkɑːn.trækt/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Pháp lý] Bản hợp đồng kinh tế, giao kèo cam kết;\n2. [Hành động] Ký kết hợp đồng; co rút lại; mắc nhiễm bệnh tật',
      example: 'Attorneys reviewed every legal clause before the partners signed the final contract.'
    },
    'service': {
      word: 'Service',
      pos: 'noun',
      phonetic: '/ˈsɝː.vɪs/',
      level: 'A2',
      topic: 'Công việc',
      meaning: '1. [Kinh doanh] Dịch vụ khách hàng, sự phục vụ chuyên nghiệp;\n2. [Kỹ thuật] Bảo dưỡng, bảo trì định kỳ máy móc;\n3. [Xã hội] Nghĩa vụ quân sự, phục vụ cộng đồng',
      example: 'Exceptional customer service builds long-term loyalty and trust among clients.'
    },
    'culture': {
      word: 'Culture',
      pos: 'noun',
      phonetic: '/ˈkʌl.tʃɚ/',
      level: 'A2',
      topic: 'Đời sống',
      meaning: '1. [Xã hội] Nền văn hóa, phong tục truyền thống;\n2. [Doanh nghiệp] Văn hóa công sở, môi trường làm việc tập thể;\n3. [Sinh học] Nuôi cấy vi sinh vật',
      example: 'A collaborative company culture fosters creativity and mutual support.'
    },
    'review': {
      word: 'Review',
      pos: 'verb',
      phonetic: '/rɪˈvjuː/',
      level: 'A2',
      topic: 'Học tập',
      meaning: '1. [Học tập] Ôn tập bài vở củng cố kiến thức;\n2. [Kinh doanh] Đánh giá, nhận xét sản phẩm/nhân viên;\n3. [Pháp lý] Xem xét lại bản án hoặc chính sách',
      example: 'Students should regularly review their notes to consolidate newly acquired knowledge.'
    },
    'issue': {
      word: 'Issue',
      pos: 'noun',
      phonetic: '/ˈɪs.juː/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Công việc] Vấn đề khó khăn, mối quan ngại cần giải quyết;\n2. [Xuất bản] Số báo phát hành, kỳ tạp chí;\n3. [Hành động] Phát hành thẻ/hộ chiếu, ban bố thông tư',
      example: 'Our engineering team swiftly resolved the software security issue.'
    },
    'project': {
      word: 'Project',
      pos: 'noun',
      phonetic: '/ˈprɑː.dʒekt/',
      level: 'A2',
      topic: 'Công việc',
      meaning: '1. [Công việc] Dự án kinh doanh, đề tài nghiên cứu;\n2. [Hành động] Phóng chiếu hình ảnh; dự phóng số liệu tài chính tương lai',
      example: 'Financial analysts project robust economic growth across tech sectors this year.'
    },
    'resource': {
      word: 'Resource',
      pos: 'noun',
      phonetic: '/ˈriː.sɔːrs/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Kinh tế] Nguồn lực, tài nguyên quý giá (nhân lực, tài chính);\n2. [Kỹ năng] Sự tháo vát, khả năng xoay xở giải quyết nghịch cảnh',
      example: 'Renewable clean water is humanity most precious natural resource.'
    },
    'account': {
      word: 'Account',
      pos: 'noun',
      phonetic: '/əˈkaʊnt/',
      level: 'A2',
      topic: 'Công việc',
      meaning: '1. [Tài chính/IT] Tài khoản ngân hàng, tài khoản phần mềm;\n2. [Kinh doanh] Khách hàng doanh nghiệp trọng điểm;\n3. [Giao tiếp] Bản tường thuật sự kiện chi tiết',
      example: 'Witnesses provided a consistent eyewitness account of the dramatic event.'
    },
    'board': {
      word: 'Board',
      pos: 'noun',
      phonetic: '/bɔːrd/',
      level: 'A2',
      topic: 'Công việc',
      meaning: '1. [Vật dụng] Tấm bảng viết, bảng thông báo;\n2. [Doanh nghiệp] Hội đồng quản trị (board of directors);\n3. [Hành động] Lên tàu xe, lên máy bay (board the plane)',
      example: 'The company board of directors unanimously approved the merger proposal.'
    },
    'book': {
      word: 'Book',
      pos: 'verb',
      phonetic: '/bʊk/',
      level: 'A1',
      topic: 'Du lịch',
      meaning: '1. [Dịch vụ] Đặt chỗ trước (book a ticket, book a hotel room);\n2. [Ấn phẩm] Cuốn sách đọc, tài liệu ghi chép',
      example: 'Travelers are advised to book their flight reservations well in advance.'
    },
    'branch': {
      word: 'Branch',
      pos: 'noun',
      phonetic: '/bræntʃ/',
      level: 'A2',
      topic: 'Công việc',
      meaning: '1. [Kinh doanh] Chi nhánh ngân hàng, văn phòng đại diện;\n2. [Tự nhiên] Cành cây, nhánh cây tỏa bóng;\n3. [Học thuật] Nhánh chuyên ngành khoa học',
      example: 'The multinational bank established a new commercial branch downtown.'
    },
    'force': {
      word: 'Force',
      pos: 'noun',
      phonetic: '/fɔːrs/',
      level: 'A2',
      topic: 'Học thuật',
      meaning: '1. [Vật lý] Lực tác động vật lý (lực hấp dẫn, lực đẩy);\n2. [Tổ chức] Lực lượng vũ trang, đội ngũ đặc nhiệm;\n3. [Hành động] Ép buộc, cưỡng chế thi hành',
      example: 'Gravity is the invisible natural force that keeps planets revolving around the sun.'
    },
    'form': {
      word: 'Form',
      pos: 'noun',
      phonetic: '/fɔːrm/',
      level: 'A1',
      topic: 'Công việc',
      meaning: '1. [Hành chính] Tờ đơn khai báo, biểu mẫu điền thông tin;\n2. [Hình thái] Hình dáng, thể loại, dạng thức;\n3. [Phong độ] Phong độ thi đấu thể thao',
      example: 'Please fill out this registration form accurately before meeting the registrar.'
    },
    'free': {
      word: 'Free',
      pos: 'adjective',
      phonetic: '/friː/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Tài chính] Miễn phí, không mất tiền thanh toán;\n2. [Tự do] Tự do, không bị giam cầm hay ràng buộc;\n3. [Thời gian] Rảnh rỗi, có thời gian trống',
      example: 'Public parks provide free outdoor recreational spaces for families and children.'
    },
    'key': {
      word: 'Key',
      pos: 'adjective',
      phonetic: '/kiː/',
      level: 'A2',
      topic: 'Công việc',
      meaning: '1. [Tầm quan trọng] Then chốt, trọng yếu, mang tính quyết định (key factor);\n2. [Đồ vật] Chìa khóa mở cửa;\n3. [Bàn phím] Phím gõ máy tính, phím đàn piano',
      example: 'Effective communication is a key element of successful cross-functional teamwork.'
    },
    'kind': {
      word: 'Kind',
      pos: 'adjective',
      phonetic: '/kaɪnd/',
      level: 'A1',
      topic: 'Giao tiếp',
      meaning: '1. [Tính cách] Tốt bụng, tử tế, ân cần chu đáo;\n2. [Phân loại] Loại, thứ, chủng loại (what kind of)',
      example: 'A kind word can instantly brighten someone day during challenging times.'
    },
    'land': {
      word: 'Land',
      pos: 'verb',
      phonetic: '/lænd/',
      level: 'A2',
      topic: 'Du lịch',
      meaning: '1. [Hàng không] Hạ cánh an toàn xuống đường băng;\n2. [Địa lý] Đất đai, vùng đất canh tác;\n3. [Công việc] Giành được hợp đồng hoặc việc làm mơ ước',
      example: 'The pilot maneuvered skillfully to land the commercial airliner during severe rain.'
    },
    'last': {
      word: 'Last',
      pos: 'verb',
      phonetic: '/læst/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Thời gian] Kéo dài trong bao lâu (last for hours);\n2. [Thứ tự] Cuối cùng, sau chót;\n3. [Bền bỉ] Bền bỉ, dùng được lâu',
      example: 'High-quality leather boots are designed to last for several winter seasons.'
    },
    'launch': {
      word: 'Launch',
      pos: 'verb',
      phonetic: '/lɑːntʃ/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Kinh doanh] Tung ra thị trường, ra mắt sản phẩm mới;\n2. [Hàng không vũ trụ] Phóng tàu vũ trụ / vệ tinh;\n3. [Hàng hải] Hạ thủy con tàu',
      example: 'The tech corporation announced plans to launch their flagship smartphone in November.'
    },
    'level': {
      word: 'Level',
      pos: 'noun',
      phonetic: '/ˈlev.əl/',
      level: 'A2',
      topic: 'Học tập',
      meaning: '1. [Trình độ] Cấp độ, mức độ thành thạo;\n2. [Bề mặt] Bằng phẳng ngang bằng;\n3. [Trò chơi] Màn chơi, ải thử thách',
      example: 'Language learners can advance from beginner to proficient CEFR level with regular practice.'
    },
    'line': {
      word: 'Line',
      pos: 'noun',
      phonetic: '/laɪn/',
      level: 'A1',
      topic: 'Công việc',
      meaning: '1. [Hình học] Đường thẳng, nét kẻ phân chia;\n2. [Bố cục] Hàng người xếp hàng chờ đợi;\n3. [Kinh doanh] Dòng sản phẩm sản xuất (product line); 4. [Thoại] Lời thoại kịch bản',
      example: 'Customer stood patiently in line waiting for the bakery doors to open.'
    },
    'link': {
      word: 'Link',
      pos: 'noun',
      phonetic: '/lɪŋk/',
      level: 'A2',
      topic: 'Công nghệ',
      meaning: '1. [Công nghệ] Đường dẫn liên kết trang web (hyperlink);\n2. [Xã hội] Mối liên hệ chặt chẽ, cầu nối gắn kết',
      example: 'Researchers established a direct link between regular sleep and cognitive performance.'
    },
    'market': {
      word: 'Market',
      pos: 'noun',
      phonetic: '/ˈmɑːr.kɪt/',
      level: 'A1',
      topic: 'Công việc',
      meaning: '1. [Kinh tế] Thị trường thương mại, thị trường chứng khoán;\n2. [Địa điểm] Khu chợ buôn bán thực phẩm;\n3. [Tiếp thị] Quảng bá tiếp thị sản phẩm',
      example: 'Emerging clean energy technologies are finding rapidly growing consumer market niches.'
    },
    'master': {
      word: 'Master',
      pos: 'verb',
      phonetic: '/ˈmæs.tɚ/',
      level: 'B2',
      topic: 'Học tập',
      meaning: '1. [Kỹ năng] Làm chủ, tinh thông, nắm vững kiến thức;\n2. [Bậc thầy] Chuyên gia lão luyện;\n3. [Giáo dục] Bằng thạc sĩ cao học',
      example: 'It takes dedicated hours of deliberate practice to master a musical instrument.'
    },
    'measure': {
      word: 'Measure',
      pos: 'noun',
      phonetic: '/ˈmeʒ.ɚ/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Hành chính] Biện pháp xử lý, giải pháp phòng ngừa;\n2. [Đo lường] Đo đạc kích thước/trọng lượng;\n3. [Tiêu chuẩn] Thước đo giá trị',
      example: 'Strict security measures were implemented to safeguard sensitive financial transactions.'
    },
    'meet': {
      word: 'Meet',
      pos: 'verb',
      phonetic: '/miːt/',
      level: 'A1',
      topic: 'Giao tiếp',
      meaning: '1. [Giao tiếp] Gặp gỡ bạn bè, làm quen đối tác;\n2. [Đáp ứng] Đáp ứng tiêu chuẩn, thỏa mãn yêu cầu đề ra (meet expectations)',
      example: 'The new product design must meet rigorous international safety standards.'
    },
    'mind': {
      word: 'Mind',
      pos: 'noun',
      phonetic: '/maɪnd/',
      level: 'A2',
      topic: 'Đời sống',
      meaning: '1. [Tâm trí] Trí óc, tâm trí, suy nghĩ;\n2. [Cảm xúc] Bận tâm, phiền lòng (Do you mind?);\n3. [Chú ý] Chú ý, cẩn thận (mind the step)',
      example: 'Keeping an open mind enables individuals to appreciate diverse cultural viewpoints.'
    },
    'nature': {
      word: 'Nature',
      pos: 'noun',
      phonetic: '/ˈneɪ.tʃɚ/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Môi trường] Tự nhiên, giới tự nhiên hoang dã;\n2. [Bản chất] Bản chất cốt lõi, tính khí con người',
      example: 'Spending time in tranquil nature rejuvenates mental energy and reduces daily stress.'
    },
    'net': {
      word: 'Net',
      pos: 'adjective',
      phonetic: '/net/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Tài chính] Thực tế, sau khi trừ hết chi phí (net profit / net income);\n2. [Dụng cụ] Tấm lưới đánh cá, lưới bóng chuyền;\n3. [Mạng lưới] Mạng internet toàn cầu',
      example: 'The enterprise reported a substantial increase in annual net profits.'
    },
    'note': {
      word: 'Note',
      pos: 'noun',
      phonetic: '/noʊt/',
      level: 'A1',
      topic: 'Học tập',
      meaning: '1. [Ghi chép] Lời ghi chú ngắn, sổ tay ghi lại kiến thức;\n2. [Âm nhạc] Nốt nhạc du dương;\n3. [Tài chính] Tờ tiền giấy ngân hàng; 4. [Lưu ý] Chú ý, ghi nhận',
      example: 'Please make a careful note of the assignment deadlines announced in class.'
    },
    'notice': {
      word: 'Notice',
      pos: 'verb',
      phonetic: '/ˈnoʊ.t̬ɪs/',
      level: 'A2',
      topic: 'Giao tiếp',
      meaning: '1. [Nhận biết] Nhận thấy, chú ý phát hiện ra điều khác biệt;\n2. [Thông báo] Tờ thông báo dán công khai;\n3. [Công việc] Thông báo nghỉ việc trước kỳ hạn',
      example: 'Did you notice any subtle changes in customer behavior over recent weeks?'
    },
    'odd': {
      word: 'Odd',
      pos: 'adjective',
      phonetic: '/ɑːd/',
      level: 'B1',
      topic: 'Đời sống',
      meaning: '1. [Tính chất] Kỳ lạ, khác thường, kỳ quặc;\n2. [Toán học] Số lẻ (1, 3, 5,...);\n3. [Xác suất] Tỷ lệ cược, cơ hội thành công (the odds)',
      example: 'Despite the odd difficulties along the journey, the team accomplished the mission.'
    },
    'office': {
      word: 'Office',
      pos: 'noun',
      phonetic: '/ˈɑː.fɪs/',
      level: 'A1',
      topic: 'Công việc',
      meaning: '1. [Nơi làm việc] Văn phòng công ty, cơ quan công sở;\n2. [Chức vụ] Chức vụ quyền lực nhà nước (take office)',
      example: 'Employees returned to the central headquarters office after prolonged remote work.'
    },
    'park': {
      word: 'Park',
      pos: 'verb',
      phonetic: '/pɑːrk/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Giao thông] Đỗ xe ô tô vào bãi đỗ (park a vehicle);\n2. [Không gian] Công viên cây xanh vui chơi giải trí',
      example: 'Motorists found it remarkably easy to park in the newly constructed underground garage.'
    },
    'part': {
      word: 'Part',
      pos: 'noun',
      phonetic: '/pɑːrt/',
      level: 'A1',
      topic: 'Công việc',
      meaning: '1. [Cấu thành] Bộ phận, linh kiện cấu thành, một phần;\n2. [Nghệ thuật] Vai diễn kịch bản;\n3. [Hành động] Chia tay, từ biệt nhau',
      example: 'Teamwork is an essential part of delivering innovative software products.'
    },
    'pass': {
      word: 'Pass',
      pos: 'verb',
      phonetic: '/pæs/',
      level: 'A1',
      topic: 'Học tập',
      meaning: '1. [Hành động] Vượt qua kỳ thi, thi đỗ; đi ngang qua;\n2. [Giấy tờ] Thẻ thông hành, vé qua cổng kiểm soát;\n3. [Địa lý] Đèo núi; 4. [Thể thao] Chuyền bóng',
      example: 'With persistent study and dedication, you will certainly pass the English certification exam.'
    },
    'period': {
      word: 'Period',
      pos: 'noun',
      phonetic: '/ˈpɪr.i.əd/',
      level: 'A2',
      topic: 'Học tập',
      meaning: '1. [Thời gian] Thời kỳ lịch sử, giai đoạn phát triển;\n2. [Ngữ pháp] Dấu chấm câu kết thúc;\n3. [Giáo dục] Tiết học trong ngày',
      example: 'The Renaissance was a vibrant historical period of flourishing art and philosophical thought.'
    },
    'place': {
      word: 'Place',
      pos: 'verb',
      phonetic: '/pleɪs/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Hành động] Đặt để đồ vật xuống vị trí;\n2. [Không gian] Địa điểm, nơi chốn cụ thể;\n3. [Thứ hạng] Giành thứ hạng trong cuộc thi (win first place)',
      example: 'Carefully place the delicate glassware back inside the padded storage container.'
    },
    'present': {
      word: 'Present',
      pos: 'verb',
      phonetic: '/prɪˈzent/',
      level: 'A2',
      topic: 'Giao tiếp',
      meaning: '1. [Giao tiếp] Thuyết trình, trình bày báo cáo trước thính giả;\n2. [Quà tặng] (/ˈprez.ənt/) Món quà kỷ niệm;\n3. [Thời gian] Thời điểm hiện tại; có mặt',
      example: 'Researchers will present their groundbreaking astronomical findings at the global summit.'
    },
    'press': {
      word: 'Press',
      pos: 'noun',
      phonetic: '/pres/',
      level: 'B1',
      topic: 'Giao tiếp',
      meaning: '1. [Truyền thông] Báo chí, giới truyền thông báo đài xuất bản;\n2. [Hành động] Ấn nút công tắc, ép nén;\n3. [Thiết bị] Máy ép công nghiệp',
      example: 'The international press covered the historic signing ceremony extensively.'
    },
    'produce': {
      word: 'Produce',
      pos: 'verb',
      phonetic: '/prəˈduːs/',
      level: 'A2',
      topic: 'Công việc',
      meaning: '1. [Sản xuất] (/prəˈdjuːs/) Sản xuất chế tạo hàng hóa; sản xuất phim ảnh;\n2. [Nông sản] (/ˈprɑː.duːs/) Nông sản tươi (rau củ quả chợ)',
      example: 'Local farmers produce organic vegetables supplied daily to neighboring urban markets.'
    },
    'program': {
      word: 'Program',
      pos: 'noun',
      phonetic: '/ˈproʊ.ɡræm/',
      level: 'A1',
      topic: 'Công nghệ',
      meaning: '1. [Công nghệ] Chương trình phần mềm máy tính;\n2. [Sự kiện/Kế hoạch] Chương trình đào tạo, lịch trình phát sóng',
      example: 'The university designed an intensive fellowship program for aspiring computer scientists.'
    },
    'prompt': {
      word: 'Prompt',
      pos: 'adjective',
      phonetic: '/prɑːmpt/',
      level: 'B2',
      topic: 'Giao tiếp',
      meaning: '1. [Thời gian] Nhanh chóng, mau lẹ, đúng giờ hẹn;\n2. [Hành động] Thúc đẩy, khơi gợi ý tưởng;\n3. [Công nghệ AI] Câu lệnh chỉ dẫn cho mô hình AI',
      example: 'We appreciate your prompt response regarding the revised shipment delivery dates.'
    },
    'property': {
      word: 'Property',
      pos: 'noun',
      phonetic: '/ˈprɑː.pɚ.t̬i/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Tài sản] Bất động sản, nhà đất thuộc quyền sở hữu;\n2. [Khoa học] Đặc tính hóa lý của vật chất',
      example: 'Investing in residential real estate property provides both rental income and capital appreciation.'
    },
    'public': {
      word: 'Public',
      pos: 'noun',
      phonetic: '/ˈpʌb.lɪk/',
      level: 'A2',
      topic: 'Đời sống',
      meaning: '1. [Cộng đồng] Công chúng, quần chúng nhân dân;\n2. [Tính chất] Công cộng, công khai, mở rộng cho mọi người tham gia',
      example: 'Public transportation networks reduce traffic congestion and carbon emissions significantly.'
    },
    'range': {
      word: 'Range',
      pos: 'noun',
      phonetic: '/reɪndʒ/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Phạm vi] Phạm vi giới hạn, khoảng dao động (price range);\n2. [Địa lý] Dãy núi trùng điệp; 3. [Quân sự] Trường bắn tập luyện',
      example: 'The bookstore showcases a diverse range of contemporary and classical literature.'
    },
    'rate': {
      word: 'Rate',
      pos: 'noun',
      phonetic: '/reɪt/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Tỷ lệ] Tỷ lệ phần trăm, tốc độ diễn biến (growth rate);\n2. [Tài chính] Mức giá, mức cước phí dịch vụ; 3. [Đánh giá] Xếp hạng sao',
      example: 'Economists closely monitor the employment rate as a vital indicator of national health.'
    },
    'record': {
      word: 'Record',
      pos: 'noun',
      phonetic: '/ˈrek.ɚd/',
      level: 'A2',
      topic: 'Công việc',
      meaning: '1. [Tài liệu] Hồ sơ lưu trữ, dữ liệu ghi chép chính thức;\n2. [Thể thao] Kỷ lục thi đấu thể thao; 3. [Âm nhạc] Đĩa hát vinyl',
      example: 'Hospitals maintain strict confidentiality when storing patient medical health records.'
    },
    'report': {
      word: 'Report',
      pos: 'noun',
      phonetic: '/rɪˈpɔːrt/',
      level: 'A1',
      topic: 'Công việc',
      meaning: '1. [Văn bản] Bản báo cáo tổng kết kết quả công tác;\n2. [Báo chí] Bản tin thời sự truyền hình',
      example: 'The committee submitted a comprehensive investigative report to the governing council.'
    },
    'rest': {
      word: 'Rest',
      pos: 'noun',
      phonetic: '/rest/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Nghỉ ngơi] Sự nghỉ ngơi thư giãn, giấc ngủ phục hồi;\n2. [Phần còn lại] Phần còn lại, số người còn lại (the rest of)',
      example: 'Adequate physical rest is essential for muscular regeneration and emotional well-being.'
    },
    'return': {
      word: 'Return',
      pos: 'verb',
      phonetic: '/rɪˈtɝːn/',
      level: 'A1',
      topic: 'Du lịch',
      meaning: '1. [Di chuyển] Quay trở về, hồi hương;\n2. [Hoàn trả] Trả lại sách/hàng hóa;\n3. [Tài chính] Lợi tức đầu tư (return on investment)',
      example: 'Travelers rejoiced when they safely returned home after their months-long expedition.'
    },
    'rich': {
      word: 'Rich',
      pos: 'adjective',
      phonetic: '/rɪtʃ/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Tài chính] Giàu có, thịnh vượng tiền tài;\n2. [Chất lượng] Dồi dào, phong phú, giàu dưỡng chất/bản sắc văn hóa',
      example: 'Southeast Asian cuisine is celebrated worldwide for its rich and vibrant aromatic flavors.'
    },
    'rise': {
      word: 'Rise',
      pos: 'verb',
      phonetic: '/raɪz/',
      level: 'A2',
      topic: 'Đời sống',
      meaning: '1. [Chuyển động] Dâng lên, mọc lên (the sun rises);\n2. [Chỉ số] Tăng trưởng về giá cả/số lượng;\n3. [Nỗ lực] Vươn lên vượt qua thử thách',
      example: 'Early risers love to watch the morning sun rise majestically above the ocean horizon.'
    },
    'rule': {
      word: 'Rule',
      pos: 'noun',
      phonetic: '/ruːl/',
      level: 'A1',
      topic: 'Học tập',
      meaning: '1. [Quy định] Luật lệ, quy tắc bắt buộc tuân thủ;\n2. [Cai trị] Quyền cai trị, triều đại trị vì; 3. [Đo lường] Cây thước kẻ',
      example: 'Respecting traffic rules ensures road safety for pedestrians and vehicle drivers alike.'
    },
    'safe': {
      word: 'Safe',
      pos: 'adjective',
      phonetic: '/seɪf/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [An toàn] An toàn, không gặp nguy hiểm;\n2. [Đồ vật] Két sắt an toàn đựng tiền bạc giấy tờ quý',
      example: 'Valuable heirlooms and passports were stored securely inside the fireproof home safe.'
    },
    'save': {
      word: 'Save',
      pos: 'verb',
      phonetic: '/seɪv/',
      level: 'A1',
      topic: 'Công việc',
      meaning: '1. [Tài chính] Tiết kiệm tiền bạc;\n2. [Bảo vệ] Cứu giúp mạng sống, bảo tồn; 3. [Công nghệ] Lưu tệp tin dữ liệu vào đĩa',
      example: 'Consistently saving a modest portion of monthly income creates a reliable emergency fund.'
    },
    'score': {
      word: 'Score',
      pos: 'noun',
      phonetic: '/skɔːr/',
      level: 'A1',
      topic: 'Học tập',
      meaning: '1. [Điểm số] Điểm số thi đấu thể thao hoặc bài kiểm tra;\n2. [Âm nhạc] Tổng phổ bản nhạc giao hưởng; 3. [Đơn vị] Một nhóm 20 đơn vị',
      example: 'She achieved a near-perfect score on the advanced collegiate English examination.'
    },
    'screen': {
      word: 'Screen',
      pos: 'noun',
      phonetic: '/skriːn/',
      level: 'A1',
      topic: 'Công nghệ',
      meaning: '1. [Công nghệ] Màn hình hiển thị điện thoại/máy tính;\n2. [Điện ảnh] Màn ảnh rạp chiếu phim; 3. [Sàng lọc] Sàng lọc hồ sơ ứng viên (screening)',
      example: 'Limiting evening screen time significantly improves deep restorative sleep quality.'
    },
    'season': {
      word: 'Season',
      pos: 'noun',
      phonetic: '/ˈsiː.zən/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Thời tiết] Mùa trong năm (xuân, hạ, thu, đông);\n2. [Ẩm thực] Nêm nếm gia vị vừa miệng; 3. [Thể thao] Mùa giải thi đấu',
      example: 'Autumn is frequently regarded as the most picturesque season for mountain hiking.'
    },
    'seat': {
      word: 'Seat',
      pos: 'noun',
      phonetic: '/siːt/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Nội thất] Chỗ ngồi, ghế ngồi;\n2. [Chính trị] Ghế đại biểu quốc hội; 3. [Trung tâm] Thủ phủ, trung tâm đầu não',
      example: 'Passengers are requested to remain seated with their seatbelts fastened during takeoff.'
    },
    'section': {
      word: 'Section',
      pos: 'noun',
      phonetic: '/ˈsek.ʃən/',
      level: 'A2',
      topic: 'Công việc',
      meaning: '1. [Bố cục] Phần, mục, phân đoạn trong văn bản;\n2. [Tổ chức] Ban, bộ phận chuyên môn trong công ty; 3. [Y học] Vết mổ phẫu thuật',
      example: 'The library reference section holds rare historic manuscripts and scientific atlases.'
    },
    'secure': {
      word: 'Secure',
      pos: 'adjective',
      phonetic: '/səˈkjʊr/',
      level: 'B1',
      topic: 'Công nghệ',
      meaning: '1. [An toàn] An toàn, bảo mật tuyệt đối, kiên cố;\n2. [Hành động] Giành được hợp đồng chắc chắn; buộc chặt dây',
      example: 'Modern cloud platforms employ end-to-end encryption to keep user data fully secure.'
    },
    'share': {
      word: 'Share',
      pos: 'verb',
      phonetic: '/ʃer/',
      level: 'A1',
      topic: 'Giao tiếp',
      meaning: '1. [Chia sẻ] Chia sẻ cảm xúc, san sẻ tài nguyên;\n2. [Tài chính] Cổ phiếu doanh nghiệp, phần vốn góp; 3. [Phần chia] Phần đóng góp trách nhiệm',
      example: 'Investors purchased additional technology company shares during the market rebound.'
    },
    'sharp': {
      word: 'Sharp',
      pos: 'adjective',
      phonetic: '/ʃɑːrp/',
      level: 'A2',
      topic: 'Đời sống',
      meaning: '1. [Vật lý] Sắc bén, nhọn hoắt (con dao sắc);\n2. [Trí tuệ] Nhanh nhạy, thông minh sắc sảo;\n3. [Thời gian] Đúng giờ chuẩn xác (at 8 oclock sharp)',
      example: 'Her sharp intellect enabled her to dissect the philosophical dispute with ease.'
    },
    'shift': {
      word: 'Shift',
      pos: 'noun',
      phonetic: '/ʃɪft/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Công việc] Ca làm việc (ca ngày, ca đêm);\n2. [Chuyển đổi] Sự chuyển dịch xu hướng/tư duy (a paradigm shift); 3. [Bàn phím] Phím Shift viết hoa',
      example: 'Nurses work tirelessly during the demanding overnight hospital emergency shift.'
    },
    'shop': {
      word: 'Shop',
      pos: 'noun',
      phonetic: '/ʃɑːp/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Thương mại] Cửa hàng buôn bán hàng hóa;\n2. [Hành động] Đi mua sắm dạo phố; 3. [Kỹ thuật] Xưởng gia công cơ khí (machine shop)',
      example: 'Residents enjoy visiting independent artisan shops along the historic avenue.'
    },
    'short': {
      word: 'Short',
      pos: 'adjective',
      phonetic: '/ʃɔːrt/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Kích thước] Thấp bé, ngắn ngủi;\n2. [Thiếu hụt] Thiếu hụt ngân sách/thời gian (short of cash); 3. [Tài chính] Bán khống cổ phiếu',
      example: 'Life is too short to dwell on past mistakes rather than embracing the future.'
    },
    'sight': {
      word: 'Sight',
      pos: 'noun',
      phonetic: '/saɪt/',
      level: 'A2',
      topic: 'Du lịch',
      meaning: '1. [Giác quan] Thị giác, khả năng nhìn thấy;\n2. [Cảnh quan] Cảnh tượng đẹp mắt, danh lam thắng cảnh du lịch; 3. [Tầm nhìn] Tầm mắt quan sát',
      example: 'Tourists journey from across the globe to admire the breathtaking alpine sights.'
    },
    'sign': {
      word: 'Sign',
      pos: 'noun',
      phonetic: '/saɪn/',
      level: 'A1',
      topic: 'Giao tiếp',
      meaning: '1. [Biển hiệu] Biển báo chỉ dẫn giao thông, bảng hiệu;\n2. [Dấu hiệu] Điềm báo, dấu hiệu nhận biết; 3. [Hành động] Ký tên vào văn bản hợp đồng',
      example: 'Please carefully sign your full name at the bottom of the formal application.'
    },
    'site': {
      word: 'Site',
      pos: 'noun',
      phonetic: '/saɪt/',
      level: 'A2',
      topic: 'Công nghệ',
      meaning: '1. [Công nghệ] Trang web trên internet (website);\n2. [Xây dựng] Công trường thi công (construction site); 3. [Địa điểm] Di tích lịch sử, địa điểm tọa lạc',
      example: 'Historians conducted extensive excavation work at the ancient archaeological site.'
    },
    'skill': {
      word: 'Skill',
      pos: 'noun',
      phonetic: '/skɪl/',
      level: 'A1',
      topic: 'Học tập',
      meaning: '1. [Kỹ năng] Kỹ năng chuyên môn, sự thành thạo khéo léo;\n2. [Năng lực] Kỹ nghệ tôi luyện qua rèn luyện',
      example: 'Analytical thinking is a vital professional skill sought by employers worldwide.'
    },
    'smart': {
      word: 'Smart',
      pos: 'adjective',
      phonetic: '/smɑːrt/',
      level: 'A1',
      topic: 'Công nghệ',
      meaning: '1. [Trí tuệ] Thông minh, sáng dạ, nhanh trí;\n2. [Công nghệ] Thiết bị thông minh có kết nối mạng (smart home, smartphone);\n3. [Ngoại hình] Lịch lãm, bảnh bao',
      example: 'Investing in smart automated appliances optimizes household energy consumption.'
    },
    'solid': {
      word: 'Solid',
      pos: 'adjective',
      phonetic: '/ˈsɑː.lɪd/',
      level: 'B1',
      topic: 'Học thuật',
      meaning: '1. [Khoa học] Thể rắn, đặc quánh;\n2. [Chất lượng] Vững chắc, kiên cố, đáng tin cậy (solid foundation, solid proof); 3. [Thời gian] Suốt liên tục (three solid hours)',
      example: 'The team built their technological prototype upon solid engineering fundamentals.'
    },
    'space': {
      word: 'Space',
      pos: 'noun',
      phonetic: '/speɪs/',
      level: 'A1',
      topic: 'Học thuật',
      meaning: '1. [Vũ trụ] Không gian vũ trụ bao la ngoài trái đất;\n2. [Không gian] Khoảng trống, diện tích trống trải; 3. [Thời gian] Khoảng thời gian',
      example: 'Astronauts conduct biological research experiments aboard the orbital space station.'
    },
    'spare': {
      word: 'Spare',
      pos: 'adjective',
      phonetic: '/sper/',
      level: 'B1',
      topic: 'Đời sống',
      meaning: '1. [Dự phòng] Đồ dự phòng, phụ tùng thay thế (spare tyre, spare key);\n2. [Thời gian] Thời gian rảnh rỗi (spare time);\n3. [Hành động] Tha thứ mạng sống; dành dụm',
      example: 'She devotes her spare evening time to volunteering at the community shelter.'
    },
    'speed': {
      word: 'Speed',
      pos: 'noun',
      phonetic: '/spiːd/',
      level: 'A1',
      topic: 'Công nghệ',
      meaning: '1. [Vận tốc] Tốc độ di chuyển, vận tốc truyền dẫn;\n2. [Hành động] Tăng tốc độ, chạy quá tốc độ cho phép',
      example: 'High-speed fiber optic internet enables seamless video conferencing worldwide.'
    },
    'spot': {
      word: 'Spot',
      pos: 'noun',
      phonetic: '/spɑːt/',
      level: 'A2',
      topic: 'Đời sống',
      meaning: '1. [Địa điểm] Nơi chốn cụ thể, góc lý tưởng (a nice spot);\n2. [Đặc điểm] Đốm chấm tròn trên da/vải; vết bẩn; 3. [Hành động] Nhận ra, phát hiện tinh tường',
      example: 'They found a quiet picturesque spot beneath the willow trees for an afternoon picnic.'
    },
    'spread': {
      word: 'Spread',
      pos: 'verb',
      phonetic: '/spred/',
      level: 'A2',
      topic: 'Đời sống',
      meaning: '1. [Lan truyền] Lan tỏa thông tin, truyền bá kiến thức; lây lan dịch bệnh;\n2. [Ẩm thực] Phết bơ/mứt lên bánh mì; 3. [Không gian] Trải rộng ra trên bề mặt',
      example: 'Social media networks allow valuable educational ideas to spread across continents.'
    },
    'stage': {
      word: 'Stage',
      pos: 'noun',
      phonetic: '/steɪdʒ/',
      level: 'A2',
      topic: 'Học tập',
      meaning: '1. [Tiến trình] Giai đoạn phát triển, chặng đường tiến hóa;\n2. [Nghệ thuật] Sân khấu biểu diễn ca nhạc kịch',
      example: 'Clinical trials must successfully pass through three distinct testing stages.'
    },
    'standard': {
      word: 'Standard',
      pos: 'noun',
      phonetic: '/ˈstæn.dɚd/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Tiêu chuẩn] Tiêu chuẩn chất lượng, quy chuẩn bắt buộc;\n2. [Đẳng cấp] Mức độ bình thường phổ biến; 3. [Cờ hiệu] Cờ hiệu quân kỳ',
      example: 'All export goods must strictly comply with rigorous international safety standards.'
    },
    'star': {
      word: 'Star',
      pos: 'noun',
      phonetic: '/stɑːr/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Thiên văn] Ngôi sao sáng lấp lánh trên bầu trời đêm;\n2. [Nghệ thuật] Ngôi sao điện ảnh/âm nhạc nổi tiếng; 3. [Xuất sắc] Nhân tố xuất sắc (star performer)',
      example: 'Astronomers discovered a habitable planet orbiting a distant luminous star.'
    },
    'step': {
      word: 'Step',
      pos: 'noun',
      phonetic: '/step/',
      level: 'A1',
      topic: 'Học tập',
      meaning: '1. [Tiến trình] Bước đi, bước thực hiện trong quy trình;\n2. [Vận động] Bước chân đi dạo; 3. [Kiến trúc] Bậc thang bước lên',
      example: 'Breaking down a complex project into small steps makes accomplishment effortless.'
    },
    'stick': {
      word: 'Stick',
      pos: 'verb',
      phonetic: '/stɪk/',
      level: 'A2',
      topic: 'Đời sống',
      meaning: '1. [Gắn kết] Dán dính lại bằng keo; kiên định không đổi (stick to the plan);\n2. [Vật dụng] Cây gậy gỗ, cành cây khô',
      example: 'Disciplined athletes stick firmly to their daily nutritional and exercise routines.'
    },
    'stock': {
      word: 'Stock',
      pos: 'noun',
      phonetic: '/stɑːk/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Tài chính] Cổ phiếu thị trường vốn (stock market);\n2. [Hàng hóa] Hàng tồn kho sẵn có trong kho hàng; 3. [Ẩm thực] Nước dùng ninh xương',
      example: 'Savvy investors diversify their asset portfolios across stable dividend stocks.'
    },
    'store': {
      word: 'Store',
      pos: 'verb',
      phonetic: '/stɔːr/',
      level: 'A1',
      topic: 'Công nghệ',
      meaning: '1. [Lưu trữ] Lưu trữ dữ liệu, cất giữ đồ đạc an toàn;\n2. [Thương mại] Cửa hàng buôn bán tạp hóa',
      example: 'External hard drives allow photographers to store high-resolution images safely.'
    },
    'stress': {
      word: 'Stress',
      pos: 'noun',
      phonetic: '/stres/',
      level: 'A2',
      topic: 'Đời sống',
      meaning: '1. [Tâm lý] Căng thẳng thần kinh, áp lực cuộc sống;\n2. [Ngôn ngữ] Trọng âm của từ khi phát âm; 3. [Nhấn mạnh] Nhấn mạnh tầm quan trọng',
      example: 'Mindfulness meditation is an effective therapeutic technique for reducing daily stress.'
    },
    'strike': {
      word: 'Strike',
      pos: 'noun',
      phonetic: '/straɪk/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Lao động] Cuộc bãi công, đình công đòi quyền lợi;\n2. [Tấn công] Đòn tấn công chớp nhoáng (airstrike); 3. [Vận động] Cú đánh, cú sút bóng',
      example: 'Factory workers organized a peaceful strike to demand equitable wages.'
    },
    'structure': {
      word: 'Structure',
      pos: 'noun',
      phonetic: '/ˈstrʌk.tʃɚ/',
      level: 'B1',
      topic: 'Học thuật',
      meaning: '1. [Kết cấu] Cấu trúc, bố cục tổ chức hệ thống;\n2. [Xây dựng] Công trình kiến trúc vững chắc đồ sộ',
      example: 'The crystal molecular structure was examined beneath an electron microscope.'
    },
    'study': {
      word: 'Study',
      pos: 'verb',
      phonetic: '/ˈstʌd.i/',
      level: 'A1',
      topic: 'Học tập',
      meaning: '1. [Học tập] Học tập, nghiên cứu đào sâu tri thức;\n2. [Khoa học] Công trình nghiên cứu khoa học; 3. [Phòng ốc] Phòng đọc sách riêng',
      example: 'The academic study revealed compelling insights into early childhood language learning.'
    },
    'suit': {
      word: 'Suit',
      pos: 'noun',
      phonetic: '/suːt/',
      level: 'A2',
      topic: 'Công việc',
      meaning: '1. [Trang phục] Bộ âu phục complet lịch lãm;\n2. [Pháp lý] Vụ kiện tụng trước tòa án (lawsuit); 3. [Phù hợp] Thích hợp, phù hợp nhu cầu (suit your needs)',
      example: 'A bespoke dark navy suit is appropriate attire for executive business conferences.'
    },
    'supply': {
      word: 'Supply',
      pos: 'noun',
      phonetic: '/səˈplaɪ/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Kinh tế] Nguồn cung ứng hàng hóa, chuỗi cung ứng;\n2. [Hành động] Cung cấp thiết bị/nhu yếu phẩm',
      example: 'Logistics disruptions impacted the global computer microchip supply chain.'
    },
    'support': {
      word: 'Support',
      pos: 'verb',
      phonetic: '/səˈpɔːrt/',
      level: 'A2',
      topic: 'Giao tiếp',
      meaning: '1. [Tinh thần] Ủng hộ, động viên, nâng đỡ tinh thần;\n2. [Kinh tế] Nuôi nấng gia đình, chu cấp tài chính; 3. [Kỹ thuật] Chống đỡ kết cấu, hỗ trợ khách hàng',
      example: 'Family members provided emotional support during her challenging medical recovery.'
    },
    'table': {
      word: 'Table',
      pos: 'noun',
      phonetic: '/ˈteɪ.bəl/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Nội thất] Cái bàn ăn cơm, bàn làm việc;\n2. [Dữ liệu] Bảng biểu số liệu thống kê; 3. [Hành chính] Tạm hoãn xem xét đề xuất (table the motion)',
      example: 'The statistical table summarized demographic shifts over the past two decades.'
    },
    'target': {
      word: 'Target',
      pos: 'noun',
      phonetic: '/ˈtɑːr.ɡɪt/',
      level: 'A2',
      topic: 'Công việc',
      meaning: '1. [Mục tiêu] Mục tiêu hướng tới, chỉ tiêu doanh số;\n2. [Bắn súng] Bia bắn tập, hồng tâm',
      example: 'Sales representatives exceeded their quarterly revenue target by twenty percent.'
    },
    'term': {
      word: 'Term',
      pos: 'noun',
      phonetic: '/tɝːm/',
      level: 'B1',
      topic: 'Học thuật',
      meaning: '1. [Ngôn ngữ] Thuật ngữ chuyên môn;\n2. [Thời gian] Học kỳ học tập; nhiệm kỳ công tác; 3. [Pháp lý] Điều khoản hợp đồng (terms and conditions)',
      example: 'Be sure to read and understand the privacy terms before subscribing to the online service.'
    },
    'test': {
      word: 'Test',
      pos: 'noun',
      phonetic: '/test/',
      level: 'A1',
      topic: 'Học tập',
      meaning: '1. [Đánh giá] Bài kiểm tra năng lực, bài thi;\n2. [Khoa học/Y tế] Xét nghiệm chẩn đoán; thử nghiệm thiết bị',
      example: 'Engineers put the new electric vehicle through rigorous endurance tests in desert heat.'
    },
    'tip': {
      word: 'Tip',
      pos: 'noun',
      phonetic: '/tɪp/',
      level: 'A2',
      topic: 'Đời sống',
      meaning: '1. [Gợi ý] Mẹo hay, lời khuyên hữu ích;\n2. [Dịch vụ] Tiền boa phục vụ bồi bàn; 3. [Hình thể] Đầu chóp nhọn (tip of the iceberg)',
      example: 'The veteran teacher shared practical tips on mastering English listening comprehension.'
    },
    'title': {
      word: 'Title',
      pos: 'noun',
      phonetic: '/ˈtaɪ.t̬əl/',
      level: 'A1',
      topic: 'Công việc',
      meaning: '1. [Văn bản] Tựa đề bài viết, tiêu đề cuốn sách;\n2. [Chức danh] Chức danh công tác (job title); 3. [Pháp lý] Quyền sở hữu tài sản (title deed)',
      example: 'His current corporate job title is Senior Director of Product Engineering.'
    },
    'tone': {
      word: 'Tone',
      pos: 'noun',
      phonetic: '/toʊn/',
      level: 'B1',
      topic: 'Giao tiếp',
      meaning: '1. [Giao tiếp] Giọng điệu, sắc thái biểu cảm khi nói;\n2. [Âm nhạc] Tông giọng âm thanh nốt nhạc; 3. [Thể chất] Độ săn chắc của cơ bắp (muscle tone)',
      example: 'Maintaining a courteous professional tone diffuses conflict in written correspondence.'
    },
    'tool': {
      word: 'Tool',
      pos: 'noun',
      phonetic: '/tuːl/',
      level: 'A1',
      topic: 'Công nghệ',
      meaning: '1. [Dụng cụ] Dụng cụ đồ nghề thủ công;\n2. [Công nghệ] Công cụ phần mềm hỗ trợ xử lý công việc',
      example: 'Digital productivity tools help remote teams collaborate effortlessly across time zones.'
    },
    'top': {
      word: 'Top',
      pos: 'adjective',
      phonetic: '/tɑːp/',
      level: 'A1',
      topic: 'Học tập',
      meaning: '1. [Vị trí] Đỉnh cao nhất, trên cùng;\n2. [Chất lượng] Hàng đầu, xuất sắc nhất (top performer); 3. [Trang phục] Chiếc áo mặc phần trên',
      example: 'She graduated at the very top of her class with highest academic honors.'
    },
    'track': {
      word: 'Track',
      pos: 'verb',
      phonetic: '/træk/',
      level: 'A2',
      topic: 'Công việc',
      meaning: '1. [Theo dõi] Theo dõi tiến trình, bám sát hành trình;\n2. [Giao thông] Đường ray xe lửa, đường chạy điền kinh; 3. [Âm nhạc] Bài nhạc trong album',
      example: 'Customers can easily track their parcel live delivery route using the mobile app.'
    },
    'trade': {
      word: 'Trade',
      pos: 'noun',
      phonetic: '/treɪd/',
      level: 'B1',
      topic: 'Công việc',
      meaning: '1. [Kinh tế] Thương mại xuất nhập khẩu, buôn bán;\n2. [Nghề nghiệp] Nghề thủ công nghiệp; 3. [Trao đổi] Đổi chác hàng hóa',
      example: 'Bilateral trade agreements foster mutual economic prosperity between allied nations.'
    },
    'trust': {
      word: 'Trust',
      pos: 'noun',
      phonetic: '/trʌst/',
      level: 'A2',
      topic: 'Giao tiếp',
      meaning: '1. [Mối quan hệ] Lòng tin cậy, sự tín nhiệm chân thành;\n2. [Tài chính] Quỹ ủy thác tài sản gia đình (trust fund)',
      example: 'Mutual trust is the bedrock of enduring personal and professional relationships.'
    },
    'unit': {
      word: 'Unit',
      pos: 'noun',
      phonetic: '/ˈjuː.nɪt/',
      level: 'A2',
      topic: 'Học tập',
      meaning: '1. [Đo lường/Cơ cấu] Đơn vị tính toán, bộ phận cơ cấu đơn lẻ;\n2. [Giáo dục] Bài học trong giáo trình (Unit 1); 3. [Nhà ở] Căn hộ trong tòa nhà',
      example: 'Complete all practice exercises at the end of the textbook unit.'
    },
    'value': {
      word: 'Value',
      pos: 'noun',
      phonetic: '/ˈvæl.juː/',
      level: 'A2',
      topic: 'Công việc',
      meaning: '1. [Giá trị] Giá trị kinh tế, ích lợi đem lại;\n2. [Đạo đức] Hệ giá trị sống, chuẩn mực đạo đức cốt lõi (core values)',
      example: 'Integrity and customer obsession are two central values upheld by the company.'
    },
    'view': {
      word: 'View',
      pos: 'noun',
      phonetic: '/vjuː/',
      level: 'A1',
      topic: 'Du lịch',
      meaning: '1. [Cảnh quan] Tầm nhìn quang cảnh đẹp mắt;\n2. [Tư duy] Quan điểm, ý kiến đánh giá cá nhân; 3. [Hành động] Xem xét tài liệu',
      example: 'The hotel balcony offered a breathtaking panoramic view of the turquoise sea.'
    },
    'voice': {
      word: 'Voice',
      pos: 'noun',
      phonetic: '/vɔɪs/',
      level: 'A1',
      topic: 'Giao tiếp',
      meaning: '1. [Sinh lý] Giọng nói con người, thanh âm;\n2. [Xã hội] Tiếng nói đại diện cho quyền lợi, quyền biểu quyết',
      example: 'Democratic institutions empower ordinary citizens to have a meaningful voice.'
    },
    'volume': {
      word: 'Volume',
      pos: 'noun',
      phonetic: '/ˈvɑːl.juːm/',
      level: 'A2',
      topic: 'Đời sống',
      meaning: '1. [Âm thanh] Âm lượng to nhỏ loa phát;\n2. [Vật lý] Thể tích không gian chứa; 3. [Thương mại] Khối lượng giao dịch (trading volume); 4. [Ấn phẩm] Tập sách dày',
      example: 'Please turn down the television audio volume so others can study quietly.'
    },
    'way': {
      word: 'Way',
      pos: 'noun',
      phonetic: '/weɪ/',
      level: 'A1',
      topic: 'Đời sống',
      meaning: '1. [Phương thức] Cách thức, phương pháp tiến hành;\n2. [Phương hướng] Đường đi, lối đi (show the way)',
      example: 'Continuous learning is the most reliable way to adapt to evolving industries.'
    },
    'yield': {
      word: 'Yield',
      pos: 'verb',
      phonetic: '/jiːld/',
      level: 'B2',
      topic: 'Công việc',
      meaning: '1. [Kinh tế/Nông nghiệp] Sản sinh ra hoa lợi, đem lại lợi tức tài chính (high yield);\n2. [Giao thông] Nhường đường cho phương tiện ưu tiên; 3. [Đầu hàng] Đầu hàng áp lực',
      example: 'Investing in renewable agricultural techniques yields bountiful annual crop harvests.'
    }
  };

  /**
   * Infer part of speech by suffix rules
   */

  Object.assign(WORD_KNOWLEDGE_BASE, EXTENDED_CORE_DICTIONARY);

  function inferPartOfSpeech(clean) {
    if (clean.endsWith('ly') || clean.endsWith('ward') || clean.endsWith('wise')) return 'adverb';
    if (clean.endsWith('tion') || clean.endsWith('sion') || clean.endsWith('ment') || clean.endsWith('ness') || 
        clean.endsWith('ity') || clean.endsWith('ance') || clean.endsWith('ence') || clean.endsWith('ship') || 
        clean.endsWith('hood') || clean.endsWith('ist') || clean.endsWith('ism') || clean.endsWith('er') || clean.endsWith('or')) {
      return 'noun';
    }
    if (clean.endsWith('able') || clean.endsWith('ible') || clean.endsWith('al') || clean.endsWith('ful') || 
        clean.endsWith('less') || clean.endsWith('ous') || clean.endsWith('ious') || clean.endsWith('ic') || 
        clean.endsWith('ical') || clean.endsWith('ive') || clean.endsWith('ish') || clean.endsWith('ent') || clean.endsWith('ant')) {
      return 'adjective';
    }
    if (clean.endsWith('ize') || clean.endsWith('ise') || clean.endsWith('ate') || clean.endsWith('ify') || clean.endsWith('en')) {
      return 'verb';
    }
    return 'noun';
  }

  /**
   * Infer topic by semantic keyword cues
   */
  function inferTopic(clean, level) {
    const techStems = ['tech', 'soft', 'data', 'auto', 'net', 'code', 'cyber', 'byte', 'cloud', 'system', 'app', 'web', 'digit'];
    if (techStems.some(s => clean.includes(s))) return 'Công nghệ';

    const workStems = ['work', 'job', 'manag', 'corp', 'lead', 'prof', 'client', 'dead', 'collab', 'exec', 'financ', 'cost', 'sale', 'boss'];
    if (workStems.some(s => clean.includes(s))) return 'Công việc';

    const learnStems = ['learn', 'acad', 'study', 'exam', 'know', 'theor', 'curric', 'read', 'write', 'school', 'class', 'lesson', 'teach'];
    if (learnStems.some(s => clean.includes(s))) return 'Học tập';

    const travelStems = ['travel', 'tour', 'flight', 'trip', 'visit', 'air', 'scen', 'hotel', 'beach', 'road', 'drive', 'map', 'voyag'];
    if (travelStems.some(s => clean.includes(s))) return 'Du lịch';

    const commStems = ['speak', 'talk', 'greet', 'polit', 'comm', 'negoti', 'clari', 'chat', 'voic', 'listen', 'hear', 'say', 'tell'];
    if (commStems.some(s => clean.includes(s))) return 'Giao tiếp';

    if (level === 'C1' || level === 'C2') return 'Học thuật';
    return 'Đời sống';
  }

  /**
   * Generate realistic IPA phonetic approximation
   */
  function generateRealisticPhonetic(clean) {
    let p = clean
      .replace(/tion/g, 'ʃən')
      .replace(/sion/g, 'ʒən')
      .replace(/ph/g, 'f')
      .replace(/sh/g, 'ʃ')
      .replace(/ch/g, 'tʃ')
      .replace(/th/g, 'θ')
      .replace(/ee/g, 'iː')
      .replace(/oo/g, 'uː')
      .replace(/ou/g, 'aʊ')
      .replace(/ow/g, 'aʊ')
      .replace(/qu/g, 'kw')
      .replace(/ing/g, 'ɪŋ')
      .replace(/ment/g, 'mənt')
      .replace(/able/g, 'əbəl');
    return `/ˈ${p}/`;
  }

/**
   * Comprehensive Root and Morpheme Registry for accurate Vietnamese meaning generation
   */
  const LINGUISTIC_ROOTS = [
    { root: 'struct', vi: 'xây dựng, kết cấu hệ thống' },
    { root: 'port', vi: 'vận tải, mang vác, chuyển giao' },
    { root: 'dict', vi: 'phát ngôn, tuyên bố, dự báo' },
    { root: 'scrib', vi: 'ghi chép, soạn thảo văn bản' },
    { root: 'script', vi: 'văn bản, chữ viết, kịch bản' },
    { root: 'tract', vi: 'thu hút, lôi cuốn, trích xuất' },
    { root: 'ject', vi: 'phóng ra, ném ra, từ chối' },
    { root: 'spect', vi: 'quan sát, thanh tra, góc nhìn' },
    { root: 'vis', vi: 'tầm nhìn, quan sát trực quan' },
    { root: 'vid', vi: 'chứng kiến, nhìn nhận thực tế' },
    { root: 'mit', vi: 'truyền dẫn, gửi đi, cam kết' },
    { root: 'miss', vi: 'phái cử, truyền tin, sứ mệnh' },
    { root: 'duc', vi: 'dẫn dắt, chỉ đạo điều hành' },
    { root: 'duct', vi: 'dẫn dắt, truyền dẫn tín hiệu' },
    { root: 'voc', vi: 'tiếng nói, kêu gọi, phát thanh' },
    { root: 'vok', vi: 'kêu gọi, khơi gợi cảm xúc' },
    { root: 'aud', vi: 'thính giác, lắng nghe âm thanh' },
    { root: 'gen', vi: 'sinh sôi, khởi phát nguồn gốc' },
    { root: 'cap', vi: 'nắm bắt, thâu tóm cơ hội' },
    { root: 'cept', vi: 'lĩnh hội, tiếp nhận ý tưởng' },
    { root: 'form', vi: 'định hình, khuôn khổ, cấu trúc' },
    { root: 'press', vi: 'ấn nén, gây sức ép, báo chí' },
    { root: 'tend', vi: 'chăm sóc, xu hướng phát triển' },
    { root: 'tens', vi: 'căng thẳng, áp lực kéo dài' },
    { root: 'pel', vi: 'thúc đẩy, dẫn hướng hành động' },
    { root: 'puls', vi: 'xung lực, nhịp đập, xung kích' },
    { root: 'ced', vi: 'nhượng bộ, tiến bước' },
    { root: 'cess', vi: 'tiến trình, diễn tiến quy trình' },
    { root: 'sens', vi: 'cảm nhận, giác quan, nhận thức' },
    { root: 'sent', vi: 'cảm xúc, ý thức đồng cảm' },
    { root: 'flu', vi: 'dòng chảy, trôi chảy, lưu loát' },
    { root: 'fin', vi: 'kết thúc, giới hạn phạm vi' },
    { root: 'cred', vi: 'tin cậy, tín nhiệm, uy tín' },
    { root: 'cogn', vi: 'nhận thức, hiểu biết sâu sắc' },
    { root: 'path', vi: 'sự thấu cảm, cảm xúc; bệnh lý' },
    { root: 'phil', vi: 'yêu mến, say mê, thiện chí' },
    { root: 'bio', vi: 'sinh học, sự sống tự nhiên' },
    { root: 'geo', vi: 'địa chất, đất đai, địa lý' },
    { root: 'chron', vi: 'thời gian, niên đại lịch sử' },
    { root: 'psych', vi: 'tâm lý, tinh thần, nội tâm' },
    { root: 'tech', vi: 'kỹ thuật, công nghệ chuyên môn' },
    { root: 'soci', vi: 'xã hội, cộng đồng, kết nối' },
    { root: 'econ', vi: 'kinh tế, tài chính, tiết kiệm' },
    { root: 'legal', vi: 'tính pháp lý, quy định luật' },
    { root: 'jud', vi: 'phán quyết, thẩm xét công minh' },
    { root: 'jur', vi: 'luật pháp, quyền tài phán' },
    { root: 'grad', vi: 'cấp bậc, bước tiến, phân cấp' },
    { root: 'gred', vi: 'bước đi, thành phần tiến trình' },
    { root: 'gress', vi: 'tiến triển, diễn biến quá trình' },
    { root: 'sequ', vi: 'trình tự, theo sau, hệ quả' },
    { root: 'secut', vi: 'theo sát, chấp hành liên tục' },
    { root: 'solv', vi: 'giải quyết, hòa tan vấn đề' },
    { root: 'solut', vi: 'dung dịch, phương án tháo gỡ' },
    { root: 'tain', vi: 'duy trì, nắm giữ, bảo tồn' },
    { root: 'ten', vi: 'giữ vững lập trường, kiên định' },
    { root: 'vert', vi: 'xoay chuyển, thay đổi hướng' },
    { root: 'vers', vi: 'biến chuyển, phương diện đa dạng' }
  ];

  /**
   * Infer accurate, context-labeled Vietnamese meaning based on root, morphemes, and part of speech
   * Single clean authentic definition, avoiding generic corporate boilerplate
   */
  function inferVietnameseMeaning(clean, pos) {
    const capitalized = clean.charAt(0).toUpperCase() + clean.slice(1);

    // 1. Check known morpheme roots
    const matchedRoot = LINGUISTIC_ROOTS.find(r => clean.includes(r.root));
    if (matchedRoot) {
      if (pos === 'verb') {
        return `1. [Hành động] Thực hiện hành động liên quan đến ${matchedRoot.vi}`;
      }
      if (pos === 'noun') {
        return `1. [Khái niệm] Yếu tố, sự việc hoặc khái niệm về ${matchedRoot.vi}`;
      }
      if (pos === 'adjective') {
        return `1. [Tính chất] Mang đặc tính hoặc biểu hiện liên quan đến ${matchedRoot.vi}`;
      }
      if (pos === 'adverb') {
        return `1. [Phương thức] Một cách gắn liền với ${matchedRoot.vi}`;
      }
    }

    // 2. Clean fallback by part of speech
    if (pos === 'verb') {
      return `1. [Hành động] Thực hiện hoặc tiến hành hành động (${capitalized})`;
    }
    if (pos === 'noun') {
      return `1. [Thông dụng] Sự vật, hiện tượng hoặc khái niệm (${capitalized})`;
    }
    if (pos === 'adjective') {
      return `1. [Tính chất] Mang đặc tính, tính chất (${capitalized})`;
    }
    if (pos === 'adverb') {
      return `1. [Phương thức] Một cách thể hiện tính chất (${capitalized})`;
    }
    return `1. [Thông dụng] Thuật ngữ ${capitalized}`;
  }

  /**
   * Smart Semantic Domain Tag Detector (Cambridge Style)
   * Dynamically classifies words into precise domains matching the user's reference card:
   * e.g. [Tính chất/Kỹ thuật], [Kiến trúc/Đô thị], [Tâm lý học/Cảm xúc], [Kinh doanh/Tài chính]
   */
  function detectSemanticDomainTag(senseText, index, totalSenses, pos) {
    const t = (senseText || '').toLowerCase();

    // Check domain keywords
    if (/(phần mềm|máy tính|dữ liệu|hệ thống|thuật toán|trình duyệt|mạng|kỹ thuật số|công nghệ|lập trình|thiết bị)/i.test(t)) {
      return '[Công nghệ/Kỹ thuật số]';
    }
    if (/(kiến trúc|tòa nhà|khu liên hợp|công trình|đô thị|xây dựng|quần thể|nhà ở|kết cấu)/i.test(t)) {
      return '[Kiến trúc/Đô thị]';
    }
    if (/(tâm lý|cảm xúc|tinh thần|mặc cảm|ám ảnh|tâm trí|nỗi sợ|ý thức|tâm trạng|tình cảm)/i.test(t)) {
      return '[Tâm lý học/Cảm xúc]';
    }
    if (/(tiền|ngân hàng|tài chính|lãi suất|tiền tệ|đầu tư|cổ phiếu|chứng khoán|vốn|lợi nhuận|doanh nghiệp|kinh doanh|thương mại|thương thấu|hợp đồng|đấu thầu|bán lẻ|hóa đơn)/i.test(t)) {
      return '[Kinh doanh/Tài chính]';
    }
    if (/(y tế|sức khỏe|bệnh|bác sĩ|thuốc|điều trị|chữa|triệu chứng|cơ thể|sinh học|sinh vật|thực vật|động vật|vi khuẩn|virus)/i.test(t)) {
      return '[Y tế/Sinh học]';
    }
    if (/(luật|pháp luật|tòa án|xét xử|phạt|pháp lý|vụ án|khởi tố|vi phạm|chính thức|nhà nước|chính phủ|chính trị)/i.test(t)) {
      return '[Pháp luật/Thể chế]';
    }
    if (/(thể thao|thi đấu|trận|sân|bóng|vận động|giải đấu|điền kinh|tập luyện)/i.test(t)) {
      return '[Thể thao/Vận động]';
    }
    if (/(thời gian|lịch trình|thời hạn|tiến độ|ngày|giờ|hẹn|thời khắc|lịch)/i.test(t)) {
      return '[Thời gian/Tiến độ]';
    }
    if (/(giao tiếp|nói chuyện|phát biểu|diễn thuyết|lời nói|xã hội|quan hệ|gặp gỡ|thư tín|thông báo|xưng hô)/i.test(t)) {
      return '[Giao tiếp/Xã hội]';
    }
    if (/(học tập|giáo dục|nghiên cứu|học thuật|trường học|đại học|bằng cấp|kiến thức)/i.test(t)) {
      return '[Giáo dục/Học thuật]';
    }
    if (/(tự nhiên|môi trường|đất|nước|biển|sông|thời tiết|khí hậu|cây cối|rừng|địa lý)/i.test(t)) {
      return '[Tự nhiên/Môi trường]';
    }
    if (/(phức tạp|rắc rối|đơn giản|dễ hiểu|cứng|mềm|nhanh|chậm|rõ ràng|sáng sủa|mảnh|mịn|nặng|nhẹ|tính chất)/i.test(t)) {
      return '[Tính chất/Kỹ thuật]';
    }

    if (index === 0) {
      if (pos === 'verb') return '[Hành động/Thực tế]';
      if (pos === 'adjective') return '[Tính chất/Đặc trưng]';
      return '[Khái niệm/Đời sống]';
    }
    if (index === 1) {
      return '[Nghĩa mở rộng/Ứng dụng]';
    }
    return '[Ngữ cảnh chuyên sâu]';
  }

  /**
   * Synthesize Cambridge Vietnamese Definitions
   * Formats into authentic, numbered multi-context senses matching Cambridge standards:
   * 1. [Domain A] Sense 1 (collocation 1, collocation 2);
   * 2. [Domain B] Sense 2 (collocation 3)
   */
  function synthesizeCambridgeContexts(cleanWord, pos, rawTranslation, topic) {
    const capitalized = cleanWord.charAt(0).toUpperCase() + cleanWord.slice(1);
    let trans = (rawTranslation || '').trim().replace(/^to\s+/i, '');

    if (!trans) {
      return inferVietnameseMeaning(cleanWord, pos);
    }

    // Split translation into candidate senses
    const rawSenses = trans
      .split(/[,;\/\n]+/)
      .map(s => s.trim())
      .filter(s => s.length > 0 && s.toLowerCase() !== cleanWord.toLowerCase());

    // Deduplicate senses (case-insensitive)
    const uniqueSenses = [];
    const seen = new Set();
    for (const s of rawSenses) {
      const lower = s.toLowerCase();
      if (!seen.has(lower) && lower.length > 1) {
        seen.add(lower);
        uniqueSenses.push(s.charAt(0).toUpperCase() + s.slice(1));
      }
    }

    // If word truly has multiple distinct senses, format each authentic sense
    if (uniqueSenses.length >= 2) {
      return uniqueSenses.slice(0, 3).map((sense, idx) => {
        const tag = detectSemanticDomainTag(sense, idx, uniqueSenses.length, pos);
        return `${idx + 1}. ${tag} ${sense}`;
      }).join(';\n');
    }

    // Single authentic sense: DO NOT fabricate dummy workplace/academic filler
    const primarySense = uniqueSenses[0] || trans.charAt(0).toUpperCase() + trans.slice(1);
    const tag = detectSemanticDomainTag(primarySense, 0, 1, pos);
    return `1. ${tag} ${primarySense}`;
  }

  // =========================================================================
  // DIVERSE & CONTEXTUAL EXAMPLE SENTENCE SYNTHESIZER (Cambridge Standard)
  // =========================================================================

  function hashStringValue(str) {
    let h = 0;
    const s = String(str || '').toLowerCase();
    for (let i = 0; i < s.length; i++) {
      h = ((h << 5) - h + s.charCodeAt(i)) | 0;
    }
    return Math.abs(h);
  }

  function extractCleanVietnameseSense(meaningStr, defaultWord) {
    if (!meaningStr || typeof meaningStr !== 'string') return defaultWord;
    const clean = meaningStr.replace(/^[0-9]+[.\s]+/, '')
                            .replace(/^\[[^\]]+\]\s*/, '')
                            .split(/[;\n\r]/)[0]
                            .trim();
    const refined = clean.replace(/^(Thực hiện hoặc tiến hành hành động|Sự vật, hiện tượng hoặc khái niệm|Mang đặc tính, tính chất|Một cách thể hiện tính chất|Thuật ngữ|Khái niệm|Thực hiện|Có tính chất)\s*(\([^\)]*\))?/i, '').trim();
    return refined && refined.length > 1 ? refined : defaultWord;
  }

  const DIVERSE_SENTENCE_POOLS = {
    noun: [
      {
        en: (w) => `The development team implemented a cutting-edge ${w} to optimize daily workflow.`,
        vi: (w, vi) => `Đội ngũ phát triển đã triển khai một ${vi || w} tiên tiến nhằm tối ưu hóa quy trình làm việc hàng ngày.`
      },
      {
        en: (w) => `Recent research highlights the profound significance of this ${w} in modern society.`,
        vi: (w, vi) => `Nghiên cứu gần đây nêu bật tầm quan trọng sâu sắc của ${vi || w} này trong xã hội hiện đại.`
      },
      {
        en: (w) => `Maintaining a balanced routine contributes positively to your overall ${w}.`,
        vi: (w, vi) => `Duy trì một lối sinh hoạt cân bằng đóng góp tích cực cho ${vi || w} tổng thể của bạn.`
      },
      {
        en: (w) => `Experts gathered at the international forum to discuss challenges surrounding the ${w}.`,
        vi: (w, vi) => `Các chuyên gia đã tề tựu tại diễn đàn quốc tế để thảo luận về những thách thức xoay quanh ${vi || w}.`
      },
      {
        en: (w) => `Adopting this innovative ${w} helped the organization achieve its quarterly objectives.`,
        vi: (w, vi) => `Việc áp dụng ${vi || w} sáng tạo này đã giúp tổ chức đạt được các mục tiêu đề ra cho quý.`
      },
      {
        en: (w) => `The local community came together to support initiatives focused on sustainable ${w}.`,
        vi: (w, vi) => `Cộng đồng địa phương đã cùng nhau chung tay ủng hộ các sáng kiến hướng tới ${vi || w} bền vững.`
      },
      {
        en: (w) => `Investing in quality ${w} provides reliable long-term benefits for everyone involved.`,
        vi: (w, vi) => `Đầu tư vào ${vi || w} chất lượng mang lại những lợi ích lâu dài và đáng tin cậy cho tất cả mọi người.`
      },
      {
        en: (w) => `Students were encouraged to explore practical applications of this ${w} in daily life.`,
        vi: (w, vi) => `Học sinh được khuyến khích khám phá các ứng dụng thực tế của ${vi || w} này trong đời sống thường nhật.`
      },
      {
        en: (w) => `Careful analysis of the ${w} enabled managers to identify emerging trends early.`,
        vi: (w, vi) => `Việc phân tích cẩn thận về ${vi || w} đã giúp các nhà quản lý sớm nhận diện những xu hướng mới xuất hiện.`
      },
      {
        en: (w) => `A clear understanding of this ${w} is essential for making well-informed decisions.`,
        vi: (w, vi) => `Sự thấu hiểu rõ ràng về ${vi || w} này là điều cốt yếu để đưa ra những quyết định sáng suốt.`
      },
      {
        en: (w) => `She published an insightful article detailing the historical development of the ${w}.`,
        vi: (w, vi) => `Cô ấy đã xuất bản một bài viết sâu sắc chi tiết về sự phát triển mang tính lịch sử của ${vi || w}.`
      },
      {
        en: (w) => `Technological advancements have significantly transformed how we interact with ${w}.`,
        vi: (w, vi) => `Những tiến bộ công nghệ đã làm thay đổi đáng kể cách chúng ta tương tác với ${vi || w}.`
      }
    ],
    verb: [
      {
        en: (w) => `They collaborated closely with international partners to ${w} higher industry standards.`,
        vi: (w, vi) => `Họ đã hợp tác chặt chẽ với các đối tác quốc tế để ${vi || w} những tiêu chuẩn cao hơn trong ngành.`
      },
      {
        en: (w) => `We must carefully ${w} all available options before reaching a definitive conclusion.`,
        vi: (w, vi) => `Chúng ta phải ${vi || w} cẩn thận tất cả các phương án hiện có trước khi đi đến kết luận dứt khoát.`
      },
      {
        en: (w) => `The experienced team successfully ${w} the entire operational plan ahead of schedule.`,
        vi: (w, vi) => `Đội ngũ dày dạn kinh nghiệm đã ${vi || w} toàn bộ kế hoạch vận hành thành công vượt tiến độ.`
      },
      {
        en: (w) => `Adopting modern methodologies enables researchers to ${w} findings with greater accuracy.`,
        vi: (w, vi) => `Việc áp dụng các phương pháp luận hiện đại cho phép các nhà nghiên cứu ${vi || w} các phát hiện với độ chuẩn xác cao hơn.`
      },
      {
        en: (w) => `The committee met regularly to ${w} critical feedback and refine their ongoing strategy.`,
        vi: (w, vi) => `Ủy ban đã họp định kỳ để ${vi || w} các ý kiến phản hồi quan trọng và hoàn thiện chiến lược đang triển khai.`
      },
      {
        en: (w) => `Professionals strive continuously to ${w} key processes and eliminate unnecessary delays.`,
        vi: (w, vi) => `Các chuyên gia không ngừng nỗ lực để ${vi || w} những quy trình then chốt và loại bỏ sự chậm trễ không cần thiết.`
      },
      {
        en: (w) => `Effective communication allows diverse team members to ${w} ideas openly and constructively.`,
        vi: (w, vi) => `Giao tiếp hiệu quả cho phép các thành viên trong nhóm ${vi || w} ý tưởng một cách cởi mở và mang tính xây dựng.`
      },
      {
        en: (w) => `The director gave practical guidance to help junior staff ${w} complex workplace challenges.`,
        vi: (w, vi) => `Vị giám đốc đã đưa ra những chỉ dẫn thực tế nhằm giúp nhân viên trẻ ${vi || w} các thử thách phức tạp nơi công sở.`
      },
      {
        en: (w) => `Before launching the campaign, organizers needed to ${w} essential resources systematically.`,
        vi: (w, vi) => `Trước khi khởi động chiến dịch, ban tổ chức cần phải ${vi || w} các nguồn lực thiết yếu một cách có hệ thống.`
      },
      {
        en: (w) => `Ongoing training programs empower workers to ${w} emerging technical tools with confidence.`,
        vi: (w, vi) => `Các chương trình đào tạo liên tục giúp người lao động có thể ${vi || w} các công cụ kỹ thuật mới một cách tự tin.`
      }
    ],
    adjective: [
      {
        en: (w) => `A remarkably ${w} approach allowed the committee to overcome longstanding obstacles.`,
        vi: (w, vi) => `Một cách tiếp cận đặc biệt ${vi || w} đã cho phép ủy ban vượt qua những trở ngại kéo dài bấy lâu.`
      },
      {
        en: (w) => `The final prototype proved highly ${w}, earning unanimous endorsement from external evaluators.`,
        vi: (w, vi) => `Mẫu thử nghiệm cuối cùng tỏ ra hết sức ${vi || w}, nhận được sự tán thành tuyệt đối từ các chuyên gia đánh giá độc lập.`
      },
      {
        en: (w) => `Working in such a ${w} environment inspires team members to think outside conventional boundaries.`,
        vi: (w, vi) => `Làm việc trong một môi trường ${vi || w} như vậy truyền cảm hứng cho mọi người tư duy vượt ra ngoài khuôn khổ truyền thống.`
      },
      {
        en: (w) => `Her ${w} presentation captured the audience attention from the very first minute.`,
        vi: (w, vi) => `Bài thuyết trình ${vi || w} của cô ấy đã thu hút sự chú ý của toàn bộ khán thính giả ngay từ phút đầu tiên.`
      },
      {
        en: (w) => `Despite facing tight constraints, the architects delivered an exceptionally ${w} solution.`,
        vi: (w, vi) => `Dù phải đối mặt với nhiều ràng buộc khắt khe, các kiến trúc sư vẫn đưa ra được một giải pháp đặc biệt ${vi || w}.`
      },
      {
        en: (w) => `Maintaining a ${w} outlook during times of transition helps preserve morale and focus.`,
        vi: (w, vi) => `Duy trì một cái nhìn ${vi || w} trong các giai đoạn chuyển đổi giúp giữ vững tinh thần và sự tập trung.`
      },
      {
        en: (w) => `The report provides a thoroughly ${w} assessment of the regional economic landscape.`,
        vi: (w, vi) => `Báo cáo cung cấp một sự đánh giá hết sức ${vi || w} về bức tranh toàn cảnh kinh tế khu vực.`
      },
      {
        en: (w) => `They reached a mutually ${w} agreement that benefits all participating stakeholders.`,
        vi: (w, vi) => `Họ đã đạt được một thỏa thuận ${vi || w} cho đôi bên, mang lại lợi ích cho tất cả các bên tham gia.`
      },
      {
        en: (w) => `It was a particularly ${w} experience that broadened their cultural perspectives.`,
        vi: (w, vi) => `Đó là một trải nghiệm đặc biệt ${vi || w} đã mở rộng tầm nhìn văn hóa của họ.`
      },
      {
        en: (w) => `The software offers a simple yet ${w} interface tailored for seamless everyday usage.`,
        vi: (w, vi) => `Phần mềm mang tới một giao diện đơn giản nhưng vô cùng ${vi || w}, được tối ưu cho việc sử dụng mượt mà hàng ngày.`
      }
    ],
    adverb: [
      {
        en: (w) => `The specialist analyzed the experimental findings ${w} to prevent potential oversights.`,
        vi: (w, vi) => `Chuyên gia đã phân tích các kết quả thử nghiệm một cách ${vi || w} nhằm ngăn chặn những sơ sót tiềm ẩn.`
      },
      {
        en: (w) => `The entire renovation project proceeded ${w}, concluding ahead of the scheduled deadline.`,
        vi: (w, vi) => `Toàn bộ dự án nâng cấp đã diễn ra một cách ${vi || w}, hoàn thành trước thời hạn đã định.`
      },
      {
        en: (w) => `She articulated her viewpoints ${w}, winning the respect of colleagues across departments.`,
        vi: (w, vi) => `Cô ấy đã diễn đạt các quan điểm của mình một cách ${vi || w}, nhận được sự kính trọng từ các đồng nghiệp.`
      },
      {
        en: (w) => `The newly approved policy was implemented ${w} across all nationwide branch locations.`,
        vi: (w, vi) => `Chính sách mới được phê duyệt đã được triển khai một cách ${vi || w} tại tất cả các chi nhánh trên toàn quốc.`
      },
      {
        en: (w) => `Engineers responded ${w} to resolve server connectivity disruptions within minutes.`,
        vi: (w, vi) => `Các kỹ sư đã phản ứng một cách ${vi || w} để khắc phục sự cố gián đoạn kết nối máy chủ chỉ trong vài phút.`
      },
      {
        en: (w) => `The speaker addressed questions ${w}, providing clear and illuminating explanations.`,
        vi: (w, vi) => `Diễn giả đã giải đáp các câu hỏi một cách ${vi || w}, mang lại những lời giải thích sáng tỏ và thấu đáo.`
      }
    ]
  };

  /**
   * Synthesize natural grammatical English sentence & Vietnamese translation pair (Cambridge style)
   * Guaranteed diverse, non-repetitive via hash rotation and contextual adaptation
   */
  function synthesizeExampleSentencePair(word, pos, topic, meaningStr, seed = 0) {
    const w = String(word || '').trim().toLowerCase();
    const cleanPos = (pos || 'noun').toLowerCase();
    const pool = DIVERSE_SENTENCE_POOLS[cleanPos] || DIVERSE_SENTENCE_POOLS.noun;
    
    // Deterministic selection based on word characters, topic, and seed
    const hash = hashStringValue(w) + hashStringValue(topic || '') + Number(seed || 0);
    const template = pool[hash % pool.length];

    const viSense = extractCleanVietnameseSense(meaningStr, w);
    return {
      en: template.en(w),
      vi: template.vi(w, viSense)
    };
  }

  function synthesizeExampleSentence(word, pos, topic, meaningStr, seed = 0) {
    return synthesizeExampleSentencePair(word, pos, topic, meaningStr, seed).en;
  }

  /**
   * Online Cambridge Translation Fallback
   * Fetches authentic multi-context Vietnamese translations across domains
   */
  async function fetchOnlineCambridgeTranslation(cleanWord) {
    if (!cleanWord || !navigator.onLine) return null;
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2500);
      const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(cleanWord)}&langpair=en|vi`, {
        signal: controller.signal
      });
      clearTimeout(timeoutId);
      if (!res.ok) return null;
      const data = await res.json();
      const senses = [];

      if (data && data.responseData && data.responseData.translatedText) {
        const mainText = data.responseData.translatedText.trim();
        if (mainText && mainText.toLowerCase() !== cleanWord.toLowerCase()) {
          senses.push(mainText);
        }
      }

      if (data && Array.isArray(data.matches)) {
        data.matches.forEach(m => {
          if (m && m.translation) {
            const tr = m.translation.trim();
            if (tr && tr.length > 1 && tr.toLowerCase() !== cleanWord.toLowerCase() && !senses.includes(tr)) {
              if (tr.length < 150 && !tr.includes('http') && !tr.includes('TRANSLATION')) {
                senses.push(tr);
              }
            }
          }
        });
      }

      if (senses.length > 0) {
        return senses.slice(0, 4).join('; ');
      }
    } catch (e) {
      // Offline fallback
    }
    return null;
  }

  /**
   * Main Generator: Automatically produces full word metadata following Cambridge standard
   */
  function generateWordMetadata(rawInput) {
    if (!rawInput || !rawInput.trim()) return null;

    const trimmed = rawInput.trim();
    const clean = trimmed.toLowerCase().replace(/[^a-z]/g, '');
    if (!clean) return null;

    const capitalized = clean.charAt(0).toUpperCase() + clean.slice(1);

    // 1. Check direct knowledge bases (EXTENDED_CORE_DICTIONARY & WORD_KNOWLEDGE_BASE)
    const match = EXTENDED_CORE_DICTIONARY[clean] || WORD_KNOWLEDGE_BASE[clean];
    if (match) {
      return {
        word: match.word || capitalized,
        pos: match.pos || 'noun',
        phonetic: match.phonetic || generateRealisticPhonetic(clean),
        level: match.level || detectWordDifficulty(clean).level,
        topic: match.topic || 'Đời sống',
        meaning: match.meaning,
        example: match.example,
        exampleVi: match.exampleVi || getExampleTranslation(clean, match.example),
        isAutoGenerated: false
      };
    }

    // 2. Check sample vocabulary list
    const foundSample = SAMPLE_VOCABULARY.find(w => w.word.toLowerCase() === clean);
    if (foundSample) {
      return {
        word: foundSample.word,
        pos: foundSample.pos,
        phonetic: foundSample.phonetic,
        level: foundSample.level,
        topic: foundSample.topic,
        meaning: foundSample.meaning,
        example: foundSample.example,
        exampleVi: foundSample.exampleVi || getExampleTranslation(clean, foundSample.example),
        isAutoGenerated: false
      };
    }

    // 3. Smart Linguistic Fallback Engine
    const difficulty = detectWordDifficulty(clean);
    const pos = inferPartOfSpeech(clean);
    const topic = inferTopic(clean, difficulty.level);
    const phonetic = generateRealisticPhonetic(clean);
    const meaning = inferVietnameseMeaning(clean, pos);
    const exPair = synthesizeExampleSentencePair(capitalized, pos, topic, meaning);

    return {
      word: capitalized,
      pos,
      phonetic,
      level: difficulty.level,
      topic,
      meaning,
      example: exPair.en,
      exampleVi: exPair.vi,
      isAutoGenerated: true
    };
  }

  // =========================================================================
  // 2. DOM ELEMENTS
  // =========================================================================

  const DOM = {
    // Nav & Theme
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    desktopNavTabs: document.querySelectorAll('.desktop-nav .nav-tab'),
    mobileNavTabs: document.querySelectorAll('.mobile-bottom-nav .mobile-nav-btn'),
    tabSections: document.querySelectorAll('.tab-section'),
    openAddModalBtn: document.getElementById('openAddModalBtn'),
    toastContainer: document.getElementById('toastContainer'),

    // Vocab List View
    quickAddForm: document.getElementById('quickAddForm'),
    quickAddInput: document.getElementById('quickAddInput'),
    quickAddBtn: document.getElementById('quickAddBtn'),
    statTotalWords: document.getElementById('statTotalWords'),
    statMasteredWords: document.getElementById('statMasteredWords'),
    statLearningWords: document.getElementById('statLearningWords'),
    statTopicCount: document.getElementById('statTopicCount'),
    searchInput: document.getElementById('searchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    topicFilterSelect: document.getElementById('topicFilterSelect'),
    levelFilterSelect: document.getElementById('levelFilterSelect'),
    statusSegmentBtns: document.querySelectorAll('.status-segmented-control .segment-btn'),
    resultsCountText: document.getElementById('resultsCountText'),
    quickPracticeBtn: document.getElementById('quickPracticeBtn'),
    vocabCardGrid: document.getElementById('vocabCardGrid'),
    emptyVocabState: document.getElementById('emptyVocabState'),
    resetFiltersBtn: document.getElementById('resetFiltersBtn'),

    // Flashcard View
    flashcardSection: document.getElementById('flashcard-section'),
    flashcardElement: document.getElementById('flashcardElement'),
    flashcardCounter: document.getElementById('flashcardCounter'),
    flashcardProgressBar: document.getElementById('flashcardProgressBar'),
    flashcardTopicSelect: document.getElementById('flashcardTopicSelect'),
    flashcardLevelSelect: document.getElementById('flashcardLevelSelect'),
    flashcardStatusSelect: document.getElementById('flashcardStatusSelect'),
    shuffleCardsBtn: document.getElementById('shuffleCardsBtn'),
    emptyFlashcardsState: document.getElementById('emptyFlashcardsState'),
    emptyFlashcardMsg: document.getElementById('emptyFlashcardMsg'),
    fcViewAllBtn: document.getElementById('fcViewAllBtn'),
    fcPrevBtn: document.getElementById('fcPrevBtn'),
    fcNextBtn: document.getElementById('fcNextBtn'),
    fcLearningBtn: document.getElementById('fcLearningBtn'),
    fcMasteredBtn: document.getElementById('fcMasteredBtn'),
    fcSpeakFrontBtn: document.getElementById('fcSpeakFrontBtn'),
    fcSpeakExampleBtn: document.getElementById('fcSpeakExampleBtn'),
    fcFrontTopic: document.getElementById('fcFrontTopic'),
    fcFrontLevel: document.getElementById('fcFrontLevel'),
    fcFrontPos: document.getElementById('fcFrontPos'),
    fcFrontWord: document.getElementById('fcFrontWord'),
    fcFrontPhonetic: document.getElementById('fcFrontPhonetic'),
    fcBackTopic: document.getElementById('fcBackTopic'),
    fcBackLevel: document.getElementById('fcBackLevel'),
    fcBackStatus: document.getElementById('fcBackStatus'),
    fcBackWord: document.getElementById('fcBackWord'),
    fcBackMeaning: document.getElementById('fcBackMeaning'),
    fcBackExample: document.getElementById('fcBackExample'),
    fcBackExampleVi: document.getElementById('fcBackExampleVi'),

    // Quiz View
    quizSetupScreen: document.getElementById('quizSetupScreen'),
    quizPlayScreen: document.getElementById('quizPlayScreen'),
    quizResultScreen: document.getElementById('quizResultScreen'),
    quizTopicSelect: document.getElementById('quizTopicSelect'),
    quizLevelSelect: document.getElementById('quizLevelSelect'),
    quizTypeSelect: document.getElementById('quizTypeSelect'),
    quizCountSelect: document.getElementById('quizCountSelect'),
    startQuizBtn: document.getElementById('startQuizBtn'),
    quizCurrentTopic: document.getElementById('quizCurrentTopic'),
    quizQuestionCounter: document.getElementById('quizQuestionCounter'),
    quizCurrentScore: document.getElementById('quizCurrentScore'),
    quizProgressBar: document.getElementById('quizProgressBar'),
    quitQuizBtn: document.getElementById('quitQuizBtn'),
    quizPromptType: document.getElementById('quizPromptType'),
    quizSpeakBtn: document.getElementById('quizSpeakBtn'),
    quizQuestionText: document.getElementById('quizQuestionText'),
    quizQuestionSub: document.getElementById('quizQuestionSub'),
    quizOptionsContainer: document.getElementById('quizOptionsContainer'),
    quizFeedbackBox: document.getElementById('quizFeedbackBox'),
    feedbackIcon: document.getElementById('feedbackIcon'),
    feedbackTitle: document.getElementById('feedbackTitle'),
    feedbackDesc: document.getElementById('feedbackDesc'),
    nextQuestionBtn: document.getElementById('nextQuestionBtn'),
    resultEmoji: document.getElementById('resultEmoji'),
    resultTitle: document.getElementById('resultTitle'),
    resultSubtitle: document.getElementById('resultSubtitle'),
    resultScoreText: document.getElementById('resultScoreText'),
    resultPercentText: document.getElementById('resultPercentText'),
    resultCorrectCount: document.getElementById('resultCorrectCount'),
    resultWrongCount: document.getElementById('resultWrongCount'),
    resultAccuracyRate: document.getElementById('resultAccuracyRate'),
    quizReviewList: document.getElementById('quizReviewList'),
    retryQuizBtn: document.getElementById('retryQuizBtn'),
    reviewFlashcardsBtn: document.getElementById('reviewFlashcardsBtn'),

    // Stats View
    analyticsMasteryPercent: document.getElementById('analyticsMasteryPercent'),
    analyticsMasteryBar: document.getElementById('analyticsMasteryBar'),
    topicBreakdownList: document.getElementById('topicBreakdownList'),
    voiceSelect: document.getElementById('voiceSelect'),
    speechRateRange: document.getElementById('speechRateRange'),
    rateValue: document.getElementById('rateValue'),
    testVoiceBtn: document.getElementById('testVoiceBtn'),
    exportDataBtn: document.getElementById('exportDataBtn'),
    importFileInput: document.getElementById('importFileInput'),
    resetSampleDataBtn: document.getElementById('resetSampleDataBtn'),
    clearAllDataBtn: document.getElementById('clearAllDataBtn'),

    // Modals
    vocabModal: document.getElementById('vocabModal'),
    modalTitle: document.getElementById('modalTitle'),
    closeModalBtn: document.getElementById('closeModalBtn'),
    cancelModalBtn: document.getElementById('cancelModalBtn'),
    vocabForm: document.getElementById('vocabForm'),
    editWordId: document.getElementById('editWordId'),
    wordInput: document.getElementById('wordInput'),
    autoFillFieldsBtn: document.getElementById('autoFillFieldsBtn'),
    previewWordSpeakBtn: document.getElementById('previewWordSpeakBtn'),
    posSelect: document.getElementById('posSelect'),
    levelSelect: document.getElementById('levelSelect'),
    autoDetectLevelBadge: document.getElementById('autoDetectLevelBadge'),
    autoDetectReason: document.getElementById('autoDetectReason'),
    phoneticInput: document.getElementById('phoneticInput'),
    topicInput: document.getElementById('topicInput'),
    meaningInput: document.getElementById('meaningInput'),
    exampleInput: document.getElementById('exampleInput'),
    exampleViInput: document.getElementById('exampleViInput'),
    regenerateExampleBtn: document.getElementById('regenerateExampleBtn'),
    statusCheckbox: document.getElementById('statusCheckbox'),
    modalCambridgeBtn: document.getElementById('modalCambridgeBtn'),
    fcCambridgeLink: document.getElementById('fcCambridgeLink'),

    deleteConfirmModal: document.getElementById('deleteConfirmModal'),
    deleteWordTargetText: document.getElementById('deleteWordTargetText'),
    cancelDeleteBtn: document.getElementById('cancelDeleteBtn'),
    confirmDeleteBtn: document.getElementById('confirmDeleteBtn')
  };

  // =========================================================================
  // 3. STORAGE & INITIALIZATION
  // =========================================================================

  // AUTO-REPAIR LEGACY PLACEHOLDERS: Fix words like International, Exhibition that were saved with old templates
  function repairWordEntry(w) {
    if (!w || !w.word) return;
    const clean = w.word.toLowerCase().replace(/[^a-z]/g, '');
    const isBadMeaning = !w.meaning || 
      w.meaning.includes('Khía cạnh ứng dụng trong công sở') ||
      w.meaning.includes('lĩnh vực chuyên môn') ||
      w.meaning.includes('sự vật trong đời sống hàng ngày') ||
      w.meaning.includes('sống hàng ngày') ||
      w.meaning.includes('Ứng dụng trong giao tiếp và đánh giá thực tiễn') ||
      w.meaning.includes('Tác động hoặc chuyển biến hướng tới kết quả mong muốn') ||
      w.meaning.includes('Khái niệm / sự') ||
      w.meaning.includes('Có tính chất') ||
      w.meaning.includes('mang đặc trưng') ||
      w.meaning.includes('Thực hiện / hành động') ||
      w.meaning.includes('Một cách ' + clean) ||
      w.meaning.includes('Khái niệm / sự ' + clean) ||
      w.meaning.includes('KhÃ¡i niá»‡m / sá»±') ||
      w.meaning.includes('CÃ³ tÃ­nh cháº¥t') ||
      w.meaning.includes('mang Ä‘áº·c trÆ°ng') ||
      w.meaning.includes('Thá»±c hiá»‡n / hÃ nh Ä‘á»™ng') ||
      w.meaning.includes('Má»™t cÃ¡ch ' + clean) ||
      w.meaning.includes('[Chuẩn Cambridge]') ||
      w.meaning.includes('Chuẩn Cambridge') ||
      clean === 'complex';
    
    const isBadExample = !w.example ||
      w.example.includes('Developing a deeper understanding') ||
      w.example.includes('Understanding the practical significance of') ||
      w.example.includes('The research team aims to') ||
      w.example.includes('The committee adopted a') ||
      w.example.includes('It is crucial to maintain a') ||
      w.example.includes('They always strive to') ||
      clean === 'complex';

    // 1. Check authentic dictionary databases first
    const dictEntry = EXTENDED_CORE_DICTIONARY[clean] || WORD_KNOWLEDGE_BASE[clean];
    if (dictEntry) {
      if (isBadMeaning) {
        w.meaning = dictEntry.meaning;
        w.pos = dictEntry.pos || w.pos;
        w.level = dictEntry.level || w.level;
        w.topic = dictEntry.topic || w.topic;
        w.phonetic = dictEntry.phonetic || w.phonetic;
      }
      if (isBadExample) {
        w.example = dictEntry.example;
      }
      if (!w.exampleVi || isBadExample) {
        w.exampleVi = dictEntry.exampleVi || getExampleTranslation(clean, w.example);
      }
      return;
    }

    // 2. Clean up corrupted meanings for non-dictionary words
    if (isBadMeaning) {
      let cleanSense = '';
      if (typeof w.meaning === 'string') {
        const m = w.meaning.match(/1\.\s*\[[^\]]+\]\s*([^,;\n]+)/);
        if (m && m[1]) {
          let candidate = m[1].trim().replace(/^(Khái niệm|Thực hiện|Có tính chất)\s+/i, '');
          if (candidate.toLowerCase() !== clean && candidate.length > 1) {
            cleanSense = candidate;
          }
        }
      }

      if (cleanSense) {
        const tag = (w.pos === 'verb') ? '[Hành động]' : (w.pos === 'adjective' ? '[Tính chất]' : '[Thông dụng]');
        w.meaning = `1. ${tag} ${cleanSense}`;
      } else {
        const meta = generateWordMetadata(clean);
        if (meta && meta.meaning) {
          w.meaning = meta.meaning;
          w.pos = meta.pos || w.pos;
          w.level = meta.level || w.level;
          w.topic = meta.topic || w.topic;
          w.phonetic = meta.phonetic || w.phonetic;
        }
      }
    }

    if (isBadExample) {
      const pair = synthesizeExampleSentencePair(w.word, w.pos || 'noun', w.topic || 'Đời sống', w.meaning);
      w.example = pair.en;
      w.exampleVi = pair.vi;
    }

    if (!w.exampleVi || isBadExample) {
      w.exampleVi = getExampleTranslation(w.word, w.example);
    }
  }

  function loadState() {
    try {
      let rawWords = localStorage.getItem(STORAGE_KEY_WORDS);
      if (!rawWords) {
        // Automatically migrate words from previous session v3
        const prevWords = localStorage.getItem('vocab_master_words_v3') || localStorage.getItem('vocab_master_words_v2');
        if (prevWords) {
          try {
            const parsedPrev = JSON.parse(prevWords);
            if (Array.isArray(parsedPrev) && parsedPrev.length > 0) {
              rawWords = prevWords;
            }
          } catch (err) {}
        }
      }

      if (rawWords) {
        const loaded = JSON.parse(rawWords);
        state.words = Array.isArray(loaded) ? loaded : [...SAMPLE_VOCABULARY];

        // Ensure all sample vocabulary words are present so lists and tests are complete
        SAMPLE_VOCABULARY.forEach(sample => {
          const exists = state.words.some(w => w.word && w.word.toLowerCase() === sample.word.toLowerCase());
          if (!exists) {
            state.words.push(sample);
          }
        });
      } else {
        state.words = [...SAMPLE_VOCABULARY];
      }

      // VĨNH VIỄN BẢO VỆ TỪ VỰNG NGƯỜI DÙNG TỰ THÊM:
      // Tự động khôi phục từ kho sao lưu độc lập nếu chẳng may bị mất
      try {
        const userBackupRaw = localStorage.getItem(STORAGE_KEY_USER_BACKUP);
        if (userBackupRaw) {
          const backupWords = JSON.parse(userBackupRaw);
          if (Array.isArray(backupWords)) {
            backupWords.forEach(bw => {
              if (!bw || !bw.word) return;
              const match = state.words.find(w => w.word && w.word.toLowerCase() === bw.word.toLowerCase());
              if (!match) {
                bw.isUserAdded = true;
                state.words.unshift(bw);
              } else {
                match.isUserAdded = true;
              }
            });
          }
        }
      } catch (backupErr) {
        console.warn('Backup recovery skipped:', backupErr);
      }

      // Ensure every item has a level and repair any legacy placeholders
      let didRepair = false;
      state.words.forEach(w => {
        const oldMeaning = w.meaning;
        repairWordEntry(w);
        if (w.meaning !== oldMeaning) didRepair = true;
        if (!w.level) w.level = 'B1';
      });
      saveWords();
    } catch (e) {
      console.warn('Error reading vocabulary from localStorage:', e);
      state.words = [...SAMPLE_VOCABULARY];
    }

    try {
      const rawSettings = localStorage.getItem(STORAGE_KEY_SETTINGS) || localStorage.getItem('vocab_master_settings_v2');
      if (rawSettings) {
        const s = JSON.parse(rawSettings);
        if (s.theme) state.theme = s.theme;
        if (s.speechRate) state.speechRate = s.speechRate;
        if (s.selectedVoiceURI) state.selectedVoiceURI = s.selectedVoiceURI;
      } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        state.theme = prefersDark ? 'dark' : 'light';
      }
    } catch (e) {
      console.warn('Error reading settings:', e);
    }

    applyTheme(state.theme);
  }

  function saveWords() {
    try {
      localStorage.setItem(STORAGE_KEY_WORDS, JSON.stringify(state.words));

      // LƯU TRỮ ĐỘC LẬP TỪ CỦA NGƯỜI DÙNG ĐỂ KHÔNG BAO GIỜ BỊ MẤT / XÓA
      const sampleIds = new Set(SAMPLE_VOCABULARY.map(s => s.id));
      const sampleWordsLower = new Set(SAMPLE_VOCABULARY.map(s => s.word.toLowerCase()));
      const userWords = state.words.filter(w => w.isUserAdded || !sampleIds.has(w.id) || !sampleWordsLower.has(w.word.toLowerCase()));
      if (userWords.length > 0) {
        localStorage.setItem(STORAGE_KEY_USER_BACKUP, JSON.stringify(userWords));
      }
    } catch (e) {
      console.error('Failed to save words to localStorage:', e);
      showToast('Bộ nhớ trình duyệt đã đầy hoặc bị chặn!', 'error');
    }
  }

  function saveSettings() {
    try {
      localStorage.setItem(
        STORAGE_KEY_SETTINGS,
        JSON.stringify({
          theme: state.theme,
          speechRate: state.speechRate,
          selectedVoiceURI: state.selectedVoiceURI
        })
      );
    } catch (e) {
      console.error('Failed to save settings:', e);
    }
  }

  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    saveSettings();
  }

  // =========================================================================
  // 4. WEB SPEECH API & AUDIO SYNTHESIS
  // =========================================================================

  let availableVoices = [];

  function initSpeechVoices() {
    if (!('speechSynthesis' in window)) {
      DOM.voiceSelect.innerHTML = '<option value="">Trình duyệt không hỗ trợ Web Speech API</option>';
      return;
    }

    function populateVoices() {
      availableVoices = window.speechSynthesis.getVoices();
      const enVoices = availableVoices.filter(v => v.lang.startsWith('en') || v.lang.startsWith('EN'));
      const listToDisplay = enVoices.length > 0 ? enVoices : availableVoices;

      DOM.voiceSelect.innerHTML = '';
      if (listToDisplay.length === 0) {
        DOM.voiceSelect.innerHTML = '<option value="">Giọng đọc mặc định của hệ thống</option>';
        return;
      }

      listToDisplay.forEach(voice => {
        const opt = document.createElement('option');
        opt.value = voice.voiceURI;
        opt.textContent = `${voice.name} (${voice.lang})${voice.default ? ' — Mặc định' : ''}`;
        if (state.selectedVoiceURI && voice.voiceURI === state.selectedVoiceURI) {
          opt.selected = true;
        } else if (!state.selectedVoiceURI && (voice.lang === 'en-US' || voice.lang === 'en-GB')) {
          opt.selected = true;
          state.selectedVoiceURI = voice.voiceURI;
        }
        DOM.voiceSelect.appendChild(opt);
      });
    }

    populateVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = populateVoices;
    }
  }

  function speakText(text, triggerBtn = null) {
    if (!('speechSynthesis' in window)) {
      showToast('Trình duyệt không hỗ trợ phát âm Web Speech API', 'warning');
      return;
    }

    window.speechSynthesis.cancel();
    if (!text || !text.trim()) return;

    const cleanText = text.replace(/[/\\*~#]/g, '').trim();
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = state.speechRate || 0.9;
    utterance.lang = 'en-US';

    if (availableVoices.length > 0) {
      let chosen = availableVoices.find(v => v.voiceURI === state.selectedVoiceURI);
      if (!chosen) {
        chosen = availableVoices.find(v => v.lang.startsWith('en-US') || v.lang.startsWith('en'));
      }
      if (chosen) utterance.voice = chosen;
    }

    if (triggerBtn) {
      triggerBtn.classList.add('speaking');
    }

    utterance.onend = () => {
      if (triggerBtn) triggerBtn.classList.remove('speaking');
    };

    utterance.onerror = () => {
      if (triggerBtn) triggerBtn.classList.remove('speaking');
    };

    window.speechSynthesis.speak(utterance);
  }

  let audioCtx = null;

  function playQuizSound(type) {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!audioCtx) audioCtx = new AudioContext();
      if (audioCtx.state === 'suspended') audioCtx.resume();

      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === 'correct') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, now);
        osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.15);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
        osc.start(now);
        osc.stop(now + 0.35);
      } else if (type === 'wrong') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(160, now + 0.2);
        gain.gain.setValueAtTime(0.18, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      }
    } catch (e) {
      // Graceful fallback
    }
  }

  // =========================================================================
  // 5. TOAST NOTIFICATIONS
  // =========================================================================

  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    let iconSvg = '';
    if (type === 'success') {
      iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`;
    } else if (type === 'error' || type === 'warning') {
      iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
    } else {
      iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="8"/></svg>`;
    }

    toast.innerHTML = `
      <span style="color: inherit; display: flex; align-items: center;">${iconSvg}</span>
      <span>${escapeHtml(message)}</span>
    `;

    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 2800);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /**
   * Render rich multi-context meanings with badges and structured senses
   */
  function formatMeaningHTML(meaning) {
    if (!meaning) return '';
    const text = String(meaning).trim();

    let parts = [];
    if (text.includes('\n')) {
      parts = text.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
    } else if (/\b1[\.\)]\s+/.test(text) && /\b2[\.\)]\s+/.test(text)) {
      parts = text.split(/(?:;\s*)?(?=\b\d+[\.\)]\s+)/).map(s => s.trim().replace(/^;\s*/, '')).filter(Boolean);
    } else if (text.includes(';') && (text.includes('[') || text.length > 50)) {
      parts = text.split(/;\s+/).map(s => s.trim()).filter(Boolean);
    } else {
      parts = [text];
    }

    if (parts.length <= 1) {
      const match = parts[0].match(/^\[([^\]]+)\]\s*(.*)$/);
      if (match) {
        return `
          <div class="card-meaning-container">
            <div class="meaning-sense-row single-sense">
              <span class="context-pill">${escapeHtml(match[1])}</span>
              <span class="sense-text">${escapeHtml(match[2])}</span>
            </div>
          </div>
        `;
      }
      return `
        <div class="card-meaning-container">
          <div class="meaning-sense-row single-sense">
            <span class="sense-text">${escapeHtml(parts[0])}</span>
          </div>
        </div>
      `;
    }

    let html = '<div class="card-meaning-container">';
    parts.forEach((part, idx) => {
      let cleanPart = part.replace(/^(\d+[\.\)]|\u2022|\-)\s*/, '');
      let context = '';
      const ctxMatch = cleanPart.match(/^\[([^\]]+)\]\s*(.*)$/);
      if (ctxMatch) {
        context = ctxMatch[1];
        cleanPart = ctxMatch[2];
      }

      html += `
        <div class="meaning-sense-row">
          <span class="sense-bullet">${idx + 1}</span>
          ${context ? `<span class="context-pill">${escapeHtml(context)}</span>` : ''}
          <span class="sense-text">${escapeHtml(cleanPart)}</span>
        </div>
      `;
    });
    html += '</div>';
    return html;
  }

  // =========================================================================
  // BẢNG TRA CỨU BẢN DỊCH TIẾNG VIỆT CHO CÂU VÍ DỤ (Example Translations)
  // =========================================================================
  const CORE_EXAMPLE_TRANSLATIONS = {
    'account': 'CÃ¡c nhÃ¢n chá»©ng Ä‘Ã£ cung cáº¥p lá»i tÆ°á»ng thuáº­t nháº¥t quÃ¡n vá» sá»± viá»‡c diá»…n ra Ä‘áº§y ká»‹ch tÃ­nh.',
    'address': 'Há»™i Ä‘á»“ng quáº£n trá»‹ Ä‘Ã£ tá»• chá»©c má»™t cuá»™c há»p kháº©n cáº¥p Ä‘á»ƒ xá»­ lÃ½ nhá»¯ng lo ngáº¡i vá» quyá»n riÃªng tÆ° cá»§a khÃ¡ch hÃ ng.',
    'advice': 'GiÃ¡o viÃªn cá»§a tÃ´i Ä‘Ã£ cho tÃ´i lá»i khuyÃªn quÃ½ bÃ¡u vá» cÃ¡ch luyá»‡n ká»¹ nÄƒng nghe.',
    'ambiguity': 'CÃ¡c há»£p Ä‘á»“ng pháº£i Ä‘Æ°á»£c soáº¡n tháº£o chuáº©n xÃ¡c Ä‘á»ƒ ngÄƒn ngá»«a má»i sá»± mÆ¡ há»“ vá» máº·t phÃ¡p lÃ½.',
    'apple': 'Ä‚n má»™t quáº£ tÃ¡o tÆ°Æ¡i má»—i ngÃ y ráº¥t tá»‘t cho sá»©c khá»e tá»•ng thá»ƒ cá»§a báº¡n.',
    'appreciate': 'TÃ´i vÃ´ cÃ¹ng trÃ¢n trá»ng sá»± há»— trá»£ liÃªn tá»¥c vÃ  nhá»¯ng lá»i khuyÃªn mang tÃ­nh xÃ¢y dá»±ng cá»§a báº¡n.',
    'approach': 'CÃ¡c nhÃ  nghiÃªn cá»©u Ä‘Ã£ Ã¡p dá»¥ng má»™t hÆ°á»›ng tiáº¿p cáº­n Ä‘a ngÃ nh nháº±m á»©ng phÃ³ vá»›i biáº¿n Ä‘á»•i khÃ­ háº­u toÃ n cáº§u.',
    'bank': 'Há» ngá»“i thanh bÃ¬nh trÃªn bá» sÃ´ng rá»£p cá» ngáº¯m nhÃ¬n hoÃ ng hÃ´n buÃ´ng xuá»‘ng.',
    'bat': 'LoÃ i dÆ¡i Ä‘Ã³ng má»™t vai trÃ² sinh thÃ¡i thiáº¿t yáº¿u báº±ng cÃ¡ch tiÃªu diá»‡t cÃ¡c loÃ i sÃ¢u bá» gÃ¢y háº¡i cho nÃ´ng nghiá»‡p.',
    'beautiful': 'Cáº£nh hoÃ ng hÃ´n Ä‘Ã£ nhuá»™m báº§u trá»i buá»•i chiá»u tÃ  báº±ng nhá»¯ng gam mÃ u Ä‘á» tÃ­a tuyá»‡t Ä‘áº¹p.',
    'benefit': 'Táº­p thá»ƒ dá»¥c Ä‘á»u Ä‘áº·n mang láº¡i nhá»¯ng lá»£i Ã­ch sá»©c khá»e lÃ¢u dÃ i cho cáº£ thá»ƒ cháº¥t láº«n tinh tháº§n.',
    'bill': 'Quá»‘c há»™i Ä‘Ã£ bá» phiáº¿u vá»›i Ä‘a sá»‘ Ã¡p Ä‘áº£o tÃ¡n thÃ nh viá»‡c thÃ´ng qua dá»± luáº­t mÃ´i trÆ°á»ng.',
    'board': 'Há»™i Ä‘á»“ng quáº£n trá»‹ cÃ´ng ty Ä‘Ã£ nháº¥t trÃ­ tuyá»‡t Ä‘á»‘i phÃª duyá»‡t Ä‘á» xuáº¥t sÃ¡p nháº­p doanh nghiá»‡p.',
    'book': 'HÃ nh khÃ¡ch Ä‘Æ°á»£c khuyáº¿n nghá»‹ nÃªn Ä‘áº·t vÃ© mÃ¡y bay trÆ°á»›c tá»« sá»›m.',
    'branch': 'NgÃ¢n hÃ ng Ä‘a quá»‘c gia Ä‘Ã£ thÃ nh láº­p thÃªm má»™t chi nhÃ¡nh thÆ°Æ¡ng máº¡i má»›i ngay táº¡i trung tÃ¢m thÃ nh phá»‘.',
    'break': 'Nghá»‰ giáº£i lao má»™t chÃºt vÃ o buá»•i chiá»u sáº½ giÃºp há»“i phá»¥c láº¡i sá»± táº­p trung vÃ  khÆ¡i nguá»“n sÃ¡ng táº¡o.',
    'call': 'á»¦y ban Ä‘Ã£ triá»‡u táº­p má»™t cuá»™c há»p kháº©n cáº¥p Ä‘á»ƒ kÃªu gá»i viá»‡n trá»£ nhÃ¢n Ä‘áº¡o.',
    'capacity': 'Giáº£ng Ä‘Æ°á»ng má»›i Ä‘Æ°á»£c xÃ¢y dá»±ng cÃ³ sá»©c chá»©a hÆ¡n hai nghÃ¬n ngÆ°á»i tham dá»±.',
    'capital': 'CÃ¡c doanh nghiá»‡p khá»Ÿi nghiá»‡p ráº¥t cáº§n nguá»“n vá»‘n máº¡o hiá»ƒm Ä‘á»ƒ Ä‘áº©y nhanh tiáº¿n Ä‘á»™ nghiÃªn cá»©u vÃ  hoÃ n thiá»‡n sáº£n pháº©m.',
    'car': 'CÃ´ áº¥y Ä‘Ã£ lÃ¡i chiáº¿c xe Ã´ tÃ´ Ä‘iá»‡n cá»§a mÃ¬nh Ä‘i lÃ m Ä‘á»ƒ giáº£m bá»›t lÆ°á»£ng khÃ­ tháº£i carbon.',
    'careful': 'Xin hÃ£y cáº©n tháº­n khi báº¡n bÄƒng qua Ä‘Æ°á»ng phá»‘ Ä‘Ã´ng Ä‘Ãºc.',
    'case': 'CÃ¡c thÃ¡m tá»­ Ä‘Ã£ thu tháº­p Ä‘áº§y Ä‘á»§ chá»©ng cá»© phÃ¡p y Ä‘á»ƒ phÃ¡ vá»¥ Ã¡n giáº¿t ngÆ°á»i phá»©c táº¡p.',
    'cat': 'ChÃº mÃ¨o nhá» cuá»™n trÃ²n má»™t cÃ¡ch thoáº£i mÃ¡i trÃªn gháº¿ sÃ´ pha rá»“i chÃ¬m vÃ o giáº¥c ngá»§.',
    'celebrate': 'Báº¡n bÃ¨ Ä‘Ã£ cÃ¹ng nhau tá»¥ há»p táº¡i phÃ²ng tiá»‡c lá»›n Ä‘á»ƒ chÃºc má»«ng lá»… tá»‘t nghiá»‡p cá»§a cÃ´ áº¥y.',
    'celebration': 'Lá»… Ä‘Ã³n Táº¿t NguyÃªn ÄÃ¡n lÃ  dá»‹p gáº¯n káº¿t cÃ¡c gia Ä‘Ã¬nh trong niá»m vui vÃ  nhá»¯ng phong tá»¥c truyá»n thá»‘ng Ä‘áº§m áº¥m.',
    'challenge': 'VÆ°á»£t qua nhá»¯ng giá»›i háº¡n vá» ngÃ¢n sÃ¡ch lÃ  thÃ¡ch thá»©c lá»›n nháº¥t mÃ  nhÃ³m dá»± Ã¡n pháº£i Ä‘á»‘i máº·t.',
    'charge': 'Ai hiá»‡n Ä‘ang chá»‹u trÃ¡ch nhiá»‡m quáº£n lÃ½ bá»™ pháº­n chÄƒm sÃ³c khÃ¡ch hÃ ng?',
    'check': 'CÃ¡c ngÃ¢n hÃ ng trung Æ°Æ¡ng tÄƒng lÃ£i suáº¥t Ä‘á»ƒ kÃ¬m giá»¯ láº¡m phÃ¡t trong táº§m kiá»ƒm soÃ¡t.',
    'clarify': 'Báº¡n cÃ³ thá»ƒ vui lÃ²ng lÃ m rÃµ Ä‘iá»ƒm thá»© ba trong bÃ i thuyáº¿t trÃ¬nh cá»§a mÃ¬nh Ä‘Æ°á»£c khÃ´ng?',
    'clear': 'Giao tiáº¿p rÃµ rÃ ng vÃ  máº¡ch láº¡c giá»¯a cÃ¡c thÃ nh viÃªn trong nhÃ³m sáº½ ngÄƒn cháº·n nhá»¯ng hiá»ƒu láº§m khÃ´ng Ä‘Ã¡ng cÃ³.',
    'close': 'Nhá»¯ng ngÆ°á»i báº¡n tri ká»· váº«n luÃ´n gáº¯n bÃ³ khÄƒng khÃ­t bÃªn nhau dÃ¹ cÃ¡ch trá»Ÿ muÃ´n trÃ¹ng Ä‘áº¡i dÆ°Æ¡ng.',
    'collaborate': 'CÃ¡c ká»¹ sÆ° vÃ  nhÃ  thiáº¿t káº¿ há»£p tÃ¡c cháº·t cháº½ Ä‘á»ƒ cÃ¹ng nhau xÃ¢y dá»±ng pháº§n má»m hiá»‡n Ä‘áº¡i.',
    'comfortable': 'ÄÃ´i giÃ y thá»ƒ thao nÃ y vÃ´ cÃ¹ng thoáº£i mÃ¡i khi Ä‘i bá»™ cáº£ ngÃ y.',
    'communication': 'Giao tiáº¿p cá»Ÿi má»Ÿ vÃ  chÃ¢n thÃ nh sáº½ xÃ¢y dá»±ng nÃªn niá»m tin sÃ¢u sáº¯c trong má»i má»‘i quan há»‡ há»£p tÃ¡c.',
    'community': 'CÃ¡c tÃ¬nh nguyá»‡n viÃªn Ä‘á»‹a phÆ°Æ¡ng Ä‘Ã£ tá»• chá»©c má»™t Ä‘á»£t quyÃªn gÃ³p tá»« thiá»‡n nháº±m há»— trá»£ cá»™ng Ä‘á»“ng ngÆ°á»i cao tuá»•i.',
    'company': 'TÃ´i thá»±c sá»± trÃ¢n trá»ng sá»± báº§u báº¡n Ä‘á»“ng hÃ nh cá»§a báº¡n trong suá»‘t chuyáº¿n hÃ nh trÃ¬nh dÃ i ra nÆ°á»›c ngoÃ i nÃ y.',
    'complex': 'CÃ¡c ká»¹ sÆ° Ä‘Ã£ thiáº¿t káº¿ má»™t khu liÃªn há»£p thá»ƒ thao hiá»‡n Ä‘áº¡i Ä‘á»“ng thá»i giáº£i quyáº¿t má»™t bÃ i toÃ¡n káº¿t cáº¥u vÃ´ cÃ¹ng phá»©c táº¡p.',
    'comprehensive': 'TrÆ°á»ng Ä‘áº¡i há»c cung cáº¥p má»™t chÆ°Æ¡ng trÃ¬nh giáº£ng dáº¡y toÃ n diá»‡n cho ngÃ nh ká»¹ thuáº­t mÃ¡y tÃ­nh.',
    'concept': 'CÃ´ áº¥y Ä‘Ã£ giá»›i thiá»‡u má»™t khÃ¡i niá»‡m tiáº¿p thá»‹ sÃ¡ng táº¡o giÃºp gia tÄƒng vÆ°á»£t báº­c doanh sá»‘ bÃ¡n hÃ ng trá»±c tuyáº¿n.',
    'confidence': 'Viá»‡c luyá»‡n nÃ³i to tiáº¿ng Anh má»—i ngÃ y giÃºp báº¡n xÃ¢y dá»±ng sá»± tá»± tin to lá»›n khi giao tiáº¿p.',
    'content': 'CÃ¡c nhÃ  sÃ¡ng táº¡o ká»¹ thuáº­t sá»‘ sáº£n xuáº¥t nhá»¯ng ná»™i dung giÃ¡o dá»¥c lÃ´i cuá»‘n cho hÃ ng triá»‡u ngÆ°á»i há»c.',
    'context': 'Viá»‡c tháº¥u hiá»ƒu bá»‘i cáº£nh lá»‹ch sá»­ lÃ  Ä‘iá»u tá»‘i quan trá»ng trÆ°á»›c khi Ä‘Ã¡nh giÃ¡ hiá»‡p Æ°á»›c nÃ y.',
    'contract': 'CÃ¡c luáº­t sÆ° Ä‘Ã£ rÃ  soÃ¡t ká»¹ lÆ°á»¡ng tá»«ng Ä‘iá»u khoáº£n phÃ¡p lÃ½ trÆ°á»›c khi cÃ¡c Ä‘á»‘i tÃ¡c Ä‘áº·t bÃºt kÃ½ há»£p Ä‘á»“ng chÃ­nh thá»©c.',
    'convenient': 'á»¨ng dá»¥ng ngÃ¢n hÃ ng di Ä‘á»™ng giÃºp viá»‡c chuyá»ƒn tiá»n ra nÆ°á»›c ngoÃ i trá»Ÿ nÃªn nhanh chÃ³ng vÃ  tiá»‡n lá»£i Ä‘Ã¡ng kinh ngáº¡c.',
    'conversation': 'ChÃºng tÃ´i Ä‘Ã£ cÃ³ má»™t cuá»™c trÃ² chuyá»‡n thÃº vá»‹ vá» triáº¿t há»c bÃªn tÃ¡ch cÃ  phÃª buá»•i sÃ¡ng.',
    'court': 'Cáº£ hai nhÃ  vÃ´ Ä‘á»‹ch quáº§n vá»£t Ä‘á»u thi Ä‘áº¥u Ä‘áº§y quyáº¿t liá»‡t trÃªn sÃ¢n cá» trung tÃ¢m.',
    'creative': 'Viá»‡c giáº£i quyáº¿t nhá»¯ng lá»—i láº­p trÃ¬nh hÃ³c bÃºa thÆ°á»ng Ä‘Ã²i há»i báº¡n pháº£i tÆ° duy Ä‘á»™t phÃ¡ theo cÃ¡ch Ä‘áº§y sÃ¡ng táº¡o.',
    'culture': 'VÄƒn hÃ³a doanh nghiá»‡p mang tÃ­nh há»£p tÃ¡c sáº½ thÃºc Ä‘áº©y sá»± sÃ¡ng táº¡o vÃ  tÆ°Æ¡ng trá»£ láº«n nhau giá»¯a cÃ¡c nhÃ¢n viÃªn.',
    'current': 'Trong bá»‘i cáº£nh Ä‘iá»u kiá»‡n thá»‹ trÆ°á»ng hiá»‡n nay, sá»± linh hoáº¡t lÃ  má»™t lá»£i tháº¿ cáº¡nh tranh then chá»‘t.',
    'deadline': 'NhÃ³m chÃºng tÃ´i Ä‘Ã£ lÃ m viá»‡c chÄƒm chá»‰ Ä‘á»ƒ ná»™p dá»± Ã¡n trÆ°á»›c thá»i háº¡n chÃ³t.',
    'delicious': 'Phá»Ÿ Viá»‡t Nam lÃ  má»™t trong nhá»¯ng mÃ³n nÆ°á»›c thÆ¡m ngon nháº¥t tháº¿ giá»›i.',
    'deliver': 'Äá»™i ngÅ© ká»¹ sÆ° pháº§n má»m cá»§a chÃºng tÃ´i luÃ´n táº¡o ra vÃ  bÃ n giao nhá»¯ng sáº£n pháº©m cháº¥t lÆ°á»£ng xuáº¥t sáº¯c Ä‘Ãºng thá»i háº¡n.',
    'department': 'CÃ´ áº¥y Ä‘Ã£ Ä‘Æ°á»£c bá»• nhiá»‡m lÃ m trÆ°á»Ÿng bá»™ pháº­n tiáº¿p thá»‹ quá»‘c táº¿.',
    'destination': 'ÄÃ  Náºµng Ä‘Ã£ trá»Ÿ thÃ nh má»™t Ä‘iá»ƒm Ä‘áº¿n du lá»‹ch hÃ ng Ä‘áº§u táº¡i khu vá»±c ÄÃ´ng Nam Ã.',
    'development': 'Viá»‡c phÃ¡t triá»ƒn ká»¹ nÄƒng liÃªn tá»¥c lÃ  Ä‘iá»u thiáº¿t yáº¿u cho sá»± thÄƒng tiáº¿n nghá» nghiá»‡p lÃ¢u dÃ i.',
    'difference': 'DÃ nh má»™t vÃ i giá» tÃ¬nh nguyá»‡n má»—i tuáº§n cÃ³ thá»ƒ táº¡o nÃªn sá»± khÃ¡c biá»‡t thá»±c sá»± cho cuá»™c sá»‘ng cá»§a nhiá»u ngÆ°á»i.',
    'discrepancy': 'Kiá»ƒm toÃ¡n viÃªn Ä‘Ã£ phÃ¡t hiá»‡n sá»± sai lá»‡ch chÆ°a giáº£i trÃ¬nh Ä‘Æ°á»£c trong sá»‘ liá»‡u tÃ i chÃ­nh quÃ½.',
    'dog': 'Anh áº¥y dáº¯t chÃº chÃ³ cá»§a mÃ¬nh Ä‘i dáº¡o má»™t quÃ£ng dÃ i trong cÃ´ng viÃªn vÃ o má»—i buá»•i sÃ¡ng.',
    'draw': 'Tráº­n Ä‘áº¥u bÃ³ng Ä‘Ã¡ quá»‘c táº¿ ká»‹ch tÃ­nh Ä‘Ã£ khÃ©p láº¡i vá»›i tá»· sá»‘ hÃ²a 2-2 Ä‘áº§y danh dá»± cho cáº£ hai Ä‘á»™i.',
    'drop': 'Sá»± sá»¥t giáº£m nhiá»‡t Ä‘á»™ Ä‘á»™t ngá»™t bÃ¡o hiá»‡u nhá»¯ng cÆ¡n bÃ£o mÃ¹a Ä‘Ã´ng Ä‘ang Ã¹a vá».',
    'education': 'GiÃ¡o dá»¥c cháº¥t lÆ°á»£ng cao lÃ  cÃ´ng cá»¥ quyá»n nÄƒng nháº¥t Ä‘á»ƒ xÃ³a Ä‘Ã³i giáº£m nghÃ¨o trÃªn toÃ n tháº¿ giá»›i.',
    'effective': 'Tháº» há»c láº·p láº¡i ngáº¯t quÃ£ng (flashcard) lÃ  má»™t phÆ°Æ¡ng phÃ¡p ghi nhá»› tá»« vá»±ng lÃ¢u dÃ i vÃ´ cÃ¹ng hiá»‡u quáº£.',
    'efficient': 'Tá»± Ä‘á»™ng hÃ³a cÃ¡c tÃ¡c vá»¥ láº·p Ä‘i láº·p láº¡i lÃ  cÃ¡ch hiá»‡u quáº£ Ä‘á»ƒ tÄƒng nÄƒng suáº¥t.',
    'eloquent': 'BÃ i phÃ¡t biá»ƒu hÃ¹ng há»“n cá»§a bÃ  Ä‘Ã£ khiáº¿n toÃ n bá»™ khÃ¡n thÃ­nh giáº£ Ä‘á»©ng dáº­y vá»— tay tÃ¡n thÆ°á»Ÿng.',
    'encourage': 'Nhá»¯ng ngÆ°á»i tháº§y giá»i luÃ´n khuyáº¿n khÃ­ch há»c sinh tÆ° duy pháº£n biá»‡n vÃ  tÃ­ch cá»±c Ä‘áº·t cÃ¢u há»i.',
    'entertainment': 'ÄÃªm dáº¡ tiá»‡c ná»•i báº­t vá»›i cÃ¡c chÆ°Æ¡ng trÃ¬nh giáº£i trÃ­ Ã¢m nháº¡c trá»±c tiáº¿p vÃ  nhá»¯ng mÃ n biá»ƒu diá»…n xiáº¿c áº¥n tÆ°á»£ng.',
    'enthusiastic': 'CÃ¡c báº¡n há»c sinh ráº¥t hÃ o há»©ng tham gia vÃ o cÃ¢u láº¡c bá»™ nÃ³i tiáº¿ng Anh.',
    'environment': 'ChÃºng ta pháº£i chung tay báº£o vá»‡ mÃ´i trÆ°á»ng tá»± nhiÃªn cho cÃ¡c tháº¿ há»‡ tÆ°Æ¡ng lai.',
    'ephemeral': 'Sá»± ná»•i tiáº¿ng nháº¥t thá»i trÃªn máº¡ng xÃ£ há»™i thÆ°á»ng ráº¥t phÃ¹ du, nhanh chÃ³ng tan biáº¿n chá»‰ sau vÃ i ngÃ y.',
    'equanimity': 'Vá»‹ thuyá»n trÆ°á»Ÿng dÃ y dáº¡n kinh nghiá»‡m Ä‘Ã£ lÃ¨o lÃ¡i qua cÆ¡n khá»§ng hoáº£ng báº¥t ngá» vá»›i sá»± Ä‘iá»m tÄ©nh Ä‘Ã¡ng khÃ¢m phá»¥c.',
    'exacerbate': 'Viá»‡c phá»›t lá» cÃ¡c pháº£n há»“i sá»›m sáº½ chá»‰ lÃ m tráº§m trá»ng thÃªm cÃ¡c lá»—i pháº§n má»m vá» sau.',
    'execute': 'Ban lÃ£nh Ä‘áº¡o pháº£i thi hÃ nh káº¿ hoáº¡ch tÃ¡i cÆ¡ cáº¥u doanh nghiá»‡p vá»›i tÃ­nh ká»· luáº­t cao nháº¥t.',
    'exhibition': 'Báº£o tÃ ng nghá»‡ thuáº­t quá»‘c gia Ä‘ang tá»• chá»©c má»™t cuá»™c triá»ƒn lÃ£m áº£nh Ä‘Æ°Æ¡ng Ä‘áº¡i Ä‘áº·c sáº¯c.',
    'experience': 'Du lá»‹ch má»™t mÃ¬nh qua kháº¯p ÄÃ´ng Nam Ã lÃ  má»™t tráº£i nghiá»‡m sá»‘ng khÃ³ quÃªn Ä‘á»‘i vá»›i anh áº¥y.',
    'express': 'Ã‚m nháº¡c giÃºp con ngÆ°á»i bá»™c lá»™ nhá»¯ng cáº£m xÃºc mÃ  ngÃ´n tá»« khÃ´ng thá»ƒ diá»…n táº£.',
    'factor': 'Chi phÃ­ vÃ  tá»‘c Ä‘á»™ giao hÃ ng lÃ  nhá»¯ng yáº¿u tá»‘ mang tÃ­nh quyáº¿t Ä‘á»‹nh trong lá»±a chá»n mua sáº¯m cá»§a há».',
    'fair': 'Má»™t phiÃªn tÃ²a xÃ©t xá»­ cÃ´ng báº±ng Ä‘áº£m báº£o cÃ´ng lÃ½ Ä‘Æ°á»£c thá»±c thi bÃ¬nh Ä‘áº³ng cho má»i cÃ´ng dÃ¢n.',
    'fall': 'Dáº¡o bÆ°á»›c trong cÃ´ng viÃªn vÃ o mÃ¹a thu rá»±c rá»¡ lÃ¡ vÃ ng lÃ  má»™t tráº£i nghiá»‡m vÃ´ cÃ¹ng thanh tháº£n.',
    'fast': 'CÃ¡c Ä‘oÃ n tÃ u cao tá»‘c mang Ä‘áº¿n cho hÃ nh khÃ¡ch nhá»¯ng chuyáº¿n Ä‘i nhanh chÃ³ng vÃ  thÃ¢n thiá»‡n vá»›i mÃ´i trÆ°á»ng.',
    'feasible': 'Há»™i Ä‘á»“ng quáº£n trá»‹ káº¿t luáº­n ráº±ng viá»‡c chuyá»ƒn sang sá»­ dá»¥ng nÄƒng lÆ°á»£ng xanh lÃ  hoÃ n toÃ n kháº£ thi vá» máº·t kinh táº¿.',
    'feedback': 'Pháº£n há»“i mang tÃ­nh xÃ¢y dá»±ng tá»« ngÆ°á»i dÃ¹ng cho phÃ©p chÃºng tÃ´i hoÃ n thiá»‡n sáº£n pháº©m tá»‘t hÆ¡n.',
    'feel': 'Anh áº¥y cÃ³ thá»ƒ cáº£m nháº­n Ä‘Æ°á»£c sá»± hÃ o há»©ng vÃ  nhiá»‡t huyáº¿t chÃ¢n thÃ nh lan tá»a kháº¯p khÃ¡n phÃ²ng.',
    'fine': 'Nhá»¯ng ngÆ°á»i lÃ¡i xe cháº¡y quÃ¡ tá»‘c Ä‘á»™ quy Ä‘á»‹nh sáº½ pháº£i ná»™p má»™t khoáº£n tiá»n pháº¡t Ä‘Ã¡ng ká»ƒ.',
    'fly': 'CÃ¡c Ä‘Ã n chim di cÆ° bay hÃ ng nghÃ¬n dáº·m vÃ o má»—i mÃ¹a thu Ä‘á»ƒ tÃ¬m kiáº¿m nhá»¯ng vÃ¹ng khÃ­ háº­u áº¥m Ã¡p hÆ¡n.',
    'focus': 'Trá»ng tÃ¢m chÃ­nh cá»§a cuá»™c há»p hÃ´m nay lÃ  cáº¯t giáº£m cÃ¡c chi phÃ­ váº­n hÃ nh.',
    'force': 'Lá»±c háº¥p dáº«n lÃ  lá»±c tá»± nhiÃªn vÃ´ hÃ¬nh giá»¯ cho cÃ¡c hÃ nh tinh luÃ´n quay quanh máº·t trá»i.',
    'form': 'Xin vui lÃ²ng Ä‘iá»n Ä‘áº§y Ä‘á»§ vÃ  chuáº©n xÃ¡c vÃ o máº«u Ä‘Æ¡n Ä‘Äƒng kÃ½ nÃ y trÆ°á»›c khi gáº·p cÃ¡n bá»™ phá»¥ trÃ¡ch.',
    'free': 'CÃ¡c cÃ´ng viÃªn cÃ´ng cá»™ng cung cáº¥p khÃ´ng gian vui chÆ¡i ngoÃ i trá»i hoÃ n toÃ n miá»…n phÃ­ cho cÃ¡c gia Ä‘Ã¬nh vÃ  tráº» nhá».',
    'function': 'Chá»©c nÄƒng chÃ­nh cá»§a pháº§n má»m an ninh máº¡ng nÃ y lÃ  báº£o vá»‡ dá»¯ liá»‡u nháº¡y cáº£m cá»§a cÃ´ng ty.',
    'generation': 'Má»—i tháº¿ há»‡ má»›i Ä‘á»u mang theo nhá»¯ng gÃ³c nhÃ¬n sÃ¡ng táº¡o vÃ  nhá»¯ng chuyá»ƒn biáº¿n vÄƒn hÃ³a má»›i máº».',
    'government': 'ChÃ­nh phá»§ Ä‘Ã£ phÃ¡t Ä‘á»™ng má»™t chiáº¿n dá»‹ch cá»™ng Ä‘á»“ng nháº±m thÃºc Ä‘áº©y viá»‡c sá»­ dá»¥ng nÄƒng lÆ°á»£ng tÃ¡i táº¡o.',
    'greeting': 'Má»™t lá»i chÃ o ná»“ng áº¥m giÃºp táº¡o áº¥n tÆ°á»£ng ban Ä‘áº§u thÃ¢n thiá»‡n.',
    'habit': 'Äá»c sÃ¡ch 15 phÃºt má»—i ngÃ y lÃ  má»™t thÃ³i quen tuyá»‡t vá»i cáº§n rÃ¨n luyá»‡n.',
    'hard': 'Sá»± cá»‘ng hiáº¿n vÃ  lÃ m viá»‡c chÄƒm chá»‰ sáº½ má»Ÿ ra con Ä‘Æ°á»ng dáº«n tá»›i nhá»¯ng thÃ nh tá»±u bá»n vá»¯ng.',
    'hospital': 'CÃ¡c bÃ¡c sÄ© vÃ  y tÃ¡ Ä‘Ã£ lÃ m viá»‡c khÃ´ng biáº¿t má»‡t má»i táº¡i bá»‡nh viá»‡n Ä‘a khoa thÃ nh phá»‘.',
    'hospitality': 'Nhá»¯ng ngÆ°á»i lá»¯ khÃ¡ch Ä‘Ã£ vÃ´ cÃ¹ng xÃºc Ä‘á»™ng trÆ°á»›c lÃ²ng hiáº¿u khÃ¡ch ná»“ng háº­u cá»§a ngÆ°á»i dÃ¢n lÃ ng vÃ¹ng cao.',
    'house': 'Há» Ä‘Ã£ mua má»™t ngÃ´i nhÃ  xinh xáº¯n vá»›i má»™t khu vÆ°á»n nhá» rá»£p bÃ³ng cÃ¢y á»Ÿ vÃ¹ng ngoáº¡i Ã´.',
    'impact': 'Tá»± Ä‘á»™ng hÃ³a cÃ´ng nghá»‡ Ä‘Ã£ táº¡o ra tÃ¡c Ä‘á»™ng sÃ¢u rá»™ng Ä‘á»‘i vá»›i tÆ°Æ¡ng lai cá»§a viá»‡c lÃ m.',
    'important': 'ThÃ³i quen ngá»§ Ä‘á»§ giáº¥c cÅ©ng quan trá»ng khÃ´ng kÃ©m gÃ¬ cháº¿ Ä‘á»™ dinh dÆ°á»¡ng vÃ  viá»‡c táº­p thá»ƒ dá»¥c thÆ°á»ng xuyÃªn.',
    'improve': 'Ã”n táº­p tháº» tá»« flashcard má»—i ngÃ y sáº½ giÃºp nÃ¢ng cao vá»‘n tá»« vá»±ng cá»§a báº¡n nhanh chÃ³ng.',
    'information': 'Trang web cá»§a thÆ° viá»‡n cung cáº¥p nguá»“n thÃ´ng tin chuáº©n xÃ¡c cho cÃ¡c nhÃ  nghiÃªn cá»©u há»c thuáº­t.',
    'innovate': 'CÃ¡c doanh nghiá»‡p báº¯t buá»™c pháº£i liÃªn tá»¥c Ä‘á»•i má»›i sÃ¡ng táº¡o náº¿u muá»‘n duy trÃ¬ lá»£i tháº¿ cáº¡nh tranh.',
    'innovation': 'Äá»•i má»›i cÃ´ng nghá»‡ lÃ  Ä‘á»™ng lá»±c cá»‘t lÃµi thÃºc Ä‘áº©y tÄƒng trÆ°á»Ÿng kinh táº¿ vÃ  táº¡o ra vÃ´ vÃ n cÆ¡ há»™i má»›i.',
    'interest': 'LÃ£i suáº¥t cao tÃ¡c Ä‘á»™ng trá»±c tiáº¿p Ä‘áº¿n cáº£ hoáº¡t Ä‘á»™ng vay vá»‘n cá»§a doanh nghiá»‡p láº«n thÃ³i quen chi tiÃªu cá»§a ngÆ°á»i tiÃªu dÃ¹ng.',
    'international': 'Há»™i nghá»‹ quá»‘c táº¿ Ä‘Ã£ quy tá»¥ cÃ¡c nhÃ  nghiÃªn cá»©u Ä‘áº¿n tá»« hÆ¡n nÄƒm mÆ°Æ¡i quá»‘c gia.',
    'issue': 'CÃ¡c Ä‘áº¡i biá»ƒu chÃ­nh phá»§ Ä‘Ã£ há»p láº¡i Ä‘á»ƒ giáº£i quyáº¿t váº¥n Ä‘á» cáº¥p bÃ¡ch vá» Ã´ nhiá»…m Ä‘Ã´ thá»‹.',
    'key': 'Giao tiáº¿p hiá»‡u quáº£ lÃ  má»™t yáº¿u tá»‘ then chá»‘t giÃºp cho viá»‡c phá»‘i há»£p lÃ m viá»‡c nhÃ³m liÃªn phÃ²ng ban thÃ nh cÃ´ng.',
    'kind': 'Má»™t lá»i nÃ³i tá»­ táº¿ vÃ  nhÃ¢n háº­u cÃ³ thá»ƒ lÃ m bá»«ng sÃ¡ng cáº£ má»™t ngÃ y khÃ³ khÄƒn cá»§a ai Ä‘Ã³.',
    'knowledge': 'Chia sáº» kiáº¿n thá»©c má»™t cÃ¡ch cá»Ÿi má»Ÿ vÃ  miá»…n phÃ­ sáº½ tiáº¿p thÃªm sá»©c máº¡nh cho cáº£ cá»™ng Ä‘á»“ng cÃ¹ng phÃ¡t triá»ƒn.',
    'land': 'CÆ¡ trÆ°á»Ÿng Ä‘Ã£ Ä‘iá»u khiá»ƒn mÃ¡y bay thÆ°Æ¡ng máº¡i háº¡ cÃ¡nh má»™t cÃ¡ch Ä‘iÃªu luyá»‡n giá»¯a cÆ¡n mÆ°a lá»›n.',
    'last': 'Nhá»¯ng Ä‘Ã´i bá»‘t da cháº¥t lÆ°á»£ng cao Ä‘Æ°á»£c thiáº¿t káº¿ Ä‘á»ƒ cÃ³ thá»ƒ bá»n Ä‘áº¹p qua nhiá»u mÃ¹a Ä‘Ã´ng.',
    'launch': 'Táº­p Ä‘oÃ n cÃ´ng nghá»‡ Ä‘Ã£ cÃ´ng bá»‘ káº¿ hoáº¡ch ra máº¯t chiáº¿c Ä‘iá»‡n thoáº¡i thÃ´ng minh cao cáº¥p nháº¥t vÃ o thÃ¡ng MÆ°á»i Má»™t.',
    'lead': 'Nhá»¯ng nhÃ  lÃ£nh Ä‘áº¡o tÃ i ba luÃ´n dáº«n dáº¯t báº±ng nhá»¯ng táº¥m gÆ°Æ¡ng truyá»n cáº£m há»©ng thay vÃ¬ chá»‰ ra lá»‡nh Ã¡p Ä‘áº·t.',
    'level': 'NgÆ°á»i há»c ngoáº¡i ngá»¯ cÃ³ thá»ƒ nÃ¢ng cao trÃ¬nh Ä‘á»™ tá»« sÆ¡ cáº¥p lÃªn thÃ nh tháº¡o khung CEFR nhá» luyá»‡n táº­p Ä‘á»u Ä‘áº·n.',
    'light': 'Ãnh náº¯ng ban mai rá»i chiáº¿u thung lÅ©ng thanh bÃ¬nh vá»›i má»™t váº§ng hÃ o quang rá»±c rá»¡ sáº¯c vÃ ng.',
    'line': 'KhÃ¡ch hÃ ng kiÃªn nháº«n xáº¿p hÃ ng dÃ i chá» Ä‘á»£i cÃ¡nh cá»­a tiá»‡m bÃ¡nh má»Ÿ cá»­a.',
    'link': 'CÃ¡c nhÃ  nghiÃªn cá»©u Ä‘Ã£ xÃ¡c láº­p má»‘i liÃªn há»‡ trá»±c tiáº¿p giá»¯a giáº¥c ngá»§ Ä‘á»u Ä‘áº·n vÃ  hiá»‡u suáº¥t nháº­n thá»©c cá»§a nÃ£o bá»™.',
    'management': 'Quáº£n lÃ½ thá»i gian hiá»‡u quáº£ giÃºp nhá»¯ng ngÆ°á»i Ä‘i lÃ m duy trÃ¬ sá»± cÃ¢n báº±ng giá»¯a cÃ´ng viá»‡c vÃ  cuá»™c sá»‘ng.',
    'market': 'CÃ¡c cÃ´ng nghá»‡ nÄƒng lÆ°á»£ng sáº¡ch má»›i ná»•i Ä‘ang nhanh chÃ³ng tÃ¬m tháº¥y nhá»¯ng thá»‹ trÆ°á»ng ngÃ¡ch tiÃªu dÃ¹ng Ä‘áº§y tiá»m nÄƒng.',
    'master': 'Cáº§n nhiá»u giá» luyá»‡n táº­p cÃ³ chá»§ Ä‘Ã­ch vÃ  bá»n bá»‰ Ä‘á»ƒ cÃ³ thá»ƒ lÃ m chá»§ má»™t nháº¡c cá»¥.',
    'match': 'Chiáº¿c khÄƒn quÃ ng cá»• mÃ u xanh navy thanh lá»‹ch cá»§a cÃ´ áº¥y hoÃ n toÃ n tÃ´ng xuyá»‡t tÃ´ng vá»›i chiáº¿c Ã¡o khoÃ¡c mÃ¹a Ä‘Ã´ng.',
    'matter': 'LÃ²ng tá»‘t vÃ  sá»± Ä‘á»“ng cáº£m lÃ  nhá»¯ng pháº©m cháº¥t thá»±c sá»± quan trá»ng trong cÃ¡c má»‘i quan há»‡ giá»¯a ngÆ°á»i vá»›i ngÆ°á»i.',
    'measure': 'CÃ¡c biá»‡n phÃ¡p an ninh nghiÃªm ngáº·t Ä‘Ã£ Ä‘Æ°á»£c triá»ƒn khai Ä‘á»ƒ báº£o vá»‡ an toÃ n cho cÃ¡c giao dá»‹ch tÃ i chÃ­nh nháº¡y cáº£m.',
    'meet': 'Thiáº¿t káº¿ sáº£n pháº©m má»›i pháº£i Ä‘Ã¡p á»©ng Ä‘Æ°á»£c cÃ¡c tiÃªu chuáº©n an toÃ n quá»‘c táº¿ vÃ´ cÃ¹ng kháº¯t khe.',
    'meticulous': 'NghiÃªn cá»©u tá»‰ má»‰ cá»§a bÃ  Ä‘Ã£ mang láº¡i nhá»¯ng phÃ¡t hiá»‡n Ä‘á»™t phÃ¡ cho ná»n khoa há»c.',
    'mind': 'Giá»¯ má»™t tÆ° duy cá»Ÿi má»Ÿ cho phÃ©p má»—i cÃ¡ nhÃ¢n biáº¿t láº¯ng nghe vÃ  trÃ¢n trá»ng nhá»¯ng gÃ³c nhÃ¬n vÄƒn hÃ³a Ä‘a dáº¡ng.',
    'minute': 'NgÆ°á»i thÆ° kÃ½ Ä‘Ã£ ghi chÃ©p cáº©n tháº­n tá»«ng quyáº¿t Ä‘á»‹nh quan trá»ng vÃ o biÃªn báº£n chÃ­nh thá»©c cá»§a cuá»™c há»p.',
    'misunderstand': 'Xin vui lÃ²ng nÃ³i cháº­m láº¡i Ä‘á»ƒ chÃºng ta khÃ´ng hiá»ƒu láº§m Ã½ cá»§a nhau.',
    'nature': 'DÃ nh thá»i gian hÃ²a mÃ¬nh vÃ o thiÃªn nhiÃªn thanh bÃ¬nh giÃºp há»“i sinh nÄƒng lÆ°á»£ng tinh tháº§n vÃ  xua tan cÄƒng tháº³ng.',
    'negotiate': 'Hai bÃªn Ä‘Ã£ gáº·p nhau Ä‘á»ƒ Ä‘Ã m phÃ¡n má»™t thá»a thuáº­n cÃ¹ng cÃ³ lá»£i cho Ä‘Ã´i bÃªn.',
    'net': 'Doanh nghiá»‡p Ä‘Ã£ bÃ¡o cÃ¡o má»©c tÄƒng trÆ°á»Ÿng Ä‘Ã¡ng ká»ƒ vá» lá»£i nhuáº­n rÃ²ng hÃ ng nÄƒm.',
    'note': 'Xin vui lÃ²ng lÆ°u Ã½ vÃ  ghi chÃ©p cáº©n tháº­n cÃ¡c thá»i háº¡n ná»™p bÃ i táº­p Ä‘Æ°á»£c thÃ´ng bÃ¡o trÃªn lá»›p.',
    'notice': 'Báº¡n cÃ³ nháº­n tháº¥y báº¥t ká»³ sá»± thay Ä‘á»•i tinh táº¿ nÃ o trong hÃ nh vi cá»§a khÃ¡ch hÃ ng suá»‘t nhá»¯ng tuáº§n gáº§n Ä‘Ã¢y khÃ´ng?',
    'novel': 'PhÃ²ng thÃ­ nghiá»‡m Ä‘Ã£ tiÃªn phong Ã¡p dá»¥ng má»™t phÆ°Æ¡ng phÃ¡p má»›i láº¡ Ä‘á»ƒ tá»•ng há»£p cÃ¡c loáº¡i nhiÃªn liá»‡u tÃ¡i táº¡o.',
    'object': 'KhÃ¡ch tham quan báº£o tÃ ng Ä‘Ã£ vÃ´ cÃ¹ng kinh ngáº¡c trÆ°á»›c nhá»¯ng Ä‘á»“ váº­t báº±ng Ä‘á»“ng cá»• xÆ°a tinh xáº£o Ä‘Æ°á»£c trÆ°ng bÃ y.',
    'objective': 'Má»¥c tiÃªu hÃ ng Ä‘áº§u cá»§a quÃ½ nÃ y lÃ  gia tÄƒng má»©c Ä‘á»™ gáº¯n káº¿t cá»§a ngÆ°á»i dÃ¹ng.',
    'odd': 'Báº¥t cháº¥p má»™t vÃ i khÃ³ khÄƒn ká»³ láº¡ xáº£y ra trÃªn cháº·ng Ä‘Æ°á»ng, cáº£ Ä‘á»™i váº«n hoÃ n thÃ nh xuáº¥t sáº¯c nhiá»‡m vá»¥.',
    'office': 'CÃ¡c nhÃ¢n viÃªn Ä‘Ã£ quay trá»Ÿ láº¡i lÃ m viá»‡c táº¡i trá»¥ sá»Ÿ vÄƒn phÃ²ng chÃ­nh sau má»™t thá»i gian dÃ i lÃ m viá»‡c tá»« xa.',
    'opportunity': 'Äi du há»c lÃ  má»™t cÆ¡ há»™i tuyá»‡t vá»i Ä‘á»ƒ khÃ¡m phÃ¡ nhá»¯ng gÃ³c nhÃ¬n vÃ  chÃ¢n trá»i má»›i.',
    'order': 'Lá»±c lÆ°á»£ng cáº£nh sÃ¡t Ä‘Ã£ lÃ m viá»‡c khÃ´ng ngá»«ng nghá»‰ Ä‘á»ƒ láº­p láº¡i tráº­t tá»± cÃ´ng cá»™ng trÃªn toÃ n thÃ nh phá»‘.',
    'organization': 'Tá»• chá»©c Y táº¿ Tháº¿ giá»›i Ä‘iá»u phá»‘i viá»‡c á»©ng phÃ³ vá»›i cÃ¡c tÃ¬nh huá»‘ng kháº©n cáº¥p vá» y táº¿ trÃªn toÃ n cáº§u.',
    'organize': 'CÃ¢u láº¡c bá»™ thanh niÃªn Ä‘Ã£ quyáº¿t Ä‘á»‹nh tá»• chá»©c má»™t Ä‘á»£t ra quÃ¢n dá»n dáº¹p bÃ£i biá»ƒn vÃ o thá»© Báº£y tuáº§n nÃ y.',
    'paradigm': 'Äiá»‡n toÃ¡n lÆ°á»£ng tá»­ há»©a háº¹n sáº½ táº¡o nÃªn má»™t bÆ°á»›c chuyá»ƒn dá»‹ch mÃ´ hÃ¬nh mang tÃ­nh cÃ¡ch máº¡ng trong cÃ´ng nghá»‡.',
    'park': 'Nhá»¯ng ngÆ°á»i lÃ¡i xe cáº£m tháº¥y viá»‡c Ä‘á»— xe trá»Ÿ nÃªn thuáº­n tiá»‡n Ä‘Ã¡ng ngáº¡c nhiÃªn trong bÃ£i Ä‘á»— xe ngáº§m má»›i xÃ¢y.',
    'part': 'LÃ m viá»‡c nhÃ³m lÃ  má»™t pháº§n khÃ´ng thá»ƒ thiáº¿u Ä‘á»ƒ táº¡o ra cÃ¡c sáº£n pháº©m pháº§n má»m mang tÃ­nh Ä‘á»•i má»›i sÃ¡ng táº¡o.',
    'participate': 'HÆ¡n ba trÄƒm váº­n Ä‘á»™ng viÃªn sáº½ tham gia tranh tÃ i táº¡i giáº£i cháº¡y marathon cá»§a thÃ nh phá»‘.',
    'party': 'Cáº£ hai bÃªn kÃ½ káº¿t Ä‘á»u cÃ¹ng nháº¥t trÃ­ vá»›i táº¥t cáº£ cÃ¡c Ä‘iá»u khoáº£n sá»­a Ä‘á»•i cá»§a há»£p Ä‘á»“ng.',
    'pass': 'Báº±ng viá»‡c kiÃªn trÃ¬ há»c táº­p vÃ  ná»— lá»±c háº¿t mÃ¬nh, báº¡n cháº¯c cháº¯n sáº½ vÆ°á»£t qua ká»³ thi chá»©ng chá»‰ tiáº¿ng Anh.',
    'performance': 'CÃ´ng ty Ä‘Ã£ khen thÆ°á»Ÿng nhÃ¢n viÃªn báº±ng cÃ¡c khoáº£n tiá»n thÆ°á»Ÿng xá»©ng Ä‘Ã¡ng cho hiá»‡u suáº¥t lÃ m viá»‡c xuáº¥t sáº¯c hÃ ng quÃ½.',
    'period': 'Thá»i ká»³ Phá»¥c hÆ°ng lÃ  má»™t giai Ä‘oáº¡n lá»‹ch sá»­ rá»±c rá»¡ vá»›i sá»± Ä‘Ã¢m chá»“i ná»Ÿ hoa cá»§a nghá»‡ thuáº­t vÃ  tÆ° tÆ°á»Ÿng triáº¿t há»c.',
    'pernicious': 'ThÃ´ng tin sai lá»‡ch trÃªn máº¡ng gÃ¢y ra tÃ¡c háº¡i khÃ´n lÆ°á»ng Ä‘á»‘i vá»›i sá»± hÃ²a há»£p cá»§a cá»™ng Ä‘á»“ng.',
    'perspective': 'Äi du lá»‹ch tá»›i cÃ¡c quá»‘c gia khÃ¡c mang láº¡i cho má»i ngÆ°á»i gÃ³c nhÃ¬n rá»™ng má»Ÿ hÆ¡n vá» nhá»¯ng ná»n vÄƒn hÃ³a Ä‘a dáº¡ng.',
    'pioneer': 'BÃ  lÃ  ngÆ°á»i tiÃªn phong trong ngÃ nh khoa há»c mÃ¡y tÃ­nh, má»Ÿ Ä‘Æ°á»ng cho cÃ¡c tháº¿ há»‡ tÆ°Æ¡ng lai.',
    'place': 'HÃ£y cáº©n tháº­n Ä‘áº·t cÃ¡c Ä‘á»“ thá»§y tinh dá»… vá»¡ trá»Ÿ láº¡i vÃ o bÃªn trong há»™p báº£o quáº£n cÃ³ lÃ³t Ä‘á»‡m.',
    'plant': 'Táº­p Ä‘oÃ n sáº£n xuáº¥t Ã´ tÃ´ Ä‘Ã£ chÃ­nh thá»©c khÃ¡nh thÃ nh má»™t nhÃ  mÃ¡y cháº¿ táº¡o má»›i táº¡i bang Ohio.',
    'point': 'Diá»…n giáº£ chÃ­nh Ä‘Ã£ Ä‘Æ°a ra má»™t luáº­n Ä‘iá»ƒm vÃ´ cÃ¹ng sÃ¢u sáº¯c vá» tÆ°Æ¡ng lai cá»§a nÄƒng lÆ°á»£ng tÃ¡i táº¡o.',
    'polite': 'NÃ³i lá»i lÃ m Æ¡n vÃ  cáº£m Æ¡n luÃ´n lÃ  hÃ nh vi lá»‹ch sá»±.',
    'population': 'Tokyo lÃ  má»™t trong nhá»¯ng Ä‘Ã´ thá»‹ cÃ³ dÃ¢n sá»‘ Ä‘Ã´ng Ä‘Ãºc nháº¥t trÃªn tháº¿ giá»›i.',
    'post': 'CÃ´ áº¥y Ä‘Ã£ vui má»«ng Ä‘Ã³n nháº­n má»™t vá»‹ trÃ­ ngoáº¡i giao cÃ´ng tÃ¡c nhiá»‡m sá»Ÿ táº¡i Tokyo.',
    'potential': 'Láº­p trÃ¬nh viÃªn tráº» tuá»•i Ä‘Ã£ bá»™c lá»™ tiá»m nÄƒng to lá»›n trong viá»‡c phÃ¡t triá»ƒn cÃ¡c mÃ´ hÃ¬nh trÃ­ tuá»‡ nhÃ¢n táº¡o.',
    'power': 'CÆ¡n bÃ£o dá»¯ dá»™i Ä‘Ã£ lÃ m máº¥t nguá»“n Ä‘iá»‡n tháº¯p sÃ¡ng táº¡i hÃ ng trÄƒm ngÃ´i nhÃ  ven biá»ƒn.',
    'pragmatic': 'ChÃºng ta cáº§n má»™t hÆ°á»›ng tiáº¿p cáº­n thá»±c dá»¥ng Ä‘á»ƒ thÃ¡o gá»¡ bÃ i toÃ¡n váº­n hÃ nh phá»©c táº¡p nÃ y.',
    'prepare': 'Há» Ä‘Ã£ chuáº©n bá»‹ ráº¥t ká»¹ lÆ°á»¡ng cho buá»•i phá»ng váº¥n xin viá»‡c cá»§a cÃ´ng ty.',
    'present': 'CÃ¡c nhÃ  nghiÃªn cá»©u sáº½ trÃ¬nh bÃ y nhá»¯ng phÃ¡t hiá»‡n thiÃªn vÄƒn há»c mang tÃ­nh Ä‘á»™t phÃ¡ cá»§a há» táº¡i há»™i nghá»‹ thÆ°á»£ng Ä‘á»‰nh toÃ n cáº§u.',
    'presentation': 'BÃ i thuyáº¿t trÃ¬nh báº±ng slide rÃµ rÃ ng vÃ  khÃºc chiáº¿t cá»§a cÃ´ áº¥y Ä‘Ã£ thuyáº¿t phá»¥c cÃ¡c nhÃ  Ä‘áº§u tÆ° rÃ³t vá»‘n cho dá»± Ã¡n khá»Ÿi nghiá»‡p.',
    'press': 'BÃ¡o chÃ­ quá»‘c táº¿ Ä‘Ã£ Ä‘Æ°a tin rá»™ng rÃ£i vÃ  chi tiáº¿t vá» buá»•i lá»… kÃ½ káº¿t lá»‹ch sá»­ nÃ y.',
    'prioritize': 'Báº¡n cáº§n Æ°u tiÃªn cÃ¡c yÃªu cáº§u kháº©n cáº¥p cá»§a khÃ¡ch hÃ ng hÆ¡n lÃ  nhá»¯ng cáº­p nháº­t nhá».',
    'process': 'Ná»™p há»“ sÆ¡ xin há»c bá»•ng quá»‘c táº¿ lÃ  má»™t quy trÃ¬nh cáº¡nh tranh vÃ  vÃ´ cÃ¹ng kháº¯t khe.',
    'produce': 'Nhá»¯ng ngÆ°á»i nÃ´ng dÃ¢n Ä‘á»‹a phÆ°Æ¡ng sáº£n xuáº¥t cÃ¡c loáº¡i rau há»¯u cÆ¡ tÆ°Æ¡i sáº¡ch cung cáº¥p hÃ ng ngÃ y cho cÃ¡c chá»£ Ä‘Ã´ thá»‹ lÃ¢n cáº­n.',
    'productive': 'Äáº·t ra má»¥c tiÃªu rÃµ rÃ ng má»—i buá»•i sÃ¡ng giÃºp báº¡n duy trÃ¬ nÄƒng suáº¥t lÃ m viá»‡c ráº¥t cao.',
    'professional': 'LuÃ´n giá»¯ thÃ¡i Ä‘á»™ lá»‹ch thiá»‡p vÃ  chuyÃªn nghiá»‡p trong suá»‘t cÃ¡c buá»•i lÃ m viá»‡c vÃ  Ä‘Ã m phÃ¡n kinh doanh.',
    'program': 'TrÆ°á»ng Ä‘áº¡i há»c Ä‘Ã£ xÃ¢y dá»±ng má»™t chÆ°Æ¡ng trÃ¬nh há»c bá»•ng chuyÃªn sÃ¢u dÃ nh riÃªng cho cÃ¡c nhÃ  khoa há»c mÃ¡y tÃ­nh tÆ°Æ¡ng lai.',
    'project': 'CÃ¡c chuyÃªn gia phÃ¢n tÃ­ch tÃ i chÃ­nh dá»± bÃ¡o má»©c tÄƒng trÆ°á»Ÿng kinh táº¿ máº¡nh máº½ trong cÃ¡c lÄ©nh vá»±c cÃ´ng nghá»‡ nÄƒm nay.',
    'promote': 'CÃ´ áº¥y Ä‘Ã£ Ä‘Æ°á»£c thÄƒng chá»©c lÃªn vá»‹ trÃ­ giÃ¡m Ä‘á»‘c sáº£n pháº©m sau nhá»¯ng Ä‘Ã³ng gÃ³p xuáº¥t sáº¯c.',
    'prompt': 'ChÃºng tÃ´i ráº¥t trÃ¢n trá»ng pháº£n há»“i nhanh chÃ³ng vÃ  ká»‹p thá»i cá»§a báº¡n vá» ngÃ y giao hÃ ng Ä‘Ã£ Ä‘Æ°á»£c cáº­p nháº­t.',
    'property': 'Äáº§u tÆ° vÃ o báº¥t Ä‘á»™ng sáº£n nhÃ  á»Ÿ vá»«a mang láº¡i nguá»“n thu nháº­p tá»« tiá»n cho thuÃª, vá»«a giÃºp gia tÄƒng giÃ¡ trá»‹ vá»‘n theo thá»i gian.',
    'protect': 'HÃ£y nhá»› thoa kem chá»‘ng náº¯ng Ä‘á»ƒ báº£o vá»‡ lÃ n da cá»§a báº¡n khá»i Ã¡nh náº¯ng máº·t trá»i.',
    'protection': 'Kem chá»‘ng náº¯ng mang láº¡i sá»± báº£o vá»‡ thiáº¿t yáº¿u giÃºp lÃ n da trÃ¡nh khá»i tÃ¡c háº¡i cá»§a cÃ¡c tia cá»±c tÃ­m.',
    'public': 'Máº¡ng lÆ°á»›i giao thÃ´ng cÃ´ng cá»™ng giÃºp giáº£m thiá»ƒu Ä‘Ã¡ng ká»ƒ tÃ¬nh tráº¡ng Ã¹n táº¯c giao thÃ´ng vÃ  lÆ°á»£ng khÃ­ tháº£i carbon.',
    'purpose': 'Má»¥c Ä‘Ã­ch cá»§a buá»•i há»™i tháº£o Ä‘Ã o táº¡o nÃ y lÃ  nÃ¢ng cao ká»¹ nÄƒng Ä‘Ã m phÃ¡n cho nhÃ¢n viÃªn.',
    'range': 'Hiá»‡u sÃ¡ch trÆ°ng bÃ y má»™t danh má»¥c Ä‘a dáº¡ng cÃ¡c tÃ¡c pháº©m vÄƒn há»c tá»« cá»• Ä‘iá»ƒn cho tá»›i Ä‘Æ°Æ¡ng Ä‘áº¡i.',
    'rate': 'CÃ¡c nhÃ  kinh táº¿ há»c theo dÃµi sÃ¡t sao tá»· lá»‡ viá»‡c lÃ m nhÆ° má»™t chá»‰ sá»‘ sá»‘ng cÃ²n pháº£n Ã¡nh sá»©c khá»e cá»§a ná»n kinh táº¿.',
    'reason': 'Sá»± thÃ´ng thÃ¡i Ä‘Ã­ch thá»±c Ä‘Ã²i há»i chÃºng ta pháº£i biáº¿t láº¯ng nghe lÃ½ láº½ ngay cáº£ trong nhá»¯ng thá»i Ä‘iá»ƒm cáº£m xÃºc trÃ o dÃ¢ng.',
    'recognize': 'Há»™i Ä‘á»“ng há»c thuáº­t Ä‘Ã£ quyáº¿t Ä‘á»‹nh vinh danh cÃ´ng trÃ¬nh nghiÃªn cá»©u mang tÃ­nh Ä‘á»™t phÃ¡ cá»§a bÃ  trong ngÃ nh hÃ³a sinh.',
    'recommendation': 'Vá»‹ giÃ¡o sÆ° Ä‘Ã£ viáº¿t má»™t bá»©c thÆ° giá»›i thiá»‡u Ä‘áº§y nhiá»‡t huyáº¿t cho há»“ sÆ¡ xin há»c tháº¡c sÄ© cá»§a cÃ´ áº¥y.',
    'reconstruct': 'CÃ¡c nhÃ  sá»­ há»c Ä‘Ã£ lÃ m viá»‡c miá»‡t mÃ i Ä‘á»ƒ phá»¥c dá»±ng láº¡i diá»‡n máº¡o cá»§a khu hoÃ ng thÃ nh cá»• xÆ°a.',
    'record': 'CÃ¡c bá»‡nh viá»‡n tuÃ¢n thá»§ cháº¿ Ä‘á»™ báº£o máº­t nghiÃªm ngáº·t khi lÆ°u trá»¯ há»“ sÆ¡ bá»‡nh Ã¡n sá»©c khá»e cá»§a bá»‡nh nhÃ¢n.',
    'relationship': 'Sá»± tÃ´n trá»ng láº«n nhau lÃ  ná»n táº£ng cá»‘t lÃµi cá»§a báº¥t ká»³ má»‘i quan há»‡ lÃ nh máº¡nh nÃ o.',
    'reliable': 'Anh áº¥y lÃ  má»™t Ä‘á»‘i tÃ¡c Ä‘Ã¡ng tin cáº­y, ngÆ°á»i luÃ´n mang láº¡i káº¿t quáº£ cháº¥t lÆ°á»£ng cao.',
    'report': 'á»¦y ban Ä‘Ã£ Ä‘á»‡ trÃ¬nh má»™t báº£n bÃ¡o cÃ¡o Ä‘iá»u tra toÃ n diá»‡n lÃªn há»™i Ä‘á»“ng quáº£n trá»‹.',
    'resilience': 'RÃ¨n luyá»‡n sá»± kiÃªn cÆ°á»ng vá» máº·t tinh tháº§n giÃºp má»—i cÃ¡ nhÃ¢n vá»¯ng vÃ ng vÆ°á»£t qua má»i nghá»‹ch cáº£nh.',
    'resilient': 'Nhá»¯ng ngÆ°á»i kiÃªn cÆ°á»ng luÃ´n biáº¿t thÃ­ch nghi vÃ  vá»±c dáº­y máº¡nh máº½ hÆ¡n sau nhá»¯ng bÆ°á»›c lÃ¹i trong cuá»™c sá»‘ng.',
    'resource': 'Nguá»“n nÆ°á»›c sáº¡ch tÃ¡i táº¡o lÃ  tÃ i nguyÃªn thiÃªn nhiÃªn quÃ½ giÃ¡ nháº¥t cá»§a toÃ n nhÃ¢n loáº¡i.',
    'responsibility': 'Nháº­n trÃ¡ch nhiá»‡m vá» nhá»¯ng sai láº§m lÃ  dáº¥u hiá»‡u nháº­n biáº¿t cá»§a má»™t nhÃ  lÃ£nh Ä‘áº¡o trÆ°á»Ÿng thÃ nh.',
    'rest': 'Nghá»‰ ngÆ¡i thá»ƒ cháº¥t Ä‘áº§y Ä‘á»§ lÃ  Ä‘iá»u thiáº¿t yáº¿u Ä‘á»ƒ tÃ¡i táº¡o cÆ¡ báº¯p vÃ  phá»¥c há»“i sá»± cÃ¢n báº±ng cáº£m xÃºc.',
    'resume': 'CÃ¡c á»©ng viÃªn nÃªn tinh chá»‰nh báº£n sÆ¡ yáº¿u lÃ½ lá»‹ch chuyÃªn nghiá»‡p Ä‘á»ƒ lÃ m ná»•i báº­t cÃ¡c thÃ nh tÃ­ch phÃ¹ há»£p.',
    'return': 'Nhá»¯ng ngÆ°á»i lá»¯ hÃ nh vá»¡ Ã²a trong niá»m vui sÆ°á»›ng khi trá»Ÿ vá» nhÃ  an toÃ n sau chuyáº¿n thÃ¡m hiá»ƒm kÃ©o dÃ i nhiá»u thÃ¡ng trá»i.',
    'review': 'Há»c sinh nÃªn thÆ°á»ng xuyÃªn Ã´n táº­p láº¡i cÃ¡c ghi chÃº cá»§a mÃ¬nh Ä‘á»ƒ cá»§ng cá»‘ kiáº¿n thá»©c vá»«a má»›i tiáº¿p thu.',
    'rich': 'áº¨m thá»±c ÄÃ´ng Nam Ã ná»•i tiáº¿ng trÃªn toÃ n tháº¿ giá»›i nhá» hÆ°Æ¡ng vá»‹ thÆ¡m ná»“ng, Ä‘áº­m Ä‘Ã  vÃ  phong phÃº.',
    'right': 'Quyá»n tiáº¿p cáº­n giÃ¡o dá»¥c vÃ  chÄƒm sÃ³c y táº¿ lÃ  má»™t quyá»n cÆ¡ báº£n cá»§a con ngÆ°á»i.',
    'ring': 'VÃµ sÄ© quyá»n anh tá»± tin bÆ°á»›c lÃªn sÃ n Ä‘áº¥u chuáº©n bá»‹ cho tráº­n tranh chá»©c vÃ´ Ä‘á»‹ch.',
    'rise': 'Nhá»¯ng ngÆ°á»i thá»©c dáº­y sá»›m ráº¥t thÃ­ch ngáº¯m nhÃ¬n Ã¡nh máº·t trá»i ban mai tá»« tá»« nhÃ´ lÃªn hÃ¹ng vÄ© phÃ­a chÃ¢n trá»i biá»ƒn cáº£.',
    'row': 'Chá»— ngá»“i cá»§a chÃºng tÃ´i náº±m ngay á»Ÿ hÃ ng gháº¿ Ä‘áº§u cá»§a khÃ¡n phÃ²ng hÃ²a nháº¡c.',
    'rule': 'TÃ´n trá»ng luáº­t giao thÃ´ng Ä‘áº£m báº£o an toÃ n tÃ­nh máº¡ng cho cáº£ ngÆ°á»i Ä‘i bá»™ láº«n nhá»¯ng ngÆ°á»i Ä‘iá»u khiá»ƒn phÆ°Æ¡ng tiá»‡n.',
    'run': 'Anh áº¥y Ä‘iá»u hÃ nh thÃ nh cÃ´ng má»™t cÃ´ng ty logistics Ä‘a quá»‘c gia cÃ³ trá»¥ sá»Ÿ táº¡i Singapore.',
    'safe': 'Nhá»¯ng ká»· váº­t quÃ½ giÃ¡ cá»§a gia Ä‘Ã¬nh vÃ  há»™ chiáº¿u Ä‘Æ°á»£c cáº¥t giá»¯ an toÃ n bÃªn trong kÃ©t sáº¯t chá»‘ng chÃ¡y táº¡i nhÃ .',
    'save': 'Tiáº¿t kiá»‡m Ä‘á»u Ä‘áº·n má»™t pháº§n thu nháº­p hÃ ng thÃ¡ng sáº½ táº¡o nÃªn má»™t quá»¹ dá»± phÃ²ng kháº©n cáº¥p vÃ´ cÃ¹ng Ä‘Ã¡ng tin cáº­y.',
    'scale': 'CÃ´ng ty khá»Ÿi nghiá»‡p Ä‘Ã£ má»Ÿ rá»™ng tháº§n tá»‘c nháº±m Ä‘áº¡t Ä‘Æ°á»£c lá»£i tháº¿ kinh táº¿ nhá» quy mÃ´ toÃ n cáº§u.',
    'schedule': 'ChÃºng ta hÃ£y kiá»ƒm tra lá»‹ch trÃ¬nh chuyáº¿n bay trÆ°á»›c khi khá»Ÿi hÃ nh ra sÃ¢n bay.',
    'score': 'CÃ´ áº¥y Ä‘Ã£ Ä‘áº¡t Ä‘Æ°á»£c sá»‘ Ä‘iá»ƒm gáº§n nhÆ° tuyá»‡t Ä‘á»‘i trong ká»³ thi tiáº¿ng Anh cáº¥p Ä‘áº¡i há»c nÃ¢ng cao.',
    'screen': 'Háº¡n cháº¿ thá»i gian nhÃ¬n mÃ n hÃ¬nh Ä‘iá»‡n tá»­ vÃ o buá»•i tá»‘i giÃºp cáº£i thiá»‡n rÃµ rá»‡t cháº¥t lÆ°á»£ng giáº¥c ngá»§ sÃ¢u.',
    'season': 'MÃ¹a thu thÆ°á»ng Ä‘Æ°á»£c xem lÃ  mÃ¹a Ä‘áº¹p nhÆ° tranh váº½ vÃ  lÃ½ tÆ°á»Ÿng nháº¥t cho nhá»¯ng chuyáº¿n leo nÃºi dÃ£ ngoáº¡i.',
    'seat': 'HÃ nh khÃ¡ch Ä‘Æ°á»£c yÃªu cáº§u ngá»“i yÃªn táº¡i chá»— vÃ  tháº¯t cháº·t dÃ¢y an toÃ n trong suá»‘t quÃ¡ trÃ¬nh mÃ¡y bay cáº¥t cÃ¡nh.',
    'section': 'Khu vá»±c tra cá»©u cá»§a thÆ° viá»‡n lÆ°u giá»¯ cÃ¡c báº£n tháº£o lá»‹ch sá»­ quÃ½ hiáº¿m vÃ  nhá»¯ng táº­p báº£n Ä‘á»“ khoa há»c.',
    'secure': 'CÃ¡c ná»n táº£ng Ä‘Ã¡m mÃ¢y hiá»‡n Ä‘áº¡i sá»­ dá»¥ng cÃ´ng nghá»‡ mÃ£ hÃ³a Ä‘áº§u cuá»‘i Ä‘á»ƒ giá»¯ cho dá»¯ liá»‡u ngÆ°á»i dÃ¹ng Ä‘Æ°á»£c báº£o máº­t tuyá»‡t Ä‘á»‘i.',
    'security': 'CÃ¡c giao thá»©c an ninh máº¡ng báº£o vá»‡ dá»¯ liá»‡u nháº¡y cáº£m cá»§a ngÆ°á»i dÃ¹ng khá»i nhá»¯ng truy cáº­p trÃ¡i phÃ©p.',
    'sense': 'Sá»­ dá»¥ng nháº­n thá»©c thÃ´ng thÆ°á»ng giÃºp du khÃ¡ch trÃ¡nh Ä‘Æ°á»£c nhá»¯ng rá»§i ro khÃ´ng Ä‘Ã¡ng cÃ³ táº¡i cÃ¡c thÃ nh phá»‘ láº¡ láº«m.',
    'serendipity': 'Viá»‡c tÃ¬nh cá» gáº·p láº¡i ngÆ°á»i tháº§y cÅ© táº¡i há»™i nghá»‹ chuyÃªn Ä‘á» quá»‘c táº¿ thá»±c sá»± lÃ  má»™t cÆ¡ duyÃªn báº¥t ngá».',
    'service': 'Dá»‹ch vá»¥ chÄƒm sÃ³c khÃ¡ch hÃ ng xuáº¥t sáº¯c sáº½ xÃ¢y dá»±ng lÃ²ng trung thÃ nh vÃ  niá»m tin lÃ¢u dÃ i tá»« phÃ­a khÃ¡ch hÃ ng.',
    'share': 'CÃ¡c nhÃ  Ä‘áº§u tÆ° Ä‘Ã£ mua thÃªm cá»• phiáº¿u cá»§a cÃ´ng ty cÃ´ng nghá»‡ trong Ä‘á»£t thá»‹ trÆ°á»ng phá»¥c há»“i trá»Ÿ láº¡i.',
    'sharp': 'TrÃ­ tuá»‡ sáº¯c bÃ©n Ä‘Ã£ giÃºp cÃ´ áº¥y má»• xáº» vÃ  giáº£i quyáº¿t cuá»™c tranh luáº­n triáº¿t há»c má»™t cÃ¡ch dá»… dÃ ng.',
    'shift': 'CÃ¡c y tÃ¡ Ä‘Ã£ lÃ m viá»‡c khÃ´ng biáº¿t má»‡t má»i trong suá»‘t ca trá»±c cáº¥p cá»©u ban Ä‘Ãªm Ä‘áº§y cÄƒng tháº³ng táº¡i bá»‡nh viá»‡n.',
    'shop': 'NgÆ°á»i dÃ¢n Ä‘á»‹a phÆ°Æ¡ng ráº¥t thÃ­ch ghÃ© thÄƒm cÃ¡c cá»­a hiá»‡u thá»§ cÃ´ng má»¹ nghá»‡ Ä‘á»™c láº­p dá»c theo Ä‘áº¡i lá»™ lá»‹ch sá»­.',
    'short': 'Cuá»™c Ä‘á»i nÃ y quÃ¡ ngáº¯n ngá»§i Ä‘á»ƒ chÃ¬m Ä‘áº¯m trong nhá»¯ng sai láº§m quÃ¡ khá»© thay vÃ¬ hÆ°á»›ng tá»›i tÆ°Æ¡ng lai rá»™ng má»Ÿ.',
    'sight': 'KhÃ¡ch du lá»‹ch tá»« kháº¯p nÆ¡i trÃªn tháº¿ giá»›i láº·n lá»™i Ä‘áº¿n Ä‘Ã¢y Ä‘á»ƒ chiÃªm ngÆ°á»¡ng nhá»¯ng cáº£nh tÆ°á»£ng ngoáº¡n má»¥c cá»§a dÃ£y Alps.',
    'sign': 'Xin vui lÃ²ng kÃ½ tÃªn Ä‘áº§y Ä‘á»§ cá»§a báº¡n má»™t cÃ¡ch cáº©n tháº­n á»Ÿ pháº§n cuá»‘i cá»§a lÃ¡ Ä‘Æ¡n Ä‘Äƒng kÃ½ chÃ­nh thá»©c nÃ y.',
    'simple': 'GiÃ¡o viÃªn Ä‘Ã£ giáº£i thÃ­ch quy luáº­t khoa há»c báº±ng nhá»¯ng thuáº­t ngá»¯ Ä‘Æ¡n giáº£n mÃ  ai cÅ©ng cÃ³ thá»ƒ náº¯m báº¯t Ä‘Æ°á»£c.',
    'site': 'CÃ¡c nhÃ  sá»­ há»c Ä‘Ã£ tiáº¿n hÃ nh cÃ´ng tÃ¡c khai quáº­t trÃªn quy mÃ´ lá»›n táº¡i khu di chá»‰ kháº£o cá»• há»c cá»• Ä‘áº¡i.',
    'situation': 'Giá»¯ bÃ¬nh tÄ©nh trong tÃ¬nh huá»‘ng kháº©n cáº¥p sáº½ giÃºp báº¡n Ä‘Æ°a ra nhá»¯ng quyáº¿t Ä‘á»‹nh sÃ¡ng suá»‘t vÃ  há»£p lÃ½.',
    'skill': 'TÆ° duy phÃ¢n tÃ­ch lÃ  má»™t ká»¹ nÄƒng nghá» nghiá»‡p thiáº¿t yáº¿u luÃ´n Ä‘Æ°á»£c cÃ¡c nhÃ  tuyá»ƒn dá»¥ng toÃ n cáº§u sÄƒn Ä‘Ã³n.',
    'smart': 'Äáº§u tÆ° vÃ o cÃ¡c thiáº¿t bá»‹ tá»± Ä‘á»™ng thÃ´ng minh giÃºp tá»‘i Æ°u hÃ³a Ä‘Ã¡ng ká»ƒ má»©c tiÃªu thá»¥ Ä‘iá»‡n nÄƒng trong gia Ä‘Ã¬nh.',
    'solid': 'NhÃ³m nghiÃªn cá»©u Ä‘Ã£ xÃ¢y dá»±ng nguyÃªn máº«u cÃ´ng nghá»‡ cá»§a há» dá»±a trÃªn nhá»¯ng ná»n táº£ng ká»¹ thuáº­t vÃ´ cÃ¹ng vá»¯ng cháº¯c.',
    'solution': 'Sá»± Ä‘á»•i má»›i thÆ°á»ng báº¯t nguá»“n tá»« viá»‡c tÃ¬m ra má»™t giáº£i phÃ¡p giáº£n Ä‘Æ¡n cho má»™t tÃ¬nh tháº¿ tiáº¿n thoÃ¡i lÆ°á»¡ng nan phá»©c táº¡p.',
    'sound': 'Káº¿ hoáº¡ch tÃ i chÃ­nh cá»§a cÃ´ áº¥y Ä‘Æ°á»£c xÃ¢y dá»±ng dá»±a trÃªn nhá»¯ng nguyÃªn táº¯c Ä‘áº§u tÆ° vá»¯ng cháº¯c vÃ  sá»± cáº©n trá»ng.',
    'space': 'CÃ¡c phi hÃ nh gia tiáº¿n hÃ nh cÃ¡c thÃ­ nghiá»‡m nghiÃªn cá»©u sinh há»c trÃªn tráº¡m vÅ© trá»¥ khÃ´ng gian Ä‘ang quay quanh quá»¹ Ä‘áº¡o.',
    'spare': 'CÃ´ áº¥y dÃ nh thá»i gian ráº£nh rá»—i vÃ o buá»•i tá»‘i Ä‘á»ƒ tham gia lÃ m tÃ¬nh nguyá»‡n viÃªn táº¡i mÃ¡i áº¥m cá»™ng Ä‘á»“ng.',
    'speed': 'Máº¡ng internet cÃ¡p quang tá»‘c Ä‘á»™ cao cho phÃ©p tá»• chá»©c cÃ¡c cuá»™c há»p há»™i nghá»‹ truyá»n hÃ¬nh mÆ°á»£t mÃ  trÃªn toÃ n cáº§u.',
    'spot': 'Há» Ä‘Ã£ tÃ¬m Ä‘Æ°á»£c má»™t Ä‘á»‹a Ä‘iá»ƒm yÃªn tÄ©nh vÃ  thÆ¡ má»™ng bÃªn dÆ°á»›i nhá»¯ng ráº·ng liá»…u rá»§ Ä‘á»ƒ tá»• chá»©c buá»•i dÃ£ ngoáº¡i chiá»u.',
    'spread': 'CÃ¡c máº¡ng xÃ£ há»™i cho phÃ©p nhá»¯ng Ã½ tÆ°á»Ÿng giÃ¡o dá»¥c giÃ¡ trá»‹ Ä‘Æ°á»£c lan tá»a rá»™ng rÃ£i qua kháº¯p cÃ¡c chÃ¢u lá»¥c.',
    'spring': 'NgÃ´i lÃ ng miá»n nÃºi ná»•i tiáº¿ng vá»›i nhá»¯ng dÃ²ng suá»‘i khoÃ¡ng nÃ³ng chá»¯a bá»‡nh tá»± nhiÃªn.',
    'stage': 'CÃ¡c thá»­ nghiá»‡m lÃ¢m sÃ ng y khoa báº¯t buá»™c pháº£i vÆ°á»£t qua thÃ nh cÃ´ng ba giai Ä‘oáº¡n thá»­ nghiá»‡m riÃªng biá»‡t.',
    'standard': 'CÃ¡c sáº£n pháº©m cá»§a chÃºng tÃ´i tuÃ¢n thá»§ nghiÃªm ngáº·t cÃ¡c tiÃªu chuáº©n an toÃ n mÃ´i trÆ°á»ng quá»‘c táº¿.',
    'star': 'CÃ¡c nhÃ  thiÃªn vÄƒn há»c Ä‘Ã£ phÃ¡t hiá»‡n ra má»™t hÃ nh tinh cÃ³ thá»ƒ sinh sá»‘ng Ä‘Æ°á»£c quay quanh má»™t ngÃ´i sao phÃ¡t sÃ¡ng xa xÃ´i.',
    'state': 'Thiá»n Ä‘á»‹nh Ä‘Æ°a bá»™ nÃ£o con ngÆ°á»i bÆ°á»›c vÃ o má»™t tráº¡ng thÃ¡i tÄ©nh láº·ng sÃ¢u sáº¯c vÃ  phá»¥c há»“i nÄƒng lÆ°á»£ng.',
    'step': 'Chia nhá» má»™t dá»± Ã¡n phá»©c táº¡p thÃ nh tá»«ng bÆ°á»›c Ä‘i nhá» sáº½ giÃºp viá»‡c hoÃ n thÃ nh má»¥c tiÃªu trá»Ÿ nÃªn dá»… dÃ ng hÆ¡n bao giá» háº¿t.',
    'stick': 'Nhá»¯ng váº­n Ä‘á»™ng viÃªn cÃ³ ká»· luáº­t thÃ©p luÃ´n tuÃ¢n thá»§ nghiÃªm ngáº·t cháº¿ Ä‘á»™ dinh dÆ°á»¡ng vÃ  lá»‹ch táº­p luyá»‡n hÃ ng ngÃ y.',
    'stock': 'Nhá»¯ng nhÃ  Ä‘áº§u tÆ° thÃ´ng thÃ¡i luÃ´n Ä‘a dáº¡ng hÃ³a danh má»¥c tÃ i sáº£n cá»§a mÃ¬nh báº±ng cÃ¡c cá»• phiáº¿u chi tráº£ cá»• tá»©c á»•n Ä‘á»‹nh.',
    'store': 'á»” cá»©ng gáº¯n ngoÃ i cho phÃ©p cÃ¡c nhiáº¿p áº£nh gia lÆ°u trá»¯ cÃ¡c tá»‡p hÃ¬nh áº£nh cÃ³ Ä‘á»™ phÃ¢n giáº£i cao má»™t cÃ¡ch an toÃ n.',
    'strategy': 'CÃ´ng ty khá»Ÿi nghiá»‡p Ä‘Ã£ xÃ¢y dá»±ng chiáº¿n lÆ°á»£c tiáº¿p thá»‹ sá»‘ Ä‘á»ƒ má»Ÿ rá»™ng sang cÃ¡c thá»‹ trÆ°á»ng chÃ¢u Ã‚u.',
    'stress': 'Thiá»n chÃ¡nh niá»‡m lÃ  má»™t phÆ°Æ¡ng phÃ¡p trá»‹ liá»‡u hiá»‡u quáº£ giÃºp giáº£i tá»a cÄƒng tháº³ng vÃ  Ã¡p lá»±c trong cuá»™c sá»‘ng hÃ ng ngÃ y.',
    'strike': 'CÃ¡c cÃ´ng nhÃ¢n nhÃ  mÃ¡y Ä‘Ã£ tá»• chá»©c má»™t cuá»™c Ä‘Ã¬nh cÃ´ng hÃ²a bÃ¬nh Ä‘á»ƒ yÃªu cáº§u má»©c lÆ°Æ¡ng cÃ´ng báº±ng vÃ  thá»a Ä‘Ã¡ng.',
    'structure': 'Kiáº¿n trÃºc sÆ° Ä‘Ã£ cáº©n tháº­n kiá»ƒm tra káº¿t cáº¥u thÃ©p cá»§a tÃ²a thÃ¡p cao táº§ng má»›i.',
    'study': 'NghiÃªn cá»©u há»c thuáº­t Ä‘Ã£ hÃ© lá»™ nhá»¯ng phÃ¡t hiá»‡n thuyáº¿t phá»¥c vá» quÃ¡ trÃ¬nh há»c ngÃ´n ngá»¯ á»Ÿ lá»©a tuá»•i áº¥u thÆ¡.',
    'subject': 'MÃ´n ToÃ¡n há»c luÃ´n lÃ  mÃ´n há»c yÃªu thÃ­ch nháº¥t cá»§a cÃ´ áº¥y trong suá»‘t nhá»¯ng nÄƒm thÃ¡ng cáº¯p sÃ¡ch tá»›i trÆ°á»ng.',
    'substantiate': 'Báº¡n cáº§n cung cáº¥p cÃ¡c sá»‘ liá»‡u thá»‘ng kÃª cá»¥ thá»ƒ Ä‘á»ƒ chá»©ng minh cho luáº­n Ä‘iá»ƒm cá»§a mÃ¬nh.',
    'success': 'Sá»± kiÃªn trÃ¬ vÃ  ká»· luáº­t lÃ  nhá»¯ng chÃ¬a khÃ³a cá»‘t lÃµi dáº«n Ä‘áº¿n thÃ nh cÃ´ng lÃ¢u dÃ i.',
    'successful': 'Chiáº¿n dá»‹ch gÃ¢y quá»¹ tá»« thiá»‡n Ä‘Ã£ thÃ nh cÃ´ng rá»±c rá»¡ vÆ°á»£t xa má»i ká»³ vá»ng ban Ä‘áº§u.',
    'suit': 'Má»™t bá»™ Ã¢u phá»¥c mÃ u xanh navy Ä‘Æ°á»£c may Ä‘o riÃªng lÃ  trang phá»¥c hoÃ n háº£o cho cÃ¡c há»™i nghá»‹ kinh doanh cáº¥p cao.',
    'supply': 'Nhá»¯ng giÃ¡n Ä‘oáº¡n trong chuá»—i cung á»©ng logistics Ä‘Ã£ gÃ¢y áº£nh hÆ°á»Ÿng náº·ng ná» Ä‘áº¿n chuá»—i cung á»©ng vi máº¡ch mÃ¡y tÃ­nh toÃ n cáº§u.',
    'support': 'CÃ¡c thÃ nh viÃªn trong gia Ä‘Ã¬nh Ä‘Ã£ luÃ´n á»Ÿ bÃªn Ä‘á»™ng viÃªn vÃ  há»— trá»£ tinh tháº§n cho cÃ´ trong suá»‘t giai Ä‘oáº¡n phá»¥c há»“i sá»©c khá»e Ä‘áº§y gian khÃ³.',
    'surreptitious': 'Anh áº¥y Ä‘Ã£ lÃ©n liáº¿c nhÃ¬n tÃ i liá»‡u ghi chÃ©p cá»§a mÃ¬nh trÆ°á»›c khi tráº£ lá»i giÃ¡m kháº£o.',
    'sustainability': 'CÃ¡c chiáº¿n lÆ°á»£c phÃ¡t triá»ƒn bá»n vá»¯ng cá»§a doanh nghiá»‡p hÆ°á»›ng tá»›i viá»‡c cáº¯t giáº£m máº¡nh máº½ lÆ°á»£ng khÃ­ tháº£i carbon.',
    'system': 'Bá»‡nh viá»‡n Ä‘Ã£ nÃ¢ng cáº¥p há»‡ thá»‘ng mÃ¡y tÃ­nh Ä‘á»ƒ tá»‘i Æ°u hÃ³a quy trÃ¬nh tiáº¿p nháº­n bá»‡nh nhÃ¢n.',
    'table': 'Há» cÃ¹ng nhau quÃ¢y quáº§n quanh bÃ n Äƒn Ä‘á»ƒ thÆ°á»Ÿng thá»©c bá»¯a tá»‘i áº¥m cÃºng.',
    'target': 'ThÆ°Æ¡ng hiá»‡u bÃ¡n láº» Ä‘Ã£ vÆ°á»£t má»¥c tiÃªu doanh sá»‘ bÃ¡n hÃ ng hÃ ng nÄƒm tá»›i mÆ°á»i lÄƒm pháº§n trÄƒm.',
    'tear': 'Nhá»¯ng giá»t nÆ°á»›c máº¯t háº¡nh phÃºc lÄƒn dÃ i trÃªn mÃ¡ cÃ´ áº¥y khi nháº­n Ä‘Æ°á»£c bá»©c thÆ° bÃ¡o trÃºng tuyá»ƒn.',
    'technology': 'TrÃ­ tuá»‡ nhÃ¢n táº¡o lÃ  má»™t cÃ´ng nghá»‡ mang tÃ­nh chuyá»ƒn Ä‘á»•i Ä‘ang Ä‘á»‹nh hÃ¬nh láº¡i nhiá»u ngÃ nh nghá».',
    'tender': 'ChÃ­nh phá»§ Ä‘Ã£ má»i cÃ¡c táº­p Ä‘oÃ n toÃ n cáº§u ná»™p há»“ sÆ¡ dá»± tháº§u cho dá»± Ã¡n xÃ¢y dá»±ng tuyáº¿n Ä‘Æ°á»ng sáº¯t.',
    'term': 'HÃ£y Ä‘áº£m báº£o ráº±ng báº¡n Ä‘Ã£ Ä‘á»c vÃ  tháº¥u hiá»ƒu rÃµ cÃ¡c Ä‘iá»u khoáº£n vá» quyá»n riÃªng tÆ° trÆ°á»›c khi Ä‘Äƒng kÃ½ dá»‹ch vá»¥ trá»±c tuyáº¿n.',
    'test': 'CÃ¡c ká»¹ sÆ° Ä‘Ã£ Ä‘Æ°a máº«u xe Ã´ tÃ´ Ä‘iá»‡n má»›i qua nhá»¯ng bÃ i kiá»ƒm tra sá»©c bá»n kháº¯t khe nháº¥t dÆ°á»›i cÃ¡i nÃ³ng sa máº¡c.',
    'tip': 'NgÆ°á»i tháº§y giÃ¡o dÃ y dáº¡n kinh nghiá»‡m Ä‘Ã£ chia sáº» nhá»¯ng máº¹o thá»±c hÃ nh há»¯u Ã­ch Ä‘á»ƒ lÃ m chá»§ ká»¹ nÄƒng nghe tiáº¿ng Anh.',
    'title': 'Chá»©c danh cÃ´ng viá»‡c hiá»‡n táº¡i cá»§a anh áº¥y táº¡i táº­p Ä‘oÃ n lÃ  GiÃ¡m Ä‘á»‘c Cáº¥p cao phá»¥ trÃ¡ch Ká»¹ thuáº­t Sáº£n pháº©m.',
    'tone': 'Duy trÃ¬ má»™t giá»ng Ä‘iá»‡u lá»‹ch sá»± vÃ  chuyÃªn nghiá»‡p sáº½ giÃºp xoa dá»‹u nhá»¯ng báº¥t Ä‘á»“ng trong trao Ä‘á»•i thÆ° tá»«.',
    'tool': 'CÃ¡c cÃ´ng cá»¥ tÄƒng nÄƒng suáº¥t ká»¹ thuáº­t sá»‘ giÃºp cÃ¡c Ä‘á»™i ngÅ© lÃ m viá»‡c tá»« xa cá»™ng tÃ¡c nhá»‹p nhÃ ng xuyÃªn mÃºi giá».',
    'top': 'CÃ´ áº¥y Ä‘Ã£ tá»‘t nghiá»‡p á»Ÿ vá»‹ trÃ­ thá»§ khoa xuáº¥t sáº¯c nháº¥t khÃ³a vá»›i nhá»¯ng danh hiá»‡u há»c thuáº­t cao quÃ½ nháº¥t.',
    'track': 'KhÃ¡ch hÃ ng cÃ³ thá»ƒ dá»… dÃ ng theo dÃµi trá»±c tiáº¿p lá»™ trÃ¬nh giao bÆ°u kiá»‡n cá»§a mÃ¬nh báº±ng á»©ng dá»¥ng di Ä‘á»™ng.',
    'trade': 'CÃ¡c hiá»‡p Ä‘á»‹nh thÆ°Æ¡ng máº¡i song phÆ°Æ¡ng thÃºc Ä‘áº©y sá»± thá»‹nh vÆ°á»£ng kinh táº¿ chung giá»¯a cÃ¡c quá»‘c gia Ä‘á»“ng minh.',
    'traditional': 'Máº·c chiáº¿c Ã¡o dÃ i truyá»n thá»‘ng vÃ o nhá»¯ng ngÃ y Ä‘áº§u nÄƒm má»›i lÃ  má»™t nÃ©t phong tá»¥c Ä‘Ã¡ng trÃ¢n quÃ½ cá»§a ngÆ°á»i Viá»‡t.',
    'train': 'CÃ´ng ty Ä‘Ã£ khá»Ÿi Ä‘á»™ng má»™t khÃ³a Ä‘Ã o táº¡o tÄƒng cÆ°á»ng nháº±m huáº¥n luyá»‡n cÃ¡c láº­p trÃ¬nh viÃªn pháº§n má»m má»›i vÃ o nghá».',
    'transportation': 'Xe buÃ½t Ä‘iá»‡n cung cáº¥p phÆ°Æ¡ng tiá»‡n giao thÃ´ng cÃ´ng cá»™ng sáº¡ch sáº½ vÃ  bá»n vá»¯ng cho cÆ° dÃ¢n thÃ nh phá»‘.',
    'travel': 'TÃ´i ráº¥t thÃ­ch Ä‘i du lá»‹ch vÃ  khÃ¡m phÃ¡ cÃ¡c thÃ nh phá»‘ lá»‹ch sá»­ kháº¯p chÃ¢u Ã.',
    'trust': 'Niá»m tin láº«n nhau lÃ  ná»n táº£ng vá»¯ng cháº¯c nháº¥t cá»§a nhá»¯ng má»‘i quan há»‡ cÃ¡ nhÃ¢n cÅ©ng nhÆ° há»£p tÃ¡c nghá» nghiá»‡p bá»n lÃ¢u.',
    'ubiquitous': 'Äiá»‡n thoáº¡i thÃ´ng minh Ä‘Ã£ trá»Ÿ nÃªn phá»• biáº¿n á»Ÿ kháº¯p má»i ngÃµ ngÃ¡ch cá»§a xÃ£ há»™i hiá»‡n Ä‘áº¡i.',
    'understanding': 'Sá»± tháº¥u hiá»ƒu giá»¯a cÃ¡c ná»n vÄƒn hÃ³a sáº½ thÃºc Ä‘áº©y hÃ²a bÃ¬nh quá»‘c táº¿ vÃ  sá»± tÃ´n trá»ng láº«n nhau.',
    'unit': 'HÃ£y hoÃ n thÃ nh táº¥t cáº£ cÃ¡c bÃ i táº­p thá»±c hÃ nh á»Ÿ pháº§n cuá»‘i cá»§a bÃ i há»c trong sÃ¡ch giÃ¡o khoa.',
    'university': 'CÃ´ áº¥y Ä‘Ã£ tá»‘t nghiá»‡p vá»›i táº¥m báº±ng danh dá»± loáº¡i xuáº¥t sáº¯c tá»« Äáº¡i há»c Oxford.',
    'value': 'Sá»± chÃ­nh trá»±c vÃ  tinh tháº§n táº­n tÃ¢m vÃ¬ khÃ¡ch hÃ ng lÃ  hai giÃ¡ trá»‹ cá»‘t lÃµi luÃ´n Ä‘Æ°á»£c cÃ´ng ty Ä‘á» cao gÃ¬n giá»¯.',
    'view': 'Ban cÃ´ng cá»§a khÃ¡ch sáº¡n mang Ä‘áº¿n má»™t táº§m nhÃ¬n toÃ n cáº£nh ngoáº¡n má»¥c ngáº¯m nhÃ¬n lÃ n nÆ°á»›c biá»ƒn trong xanh mÃ u ngá»c bÃ­ch.',
    'voice': 'CÃ¡c thá»ƒ cháº¿ dÃ¢n chá»§ tiáº¿p thÃªm sá»©c máº¡nh Ä‘á»ƒ ngÆ°á»i dÃ¢n bÃ¬nh thÆ°á»ng cÃ³ Ä‘Æ°á»£c tiáº¿ng nÃ³i thá»±c sá»± cÃ³ trá»ng lÆ°á»£ng.',
    'volume': 'Xin vui lÃ²ng váº·n nhá» Ã¢m lÆ°á»£ng cá»§a ti vi xuá»‘ng Ä‘á»ƒ nhá»¯ng ngÆ°á»i xung quanh cÃ³ thá»ƒ táº­p trung há»c táº­p yÃªn tÄ©nh.',
    'watch': 'Anh áº¥y liáº¿c nhÃ¬n chiáº¿c Ä‘á»“ng há»“ Ä‘eo tay cá»• Ä‘iá»ƒn cá»§a Thá»¥y SÄ© Ä‘á»ƒ Ä‘áº£m báº£o mÃ¬nh Ä‘áº¿n Ä‘Ãºng giá».',
    'water': 'HÃ£y Ä‘áº£m báº£o uá»‘ng nhiá»u nÆ°á»›c sáº¡ch trong suá»‘t má»™t ngÃ y hÃ¨ oi bá»©c.',
    'wave': 'Nhá»¯ng ngÆ°á»i lÆ°á»›t sÃ³ng tá»¥ há»p tá»« lÃºc bÃ¬nh minh Ä‘á»ƒ Ä‘Ã³n nhá»¯ng ngá»n sÃ³ng biá»ƒn ThÃ¡i BÃ¬nh DÆ°Æ¡ng khá»•ng lá»“.',
    'way': 'KhÃ´ng ngá»«ng há»c táº­p lÃ  con Ä‘Æ°á»ng Ä‘Ã¡ng tin cáº­y nháº¥t Ä‘á»ƒ thÃ­ch á»©ng linh hoáº¡t vá»›i nhá»¯ng ngÃ nh nghá» luÃ´n biáº¿n Ä‘á»•i.',
    'well': 'CÃ¡c ká»¹ sÆ° Ä‘Ã£ khoan má»™t giáº¿ng nÆ°á»›c sÃ¢u Ä‘á»ƒ cung cáº¥p nÆ°á»›c uá»‘ng tinh khiáº¿t cho ngÃ´i lÃ ng giá»¯a sa máº¡c.',
    'wind': 'CÆ¡n giÃ³ biá»ƒn sáº£ng khoÃ¡i lÃ m dá»‹u mÃ¡t nhá»¯ng ngÆ°á»i lá»¯ hÃ nh khi há» leo dá»c theo cÃ¡c vÃ¡ch Ä‘Ã¡ ven biá»ƒn.',
    'yield': 'Viá»‡c Ä‘áº§u tÆ° vÃ o cÃ¡c ká»¹ thuáº­t canh tÃ¡c nÃ´ng nghiá»‡p tÃ¡i sinh mang láº¡i nhá»¯ng vá»¥ mÃ¹a thu hoáº¡ch bá»™i thu qua tá»«ng nÄƒm.',
  };
  /**
   * Tra cứu hoặc suy luận bản dịch tiếng Việt cho câu ví dụ
   */
  function getExampleTranslation(word, sentence) {
    if (!word && !sentence) return '';
    const clean = word ? String(word).toLowerCase().replace(/[^a-z]/g, '') : '';
    if (clean && CORE_EXAMPLE_TRANSLATIONS[clean]) {
      return CORE_EXAMPLE_TRANSLATIONS[clean];
    }

    // Check morphological variations (resilience -> resilient, etc.)
    if (clean) {
      if (clean.endsWith('ce') && CORE_EXAMPLE_TRANSLATIONS[clean.slice(0, -2) + 't']) {
        return CORE_EXAMPLE_TRANSLATIONS[clean.slice(0, -2) + 't'];
      }
      if (clean.endsWith('tion') && CORE_EXAMPLE_TRANSLATIONS[clean.slice(0, -4) + 'te']) {
        return CORE_EXAMPLE_TRANSLATIONS[clean.slice(0, -4) + 'te'];
      }
      if (clean.endsWith('s') && CORE_EXAMPLE_TRANSLATIONS[clean.slice(0, -1)]) {
        return CORE_EXAMPLE_TRANSLATIONS[clean.slice(0, -1)];
      }
    }

    const dict = EXTENDED_CORE_DICTIONARY[clean] || WORD_KNOWLEDGE_BASE[clean];
    if (dict && dict.exampleVi) {
      return dict.exampleVi;
    }

    // Check if sentence itself has inline translation
    if (sentence && sentence.includes('\n')) {
      const parts = sentence.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
      if (parts.length >= 2) {
        return parts.slice(1).join(' ').replace(/^[\(（👉\s*Dịch:?\s*]+/, '').replace(/[\)）\s]+$/, '');
      }
    }

    // Heuristics for common sentence templates
    if (sentence) {
      const sLower = sentence.toLowerCase();
      if (sLower.includes('vital during hard times') || sLower.includes('hard times')) {
        return 'Khả năng phục hồi kiên cường là rất quan trọng trong những giai đoạn thử thách.';
      }
      if (sLower.includes('practiced together') || sLower.includes('great results')) {
        return 'Họ đã cùng nhau rèn luyện chăm chỉ để gặt hái những kết quả xuất sắc.';
      }
      if (sLower.includes('study session') || sLower.includes('learned more')) {
        return 'Cô ấy đã tìm hiểu sâu hơn trong buổi học tiếng Anh bổ ích hàng ngày.';
      }
      if (sLower.includes('helped everyone understand')) {
        return 'Ví dụ sinh động này đã giúp tất cả mọi người hiểu bài ngay lập tức.';
      }
      if (sLower.includes('performed the assignment')) {
        return 'Anh ấy đã hoàn thành bài tập một cách cẩn trọng và đạt độ chuẩn xác cao.';
      }
      if (sLower.includes('helps improve your english fluency')) {
        return 'Sử dụng từ vựng thường xuyên giúp nâng cao rõ rệt độ lưu loát tiếng Anh của bạn.';
      }
    }

    // Natural linguistic fallback so every card always has a Vietnamese meaning below
    if (clean) {
      const cap = clean.charAt(0).toUpperCase() + clean.slice(1);
      return `Ví dụ minh họa cách dùng chuẩn xác của "${cap}" trong ngữ cảnh thực tế.`;
    }

    return 'Dịch nghĩa câu ví dụ minh họa ngữ cảnh thực tế.';
  }

  /**
   * Render cả câu ví dụ tiếng Anh và bản dịch tiếng Việt bên dưới
   */
  function formatCardExampleHTML(item) {
    if (!item || !item.example) return '';

    let en = item.example.trim();
    let vi = (item.exampleVi || '').trim();

    if (!vi && en.includes('\n')) {
      const parts = en.split(/\r?\n/).map(s => s.trim()).filter(Boolean);
      if (parts.length >= 2) {
        en = parts[0];
        vi = parts.slice(1).join(' ').replace(/^[\(（👉\s*Dịch:?\s*]+/, '').replace(/[\)）\s]+$/, '');
      }
    }

    if (!vi) {
      vi = getExampleTranslation(item.word, en);
      if (vi) item.exampleVi = vi;
    }

    return `
      <div class="card-example-quote">
        <div class="example-en-line">"${escapeHtml(en)}"</div>
        ${vi ? `
          <div class="example-vi-line">
            <span class="vi-flag">🇻🇳</span> <span>${escapeHtml(vi)}</span>
          </div>
        ` : ''}
      </div>
    `;
  }

  // =========================================================================
  // 6. VOCABULARY LIST VIEW & OVERVIEW STATS
  // =========================================================================

  function getAllTopics() {
    const topicsSet = new Set();
    state.words.forEach(w => {
      if (w.topic && w.topic.trim()) topicsSet.add(w.topic.trim());
    });
    return Array.from(topicsSet).sort();
  }

  function updateTopicDropdowns() {
    const topics = getAllTopics();

    const currentVal = DOM.topicFilterSelect.value;
    DOM.topicFilterSelect.innerHTML = '<option value="ALL">Tất cả chủ đề</option>';
    topics.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t;
      opt.textContent = t;
      DOM.topicFilterSelect.appendChild(opt);
    });
    if (topics.includes(currentVal)) DOM.topicFilterSelect.value = currentVal;

    const fcVal = DOM.flashcardTopicSelect.value;
    DOM.flashcardTopicSelect.innerHTML = '<option value="ALL">Tất cả chủ đề</option>';
    topics.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t;
      opt.textContent = t;
      DOM.flashcardTopicSelect.appendChild(opt);
    });
    if (topics.includes(fcVal)) DOM.flashcardTopicSelect.value = fcVal;

    const qVal = DOM.quizTopicSelect.value;
    DOM.quizTopicSelect.innerHTML = '<option value="ALL">Tất cả chủ đề</option>';
    topics.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t;
      opt.textContent = t;
      DOM.quizTopicSelect.appendChild(opt);
    });
    if (topics.includes(qVal)) DOM.quizTopicSelect.value = qVal;
  }

  function updateOverviewStats() {
    const total = state.words.length;
    const mastered = state.words.filter(w => w.status === 'mastered').length;
    const learning = total - mastered;
    const topicsCount = getAllTopics().length;

    DOM.statTotalWords.textContent = total;
    DOM.statMasteredWords.textContent = mastered;
    DOM.statLearningWords.textContent = learning;
    DOM.statTopicCount.textContent = topicsCount;

    const rate = total > 0 ? Math.round((mastered / total) * 100) : 0;
    DOM.analyticsMasteryPercent.textContent = `${rate}%`;
    DOM.analyticsMasteryBar.style.width = `${rate}%`;

    renderTopicBreakdown();
  }

  function renderTopicBreakdown() {
    const topics = getAllTopics();
    DOM.topicBreakdownList.innerHTML = '';

    if (topics.length === 0) {
      DOM.topicBreakdownList.innerHTML = '<p class="text-muted">Chưa có dữ liệu chủ đề.</p>';
      return;
    }

    topics.forEach(topic => {
      const topicWords = state.words.filter(w => w.topic === topic);
      const m = topicWords.filter(w => w.status === 'mastered').length;
      const t = topicWords.length;
      const p = Math.round((m / t) * 100);

      const item = document.createElement('div');
      item.className = 'topic-breakdown-item';
      item.innerHTML = `
        <div>
          <strong>${escapeHtml(topic)}</strong>
          <span style="color: var(--text-muted); font-size: 0.8rem; margin-left: 8px;">(${m}/${t} từ đã thuộc)</span>
        </div>
        <div style="font-weight: 700; color: ${p === 100 ? 'var(--success)' : 'var(--primary)'};">${p}%</div>
      `;
      DOM.topicBreakdownList.appendChild(item);
    });
  }

  function getFilteredWords() {
    return state.words.filter(w => {
      // Search filter
      if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        const wordMatch = w.word && w.word.toLowerCase().includes(q);
        const meaningMatch = w.meaning && w.meaning.toLowerCase().includes(q);
        const topicMatch = w.topic && w.topic.toLowerCase().includes(q);
        const levelMatch = w.level && w.level.toLowerCase().includes(q);
        if (!wordMatch && !meaningMatch && !topicMatch && !levelMatch) return false;
      }

      // Topic filter
      if (state.topicFilter !== 'ALL' && w.topic !== state.topicFilter) {
        return false;
      }

      // Level filter
      if (state.levelFilter !== 'ALL' && w.level !== state.levelFilter) {
        return false;
      }

      // Status filter
      if (state.statusFilter !== 'ALL' && w.status !== state.statusFilter) {
        return false;
      }

      return true;
    });
  }

  function renderVocabList() {
    const filtered = getFilteredWords();
    updateOverviewStats();

    DOM.resultsCountText.textContent = `Hiển thị ${filtered.length} / ${state.words.length} từ vựng`;
    DOM.vocabCardGrid.innerHTML = '';

    if (filtered.length === 0) {
      DOM.emptyVocabState.style.display = 'block';
      DOM.vocabCardGrid.style.display = 'none';
      return;
    }

    DOM.emptyVocabState.style.display = 'none';
    DOM.vocabCardGrid.style.display = 'grid';

    filtered.forEach(item => {
      const isMastered = item.status === 'mastered';
      const lvl = getLevelInfo(item.level);

      const card = document.createElement('div');
      card.className = `vocab-card ${isMastered ? 'is-mastered' : ''}`;
      card.setAttribute('data-id', item.id);

      card.innerHTML = `
        <div>
          <div class="card-header-bar">
            <div class="tags-group">
              <span class="topic-tag">${escapeHtml(item.topic || 'Chung')}</span>
              <span class="level-badge ${lvl.className}" title="Mức độ CEFR: ${lvl.fullLabel}">${lvl.label}</span>
              <span class="pos-badge">${escapeHtml(item.pos || 'noun')}</span>
              <a href="https://dictionary.cambridge.org/dictionary/english-vietnamese/${encodeURIComponent(item.word.toLowerCase())}" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 class="cambridge-pill" 
                 title="Tra cứu từ '${escapeHtml(item.word)}' trên Cambridge Dictionary Anh - Việt">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>
                <span>Cambridge ↗</span>
              </a>
            </div>
            <button class="status-badge-btn ${isMastered ? 'mastered' : 'learning'}" data-action="toggle-status" data-id="${item.id}" title="Nhấp để đổi trạng thái">
              ${isMastered 
                ? `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> Đã thuộc` 
                : `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><circle cx="12" cy="12" r="10"/></svg> Đang học`
              }
            </button>
          </div>

          <div class="card-main-word">
            <h3 class="word-text-title">${escapeHtml(item.word)}</h3>
          </div>

          <p class="phonetic-text">${escapeHtml(item.phonetic || '')}</p>
          ${formatMeaningHTML(item.meaning)}

          ${formatCardExampleHTML(item)}
        </div>

        <div class="card-actions-bar">
          <button class="audio-action-btn" data-action="speak" data-word="${escapeHtml(item.word)}" title="Nghe phát âm từ này">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
            <span>Phát âm</span>
          </button>

          <div class="card-action-group">
            <a href="https://dictionary.cambridge.org/dictionary/english-vietnamese/${encodeURIComponent(item.word.toLowerCase())}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="action-icon-btn cambridge-dict-btn" 
               title="Mở từ '${escapeHtml(item.word)}' trên Từ điển Cambridge">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            </a>
            <button class="action-icon-btn" data-action="edit" data-id="${item.id}" title="Chỉnh sửa từ vựng">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 20h9"/>
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/>
              </svg>
            </button>
            <button class="action-icon-btn delete-btn" data-action="delete" data-id="${item.id}" title="Xóa từ vựng">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"/>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
              </svg>
            </button>
          </div>
        </div>
      `;

      DOM.vocabCardGrid.appendChild(card);
    });
  }

  // =========================================================================
  // 7. FLASHCARD 3D ENGINE
  // =========================================================================

  function getFlashcardsList() {
    return state.words.filter(w => {
      if (state.flashcardTopicFilter !== 'ALL' && w.topic !== state.flashcardTopicFilter) {
        return false;
      }
      if (state.flashcardLevelFilter !== 'ALL' && w.level !== state.flashcardLevelFilter) {
        return false;
      }
      if (state.flashcardStatusFilter === 'learning' && w.status !== 'learning') {
        return false;
      }
      if (state.flashcardStatusFilter === 'mastered' && w.status !== 'mastered') {
        return false;
      }
      return true;
    });
  }

  function initFlashcardView() {
    state.flashcardCards = getFlashcardsList();
    state.flashcardIndex = 0;
    state.flashcardIsFlipped = false;
    DOM.flashcardElement.classList.remove('is-flipped');
    renderCurrentFlashcard();
  }

  function renderCurrentFlashcard() {
    const list = state.flashcardCards;
    const total = list.length;

    if (total === 0) {
      DOM.flashcardElement.style.display = 'none';
      document.querySelector('.flashcard-actions').style.display = 'none';
      DOM.emptyFlashcardsState.style.display = 'block';
      DOM.flashcardCounter.textContent = '0 / 0';
      DOM.flashcardProgressBar.style.width = '0%';

      if (state.flashcardStatusFilter === 'learning') {
        DOM.emptyFlashcardMsg.textContent = 'Tuyệt vời! Bạn đã thuộc toàn bộ từ vựng trong danh mục này!';
      } else {
        DOM.emptyFlashcardMsg.textContent = 'Không có từ vựng nào phù hợp với bộ lọc hiện tại.';
      }
      return;
    }

    DOM.emptyFlashcardsState.style.display = 'none';
    DOM.flashcardElement.style.display = 'block';
    document.querySelector('.flashcard-actions').style.display = 'grid';

    if (state.flashcardIndex >= total) state.flashcardIndex = 0;
    if (state.flashcardIndex < 0) state.flashcardIndex = total - 1;

    const cur = list[state.flashcardIndex];
    const isMastered = cur.status === 'mastered';
    const lvl = getLevelInfo(cur.level);

    DOM.flashcardCounter.textContent = `Thẻ ${state.flashcardIndex + 1} / ${total}`;
    const progressPercent = Math.round(((state.flashcardIndex + 1) / total) * 100);
    DOM.flashcardProgressBar.style.width = `${progressPercent}%`;

    // Populate Front
    DOM.fcFrontTopic.textContent = cur.topic || 'Chung';
    DOM.fcFrontLevel.textContent = lvl.label;
    DOM.fcFrontLevel.className = `level-badge ${lvl.className}`;
    DOM.fcFrontPos.textContent = cur.pos || 'noun';
    DOM.fcFrontWord.textContent = cur.word;
    DOM.fcFrontPhonetic.textContent = cur.phonetic || '';

    // Populate Back
    DOM.fcBackTopic.textContent = cur.topic || 'Chung';
    DOM.fcBackLevel.textContent = lvl.label;
    DOM.fcBackLevel.className = `level-badge ${lvl.className}`;
    DOM.fcBackWord.textContent = cur.word;
    DOM.fcBackMeaning.innerHTML = formatMeaningHTML(cur.meaning);
    DOM.fcBackExample.textContent = cur.example ? `"${cur.example}"` : 'Không có ví dụ.';
    if (DOM.fcBackExampleVi) {
      const viTrans = cur.exampleVi || getExampleTranslation(cur.word, cur.example);
      if (viTrans) {
        DOM.fcBackExampleVi.textContent = `🇻🇳 ${viTrans}`;
        DOM.fcBackExampleVi.style.display = 'block';
      } else {
        DOM.fcBackExampleVi.style.display = 'none';
      }
    }

    if (DOM.fcCambridgeLink) {
      DOM.fcCambridgeLink.href = `https://dictionary.cambridge.org/dictionary/english-vietnamese/${encodeURIComponent(cur.word.toLowerCase())}`;
    }

    DOM.fcBackStatus.textContent = isMastered ? 'Đã thuộc' : 'Chưa thuộc';
    DOM.fcBackStatus.className = `card-status-pill ${isMastered ? 'mastered' : 'learning'}`;

    if (state.flashcardIsFlipped) {
      state.flashcardIsFlipped = false;
      DOM.flashcardElement.classList.remove('is-flipped');
    }
  }

  function flipFlashcard() {
    state.flashcardIsFlipped = !state.flashcardIsFlipped;
    DOM.flashcardElement.classList.toggle('is-flipped', state.flashcardIsFlipped);
  }

  function advanceFlashcard(delta = 1) {
    if (state.flashcardCards.length === 0) return;
    state.flashcardIndex += delta;
    renderCurrentFlashcard();
  }

  function markFlashcardStatus(newStatus) {
    if (state.flashcardCards.length === 0) return;
    const cur = state.flashcardCards[state.flashcardIndex];
    if (!cur) return;

    cur.status = newStatus;
    const orig = state.words.find(w => w.id === cur.id);
    if (orig) orig.status = newStatus;

    saveWords();
    updateOverviewStats();

    if (newStatus === 'mastered') {
      showToast(`Đã đánh dấu "${cur.word}" là Đã thuộc! 🎉`, 'success');
      playQuizSound('correct');
    } else {
      showToast(`Đã chuyển "${cur.word}" về danh sách Chưa thuộc`, 'warning');
    }

    if (state.flashcardStatusFilter === 'learning' && newStatus === 'mastered') {
      state.flashcardCards.splice(state.flashcardIndex, 1);
      renderCurrentFlashcard();
    } else {
      advanceFlashcard(1);
    }
  }

  function shuffleFlashcards() {
    for (let i = state.flashcardCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [state.flashcardCards[i], state.flashcardCards[j]] = [state.flashcardCards[j], state.flashcardCards[i]];
    }
    state.flashcardIndex = 0;
    renderCurrentFlashcard();
    showToast('Đã xáo trộn ngẫu nhiên thứ tự các thẻ!', 'info');
  }

  // =========================================================================
  // 8. QUIZ / TEST MODE ENGINE (WITH LEVEL TIERS)
  // =========================================================================

  function startQuiz() {
    const topic = DOM.quizTopicSelect.value;
    const levelTier = DOM.quizLevelSelect ? DOM.quizLevelSelect.value : 'ALL';
    const type = DOM.quizTypeSelect.value;
    const countVal = DOM.quizCountSelect.value;

    let pool = state.words;
    if (topic !== 'ALL') {
      pool = pool.filter(w => w.topic === topic);
    }

    // Filter by Level Tier if selected
    if (levelTier === 'EASY') {
      pool = pool.filter(w => w.level === 'A1' || w.level === 'A2');
    } else if (levelTier === 'MEDIUM') {
      pool = pool.filter(w => w.level === 'B1' || w.level === 'B2');
    } else if (levelTier === 'HARD') {
      pool = pool.filter(w => w.level === 'C1' || w.level === 'C2');
    }

    if (pool.length < 4) {
      showToast(`Cần ít nhất 4 từ vựng phù hợp với bộ lọc (Chủ đề / Mức độ) để tạo trắc nghiệm! (Hiện có: ${pool.length} từ)`, 'warning');
      return;
    }

    const shuffledPool = [...pool].sort(() => Math.random() - 0.5);
    const qCount = countVal === 'ALL' ? shuffledPool.length : Math.min(parseInt(countVal, 10), shuffledPool.length);
    const selectedWords = shuffledPool.slice(0, qCount);

    const questions = selectedWords.map(targetWord => {
      let qType = type;
      if (type === 'mixed') {
        qType = Math.random() > 0.5 ? 'en-to-vi' : 'vi-to-en';
      }

      // 3 distractors from the pool or state.words
      let otherWords = pool.filter(w => w.id !== targetWord.id);
      if (otherWords.length < 3) {
        otherWords = state.words.filter(w => w.id !== targetWord.id);
      }
      const shuffledOthers = [...otherWords].sort(() => Math.random() - 0.5);
      const distractors = shuffledOthers.slice(0, 3);
      const lvl = getLevelInfo(targetWord.level);

      let promptText = '';
      let promptSub = '';
      let correctAnswer = '';
      let options = [];

      if (qType === 'en-to-vi') {
        promptText = targetWord.word;
        promptSub = `${targetWord.phonetic || ''} • ${targetWord.pos || 'noun'} • [${lvl.label}]`;
        correctAnswer = targetWord.meaning;
        options = [
          { text: targetWord.meaning, isCorrect: true },
          { text: distractors[0].meaning, isCorrect: false },
          { text: distractors[1].meaning, isCorrect: false },
          { text: distractors[2].meaning, isCorrect: false }
        ];
      } else {
        promptText = targetWord.meaning;
        promptSub = `Từ loại: ${targetWord.pos || 'noun'} • [${lvl.label}] • Chủ đề: ${targetWord.topic || 'Chung'}`;
        correctAnswer = targetWord.word;
        options = [
          { text: targetWord.word, isCorrect: true },
          { text: distractors[0].word, isCorrect: false },
          { text: distractors[1].word, isCorrect: false },
          { text: distractors[2].word, isCorrect: false }
        ];
      }

      options.sort(() => Math.random() - 0.5);

      return {
        targetWord,
        qType,
        promptText,
        promptSub,
        correctAnswer,
        options
      };
    });

    state.quiz = {
      active: true,
      questions,
      currentIndex: 0,
      score: 0,
      userAnswers: [],
      config: { topic, level: levelTier, type, count: qCount }
    };

    DOM.quizSetupScreen.classList.remove('active');
    DOM.quizResultScreen.classList.remove('active');
    DOM.quizPlayScreen.classList.add('active');

    renderQuizQuestion();
  }

  function renderQuizQuestion() {
    const q = state.quiz.questions[state.quiz.currentIndex];
    const total = state.quiz.questions.length;
    const currentNum = state.quiz.currentIndex + 1;
    const lvl = getLevelInfo(q.targetWord.level);

    DOM.quizCurrentTopic.textContent = `${q.targetWord.topic || 'Chung'} (${lvl.code})`;
    DOM.quizQuestionCounter.textContent = `Câu ${currentNum} / ${total}`;
    DOM.quizCurrentScore.textContent = `${state.quiz.score}/${state.quiz.currentIndex}`;

    const progressPct = Math.round((currentNum / total) * 100);
    DOM.quizProgressBar.style.width = `${progressPct}%`;

    DOM.quizPromptType.textContent = q.qType === 'en-to-vi' ? 'Chọn nghĩa tiếng Việt đúng:' : 'Chọn từ tiếng Anh phù hợp:';
    DOM.quizQuestionText.textContent = q.promptText;
    DOM.quizQuestionSub.textContent = q.promptSub;

    DOM.quizFeedbackBox.style.display = 'none';
    DOM.quizOptionsContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.setAttribute('data-index', idx);
      btn.innerHTML = `
        <span class="option-badge">${letters[idx]}</span>
        <span class="option-text">${q.qType === 'en-to-vi' ? formatMeaningHTML(opt.text) : escapeHtml(opt.text)}</span>
      `;
      btn.addEventListener('click', () => handleQuizAnswer(opt, btn));
      DOM.quizOptionsContainer.appendChild(btn);
    });

    DOM.quizSpeakBtn.onclick = () => speakText(q.targetWord.word, DOM.quizSpeakBtn);
  }

  function handleQuizAnswer(selectedOption, clickedBtn) {
    const q = state.quiz.questions[state.quiz.currentIndex];
    const allBtns = DOM.quizOptionsContainer.querySelectorAll('.option-btn');
    allBtns.forEach(b => (b.disabled = true));

    const isCorrect = selectedOption.isCorrect;

    state.quiz.userAnswers.push({
      question: q,
      selected: selectedOption.text,
      isCorrect
    });

    if (isCorrect) {
      state.quiz.score += 1;
      clickedBtn.classList.add('correct');
      playQuizSound('correct');

      DOM.feedbackIcon.className = 'feedback-icon correct';
      DOM.feedbackIcon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>`;
      DOM.feedbackTitle.textContent = 'Chính xác! Xuất sắc!';
      DOM.feedbackDesc.innerHTML = `<strong>${escapeHtml(q.targetWord.word)}</strong> [${q.targetWord.level}]<br>${formatMeaningHTML(q.targetWord.meaning)}`;
    } else {
      clickedBtn.classList.add('wrong');
      playQuizSound('wrong');

      allBtns.forEach((btn, i) => {
        if (q.options[i].isCorrect) {
          btn.classList.add('correct');
        }
      });

      DOM.feedbackIcon.className = 'feedback-icon wrong';
      DOM.feedbackIcon.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
      DOM.feedbackTitle.textContent = 'Chưa chính xác!';
      DOM.feedbackDesc.textContent = `Đáp án đúng là: "${q.correctAnswer}"`;
    }

    DOM.quizCurrentScore.textContent = `${state.quiz.score}/${state.quiz.currentIndex + 1}`;
    DOM.quizFeedbackBox.style.display = 'flex';
  }

  function advanceQuizQuestion() {
    state.quiz.currentIndex += 1;
    if (state.quiz.currentIndex < state.quiz.questions.length) {
      renderQuizQuestion();
    } else {
      finishQuiz();
    }
  }

  function finishQuiz() {
    DOM.quizPlayScreen.classList.remove('active');
    DOM.quizResultScreen.classList.add('active');

    const total = state.quiz.questions.length;
    const correct = state.quiz.score;
    const wrong = total - correct;
    const pct = Math.round((correct / total) * 100);

    DOM.resultScoreText.textContent = `${correct}/${total}`;
    DOM.resultPercentText.textContent = `${pct}%`;
    DOM.resultCorrectCount.textContent = correct;
    DOM.resultWrongCount.textContent = wrong;
    DOM.resultAccuracyRate.textContent = `${pct}%`;

    if (pct === 100) {
      DOM.resultEmoji.textContent = '👑';
      DOM.resultTitle.textContent = 'Tuyệt đối 100%! Hoàn hảo!';
      DOM.resultSubtitle.textContent = 'Bạn đã nắm vững toàn bộ từ vựng trong bài kiểm tra này!';
    } else if (pct >= 80) {
      DOM.resultEmoji.textContent = '🎉';
      DOM.resultTitle.textContent = 'Xuất sắc!';
      DOM.resultSubtitle.textContent = 'Trí nhớ từ vựng của bạn rất tuyệt vời!';
    } else if (pct >= 60) {
      DOM.resultEmoji.textContent = '👍';
      DOM.resultTitle.textContent = 'Làm tốt lắm!';
      DOM.resultSubtitle.textContent = 'Bạn đã ghi nhớ được phần lớn các từ, hãy ôn thêm các từ còn sai nhé.';
    } else {
      DOM.resultEmoji.textContent = '💪';
      DOM.resultTitle.textContent = 'Đừng nản lòng!';
      DOM.resultSubtitle.textContent = 'Luyện tập thêm bằng thẻ Flashcard sẽ giúp bạn ghi nhớ lâu hơn!';
    }

    DOM.quizReviewList.innerHTML = '';
    state.quiz.userAnswers.forEach((ans, idx) => {
      const lvl = getLevelInfo(ans.question.targetWord.level);
      const item = document.createElement('div');
      item.className = `review-item ${ans.isCorrect ? 'is-correct' : 'is-wrong'}`;
      item.innerHTML = `
        <div class="review-item-main">
          <strong>${idx + 1}. ${escapeHtml(ans.question.targetWord.word)} <span class="level-badge ${lvl.className}" style="font-size: 0.68rem; margin: 0 4px;">${lvl.label}</span> <span style="font-weight: normal; color: var(--text-muted);">(${escapeHtml(ans.question.targetWord.pos || '')})</span></strong>
          <span>Nghĩa: <em>${escapeHtml(ans.question.targetWord.meaning)}</em></span>
          ${!ans.isCorrect ? `<div style="font-size: 0.785rem; color: var(--danger); margin-top: 2px;">Bạn chọn: ${escapeHtml(ans.selected)}</div>` : ''}
        </div>
        <button class="audio-action-btn" data-speak="${escapeHtml(ans.question.targetWord.word)}" title="Nghe lại phát âm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
        </button>
      `;

      item.querySelector('button').addEventListener('click', e => {
        speakText(ans.question.targetWord.word, e.currentTarget);
      });

      DOM.quizReviewList.appendChild(item);
    });
  }

  // =========================================================================
  // 9. MODALS: ADD, EDIT & DELETE VOCABULARY
  // =========================================================================

  function openAddModal() {
    DOM.editWordId.value = '';
    DOM.modalTitle.textContent = 'Thêm từ vựng mới';
    DOM.vocabForm.reset();
    if (DOM.exampleViInput) DOM.exampleViInput.value = '';
    if (DOM.levelSelect) {
      DOM.levelSelect.value = 'B1';
      delete DOM.levelSelect.dataset.userModified;
    }
    if (DOM.meaningInput) delete DOM.meaningInput.dataset.autoFilled;
    if (DOM.exampleInput) delete DOM.exampleInput.dataset.autoFilled;
    if (DOM.exampleViInput) delete DOM.exampleViInput.dataset.autoFilled;
    if (DOM.phoneticInput) delete DOM.phoneticInput.dataset.autoFilled;
    if (DOM.topicInput) delete DOM.topicInput.dataset.autoFilled;
    if (DOM.posSelect) delete DOM.posSelect.dataset.userModified;

    if (DOM.autoDetectLevelBadge) {
      DOM.autoDetectLevelBadge.textContent = '✨ Tự nhận diện';
      DOM.autoDetectLevelBadge.className = 'auto-badge-pill';
    }
    if (DOM.autoDetectReason) {
      DOM.autoDetectReason.textContent = 'Gõ từ tiếng Anh để tự động điền toàn bộ thông tin';
    }
    DOM.statusCheckbox.checked = false;
    DOM.vocabModal.classList.add('active');
    DOM.vocabModal.setAttribute('aria-hidden', 'false');
    setTimeout(() => DOM.wordInput.focus(), 100);
  }

  function openEditModal(id) {
    const item = state.words.find(w => w.id === id);
    if (!item) return;

    DOM.editWordId.value = item.id;
    DOM.modalTitle.textContent = 'Chỉnh sửa từ vựng';
    DOM.wordInput.value = item.word || '';
    DOM.posSelect.value = item.pos || 'noun';
    if (DOM.levelSelect) {
      DOM.levelSelect.value = item.level || 'B1';
      DOM.levelSelect.dataset.userModified = 'true';
    }
    if (DOM.autoDetectLevelBadge) {
      DOM.autoDetectLevelBadge.textContent = `Mức độ: ${item.level || 'B1'}`;
      DOM.autoDetectLevelBadge.className = 'auto-badge-pill';
    }
    if (DOM.autoDetectReason) {
      DOM.autoDetectReason.textContent = 'Mức độ hiện tại của từ vựng';
    }
    DOM.phoneticInput.value = item.phonetic || '';
    DOM.topicInput.value = item.topic || '';
    DOM.meaningInput.value = item.meaning || '';
    DOM.exampleInput.value = item.example || '';
    if (DOM.exampleViInput) {
      DOM.exampleViInput.value = item.exampleVi || getExampleTranslation(item.word, item.example) || '';
    }
    DOM.statusCheckbox.checked = item.status === 'mastered';

    DOM.vocabModal.classList.add('active');
    DOM.vocabModal.setAttribute('aria-hidden', 'false');
    setTimeout(() => DOM.wordInput.focus(), 100);
  }

  function closeModal() {
    DOM.vocabModal.classList.remove('active');
    DOM.vocabModal.setAttribute('aria-hidden', 'true');
  }

  // =========================================================================
  // HELPER: MERGE & SYNCHRONIZE MEANINGS WITHOUT DUPLICATING SENSES
  // =========================================================================

  function mergeMeanings(existingMeaning, incomingMeaning) {
    if (!existingMeaning) return incomingMeaning || '';
    if (!incomingMeaning) return existingMeaning;
    if (existingMeaning.trim() === incomingMeaning.trim()) return existingMeaning;

    // Filter out legacy placeholder text
    const isBad = str => !str || 
      str.includes('Khái niệm / sự') || 
      str.includes('Có tính chất') || 
      str.includes('mang đặc trưng') || 
      str.includes('Thực hiện / hành động') ||
      str.includes('KhÃ¡i niá»‡m / sá»±') ||
      str.includes('CÃ³ tÃ­nh cháº¥t');

    if (isBad(existingMeaning)) return incomingMeaning;
    if (isBad(incomingMeaning)) return existingMeaning;

    // If one contains the other, use the more comprehensive one
    const norm = s => s.toLowerCase().replace(/\s+/g, ' ').trim();
    if (norm(existingMeaning).includes(norm(incomingMeaning))) return existingMeaning;
    if (norm(incomingMeaning).includes(norm(existingMeaning))) return incomingMeaning;

    // Split senses by line
    const splitLines = s => s.split('\n').map(l => l.trim()).filter(Boolean);
    const existingLines = splitLines(existingMeaning);
    const incomingLines = splitLines(incomingMeaning);

    const merged = [...existingLines];
    incomingLines.forEach(inc => {
      const incClean = inc.replace(/^[0-9]+[.\s]+/, '').trim().toLowerCase();
      const duplicate = merged.some(ex => ex.replace(/^[0-9]+[.\s]+/, '').trim().toLowerCase() === incClean);
      if (!duplicate) {
        merged.push(inc);
      }
    });

    if (merged.length > 1) {
      return merged.map((line, idx) => {
        const clean = line.replace(/^[0-9]+[.\s]+/, '').trim();
        return `${idx + 1}. ${clean}`;
      }).join('\n');
    }
    return merged.join('\n');
  }

  // =========================================================================
  // TỰ ĐỒNG BỘ TỪ ĐÃ CÓ (Auto-Synchronize Duplicate Word)
  // =========================================================================

  function synchronizeWord(existingWord, incomingData, options = {}) {
    if (!existingWord || !incomingData) return;

    // 1. Upgrade metadata
    if (incomingData.word && incomingData.word.trim()) {
      existingWord.word = incomingData.word.trim();
    }
    if (incomingData.pos && incomingData.pos.trim()) {
      existingWord.pos = incomingData.pos.trim();
    }
    if (incomingData.level && incomingData.level.trim()) {
      existingWord.level = incomingData.level.trim();
    }
    if (incomingData.phonetic && incomingData.phonetic.trim()) {
      existingWord.phonetic = incomingData.phonetic.trim();
    }
    if (incomingData.topic && incomingData.topic.trim() && incomingData.topic !== 'Chung') {
      existingWord.topic = incomingData.topic.trim();
    } else if (!existingWord.topic) {
      existingWord.topic = incomingData.topic || 'Chung';
    }

    // 2. Synchronize / Merge Meaning
    if (incomingData.meaning && incomingData.meaning.trim()) {
      existingWord.meaning = mergeMeanings(existingWord.meaning, incomingData.meaning.trim());
    }

    // 3. Synchronize Example & Translation
    if (incomingData.example && incomingData.example.trim()) {
      const isBadEx = str => !str || 
        str.includes('Developing a deeper understanding') || 
        str.includes('It is crucial to maintain a') ||
        str.includes('They always strive to');
      if (!existingWord.example || isBadEx(existingWord.example) || options.source === 'modal') {
        existingWord.example = incomingData.example.trim();
      }
    }
    if (incomingData.exampleVi && incomingData.exampleVi.trim()) {
      existingWord.exampleVi = incomingData.exampleVi.trim();
    } else if (!existingWord.exampleVi) {
      existingWord.exampleVi = getExampleTranslation(existingWord.word, existingWord.example);
    }

    // 4. Learning Status: preserve user's progress or use explicit status
    if (options.explicitStatus) {
      existingWord.status = options.explicitStatus;
    }

    // Mark as user added/synchronized and update timestamp
    existingWord.isUserAdded = true;
    existingWord.updatedAt = Date.now();

    // 5. Bring synchronized word to top of the list for immediate visibility
    const existingIndex = state.words.indexOf(existingWord);
    if (existingIndex > -1) {
      state.words.splice(existingIndex, 1);
      state.words.unshift(existingWord);
    }

    // 6. Save immediately to persistent storage
    saveWords();

    // 7. Clear search and active filters so the synced card is immediately visible
    if (state.searchQuery || state.topicFilter !== 'ALL' || state.levelFilter !== 'ALL' || state.statusFilter !== 'ALL') {
      state.searchQuery = '';
      state.topicFilter = 'ALL';
      state.levelFilter = 'ALL';
      state.statusFilter = 'ALL';
      if (DOM.searchInput) DOM.searchInput.value = '';
      if (DOM.topicFilterSelect) DOM.topicFilterSelect.value = 'ALL';
      if (DOM.levelFilterSelect) DOM.levelFilterSelect.value = 'ALL';
      if (DOM.statusFilterSelect) DOM.statusFilterSelect.value = 'ALL';
    }

    // 8. Re-render UI
    updateTopicDropdowns();
    renderVocabList();

    // 9. Highlight card and scroll smoothly into view
    setTimeout(() => {
      const cardEl = DOM.vocabCardGrid.querySelector(`[data-id="${existingWord.id}"]`);
      if (cardEl) {
        cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        cardEl.classList.remove('sync-highlight');
        void cardEl.offsetWidth; // Force CSS animation reflow
        cardEl.classList.add('sync-highlight');
        setTimeout(() => {
          cardEl.classList.remove('sync-highlight');
        }, 3000);
      }
    }, 80);

    // 10. Voice feedback and Toast notification
    speakText(existingWord.word);
    showToast(`🔄 Đã tự động đồng bộ từ "${existingWord.word}" [${existingWord.level}]: Cập nhật nghĩa & dữ liệu mới nhất!`, 'success');
  }

  function handleSaveWord(e) {
    e.preventDefault();

    const word = DOM.wordInput.value.trim();
    const pos = DOM.posSelect.value;
    const level = DOM.levelSelect ? DOM.levelSelect.value : 'B1';
    const phonetic = DOM.phoneticInput.value.trim();
    const topic = DOM.topicInput.value.trim() || 'Chung';
    const meaning = DOM.meaningInput.value.trim();
    const example = DOM.exampleInput.value.trim();
    const exampleVi = DOM.exampleViInput ? DOM.exampleViInput.value.trim() : '';
    const isMastered = DOM.statusCheckbox.checked;
    const editId = DOM.editWordId.value;

    if (!word || !meaning || !example) {
      showToast('Vui lòng điền đầy đủ các trường bắt buộc!', 'warning');
      return;
    }

    if (editId) {
      const existing = state.words.find(w => w.id === editId);
      if (existing) {
        existing.word = word;
        existing.pos = pos;
        existing.level = level;
        existing.phonetic = phonetic;
        existing.topic = topic;
        existing.meaning = meaning;
        existing.example = example;
        existing.exampleVi = exampleVi || existing.exampleVi || getExampleTranslation(word, example);
        existing.status = isMastered ? 'mastered' : 'learning';
        existing.isUserAdded = true;
        existing.updatedAt = Date.now();
        saveWords();
        showToast(`Đã cập nhật từ "${word}" [${level}] thành công!`, 'success');
        
        // Highlight updated card
        setTimeout(() => {
          const cardEl = DOM.vocabCardGrid.querySelector(`[data-id="${existing.id}"]`);
          if (cardEl) {
            cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            cardEl.classList.add('sync-highlight');
            setTimeout(() => cardEl.classList.remove('sync-highlight'), 3000);
          }
        }, 80);
      }
    } else {
      // CHECK IF WORD ALREADY EXISTS -> AUTO-SYNCHRONIZE
      const duplicate = state.words.find(w => w.word && w.word.toLowerCase() === word.toLowerCase());
      if (duplicate) {
        closeModal();
        synchronizeWord(duplicate, {
          word,
          pos,
          level,
          phonetic,
          topic,
          meaning,
          example,
          exampleVi: exampleVi || getExampleTranslation(word, example)
        }, {
          explicitStatus: isMastered ? 'mastered' : 'learning',
          source: 'modal'
        });
        return;
      }

      // Brand new word
      const newWord = {
        id: 'vocab_' + Date.now(),
        word,
        pos,
        level,
        phonetic,
        topic,
        meaning,
        example,
        exampleVi: exampleVi || getExampleTranslation(word, example),
        status: isMastered ? 'mastered' : 'learning',
        isUserAdded: true,
        createdAt: Date.now()
      };
      state.words.unshift(newWord);
      saveWords();
      showToast(`Đã thêm từ mới "${word}" [${level}] vào danh sách!`, 'success');

      // Scroll & highlight new card
      setTimeout(() => {
        const cardEl = DOM.vocabCardGrid.querySelector(`[data-id="${newWord.id}"]`);
        if (cardEl) {
          cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          cardEl.classList.add('sync-highlight');
          setTimeout(() => cardEl.classList.remove('sync-highlight'), 3000);
        }
      }, 80);
    }

    closeModal();
    updateTopicDropdowns();
    renderVocabList();
  }

  function openDeleteModal(id) {
    const item = state.words.find(w => w.id === id);
    if (!item) return;

    state.deleteTargetId = id;
    DOM.deleteWordTargetText.textContent = `"${item.word}"`;
    DOM.deleteConfirmModal.classList.add('active');
    DOM.deleteConfirmModal.setAttribute('aria-hidden', 'false');
  }

  function closeDeleteModal() {
    state.deleteTargetId = null;
    DOM.deleteConfirmModal.classList.remove('active');
    DOM.deleteConfirmModal.setAttribute('aria-hidden', 'true');
  }

  function confirmDeleteWord() {
    if (!state.deleteTargetId) return;

    const idx = state.words.findIndex(w => w.id === state.deleteTargetId);
    if (idx !== -1) {
      const deletedWord = state.words[idx].word;
      state.words.splice(idx, 1);
      saveWords();
      showToast(`Đã xóa từ "${deletedWord}" khỏi kho từ vựng.`, 'info');
      updateTopicDropdowns();
      renderVocabList();
    }
    closeDeleteModal();
  }

  function toggleWordStatus(id) {
    const item = state.words.find(w => w.id === id);
    if (!item) return;

    item.status = item.status === 'mastered' ? 'learning' : 'mastered';
    saveWords();
    renderVocabList();

    if (item.status === 'mastered') {
      showToast(`Chúc mừng! Bạn đã thuộc từ "${item.word}"! 🎉`, 'success');
      playQuizSound('correct');
    } else {
      showToast(`Đã chuyển "${item.word}" sang danh sách đang học.`, 'info');
    }
  }

  // =========================================================================
  // 10. TAB NAVIGATION & GLOBAL EVENT LISTENERS
  // =========================================================================

  function switchTab(tabId) {
    state.currentTab = tabId;

    DOM.desktopNavTabs.forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-tab') === tabId);
    });

    DOM.mobileNavTabs.forEach(tab => {
      tab.classList.toggle('active', tab.getAttribute('data-tab') === tabId);
    });

    DOM.tabSections.forEach(sec => {
      sec.classList.toggle('active', sec.id === `${tabId}-section`);
    });

    if (tabId === 'vocab-list') {
      renderVocabList();
    } else if (tabId === 'flashcard') {
      initFlashcardView();
    } else if (tabId === 'stats') {
      updateOverviewStats();
    }
  }

  function setupEventListeners() {
    DOM.desktopNavTabs.forEach(tab => {
      tab.addEventListener('click', () => switchTab(tab.getAttribute('data-tab')));
    });

    DOM.mobileNavTabs.forEach(tab => {
      tab.addEventListener('click', () => switchTab(tab.getAttribute('data-tab')));
    });

    DOM.themeToggleBtn.addEventListener('click', () => {
      const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      showToast(`Đã chuyển sang giao diện ${nextTheme === 'dark' ? 'Tối' : 'Sáng'}`, 'info');
    });

    // Vocab List Search & Filters
    DOM.searchInput.addEventListener('input', e => {
      state.searchQuery = e.target.value.trim();
      DOM.clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
      renderVocabList();
    });

    DOM.clearSearchBtn.addEventListener('click', () => {
      DOM.searchInput.value = '';
      state.searchQuery = '';
      DOM.clearSearchBtn.style.display = 'none';
      renderVocabList();
      DOM.searchInput.focus();
    });

    DOM.topicFilterSelect.addEventListener('change', e => {
      state.topicFilter = e.target.value;
      renderVocabList();
    });

    if (DOM.levelFilterSelect) {
      DOM.levelFilterSelect.addEventListener('change', e => {
        state.levelFilter = e.target.value;
        renderVocabList();
      });
    }

    DOM.statusSegmentBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        DOM.statusSegmentBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.statusFilter = btn.getAttribute('data-status');
        renderVocabList();
      });
    });

    DOM.resetFiltersBtn.addEventListener('click', () => {
      DOM.searchInput.value = '';
      state.searchQuery = '';
      state.topicFilter = 'ALL';
      state.levelFilter = 'ALL';
      state.statusFilter = 'ALL';
      DOM.topicFilterSelect.value = 'ALL';
      if (DOM.levelFilterSelect) DOM.levelFilterSelect.value = 'ALL';
      DOM.statusSegmentBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-status') === 'ALL'));
      DOM.clearSearchBtn.style.display = 'none';
      renderVocabList();
    });

    DOM.quickPracticeBtn.addEventListener('click', () => {
      state.flashcardTopicFilter = state.topicFilter;
      state.flashcardLevelFilter = state.levelFilter;
      state.flashcardStatusFilter = state.statusFilter === 'ALL' ? 'learning' : state.statusFilter;
      DOM.flashcardTopicSelect.value = state.flashcardTopicFilter;
      if (DOM.flashcardLevelSelect) DOM.flashcardLevelSelect.value = state.flashcardLevelFilter;
      DOM.flashcardStatusSelect.value = state.flashcardStatusFilter;
      switchTab('flashcard');
    });

    // Delegate Click on Vocab Cards
    DOM.vocabCardGrid.addEventListener('click', e => {
      const speakBtn = e.target.closest('[data-action="speak"]');
      if (speakBtn) {
        const word = speakBtn.getAttribute('data-word');
        speakText(word, speakBtn);
        return;
      }

      const statusBtn = e.target.closest('[data-action="toggle-status"]');
      if (statusBtn) {
        const id = statusBtn.getAttribute('data-id');
        toggleWordStatus(id);
        return;
      }

      const editBtn = e.target.closest('[data-action="edit"]');
      if (editBtn) {
        const id = editBtn.getAttribute('data-id');
        openEditModal(id);
        return;
      }

      const deleteBtn = e.target.closest('[data-action="delete"]');
      if (deleteBtn) {
        const id = deleteBtn.getAttribute('data-id');
        openDeleteModal(id);
        return;
      }
    });

    // Modal Actions
    DOM.openAddModalBtn.addEventListener('click', openAddModal);
    DOM.closeModalBtn.addEventListener('click', closeModal);
    DOM.cancelModalBtn.addEventListener('click', closeModal);
    DOM.vocabForm.addEventListener('submit', handleSaveWord);

    // Quick Auto-Add by Word Only
    if (DOM.quickAddForm) {
      DOM.quickAddForm.addEventListener('submit', async e => {
        e.preventDefault();
        const raw = DOM.quickAddInput.value.trim();
        if (!raw) {
          showToast('Vui lòng nhập từ tiếng Anh cần thêm!', 'warning');
          DOM.quickAddInput.focus();
          return;
        }

        const clean = raw.toLowerCase().replace(/[^a-z]/g, '');
        let meta = generateWordMetadata(raw);
        if (!meta) {
          showToast('Từ nhập vào không hợp lệ!', 'warning');
          return;
        }

        // Try online Cambridge translation if word is not in built-in database
        const isBuiltIn = WORD_KNOWLEDGE_BASE[clean] || EXTENDED_CORE_DICTIONARY[clean];
        if (!isBuiltIn && navigator.onLine) {
          try {
            const onlineTrans = await fetchOnlineCambridgeTranslation(clean);
            if (onlineTrans) {
              meta.meaning = synthesizeCambridgeContexts(clean, meta.pos, onlineTrans, meta.topic);
            }
          } catch (e) {}
        }

        // Check if word already exists in list (case-insensitive) -> AUTO-SYNCHRONIZE
        const exists = state.words.find(w => w.word && w.word.toLowerCase() === meta.word.toLowerCase());
        if (exists) {
          DOM.quickAddInput.value = '';
          synchronizeWord(exists, meta, { source: 'quickAdd' });
          return;
        }

        const newWord = {
          id: 'vocab_' + Date.now(),
          word: meta.word,
          pos: meta.pos,
          level: meta.level,
          phonetic: meta.phonetic,
          topic: meta.topic,
          meaning: meta.meaning,
          example: meta.example,
          exampleVi: meta.exampleVi || getExampleTranslation(meta.word, meta.example),
          status: 'learning',
          isUserAdded: true,
          createdAt: Date.now()
        };

        state.words.unshift(newWord);
        saveWords();
        updateTopicDropdowns();
        renderVocabList();

        DOM.quickAddInput.value = '';
        showToast(`✨ Đã tự động nhận diện & thêm: "${meta.word}" [${meta.level} • ${meta.pos}]!`, 'success');

        // Highlight newly added card
        setTimeout(() => {
          const cardEl = DOM.vocabCardGrid.querySelector(`[data-id="${newWord.id}"]`);
          if (cardEl) {
            cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            cardEl.classList.add('sync-highlight');
            setTimeout(() => cardEl.classList.remove('sync-highlight'), 3000);
          }
        }, 80);

        // Play subtle speech pronunciation of the newly added word
        speakText(meta.word, DOM.quickAddBtn);
      });
    }

    // Modal Auto-Fill All Fields Button
    if (DOM.autoFillFieldsBtn) {
      DOM.autoFillFieldsBtn.addEventListener('click', async () => {
        const text = DOM.wordInput.value.trim();
        if (!text) {
          showToast('Hãy nhập từ tiếng Anh trước để tự động tra cứu Cambridge!', 'warning');
          DOM.wordInput.focus();
          return;
        }

        const clean = text.toLowerCase().replace(/[^a-z]/g, '');
        let meta = generateWordMetadata(text);
        if (!meta) {
          showToast('Không thể phân tích từ đã nhập!', 'warning');
          return;
        }

        // Check if online translation is available for unknown words
        const isBuiltIn = WORD_KNOWLEDGE_BASE[clean] || EXTENDED_CORE_DICTIONARY[clean];
        if (!isBuiltIn && navigator.onLine) {
          DOM.autoFillFieldsBtn.textContent = '⏳ Đang tra...';
          try {
            const onlineTrans = await fetchOnlineCambridgeTranslation(clean);
            if (onlineTrans) {
              meta.meaning = synthesizeCambridgeContexts(clean, meta.pos, onlineTrans, meta.topic);
            }
          } catch (e) {}
          DOM.autoFillFieldsBtn.textContent = '✨ Tự động điền tất cả';
        }

        DOM.wordInput.value = meta.word;
        DOM.posSelect.value = meta.pos;
        if (DOM.levelSelect) {
          DOM.levelSelect.value = meta.level;
          DOM.levelSelect.dataset.userModified = 'true';
        }
        DOM.phoneticInput.value = meta.phonetic;
        DOM.topicInput.value = meta.topic;
        DOM.meaningInput.value = meta.meaning;
        DOM.exampleInput.value = meta.example;
        if (DOM.exampleViInput) {
          DOM.exampleViInput.value = meta.exampleVi || getExampleTranslation(meta.word, meta.example) || '';
        }

        if (DOM.modalCambridgeBtn) {
          DOM.modalCambridgeBtn.href = `https://dictionary.cambridge.org/dictionary/english-vietnamese/${encodeURIComponent(clean)}`;
        }

        if (DOM.autoDetectLevelBadge) {
          DOM.autoDetectLevelBadge.textContent = `📖 Cambridge: ${meta.level}`;
          DOM.autoDetectLevelBadge.className = 'auto-badge-pill active-detected';
        }
        if (DOM.autoDetectReason) {
          DOM.autoDetectReason.textContent = `Chuẩn từ điển Cambridge: ${meta.pos}, ${meta.phonetic}`;
        }

        showToast(`📖 Đã tra cứu chuẩn Cambridge cho "${meta.word}"!`, 'success');
      });
    }

    // Modal "Đổi câu ví dụ khác" button for unlimited non-repetitive variety
    let exampleRotationSeed = 1;
    if (DOM.regenerateExampleBtn) {
      DOM.regenerateExampleBtn.addEventListener('click', () => {
        const word = DOM.wordInput.value.trim();
        if (!word) {
          showToast('Vui lòng nhập từ tiếng Anh trước khi đổi câu ví dụ!', 'warning');
          DOM.wordInput.focus();
          return;
        }
        const pos = DOM.posSelect ? DOM.posSelect.value : 'noun';
        const topic = DOM.topicInput ? DOM.topicInput.value.trim() : 'Chung';
        const meaning = DOM.meaningInput ? DOM.meaningInput.value.trim() : '';

        exampleRotationSeed++;
        const newPair = synthesizeExampleSentencePair(word, pos, topic, meaning, exampleRotationSeed);
        DOM.exampleInput.value = newPair.en;
        if (DOM.exampleViInput) {
          DOM.exampleViInput.value = newPair.vi;
        }
        showToast('🎲 Đã đổi sang câu ví dụ & bản dịch mới không trùng lặp!', 'info');
      });
    }

    // When typing in modal word input, on blur auto-fill remaining empty fields if adding new word
    DOM.wordInput.addEventListener('blur', () => {
      if (DOM.editWordId.value) return; // Don't auto-overwrite when editing
      const text = DOM.wordInput.value.trim();
      if (!text) return;

      // Only auto-fill if meaning or example are currently empty
      if (!DOM.meaningInput.value.trim() || !DOM.exampleInput.value.trim()) {
        const meta = generateWordMetadata(text);
        if (meta) {
          if (!DOM.meaningInput.value.trim()) DOM.meaningInput.value = meta.meaning;
          if (!DOM.exampleInput.value.trim()) DOM.exampleInput.value = meta.example;
          if (DOM.exampleViInput && !DOM.exampleViInput.value.trim()) {
            DOM.exampleViInput.value = meta.exampleVi || getExampleTranslation(meta.word, meta.example) || '';
          }
          if (!DOM.phoneticInput.value.trim()) DOM.phoneticInput.value = meta.phonetic;
          if (!DOM.topicInput.value.trim()) DOM.topicInput.value = meta.topic;
          if (!DOM.posSelect.value) DOM.posSelect.value = meta.pos;
          if (DOM.levelSelect && !DOM.levelSelect.dataset.userModified) {
            DOM.levelSelect.value = meta.level;
          }
        }
      }
    });

    // Automatic Difficulty Level Detection as user types
    DOM.wordInput.addEventListener('input', e => {
      const text = e.target.value.trim();
      if (!text) {
        if (DOM.autoDetectLevelBadge) {
          DOM.autoDetectLevelBadge.textContent = '✨ Tự nhận diện';
          DOM.autoDetectLevelBadge.className = 'auto-badge-pill';
        }
        if (DOM.autoDetectReason) {
          DOM.autoDetectReason.textContent = 'Gõ từ tiếng Anh để tự nhận diện độ khó';
        }
        return;
      }

      const detected = detectWordDifficulty(text);
      if (DOM.levelSelect && !DOM.levelSelect.dataset.userModified) {
        DOM.levelSelect.value = detected.level;
      }
      if (DOM.autoDetectLevelBadge) {
        DOM.autoDetectLevelBadge.textContent = `✨ Nhận diện: ${detected.level}`;
        DOM.autoDetectLevelBadge.className = 'auto-badge-pill active-detected';
      }
      if (DOM.autoDetectReason) {
        DOM.autoDetectReason.textContent = detected.reason;
      }

      if (DOM.modalCambridgeBtn) {
        DOM.modalCambridgeBtn.href = `https://dictionary.cambridge.org/dictionary/english-vietnamese/${encodeURIComponent(text.toLowerCase())}`;
      }
    });

    if (DOM.levelSelect) {
      DOM.levelSelect.addEventListener('change', () => {
        DOM.levelSelect.dataset.userModified = 'true';
        if (DOM.autoDetectLevelBadge) {
          DOM.autoDetectLevelBadge.textContent = `✏️ Đã chọn: ${DOM.levelSelect.value}`;
          DOM.autoDetectLevelBadge.className = 'auto-badge-pill';
        }
        if (DOM.autoDetectReason) {
          DOM.autoDetectReason.textContent = `Người dùng đã chọn mức độ ${DOM.levelSelect.value}`;
        }
      });
    }

    DOM.previewWordSpeakBtn.addEventListener('click', () => {
      const text = DOM.wordInput.value.trim();
      if (text) speakText(text, DOM.previewWordSpeakBtn);
      else showToast('Hãy nhập từ trước khi nghe thử', 'warning');
    });

    DOM.cancelDeleteBtn.addEventListener('click', closeDeleteModal);
    DOM.confirmDeleteBtn.addEventListener('click', confirmDeleteWord);

    // Flashcard Actions
    DOM.flashcardElement.addEventListener('click', e => {
      if (e.target.closest('.audio-speak-btn') || e.target.closest('.audio-example-btn')) {
        return;
      }
      flipFlashcard();
    });

    DOM.fcSpeakFrontBtn.addEventListener('click', e => {
      e.stopPropagation();
      const cur = state.flashcardCards[state.flashcardIndex];
      if (cur) speakText(cur.word, DOM.fcSpeakFrontBtn);
    });

    DOM.fcSpeakExampleBtn.addEventListener('click', e => {
      e.stopPropagation();
      const cur = state.flashcardCards[state.flashcardIndex];
      if (cur && cur.example) speakText(cur.example, DOM.fcSpeakExampleBtn);
    });

    DOM.fcPrevBtn.addEventListener('click', () => advanceFlashcard(-1));
    DOM.fcNextBtn.addEventListener('click', () => advanceFlashcard(1));
    DOM.fcLearningBtn.addEventListener('click', () => markFlashcardStatus('learning'));
    DOM.fcMasteredBtn.addEventListener('click', () => markFlashcardStatus('mastered'));
    DOM.shuffleCardsBtn.addEventListener('click', shuffleFlashcards);

    DOM.flashcardTopicSelect.addEventListener('change', e => {
      state.flashcardTopicFilter = e.target.value;
      initFlashcardView();
    });

    if (DOM.flashcardLevelSelect) {
      DOM.flashcardLevelSelect.addEventListener('change', e => {
        state.flashcardLevelFilter = e.target.value;
        initFlashcardView();
      });
    }

    DOM.flashcardStatusSelect.addEventListener('change', e => {
      state.flashcardStatusFilter = e.target.value;
      initFlashcardView();
    });

    DOM.fcViewAllBtn.addEventListener('click', () => {
      state.flashcardTopicFilter = 'ALL';
      state.flashcardLevelFilter = 'ALL';
      state.flashcardStatusFilter = 'ALL';
      DOM.flashcardTopicSelect.value = 'ALL';
      if (DOM.flashcardLevelSelect) DOM.flashcardLevelSelect.value = 'ALL';
      DOM.flashcardStatusSelect.value = 'ALL';
      initFlashcardView();
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', e => {
      if (state.currentTab !== 'flashcard') return;
      if (DOM.vocabModal.classList.contains('active') || DOM.deleteConfirmModal.classList.contains('active')) return;
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;

      if (e.code === 'Space') {
        e.preventDefault();
        flipFlashcard();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        advanceFlashcard(-1);
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        advanceFlashcard(1);
      } else if (e.key === '1') {
        markFlashcardStatus('learning');
      } else if (e.key === '2') {
        markFlashcardStatus('mastered');
      }
    });

    // Quiz Actions
    DOM.startQuizBtn.addEventListener('click', startQuiz);
    DOM.nextQuestionBtn.addEventListener('click', advanceQuizQuestion);

    DOM.quitQuizBtn.addEventListener('click', () => {
      if (confirm('Bạn có chắc chắn muốn dừng bài kiểm tra hiện tại?')) {
        DOM.quizPlayScreen.classList.remove('active');
        DOM.quizSetupScreen.classList.add('active');
      }
    });

    DOM.retryQuizBtn.addEventListener('click', () => {
      DOM.quizResultScreen.classList.remove('active');
      DOM.quizSetupScreen.classList.add('active');
    });

    DOM.reviewFlashcardsBtn.addEventListener('click', () => {
      switchTab('flashcard');
    });

    // Settings & Voice Controls
    DOM.voiceSelect.addEventListener('change', e => {
      state.selectedVoiceURI = e.target.value;
      saveSettings();
    });

    DOM.speechRateRange.addEventListener('input', e => {
      state.speechRate = parseFloat(e.target.value);
      DOM.rateValue.textContent = `${state.speechRate}x`;
      saveSettings();
    });

    DOM.testVoiceBtn.addEventListener('click', () => {
      speakText('Welcome to VocabMaster. Expanding your vocabulary across all difficulty levels is the path to mastery!', DOM.testVoiceBtn);
    });

    // Backup & Restore
    DOM.exportDataBtn.addEventListener('click', () => {
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state.words, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute('href', dataStr);
      downloadAnchor.setAttribute('download', `vocab-master-backup-${new Date().toISOString().slice(0, 10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast('Đã xuất file dữ liệu sao lưu thành công!', 'success');
    });

    DOM.importFileInput.addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = event => {
        try {
          const imported = JSON.parse(event.target.result);
          if (Array.isArray(imported) && imported.length > 0 && imported[0].word) {
            imported.forEach(w => { if (!w.level) w.level = 'B1'; });
            state.words = imported;
            saveWords();
            updateTopicDropdowns();
            renderVocabList();
            showToast(`Đã nhập thành công ${imported.length} từ vựng từ file!`, 'success');
          } else {
            showToast('File JSON không đúng định dạng từ vựng của VocabMaster!', 'error');
          }
        } catch (err) {
          showToast('Lỗi khi đọc file JSON!', 'error');
        }
      };
      reader.readAsText(file);
      e.target.value = '';
    });

    DOM.resetSampleDataBtn.addEventListener('click', () => {
      if (confirm('Khôi phục lại kho từ vựng mẫu chuẩn (49 từ A1 - C2)? Toàn bộ từ mới do bạn thêm sẽ luôn được bảo lưu an toàn không bị mất!')) {
        const sampleIds = new Set(SAMPLE_VOCABULARY.map(s => s.id));
        const sampleWordsLower = new Set(SAMPLE_VOCABULARY.map(s => s.word.toLowerCase()));
        const userCustomWords = state.words.filter(w => w.isUserAdded || !sampleIds.has(w.id) || !sampleWordsLower.has(w.word.toLowerCase()));
        
        const freshSamples = JSON.parse(JSON.stringify(SAMPLE_VOCABULARY));
        const merged = [...userCustomWords];
        freshSamples.forEach(s => {
          if (!merged.some(m => m.word.toLowerCase() === s.word.toLowerCase())) {
            merged.push(s);
          }
        });
        state.words = merged;
        saveWords();
        updateTopicDropdowns();
        renderVocabList();
        showToast('Đã khôi phục 49 từ vựng mẫu chuẩn! Toàn bộ từ bạn đã thêm vẫn được bảo lưu an toàn.', 'success');
      }
    });

    DOM.clearAllDataBtn.addEventListener('click', () => {
      if (confirm('CẢNH BÁO: Bạn có chắc chắn muốn xóa TOÀN BỘ từ vựng trong ứng dụng?')) {
        state.words = [];
        saveWords();
        updateTopicDropdowns();
        renderVocabList();
        showToast('Đã xóa toàn bộ từ vựng.', 'warning');
      }
    });
  }

  // =========================================================================
  // 11. BOOTSTRAP APPLICATION
  // =========================================================================

  function init() {
    loadState();
    initSpeechVoices();
    updateTopicDropdowns();
    renderVocabList();
    setupEventListeners();

    DOM.speechRateRange.value = state.speechRate || 0.9;
    DOM.rateValue.textContent = `${state.speechRate || 0.9}x`;

    console.log(`VocabMaster initialized successfully. ${state.words.length} vocabulary words loaded with CEFR levels.`);
  }

  // Expose API for external modules & tests
  window.generateWordMetadata = generateWordMetadata;
  window.synthesizeExampleSentencePair = synthesizeExampleSentencePair;
  window.detectWordDifficulty = detectWordDifficulty;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
