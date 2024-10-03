"use client";

import { useState } from "react";
import DateInput from "./DateInput";
import AgeOutput from "./AgeOutput";
import { validateInputs, clearErrorText } from "./validators";
import { Errors, Age } from "./types";
import "./module.css";

const AgeCalculatorApp = () => {
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({ day: "", month: "", year: "" });
  const [age, setAge] = useState<Age>({ years: "--", months: "--", days: "--" });

  const calculateAge = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    let dayResult = currentDay - parseInt(day, 10);
    let monthResult = currentMonth - parseInt(month, 10);
    let yearResult = currentYear - parseInt(year, 10);

    if (monthResult < 0) {
      monthResult += 12;
      yearResult -= 1;
    }

    if (dayResult < 0) {
      const prevMonth = currentMonth === 1 ? 12 : currentMonth - 1;
      const daysInPrevMonth = new Date(yearResult, prevMonth, 0).getDate();
      dayResult += daysInPrevMonth;
      monthResult -= 1;
    }

    setAge({ years: yearResult.toString(), months: monthResult.toString(), days: dayResult.toString() });
  };

  const handleSubmit = () => {
    clearErrorText(setErrors);
    if (validateInputs(day, month, year, setErrors)) {
      calculateAge();
    }
  };

  return (
    <main>
      <div className="inputs">
        <DateInput label="DAY" value={day} setValue={setDay} error={errors.day} />
        <DateInput label="MONTH" value={month} setValue={setMonth} error={errors.month} />
        <DateInput label="YEAR" value={year} setValue={setYear} error={errors.year} />
      </div>
      <div className="split">
        <hr />
        <button type="button" className="images-button" onClick={handleSubmit}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="44"
            viewBox="0 0 46 44"
          >
            <g fill="none" stroke="#FFF" strokeWidth="2">
              <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
            </g>
          </svg>
        </button>
      </div>
      <AgeOutput age={age} />
    </main>
  );
};

export default AgeCalculatorApp;
