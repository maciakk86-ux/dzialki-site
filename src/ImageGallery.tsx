import React from "react";
import "./ImageGallery.css";
import "./ImageWithOverlay.css";

type ImageGalleryProps = {
  images: string[];
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [index, setIndex] = React.useState(0);
  const [loading, setLoading] = React.useState(true);
  const startX = React.useRef<number | null>(null);

  const prev = () => {
    setLoading(true);
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const next = () => {
    setLoading(true);
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  // swipe (mobile)
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
    startX.current = null;
  };

  return (
    <div
      className="gallery"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* SPINNER */}
      {loading && (
        <div className="spinner">
          <div className="loader" />
        </div>
      )}

      <div
        className="gallery-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="gallery-image"
            onLoad={() => setLoading(false)}
            onError={() => setLoading(false)}
          />
        ))}
      </div>

      <button className="nav left" onClick={prev}>‹</button>
      <button className="nav right" onClick={next}>›</button>

      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => {
              setLoading(true);
              setIndex(i);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
