import React from "react";

interface DateInputProps {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  error: string;
}

const DateInput: React.FC<DateInputProps> = ({ label, value, setValue, error }) => {
  return (
    <div className="input-dates">
      <span className="input-nav">{label}</span>
      <input
        className="input-numbers"
        type="number"
        placeholder={label === "DAY" ? "DD" : label === "MONTH" ? "MM" : "YYYY"}
        min={label === "DAY" ? "1" : label === "MONTH" ? "1" : "1"}
        max={label === "DAY" ? "31" : label === "MONTH" ? "12" : new Date().getFullYear().toString()}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <span className="error-message">{error}</span>
    </div>
  );
};

export default DateInput;
