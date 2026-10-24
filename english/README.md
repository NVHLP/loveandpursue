# VocabMaster - Ứng Dụng Tự Học Từ Vựng Tiếng Anh Phân Cấp CEFR (A1 - C2)

Ứng dụng web tự học từ vựng tiếng Anh hiện đại, responsive hoàn chỉnh (tương thích cả điện thoại và máy tính), được xây dựng bằng **HTML, CSS và JavaScript thuần** (Vanilla JS). Toàn bộ dữ liệu được lưu trữ tự động trong `localStorage`, không lo bị mất khi tải lại trang hoặc tắt trình duyệt.

Kho từ vựng tích hợp sẵn **49 từ vựng phong phú được phân cấp chuẩn quốc tế theo thang đo CEFR từ Dễ đến Rất khó (A1, A2, B1, B2, C1, C2)** kèm huy hiệu màu sắc trực quan.

---

## 🌟 Tính Năng Mới: Phân Cấp Mức Độ Từ Vựng (CEFR Levels)

Mỗi thẻ từ vựng đều có chú thích nhỏ thể hiện mức độ với màu sắc riêng biệt:
- **`A1 • Dễ`**: Từ vựng cơ bản hàng ngày (*Greeting, Polite, Delicious, Careful, Travel, Habit*).
- **`A2 • Sơ cấp`**: Giao tiếp thường nhật (*Comfortable, Schedule, Advice, Improve, Opportunity, Prepare, Protect, Success, Express*).
- **`B1 • Trung cấp`**: Công sở & đời sống tự tin (*Appreciate, Deadline, Feedback, Objective, Promote, Reliable, Strategy, Enthusiastic, Misunderstand*).
- **`B2 • Khá`**: Thảo luận & làm việc chuyên nghiệp (*Collaborate, Productive, Negotiate, Clarify, Efficient, Prioritize, Resilient, Perspective*).
- **`C1 • Khó`**: Học thuật, IELTS 7.5+, thảo luận chuyên sâu (*Ambiguity, Meticulous, Comprehensive, Discrepancy, Pragmatic, Ubiquitous, Eloquent, Exacerbate, Feasible, Substantiate*).
- **`C2 • Rất khó`**: Thành thạo như người bản xứ & giới học giả (*Pernicious, Serendipity, Equanimity, Paradigm, Ephemeral, Surreptitious*).

---

## 🌟 Toàn Bộ Tính Năng Chính

### 1. Quản Lý Từ Vựng Toàn Diện
- **Tự động nhận diện mức độ khó (Auto-Detect CEFR Level)**: Khi người dùng gõ từ tiếng Anh trong hộp thoại Thêm từ mới, thuật toán thông minh sẽ tự động phân tích độ khó (dựa trên từ điển CEFR, hình thái học, tiếp đầu ngữ/tiếp vĩ ngữ Latin/Hy Lạp, số lượng âm tiết và độ dài từ) để tự động chọn mức độ chính xác (A1 $\rightarrow$ C2) và hiển thị lời giải thích nhận diện.
- **Bộ lọc đa chiều**: Lọc theo Chủ đề, Lọc theo Mức độ (A1 $\rightarrow$ C2), Lọc theo Trạng thái học (**Tất cả**, **Chưa thuộc**, **Đã thuộc**).
- **Thêm từ mới kèm mức độ**: Nhập từ tiếng Anh, phiên âm IPA, từ loại, mức độ CEFR, nghĩa tiếng Việt, câu ví dụ và chủ đề. Có nút nghe thử phát âm ngay trong form.
- **Tìm kiếm thông minh**: Tìm kiếm thời gian thực theo từ tiếng Anh, nghĩa tiếng Việt, chủ đề hoặc mức độ.

### 2. Phát Âm Chuẩn Với Web Speech API
- Tích hợp công nghệ đọc giọng nói tự nhiên của trình duyệt cho toàn bộ 49 từ và câu ví dụ.
- Tùy chỉnh tốc độ đọc (0.5x đến 1.3x) và lựa chọn giọng đọc tiếng Anh theo sở thích.
- Hiệu ứng sóng âm động sinh động khi đang phát âm.

### 3. Chế Độ Học Flashcard 3D Chuyên Nghiệp
- **Thẻ lật 3D mượt mà**: 
  - **Mặt trước**: Chủ đề, huy hiệu mức độ CEFR, từ loại, từ tiếng Anh, phiên âm IPA, nút nghe phát âm chuẩn.
  - **Mặt sau**: Huy hiệu mức độ, nghĩa tiếng Việt rõ ràng, câu ví dụ mẫu kèm nút nghe đọc cả câu.
- **Bộ lọc Flashcard**: Lọc thẻ cần học theo Chủ đề, Mức độ hoặc Trạng thái (học từ dễ đến khó tùy ý).
- **Đánh dấu ghi nhớ**: Nút **"Chưa thuộc"** và **"Đã thuộc"** cập nhật tiến độ ngay lập tức.
- **Xáo trộn thẻ (Shuffle)**: Thay đổi thứ tự ngẫu nhiên.
- **Thao tác phím tắt nhanh trên máy tính**:
  - `Phím cách (Space)`: Lật mặt thẻ 3D.
  - `←` / `→`: Chuyển sang thẻ trước / tiếp theo.
  - `Phím 1`: Đánh dấu **Chưa thuộc**.
  - `Phím 2`: Đánh dấu **Đã thuộc**.

### 4. Chế Độ Kiểm Tra (Quiz Trắc Nghiệm 4 Đáp Án)
- **Tùy chọn mức độ thử thách**: Cho phép chọn kiểm tra trắc nghiệm theo phân nhóm:
  - Tất cả mức độ (Trộn lẫn)
  - Dễ (A1 - A2)
  - Trung bình (B1 - B2)
  - Khó & Nâng cao (C1 - C2)
- **Phản hồi tức thì**: Đổi màu xanh/đỏ sinh động kèm hiệu ứng âm thanh chuẩn xác (Web Audio API synthesis).
- **Bảng tổng kết điểm số**: Tỷ lệ phần trăm, đánh giá năng lực, danh sách xem lại chi tiết từng câu kèm phát âm.

### 5. Sao Lưu & Đồng Bộ Dữ Liệu
- Xuất file `.json` sao lưu hoặc nhập dữ liệu từ file để đồng bộ giữa các thiết bị.
- Nút **"Khôi phục kho từ mẫu đầy đủ (49 từ A1 - C2)"** khôi phục nhanh chóng kho từ vựng.

---

## 🚀 Khởi Chạy Ứng Dụng

Mở tệp [`index.html`](file:///C:/Users/Admin/.gemini/antigravity/scratch/vocab-master/index.html) trong bất kỳ trình duyệt web hiện đại nào.

Hoặc chạy file kiểm thử tự động [`test.html`](file:///C:/Users/Admin/.gemini/antigravity/scratch/vocab-master/test.html) (23/23 Test Cases Pass).
