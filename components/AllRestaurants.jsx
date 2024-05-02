import Cards from "./Cards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_CARD_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const AllRestaurant = () => {

  const [listOfRestaurants, setlistofRestaurant] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant] = useState([]);
  const [searchText,setSearchText] = useState("");

  useEffect(()=>{
    fetchApi();
  },[])   

  const Status = useOnlineStatus();
  if(Status === false){
    return(
        <h1>You're offline. Please check your internet connection.</h1>
    )
  }

  const fetchApi = async () => {
    const data = await fetch(RESTAURANT_CARD_API);
    const json = await data.json();
    console.log(json);
    setlistofRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
  }
return listOfRestaurants?.length === 0 ? 
  (<Shimmer/>)
  :
  (
      <div className="section">
          <div className="filter">
              <div className="filter-search">
                  <input type="text" 
                      className="search-text" 
                      value={searchText} 
                      onChange={(e)=>
                          setSearchText(e.target.value)
                      }
                  />
                  <button 
                      className="search-btn"
                      onClick={()=>{
                          console.log(searchText);
                          const filterRestaurant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                          
                          setFilteredRestaurant(filterRestaurant);
                      }}    
                  >Search</button>
              </div>

              <button
                  className="btns btn-top-rated"
                  onClick={() => {
                      const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating > 4);
                      setlistofRestaurant(filteredList);
                      console.log(listOfRestaurants)
                  }}
              >Ratings</button>
          </div>

          <div className="res-container">
              {filteredRestaurant?.map((restaurant) => (
                  <Link  key={restaurant.info.id} to={'/restaurants/' + restaurant.info.id }><Cards resData={restaurant} /></Link>
              ))}
          </div>
      </div>
  )
};

export default AllRestaurant;  