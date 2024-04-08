import Cards from "./Cards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const AllRestaurant = (props) => {
  const [listOfRestaurants, setlistofRestaurant] = useState([]);
  const { resData } = props;

  useEffect(()=>{
    fetchApi();
  },[]);

  const fetchApi = async() => {
    const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.9351929&lng=77.62448069999999");
    const json = await data.json();
    setlistofRestaurant(json.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
  }
  
  return listOfRestaurants.length === 0 ? (<Shimmer />) :(
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
