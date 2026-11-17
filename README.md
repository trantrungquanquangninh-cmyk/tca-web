# TCA Group

Website tiếng Việt giới thiệu đào tạo Revit, xây dựng và dự toán tại Úc.

## Quản lý nội dung

- `dist/index.html`: giới thiệu TCA, giảng viên, hình thức học, câu hỏi thường gặp.
- `dist/app.js`: nội dung đủ 8 buổi và hành vi tương tác.
- `dist/style.css`: màu sắc và bố cục máy tính/điện thoại.
- `dist/assets/`: hình ảnh trích từ tài liệu TCA, favicon vẽ lại theo màu nhận diện.
- `.openai/hosting.json`: định danh Site và cấu hình triển khai. Giữ nguyên project_id.

Chỉnh sửa các tệp trên rồi triển khai lại cùng Site. Đây là website tĩnh, chưa có trang CMS/đăng nhập quản trị. Quyền quản lý Site thuộc tài khoản đã tạo Site. Không dùng mật khẩu hard-code hoặc localStorage làm xác thực.

## Liên hệ

Điện thoại: 0433 871 998 (liên kết gọi quốc tế +61 433 871 998). Facebook: https://www.facebook.com/profile.php?id=61572352225648. Cập nhật các thông tin này trong `contactLinks` tại `dist/app.js`. Phần liên hệ cho phép gọi điện, mở Facebook, chọn hình thức học và sao chép tin nhắn để tự gửi qua Facebook. Học phí và lịch học chưa công bố.

## Nguồn nội dung

- TCA-Group-Course-Overview.pdf: câu chuyện TCA, định hướng và hồ sơ Eric Tran.
- TCA_Group_Noi_Dung_8_Buoi_Hoc.pdf: chương trình chính gồm 8 buổi. Không ghép lộ trình 4 buổi trong tài liệu giới thiệu vào lộ trình này.
- Yêu cầu người dùng: online trực tiếp hoặc hybrid tự học kèm 1–2 buổi catch-up.

Các hình công trình là hình minh họa từ tài liệu, không được trình bày là dự án thực tế do TCA thực hiện. Không bổ sung học phí, chứng chỉ, lời chứng thực hoặc cam kết việc làm chưa được xác nhận.

## Xem tại máy

Chạy `python -m http.server 4173 --directory dist` từ thư mục này, rồi mở http://localhost:4173.

Phông Be Vietnam Pro dùng Google Fonts, có Arial/sans-serif dự phòng. Các ảnh được lưu cục bộ.
