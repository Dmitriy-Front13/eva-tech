import { useState } from "react";

import './popover.scss';

const Popover = ({ children, className }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const toggleTooltip = () => {
    setIsTooltipVisible((prev) => !prev);
  };
  return (
    <>
      <button onClick={toggleTooltip} type="button" className="tooltip-button">why ?</button>
      <div className={`tooltip ${className} ${isTooltipVisible ? 'tooltip--visible' : ''}`}>
        {children}
      </div>
    </>
  )
}

export default Popover;