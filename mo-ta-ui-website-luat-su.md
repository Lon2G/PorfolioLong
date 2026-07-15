# Mô tả UI – Website Dịch Vụ Pháp Lý "Robert"

## 1. Tổng quan
Website dạng landing page dành cho luật sư/công ty luật cá nhân tên **Robert**, phong cách hiện đại, sang trọng, tone màu tối (navy/đen) kết hợp vàng gold làm điểm nhấn (accent color), nền các section xen kẽ trắng – tối tạo nhịp điệu thị giác.

- **Font chữ:** Sans-serif đậm, hiện đại (tiêu đề bold, cỡ lớn)
- **Bảng màu chính:**
  - Nền tối: Navy/Charcoal đen (#0e1b2b hoặc tương tự)
  - Accent: Vàng gold (#d9a441 hoặc tương tự) – dùng cho nút CTA, chữ nhấn mạnh, icon
  - Nền sáng: Trắng/xám nhạt cho các section xen kẽ
  - Chữ: Trắng trên nền tối, đen trên nền sáng
- **Bo góc:** Các card, nút, khối lớn đều bo tròn mềm mại (rounded corners lớn ~20-30px)

---

## 2. Header / Thanh điều hướng
- **Logo:** "Robert" – chữ trắng, góc trên trái
- **Menu điều hướng** (dạng pill/nền tối bo tròn, nằm giữa): 
  - About
  - Services
  - Projects
  - Process
  - Testimonials
  - FAQs
- **Nút CTA góc phải:** "Get a free quote" – nút vàng gold bo tròn, có icon mũi tên chéo (↗)

---

## 3. Hero Section (Banner chính)
- **Nền:** Khối lớn màu tối, bo góc, chứa toàn bộ nội dung hero
- **Hình ảnh:** Chân dung luật sư nam mặc vest, đeo kính, đứng giữa, phía sau có hình minh họa cán cân công lý (scale of justice) làm watermark mờ
- **Badge nhỏ:** "SRA Regulated: 9876660" – dạng pill nhỏ góc trên trái nội dung
- **Tiêu đề lớn (H1):**
  - "Your Legal" (trắng)
  - "Solutions" (trắng)
  - "Partner" (màu vàng gold – từ nhấn mạnh)
- **Widget đánh giá (bên phải, nổi trên ảnh):**
  - Icon Google + Facebook
  - 5 sao + số điểm "4.9"
  - "2k+ Reviews"
  - Dòng mô tả ngắn: "Strategic legal guidance for your personal and business needs."
  - Nút CTA: "Start your case" (nút vàng bo tròn)
- **Thanh chỉ số thống kê (dưới cùng hero, 4 cột):**
  | Icon | Số liệu | Mô tả |
  |------|---------|-------|
  | 🏅 | 10+ | Years of Experience |
  | 📊 | 95% | Success rate |
  | 📄 | 250+ | Cases completed |
  | 🛡️ | 100% | SRA Regulated |

---

## 4. Section "About Me"
- **Nền:** Trắng
- **Bố cục:** 2 cột
  - **Cột trái:**
    - Badge nhỏ "ABOUT ME"
    - Tiêu đề lớn: "Built On Integrity, Driven By Justice"
  - **Cột phải:**
    - Đoạn mô tả ngắn (bold) giới thiệu triết lý làm việc
    - Đoạn văn phụ giải thích chi tiết kinh nghiệm, phương pháp làm việc
    - Nút CTA: "Get a free quote" (vàng gold, bo tròn, icon mũi tên)

---

## 5. Section "Trusted Expertise" (Dịch vụ)
- **Nền:** Tối (navy), bo góc toàn khối
- **Bố cục:**
  - Badge "MY SERVICES"
  - Tiêu đề: "Trusted **Expertise**" (chữ "Expertise" màu vàng)
  - Mô tả ngắn bên phải + nút điều hướng carousel (mũi tên trái/phải dạng tròn)
- **Danh sách dịch vụ dạng carousel/cards** (cuộn ngang), mỗi card gồm:
  - Badge nhỏ loại dịch vụ (góc trên trái)
  - Tiêu đề dịch vụ (bold)
  - Hình ảnh minh họa
  - Mô tả ngắn
  - Nút icon mũi tên tròn (xem chi tiết)
- **Các card dịch vụ xuất hiện:**
  1. **Corporate** – "Corporate & Business Law"
  2. **Litigation** (card nổi bật, có nhãn "DRAG" giữa) – "Civil Litigation"
  3. **Defense** – "Criminal Defense"
  4. **Family** – "Family & Divorce" (bị cắt, còn tiếp)

---

## 6. Section "Some Of My Legal Works"
- **Nền:** Trắng
- **Bố cục:** 2 cột
  - **Cột trái:** Badge "THE WORKS I AM PROUD OF" + Tiêu đề "Some Of My Legal Works"
  - **Cột phải:** Mô tả ngắn + nút "See All Works" (vàng gold, icon mũi tên)
- **Bảng danh sách case study** (dạng table, có đường kẻ phân cách):
  - Cột: **Titles | Categories | Date**
  - Dòng ví dụ: `Corporate Advisory | CORPORATE LAW | NOV 2025` + icon mũi tên xem chi tiết bên phải

---

## 7. Các thành phần UI lặp lại (Design Pattern)
- **Nút CTA chuẩn:** Nền vàng gold, bo tròn full, icon mũi tên chéo (↗) bên phải chữ
- **Badge/pill nhãn:** Nền xám nhạt/trong suốt, viền mảnh, chữ nhỏ in hoa
- **Card bo góc lớn**, có shadow nhẹ tạo chiều sâu
- **Section tối và sáng xen kẽ** tạo nhịp điệu (Hero tối → About trắng → Services tối → Works trắng)
- **Icon outline mảnh** đi kèm số liệu thống kê

---

## 8. Đề xuất công nghệ để dựng lại
- **Framework:** React + Tailwind CSS (phù hợp bo góc, spacing, responsive)
- **Thư viện icon:** lucide-react
- **Carousel dịch vụ:** dùng thư viện swiper/embla hoặc tự code scroll-snap
- **Ảnh:** cần ảnh chân dung chuyên nghiệp, ảnh nền cán cân công lý mờ, ảnh minh họa từng dịch vụ

