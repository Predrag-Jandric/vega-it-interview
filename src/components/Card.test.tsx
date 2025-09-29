import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

// example of what is arriving from an API
const mockProduct = {
  title: "Test Product",
  category: "Test Category",
  price: 99.99,
  image: "https://via.placeholder.com/150",
};

describe("Card", () => {
  it("renders product details", () => {
     render(<Card {...mockProduct} />);
    expect(screen.getByText(/Test Product/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Category/i)).toBeInTheDocument();
    expect(screen.getByText(/\$99.99/i)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", mockProduct.image);
  });
});
