import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantsCategory from '../components/RestaurantsCategory'
import { useState } from "react";

const RestaurantMenu = () => {  
  
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  

  if (resInfo === null) return <Shimmer/>;
  const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
  const {itemCards} =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


  return( 
    <div className="text-center m-4">
      <h1 className="font-bold text-xl">{name}</h1>
      <p className="text-gray-500">{cuisines.join(', ')} {costForTwoMessage}</p>
      {categories.map((category, index) => 
      <RestaurantsCategory 
      key={category?.card?.card.title} 
      data = {category?.card?.card} 
      showItems={index === showIndex ? true : false}
      setShowIndex={()=>setShowIndex(index)} />
      )}

      
    </div>
  );
};

export default RestaurantMenu;
