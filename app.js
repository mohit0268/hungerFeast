import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header'
import AllRestaurant from "./components/AllRestaurants";


/*
*Applayout
*   -Header
        -logo
        -navbar items
*   -body
        -seach bar
        -reastaurant container
            -res cards
                -img
                -name
                -ratings
                -food item

    -footer
        -copyright
        -links
        -address
        -contactdetails
*/







const AppLayout = () => {
  return (
    <div>
      <Header />
      <AllRestaurant />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
