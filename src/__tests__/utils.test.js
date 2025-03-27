import { calculateSum } from "../Utils";
test("returns sum of numbers in string", () => {
  expect(calculateSum("1,2,3")).toBe(6);
  expect(calculateSum("10,20,30")).toBe(60);
});

test("returns correct sum when spaces are present", () => {
  expect(calculateSum("  1 , 2 , 3 ")).toBe(6);
  expect(calculateSum(" 10 ,  20 , 30 ")).toBe(60);
});

test("returns 0 for an empty string", () => {
  expect(calculateSum("")).toBe(0);
});

test("ignores trailing comma and calculates sum", () => {
  expect(calculateSum("1,2,3,")).toBe(6);
});

test("throws error for extra commas", () => {
  expect(() => calculateSum("1,2,,3")).toThrow(
    "Invalid input: Only numbers and commas are allowed"
  );
});

test("throws error for negative numbers", () => {
  expect(() => calculateSum("1,-2,3,-4")).toThrow(
    "Negative numbers not allowed: -2, -4"
  );
});

test("throws error for only negative numbers", () => {
  expect(() => calculateSum("-1,-5,-10")).toThrow(
    "Negative numbers not allowed: -1, -5, -10"
  );
});

test("correctly calculates large numbers", () => {
  expect(calculateSum("1000000,2000000,3000000")).toBe(6000000);
});

test("returns single number as sum", () => {
  expect(calculateSum("5")).toBe(5);
  expect(() => calculateSum("-5")).toThrow("Negative numbers not allowed: -5");
});

test("handles a mix of valid and invalid inputs", () => {
  expect(() => calculateSum("1, , 3")).toThrow(
    "Invalid input: Only numbers and commas are allowed"
  );
});
