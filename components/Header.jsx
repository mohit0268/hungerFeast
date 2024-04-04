const Header = () => {
    return (
      <div className="header">
        <div className="logo">
          <img src="./images/logo" alt="logo" />
        </div>
        <div className="navbar">
          <ui className="nav-items">
            <li className="list-items">Home</li>
            <li className="list-items">About</li>
            <li className="list-items">Contact us</li>
            <li className="list-items">Cart</li>
          </ui>
        </div>
      </div>
    );
  };

  export default Header;