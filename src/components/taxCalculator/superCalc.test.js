import { superCalc } from "./superCalc";

test("superCalc should return valid amount when passing number values", () => {
  const superValue = superCalc(200000, 15);
  expect(superValue).toEqual(30000);
});

test("superCalc should return undefined when super rate is more than 25", () => {
  const superValue = superCalc(200000, 35);
  expect(superValue).toEqual(undefined);
});
test("superCalc should return undefined when super rate is less than 10.5", () => {
  const superValue = superCalc(200000, 5);
  expect(superValue).toEqual(undefined);
});

test("superCalc should calculate custom rate when super rate is more than 10.5 but less than 25", () => {
  const superValue = superCalc(200000, 25);
  expect(superValue).toEqual(50000);
});

test("superCalc should return undefined when salary is a string", () => {
  const superValue = superCalc("test", 15);
  expect(superValue).toEqual(undefined);
});

test("superCalc should return undefined when super contribution is a string", () => {
  const superValue = superCalc(200000, "test");
  expect(superValue).toEqual(undefined);
});

test("superCalc should return undefined when super contribution is true", () => {
  const superValue = superCalc(200000, true);
  expect(superValue).toEqual(undefined);
});

test("superCalc should return undefined when super contribution is false", () => {
  const superValue = superCalc(200000, true);
  expect(superValue).toEqual(undefined);
});

test("superCalc should return undefined when salary is negative number", () => {
  const superValue = superCalc(-200000, 10.5);
  expect(superValue).toEqual(undefined);
});

test("superCalc should return undefined when super is negative number", () => {
  const superValue = superCalc(200000, -10.5);
  expect(superValue).toEqual(undefined);
});

test("superCalc should return undefined when salary is null", () => {
  const superValue = superCalc(null, -10.5);
  expect(superValue).toEqual(undefined);
});

test("superCalc should return undefined when super is null", () => {
  const superValue = superCalc(200000, null);
  expect(superValue).toEqual(undefined);
});

test("superCalc should return undefined when salary is undefined", () => {
  const superValue = superCalc(undefined, -10.5);
  expect(superValue).toEqual(undefined);
});

test("superCalc should return undefined when super is undefined", () => {
  const superValue = superCalc(200000, undefined);
  expect(superValue).toEqual(undefined);
});
