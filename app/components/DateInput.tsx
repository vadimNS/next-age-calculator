import React from "react";

interface DateInputProps {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  error: string;
}

const DateInput: React.FC<DateInputProps> = ({ label, value, setValue, error }) => {
  let placeholder = "";
  let min = 1;
  let max = 1;

  if (label === "DAY") {
    placeholder = "DD";
    min = 1;
    max = 31;
  } else if (label === "MONTH") {
    placeholder = "MM";
    min = 1;
    max = 12;
  } else if (label === "YEAR") {
    placeholder = "YYYY";
    min = 1;
    max = new Date().getFullYear(); 
  }

  return (
    <div className="input-dates">
      <span className="input-nav">{label}</span>
      <input
        className="input-numbers"
        type="number"
        placeholder={placeholder}
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <span className="error-message">{error}</span>
    </div>
  );
};

export default DateInput;
