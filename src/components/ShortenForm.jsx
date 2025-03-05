import { useState } from "react";
import "./ShortenForm.css"; // Import CSS file

export default function ShortenForm() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  // Hàm tạo mã rút gọn (6 ký tự)
  const generateShortCode = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  };

  // Xử lý rút gọn URL
  const handleShorten = () => {
    if (!originalUrl) return;

    const shortCode = generateShortCode();
    const newShortUrl = `${window.location.origin}/${shortCode}`;

    // Lưu vào LocalStorage
    localStorage.setItem(shortCode, originalUrl);
    
    setShortUrl(newShortUrl);
  };

  return (
    <div className="container">
      <div className="shortener-box">
        <h1>URL Shortener</h1>

        <input
          type="text"
          placeholder="Nhập URL..."
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          className="input-field"
        />
        
        <button onClick={handleShorten} className="shorten-btn">
          Rút gọn
        </button>

        {shortUrl && (
          <p className="result">
            URL rút gọn: <a href={shortUrl} target="_blank">{shortUrl}</a>
          </p>
        )}
      </div>
    </div>
  );
}
