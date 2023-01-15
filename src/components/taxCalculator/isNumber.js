const regexNumber = /^\d*\.?\d*$/;

//Checks if a value is a number
export const isNumber = (number) => {
  const validNumber = new RegExp(regexNumber);
  return validNumber.test(number);
};
