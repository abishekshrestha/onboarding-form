import { taxCalc } from "./taxCalc";

test("taxCalc should return valid amount when passing number values", () => {
  const taxValue = taxCalc(200000);
  expect(taxValue).toEqual(63097);
});

test("taxCalc should return 0 when salary is less than 18200", () => {
  const taxValue = taxCalc(17000);
  expect(taxValue).toEqual(0);
});

test("taxCalc should return valid amount when salary is less than 37000", () => {
  const taxValue = taxCalc(36000);
  expect(taxValue).toEqual(3382);
});

test("taxCalc should return valid amount when salary is less than 90000", () => {
  const taxValue = taxCalc(85000);
  expect(taxValue).toEqual(19172);
});

test("taxCalc should return valid amount when salary is less than 180000", () => {
  const taxValue = taxCalc(170000);
  expect(taxValue).toEqual(50397);
});

test("taxCalc should return valid amount when salary is more than 180000", () => {
  const taxValue = taxCalc(190000);
  expect(taxValue).toEqual(58597);
});

test("taxCalc should return undefined when salary is a string", () => {
  const taxValue = taxCalc("test");
  expect(taxValue).toEqual(undefined);
});

test("taxCalc should return undefined when salary is true", () => {
  const taxValue = taxCalc(true);
  expect(taxValue).toEqual(undefined);
});

test("taxCalc should return undefined when salary is false", () => {
  const taxValue = taxCalc(false);
  expect(taxValue).toEqual(undefined);
});

test("taxCalc should return undefined when salary is negative number", () => {
  const taxValue = taxCalc(-200000);
  expect(taxValue).toEqual(undefined);
});

test("taxCalc should return undefined when salary is null", () => {
  const taxValue = taxCalc(null);
  expect(taxValue).toEqual(undefined);
});

test("taxCalc should return undefined when salary is undefined", () => {
  const taxValue = taxCalc(undefined);
  expect(taxValue).toEqual(undefined);
});
