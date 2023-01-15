import { isNumber } from "./isNumber";

test("isNumber should return true when value is integer", () => {
  const value = isNumber(10);
  expect(value).toBeTruthy();
});

test("isNumber should return true when value is decimal", () => {
  const value = isNumber(10.5);
  expect(value).toBeTruthy();
});

test("isNumber should return false when value is string", () => {
  const value = isNumber("test");
  expect(value).toBeFalsy();
});

test("isNumber should return false when value is boolean", () => {
  const value = isNumber(true);
  expect(value).toBeFalsy();
});

test("isNumber should return false when value is negative", () => {
  const value = isNumber(-10);
  expect(value).toBeFalsy();
});
