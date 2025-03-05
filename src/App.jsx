import { useEffect } from "react";
import ShortenForm from "./components/ShortenForm";

export default function App() {
  useEffect(() => {
    const pathname = window.location.pathname.substring(1); // Lấy mã rút gọn từ URL
    const originalUrl = localStorage.getItem(pathname);

    if (originalUrl) {
      window.location.href = originalUrl; // Chuyển hướng nếu có dữ liệu
    }
  }, []);

  return (
    <div>
      <ShortenForm />
    </div>
  );
}
