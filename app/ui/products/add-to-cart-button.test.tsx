import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { CartContext } from "@/app/context/cart";
import AddToCartButton from "./add-to-cart-button";
import { ToastContext } from "@/app/context/toast";

describe("<AddToCartButton />", () => {
  const addToCartMock = vi.fn();
  const showToastMock = vi.fn();
  const productForCart = {
    id: "1",
    name: "Product 1",
    price: 599,
    image: "/path/to/image.jpg",
  };
  const currentProduct = {
    ...productForCart,
    description: "Description for product 1",
    calorie: 500,
  };

  afterEach(() => {
    cleanup();
    vi.resetAllMocks();
  });

  test("calls addToCart() with the correct product when clicked", () => {
    render(
      <ToastContext.Provider value={{ showToast: showToastMock }}>
        <CartContext.Provider value={{ addToCart: addToCartMock }}>
          <AddToCartButton product={currentProduct} />
        </CartContext.Provider>
      </ToastContext.Provider>
    );

    fireEvent.click(screen.getByTestId("add-button"));

    expect(addToCartMock).toHaveBeenCalledWith(productForCart);
  });

  test("shows the toast when the button is clicked", () => {
    render(
      <ToastContext.Provider value={{ showToast: showToastMock }}>
        <CartContext.Provider value={{ addToCart: addToCartMock }}>
          <AddToCartButton product={currentProduct} />
        </CartContext.Provider>
      </ToastContext.Provider>
    );

    fireEvent.click(screen.getByTestId("add-button"));

    expect(showToastMock).toHaveBeenCalledOnce();
  });
});
