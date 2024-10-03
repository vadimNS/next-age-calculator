import React from "react";
import { Age } from "./types";

interface AgeOutputProps {
  age: Age;
}

const AgeOutput: React.FC<AgeOutputProps> = ({ age }) => {
  return (
    <div className="outputs">
      <div className="outputs-section">
        <div className="output-numbers">{age.years}</div>
        <span className="output-words">years</span>
      </div>
      <div className="outputs-section">
        <div className="output-numbers">{age.months}</div>
        <span className="output-words">months</span>
      </div>
      <div className="outputs-section">
        <div className="output-numbers">{age.days}</div>
        <span className="output-words">days</span>
      </div>
    </div>
  );
};

export default AgeOutput;
