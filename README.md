Giới thiệu

    Dự án URL Shortener giúp người dùng rút gọn URL dài thành một đường dẫn ngắn gọn, dễ nhớ. URL sau khi rút gọn có thể được lưu vào LocalStorage để sử dụng sau này.

Công nghệ sử dụng

    ReactJS: Xây dựng giao diện người dùng.

    LocalStorage: Lưu trữ dữ liệu tạm thời trên trình duyệt.

    Vite: Công cụ build và chạy dự án nhanh chóng.

Cách cài đặt và chạy dự án

1. Clone repository

git clone https://github.com/LeSy19/URL-SHORTENER.git
cd URL-SHORTENER

2. Cài đặt dependencies

npm install

3. Chạy dự án

npm run dev

Sau khi chạy lệnh, mở trình duyệt và truy cập http://localhost:5173/ để sử dụng ứng dụng.

Cấu trúc thư mục

URL-SHORTENER/
├── public/
│   ├── vite.svg
├── src/
│   ├── components/
│   │   ├── ShortenForm.jsx
│   │   ├── ShortenForm.css
│   ├── assets/
│   │   ├── react.svg
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

Chức năng chính

✅ Nhập URL dài và rút gọn thành một đường dẫn ngắn hơn.✅ Tạo mã rút gọn ngẫu nhiên gồm 6 ký tự.✅ Lưu trữ URL gốc vào LocalStorage.✅ Hiển thị link rút gọn có thể click để truy cập.


Chạy dưới chế độ developer:
B1: npm i
B2: npm run dev

Chạy dưới chế độ preview
B1: npm i
B2: npm run build
B3: npm run preview