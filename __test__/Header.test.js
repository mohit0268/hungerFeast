import { render, screen } from "@testing-library/react";
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
