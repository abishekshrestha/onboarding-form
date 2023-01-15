const regexNumber = /^\d*\.?\d*$/;

export const isNumber = (number) => {
  const validNumber = new RegExp(regexNumber);
  return validNumber.test(number);
};
