/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core";

import { FaSpinner } from "react-icons/fa";

const spin = keyframes`
  from {
     opacity: 0.2;
  }
  to {
    opacity: 1;
  }
`;


function Spinner() {
  return (
    <div css={{ animation: `${spin} 700ms ease infinite` }}>
      <FaSpinner />
    </div>
  );
}

export default Spinner;
