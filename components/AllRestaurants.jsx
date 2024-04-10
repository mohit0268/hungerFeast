import Cards from "./Cards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const AllRestaurant = (props) => {
  const [listOfRestaurants, setlistofRestaurant] = useState([]);
  const [filteredRestaurants,setFilteredRestaurants] = useState([]);
  const [searchText,setSearchText] = useState("");
  const { resData } = props;

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    
    setFilteredRestaurants(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    setlistofRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="section">
      <div className="filter">
        <div className="filter-search">
         <input type="text" 
         className="search-text" 
         value={searchText} 
         onChange={(e)=>
         setSearchText(e.target.value)
         }/>
         <button 
         className="search-btn"
         onClick={()=>{
          console.log(searchText);
          const filterRestaurantCards = listOfRestaurants.filter((res)=>{
            return res.info.name.toLowerCase().includes(searchText.toLowerCase());
          });
          console.log(filterRestaurantCards);
          setFilteredRestaurants(filterRestaurantCards);

         }}
         >Search</button>
        </div>
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
        {filteredRestaurants.map((restaurant) => (
          <Cards key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default AllRestaurant;
