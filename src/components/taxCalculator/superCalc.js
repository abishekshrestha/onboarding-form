import { isNumber } from "./isNumber";

//contant values for minimum and maximum superannuation
const MIN_SUPERANNUATION = 10.5;
const MAX_SUPERANNUATION = 25;

//To calculate superannuation value
export const superCalc = (salary, superannuationRate) => {
  if (
    !isNumber(salary) ||
    !isNumber(superannuationRate) ||
    superannuationRate < MIN_SUPERANNUATION ||
    superannuationRate > MAX_SUPERANNUATION
  ) {
    return undefined;
  }

  return (superannuationRate / 100) * salary;
};
