import { afterEach, describe, expect, test } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { CartContext } from "@/app/context/cart";
import AllItems from "./all-items";

describe("<AllItems />", () => {
  const mockCart = {
    "1": { id: "1", name: "Product 1", price: 1000, quantity: 2 },
    "2": { id: "2", name: "Product 2", price: 3000, quantity: 1 },
  };
  const mockState = {
    cart: mockCart,
    totalCost: 5000,
  };

  afterEach(() => cleanup());

  test('renders "Cart is empty" message when the cart is empty', () => {
    render(
      <CartContext.Provider value={{ state: { cart: {} } }}>
        <AllItems />
      </CartContext.Provider>
    );

    expect(screen.getByText("Cart is empty")).toBeTruthy();
  });

  test("renders <LineItems /> when the cart is not empty", () => {
    render(
      <CartContext.Provider value={{ state: mockState }}>
        <AllItems />
      </CartContext.Provider>
    );

    expect(screen.getAllByTestId("line-item")).toHaveLength(2);
  });

  test("renders total cost when the cart is not empty", () => {
    render(
      <CartContext.Provider value={{ state: mockState }}>
        <AllItems />
      </CartContext.Provider>
    );

    expect(screen.getByTestId("total-cost").textContent).toEqual(
      "Total cost: $50.00"
    );
  });
});
