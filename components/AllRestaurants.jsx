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
    
  }

//   console.log(listOfRestaurants)
return listOfRestaurants?.length === 0 ? 
  (<Shimmer/>)
  :
  (
      <div className="w-full flex flex-col flex-wrap overflow-x-hidden">
        <h1 className="my-6 px-8 text-3xl font-bold">What's on your mind?</h1>
          <div className="filter block xs:flex ">
              <div className="filter-search px-5 mb-3 max-w-fit shrink-0">
                  <input type="text" 
                      className="search-text border border-solid border-black rounded" 
                      value={searchText} 
                      placeholder="Search Restaurants"
                      onChange={(e)=>
                          setSearchText(e.target.value)
                      }
                  />
                  <button 
                      className="search-btn mx-2 px-6 py-1  text-white border-solid rounded-lg bg-amber-300 hover:bg-amber-200 "
                      onClick={()=>{
                          console.log(searchText);
                          const filterRestaurant = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                          
                          setFilteredRestaurant(filterRestaurant);
                      }}    
                  >Search</button>
              </div>
            <div className="search-btn mx-6 xs:mx-2 max-w-fit shrink-0">
            <button
                  className="px-6 py-1  bg-gray-200 rounded-lg hover:shadow-md"
                  onClick={() => {
                      const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating > 4.3);
                      setFilteredRestaurant(filteredList)
                  }}
              >Top Rated</button>
            </div>
              
          </div>
        <div className=" w-full flex justify-center">
          <div className="w-screen grid gap-2  xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
              {filteredRestaurant?.map((restaurant) => (
                  <Link  key={restaurant.info.id} to={'/restaurants/' + restaurant.info.id }>
                    {
                        restaurant.info.promoted ? <RestaurantPromoted resData={restaurant} /> : <Cards resData={restaurant} />
                    }
                    </Link>
              ))}
          </div>
          </div>
      </div>
  )
};

export default AllRestaurant;  