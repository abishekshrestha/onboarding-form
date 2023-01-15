import { isNumber } from "./isNumber";

export const taxCalc = (salary) => {
  if (!isNumber(salary)) return undefined;

  if (salary < 18200) {
    return 0;
  } else if (salary <= 37000) {
    return (salary - 18200) * 0.19;
  } else if (salary <= 90000) {
    return parseFloat(((salary - 37000) * 0.325 + 3572).toFixed(2));
  } else if (salary <= 180000) {
    return parseFloat(((salary - 90000) * 0.37 + 20797).toFixed(2));
  } else if (salary > 180001) {
    return parseFloat(((salary - 180000) * 0.45 + 54097).toFixed(2));
  } else {
    return 0;
  }
};
