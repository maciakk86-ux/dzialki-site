import {
  useState,
  useRef,
  useLayoutEffect,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

interface TooltipProps {
  children: ReactNode;
  inside: ReactNode;
  offsetX?: number;
  offsetY?: number;
}

const AnimatedTooltip = ({
  children,
  inside,
  offsetX = 0,
  offsetY = 12,
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [linePos, setLinePos] = useState({
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
  });

  useLayoutEffect(() => {
    if (!visible || !triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    // Tooltip pozycja
    const top = triggerRect.top - tooltipRect.height - offsetY + scrollY;
    const left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2 + scrollX + offsetX;
    setPos({ top, left });

    // Linia od środka triggera do środka tooltipa
    const x1 = triggerRect.left + triggerRect.width / 2 + scrollX;
    const y1 = triggerRect.top + triggerRect.height / 2 + scrollY;
    const x2 = left + tooltipRect.width / 2;
    const y2 = top + tooltipRect.height / 2;
    setLinePos({ x1, y1, x2, y2 });
  }, [visible, offsetX, offsetY]);

  return (
    <>
      <span
        ref={triggerRef}
        style={{ display: "inline-flex", cursor: "pointer" }}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
      </span>

      {visible &&
        createPortal(
          <>
            {/* Tooltip */}
            <div
              ref={tooltipRef}
              style={{
                position: "absolute",
                top: pos.top,
                left: pos.left,
                backgroundColor: "#fff",
                border: "2px solid #000000",
                borderRadius: 8,
                padding: 8,
                zIndex: 9999,
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                opacity: 0,
                transform: "translateY(10px)",
                animation: "fadeIn 0.25s forwards ease-out",
              }}
            >
              {inside}
            </div>

            {/* Linia */}
            <svg
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                pointerEvents: "none",
                zIndex: 9998,
              }}
            >
              <line
                x1={linePos.x1}
                y1={linePos.y1}
                x2={linePos.x2}
                y2={linePos.y2}
                stroke="#000000"
                strokeWidth={2}
              />
              {/* Kółko na triggerze */}
              <circle
                cx={linePos.x1}
                cy={linePos.y1}
                r={6}
                fill="#fff"
                stroke="#000000"
                strokeWidth={2}
              />
            </svg>
          </>,
          document.body
        )}

      <style>
        {`
          @keyframes fadeIn {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default AnimatedTooltip;
