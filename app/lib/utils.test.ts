import { describe, expect, test } from "vitest";
import { formatCurrency } from "./utils";

describe("formatCurrency()", () => {
  test("formats USD currency correctly", () => {
    const amount = 799;
    const result = "$7.99";

    expect(formatCurrency(amount)).toBe(result);
  });
});
