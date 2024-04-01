import { fireEvent, render ,screen} from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it("should load the Header component", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
       </Provider>
    </BrowserRouter>
  );

//   const loginButton = screen.getByRole("button");
  const loginButton = screen.getByRole("button", {name : "Login"});
  expect(loginButton).toBeInTheDocument();


});

it("should load the cartItems", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
         </Provider>
      </BrowserRouter>
    );
  
    const cartItems = screen.getByText("Cart");
    expect(cartItems).toBeInTheDocument();
  
  });

  it("should simulate login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
         </Provider>
      </BrowserRouter>
    );
  
    const loginButton = screen.getByRole("button", {name : "Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name : "Logout"});
    expect(logoutButton).toBeInTheDocument();
  
  });
  
  
