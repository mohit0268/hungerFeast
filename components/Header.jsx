import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName,setbtnName] = useState('Login');
  const online_status = useOnlineStatus();

    return (
      <div className="flex justify-between bg-yellow-400 shadow-lg">
        <div className="">
          <img className='w-36' src={LOGO_URL} alt="logo" />
        </div>
        <div className="flex items-center">
          <ui className="flex p-4 m-4">
            <li className="px-4 list-none">Status:{online_status ? "🟢" : "🔴"}</li>
            <li className="px-4 list-none"><Link to='/'>Home</Link></li>
            <li className="px-4 list-none"><Link to='/about'>About</Link></li>
            <li className="px-4 list-none"><Link to='/contact'>Contact us</Link></li>
            <li className="px-4 list-none"><Link to='/cart'>Cart</Link></li>
            <button className="px-4" onClick={() => {
              btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}>{btnName}</button>
          </ui>
        </div>
      </div>
    );
  };

  export default Header;