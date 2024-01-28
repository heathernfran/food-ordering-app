import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import LineItem from "./line-item";

describe("<LineItem />", () => {
  const mockProduct = {
    id: "1",
    name: "Product 1",
    price: 1000,
    image: "/mock/path/to/image.jpg",
    cost: 2000,
    quantity: 2,
  };

  afterEach(() => cleanup());

  test("sets the <Image /> alt attribute correctly", () => {
    render(<LineItem product={mockProduct} />);

    expect(screen.getAllByAltText("Product 1")).toBeTruthy();
  });

  test("renders the quantity correctly", () => {
    render(<LineItem product={mockProduct} />);

    expect(screen.getByText("Quantity: 2")).toBeTruthy();
  });

  test("renders the cost correct", () => {
    render(<LineItem product={mockProduct} />);

    expect(screen.getByText("Cost: $20.00")).toBeTruthy();
  });
});
