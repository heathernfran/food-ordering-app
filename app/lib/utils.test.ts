import { describe, expect, test } from "vitest";
import {
  calculateQuantity,
  calculateTotalValues,
  deleteProductFromCart,
  formatCurrency,
} from "./utils";

describe("calculateQuantity()", () => {
  test("returns the updated quantity for a product in the cart", () => {
    const mockCart = {
      "1": {
        id: "1",
        name: "Product 1",
        price: 600,
        image: "/path/to/image.jpg",
        cost: 1200,
        quantity: 2,
      },
    };

    expect(calculateQuantity(mockCart, "1")).toBe(3);
  });

  test("returns quantity of 1 when product is not in the cart", () => {
    const mockCart = {};

    expect(calculateQuantity(mockCart, "2")).toBe(1);
  });
});

describe("calculateTotalValues()", () => {
  const mockCart = {
    "1": {
      id: "1",
      name: "Product 1",
      price: 600,
      image: "/path/to/image.jpg",
      cost: 1200,
      quantity: 2,
    },
    "2": {
      id: "2",
      name: "Product 2",
      price: 400,
      image: "/path/to/image.jpg",
      cost: 1200,
      quantity: 3,
    },
  };

  test("returns the updated value for total quantity of products in the cart", () => {
    expect(calculateTotalValues(mockCart, "quantity")).toBe(5);
  });

  test("returns the updated value for total cost of products in the cart", () => {
    expect(calculateTotalValues(mockCart, "cost")).toBe(2400);
  });
});

describe("deleteProductFromCart()", () => {
  test("returns a copy of the cart without the deleted product", () => {
    const mockCart = {
      "1": {
        id: "1",
        name: "Product 1",
        price: 600,
        image: "/path/to/image.jpg",
        cost: 1200,
        quantity: 2,
      },
      "2": {
        id: "2",
        name: "Product 2",
        price: 400,
        image: "/path/to/image.jpg",
        cost: 1200,
        quantity: 3,
      },
    };
    const result = {
      "2": {
        id: "2",
        name: "Product 2",
        price: 400,
        image: "/path/to/image.jpg",
        cost: 1200,
        quantity: 3,
      },
    };

    expect(deleteProductFromCart(mockCart, "1")).toEqual(result);
  });
});

describe("formatCurrency()", () => {
  test("formats USD currency correctly", () => {
    const amount = 799;
    const result = "$7.99";

    expect(formatCurrency(amount)).toBe(result);
  });
});
