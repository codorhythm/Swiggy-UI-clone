import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/resMenu.json";
import { Provider } from "react-redux";
import { act } from "react-dom/test-utils";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
import Cart from "../Cart"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should test the Add to cart feature ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart/>
        </Provider>
      </BrowserRouter>
    )
  );

  const accordion = screen.getByText("Chocolate Ice Creams (5)");
  fireEvent.click(accordion);
  expect(screen.getAllByTestId("foodItems").length).toBe(5);
  const addBtns = screen.getAllByText("ADD +");
  fireEvent.click(addBtns[1]);
  fireEvent.click(addBtns[2]);
  expect(screen.getByText(2)).toBeInTheDocument();
//   const cartIcon = screen.getByText("Cart");
//   expect(cartIcon).toBeInTheDocument();
//   fireEvent.click(cartIcon);
  const itemsInCart = screen.getAllByTestId("foodItems");
  expect(itemsInCart.length).toBe(7);
  fireEvent.click(screen.getByRole("button", {name : "Clear Cart"}))
  expect(screen.getAllByTestId("foodItems").length).toBe(5);
  expect(screen.getByText("Cart is Empty")).toBeInTheDocument();
});
