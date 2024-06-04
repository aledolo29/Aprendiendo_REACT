/* eslint-disable */
import Tooltip from "./Tooltip";
import { useRef, useState } from "react";
function TooltipText(props) {
  const [tooltipDomRect, setTooltipDomRect] = useState(null);
  const [showtooltipText, setShowTooltipText] = useState(false);
  let spanElement = useRef();
  function HandlerMouseOver() {
    let data = spanElement.current.getBoundingClientRect();
    setTooltipDomRect(data);
    setShowTooltipText(true);
  }

  return (
    <>
      <span
        className="tooltip-text"
        ref={spanElement}
        onMouseOver={(ev) => HandlerMouseOver(ev)}
        onMouseLeave={() => setShowTooltipText(false)}
      >
        {props.children}
      </span>
      {showtooltipText && (
        <Tooltip domRect={tooltipDomRect} text={props.tooltip} />
      )}
    </>
  );
}
export default TooltipText;
