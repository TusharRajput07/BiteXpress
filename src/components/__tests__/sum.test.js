import { sum } from "../Sum";

test("should calculate sum of two numbers", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
