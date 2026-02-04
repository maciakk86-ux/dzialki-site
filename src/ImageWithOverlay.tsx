import React from "react";
import "./ImageWithOverlay.css";
import AnimatedTooltip from "./tooltip";
import TooltipCard from "./tooltipCard";
import type { ImageWithOverlayProps } from "./dzialk.model";
import TopBar from "./TopBar";

const ImageWithOverlay: React.FC<ImageWithOverlayProps> = ({
  backgroundSrc,
  imgList = [],
  onLoad, // ← oznacza: WSZYSTKO załadowane
}) => {
  /** ilość obrazów ładowanych NA START */
  const totalImages = React.useMemo(
    () => 1 + imgList.length,
    [imgList]
  );

  const [loadedCount, setLoadedCount] = React.useState(0);

  React.useEffect(() => {
    setLoadedCount(0);
  }, [backgroundSrc, imgList]);

  const handleImageLoad = React.useCallback(() => {
    setLoadedCount((prev) => prev + 1);
  }, []);

  const allLoaded = loadedCount >= totalImages;

  React.useEffect(() => {
    if (allLoaded && onLoad) {
      onLoad();
    }
  }, [allLoaded, onLoad]);

  React.useEffect(() => {
    imgList.forEach((img) => {
      if (!img.dzialkaParams.sprzedana && img.imgUrlHover) {
        const preload = new Image();
        preload.src = img.imgUrlHover;
      }
    });
  }, [imgList]);

  return (
    <>
    <div className="image-wrapper">
      
      {!allLoaded && (
        <div className="image-loader">
          <span className="spinner" />
          <p>Ładowanie…</p>
        </div>
      )}

      {/* BACKGROUND */}
      <img
        src={backgroundSrc}
        alt="Background"
        className={`base-image ${allLoaded ? "visible" : "hidden"}`}
        onLoad={handleImageLoad}
      />

      {/* OVERLAYS */}
      {imgList.map((img) => (
        <span
          key={img.imgUrl}
          className={`overlay-wrapper ${allLoaded ? "visible" : "hidden"}`}
          style={{
            position: "absolute",
            top: img.pTop,
            left: img.pLeft,
            width: img.pWidth,
          }}
        >
          {!img.dzialkaParams.sprzedana ? (
            <AnimatedTooltip
              inside={<TooltipCard data={img.dzialkaParams} />}
              offsetX={160}
              offsetY={70}
            >
              <img
                alt="Overlay"
                src={img.imgUrl}
                style={{ width: "100%", display: "block" }}
                onLoad={handleImageLoad}
                onMouseEnter={(e) => (e.currentTarget.src = img.imgUrlHover)}
                onMouseLeave={(e) => (e.currentTarget.src = img.imgUrl)}
              />
            </AnimatedTooltip>
          ) : (
            <img
              alt="Overlay"
              src={img.imgUrlDisable}
              style={{ width: "100%", display: "block" }}
              onLoad={handleImageLoad}
            />
          )}
        </span>
      ))}
    </div>
    </>
  );
};

export default ImageWithOverlay;
