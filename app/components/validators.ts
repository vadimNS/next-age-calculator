import { Errors } from "./types";

export const clearErrorText = (setErrors: React.Dispatch<React.SetStateAction<Errors>>) => {
  setErrors({ day: "", month: "", year: "" });
};

export const validateInputs = (day: string, month: string, year: string, setErrors: React.Dispatch<React.SetStateAction<Errors>>): boolean => {
  const errors: Partial<Errors> = {}; 
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  if (!day) {
    errors.day = "This field required";
  } else if (parseInt(day, 10) < 1 || parseInt(day, 10) > 31) {
    errors.day = "Must be a valid day";
  }

  if (!month) {
    errors.month = "This field required";
  } else if (parseInt(month, 10) < 1 || parseInt(month, 10) > 12) {
    errors.month = "Must be a valid month";
  }

  if (!year) {
    errors.year = "This field required";
  } else if (parseInt(year, 10) < 1 || parseInt(year, 10) > currentYear) {
    errors.year = "Must be a valid year";
  }

  setErrors(errors as Errors);
  return Object.keys(errors).length === 0; 
};
