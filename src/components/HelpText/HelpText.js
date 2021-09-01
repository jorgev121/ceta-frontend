import React, { useState } from "react";
import { Tooltip } from "reactstrap";

const HelpText = ({ target, placement, text }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  // console.log(target, placement, text)

  return (
    <>
      {target && text ? (
        <Tooltip
          placement={placement}
          isOpen={tooltipOpen}
          target={target}
          toggle={toggle}
        >
          <small>{text}</small>
        </Tooltip>
      ) : (
        ""
      )}
    </>
  );
};

export default HelpText;
