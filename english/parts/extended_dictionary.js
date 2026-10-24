  const EXTENDED_CORE_DICTIONARY = {
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
