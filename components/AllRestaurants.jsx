import Cards from "./Cards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const AllRestaurant = (props) => {
  const [listOfRestaurants, setlistofRestaurant] = useState([]);
  const { resData } = props;

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setlistofRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="section">
      <div className="filter">
          <button
            className="btns btn-top-rated"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res)=>{
                return res.info.avgRating > 4;
              });
              setlistofRestaurant(filteredList);
            }}
          >
            Ratings
          </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <Cards key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default AllRestaurant;
