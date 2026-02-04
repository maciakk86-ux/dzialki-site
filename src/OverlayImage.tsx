import React from "react";

interface OverlayImageAbsoluteProps {
  src: string;
  alt?: string;
  zIndex?: number;

  /** desktop */
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;

  /** responsywna szerokość */
  width?: string;

  /** ukryj na mobile */
  hideOnMobile?: boolean;
}

const OverlayImage: React.FC<OverlayImageAbsoluteProps> = ({
  src,
  alt = "Overlay image",
  zIndex = 5,
  top,
  left,
  right,
  bottom,
  width = "clamp(220px, 35vw, 700px)",
  hideOnMobile = false,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        position: "absolute",
        top,
        left,
        right,
        bottom,
        width,
        height: "auto",
        zIndex,
        pointerEvents: "none",
        userSelect: "none",

        /* RESPONSYWNOŚĆ */
        display: hideOnMobile ? "none" : "block",
      }}
      className="overlay-image"
    />
  );
};

export default OverlayImage;
