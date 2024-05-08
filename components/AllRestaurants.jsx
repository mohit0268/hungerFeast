import Cards , {PromotedLabel} from "./Cards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_CARD_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const AllRestaurant = () => {

  const [listOfRestaurants, setlistofRestaurant] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant] = useState([]);
  const [searchText,setSearchText] = useState("");
  const RestaurantPromoted = PromotedLabel(Cards);

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
    setlistofRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(json?.data?.cards[2])
  }

//   console.log(listOfRestaurants)
return listOfRestaurants?.length === 0 ? 
  (<Shimmer/>)
  :
  (
      <div className="section">
        <h1 className="my-6 px-8 text-3xl font-bold">What's on your mind?</h1>
          <div className="filter flex">
              <div className="filter-search mx-6 my-2 p-4">
                  <input type="text" 
                      className="search-text border border-solid border-black rounded" 
                      value={searchText} 
                      placeholder="Search Restaurants"
                      onChange={(e)=>
                          setSearchText(e.target.value)
                      }
                  />
                  <button 
                      className="search-btn mx-2 px-6 py-1 bg-amber-300 text-white border-solid rounded-lg"
                      onClick={()=>{
                          console.log(searchText);
                          const filterRestaurant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                          
                          setFilteredRestaurant(filterRestaurant);
                      }}    
                  >Search</button>
              </div>
            <div className="search-btn mx-2 py-1 flex items-center ">
            <button
                  className="px-6 py-1  bg-gray-200 rounded-lg"
                  onClick={() => {
                      const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating > 4.3);
                      setFilteredRestaurant(filteredList)
                  }}
              >Top Rated</button>
            </div>
              
          </div>

          <div className="flex flex-wrap mx-8">
              {filteredRestaurant?.map((restaurant) => (
                  <Link  key={restaurant.info.id} to={'/restaurants/' + restaurant.info.id }>
                    {
                        restaurant.info.promoted ? <RestaurantPromoted resData={restaurant} /> : <Cards resData={restaurant} />
                    }
                    </Link>
              ))}
          </div>
      </div>
  )
};

export default AllRestaurant;  