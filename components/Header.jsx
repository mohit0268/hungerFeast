import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/constants";
import { useSelector } from "react-redux";


const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const online_status = useOnlineStatus();

  //subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  //
  const MenuClickHandler = () => {
    const navDailog = document.querySelector("#nav-dailog");
    navDailog.classList.toggle("hidden");
  };

  return (
    <nav className="bg-yellow-400 shadow-lg">
      <div className="flex justify-between">
        <div>
          <img
            className="w-[100px] h-[100px] p-2 my-1 mx-2 rounded-full"
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="flex items-center px-1 mx-2">
          <ul className="hidden md:flex mx-4">
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
              className="px-4 bg-white text-center rounded-sm border border-black "
              onClick={() => {
                btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
              }}
            >
              {btnName}
            </button>
          </ul>
          <button
            className="mx-8 text-amber-950 md:hidden"
            onClick={MenuClickHandler}
          >
            <i id="bars" className="fa-solid fa-bars text-3xl "></i>
          </button>
        </div>
      </div>



      {/* //Responsiveness below 768px */}

      <div id="nav-dailog" className="max-w-full hidden md:hidden">
        <div className="absolute w-full rounded-lg">
          <div className="block p-4 bg-white rounded-lg">
            <li className="p-4 list-none rounded-lg my-1 shadow-xl bg-white hover:bg-gray-100">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 list-none rounded-lg my-1 shadow-xl bg-white hover:bg-gray-100">
              <Link to="/about">About</Link>
            </li>
            <li className="p-4 list-none rounded-lg my-1 shadow-xl bg-white hover:bg-gray-100">
              <Link to="/contact">Contact us</Link>
            </li>
            <li className="p-4 list-none rounded-lg my-1 shadow-xl bg-white hover:bg-gray-100">
              <Link to="/cart">Cart</Link>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
