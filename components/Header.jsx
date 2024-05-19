import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const online_status = useOnlineStatus();

  //subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  //
  const MenuClickHandler = () => {};
  return (
    <div className="flex justify-between bg-yellow-400 shadow-lg ">
      <div>
        <img
          className="w-[100px] h-[100px] p-2 my-1 mx-2 rounded-full"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="flex items-center px-1">
        <ui className="hidden md:flex mx-4">
          <li className="px-4 list-none">
            Status:{online_status ? "🟢" : "🔴"}
          </li>
          <li className="px-4 list-none">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 list-none">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 list-none">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4 list-none">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <button
            className="px-4"
            onClick={() => {
              btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ui>
        <button
          className="mx-8 text-amber-950  md:hidden"
          onClick={MenuClickHandler}
        >
          <i className="fa-solid fa-bars text-3xl"></i>
        </button>
        <div className="fixed bg-red-500 inset-0 hidden">
          
        </div>
      </div>
    </div>
  );
};

export default Header;
