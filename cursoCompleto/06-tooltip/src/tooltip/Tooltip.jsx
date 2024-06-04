/* eslint-disable */
import { useEffect, useRef, useState } from "react";

function Tooltip({ text, domRect }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const tooltipElement = useRef();
  useEffect(() => {
    let { width, height } = tooltipElement.current.getBoundingClientRect();

    setPosition({
      y: domRect.y + height,
      x: domRect.x - width / 2 + width / 2,
    });
  }, [domRect]);
  return (
    <span
      ref={tooltipElement}
      style={{ left: position.x, top: position.y }}
      className="tooltip"
    >
      {text}
    </span>
  );
}
export default Tooltip;
