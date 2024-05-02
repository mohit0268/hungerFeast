import { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName,setbtnName] = useState('Login');
  const online_status = useOnlineStatus();

    return (
      <div className="header">
        <div className="logo">
          <img src="./images/logo" alt="logo" />
          
        </div>
        <div className="navbar">
          <ui className="nav-items">
            <span>{online_status ? "🟢" : "🔴"}</span>
            <li className="list-items"><Link to='/'>Home</Link></li>
            <li className="list-items"><Link to='/about'>About</Link></li>
            <li className="list-items"><Link to='/contact'>Contact us</Link></li>
            <li className="list-items"><Link to='/cart'>Cart</Link></li>
            <button className="login-btn" onClick={() => {
              btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}>{btnName}</button>
          </ui>
        </div>
      </div>
    );
  };

  export default Header;