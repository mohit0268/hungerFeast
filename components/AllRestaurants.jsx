import Cards from "./Cards";
import RES_LIST from "../utils/constants";
import { useState } from "react";

const AllRestaurant = (props) => {
  const [listOfRestaurants, setlistofRestaurant] = useState(RES_LIST);
  const { resData } = props;

  return (
    <div className="section">
      <div className="filter">
        <button
          className="btns btn-top-rated"
          onClick={() => {
            const filterList = listOfRestaurants.filter((res) => {
              return res.avgRating > 4.3;
            });
            setlistofRestaurant(filterList);
          }}
        >
          Ratings
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <Cards key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default AllRestaurant;
