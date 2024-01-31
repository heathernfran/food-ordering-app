import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { CartContext } from "@/app/context/cart";
import DeleteFromCartButton from "./delete-from-cart-button";

describe("<DeleteFromCartButton />", () => {
  const deleteFromCartMock = vi.fn();
  const id = "1";

  afterEach(() => {
    cleanup();
    vi.resetAllMocks();
  });

  test("calls deleteFromCart() with the correct product id when clicked", () => {
    render(
      <CartContext.Provider value={{ deleteFromCart: deleteFromCartMock }}>
        <DeleteFromCartButton id={id} />
      </CartContext.Provider>
    );

    fireEvent.click(screen.getByTestId("delete-button"));

    expect(deleteFromCartMock).toHaveBeenCalledWith(id);
  });
});
