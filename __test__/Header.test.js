import { fireEvent, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../store/appStore";
import { BrowserRouter } from "react-router-dom";


it("should load the header component with the login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginBtn = screen.getByRole('button',{name : 'Login'});
  expect(loginBtn).toBeInTheDocument();
});

it("should change the login button to logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginBtn = screen.getByRole('button',{name : 'Login'});
    fireEvent.click(loginBtn)
    expect(loginBtn).toBeInTheDocument();

    const logoutBtn = screen.getByRole('button',{name : 'Logout'});
    
    expect(logoutBtn).toBeInTheDocument();
  });


it("should render the header component with the cart Items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText(/Cart /);
    expect(cartItems).toBeInTheDocument();
  });