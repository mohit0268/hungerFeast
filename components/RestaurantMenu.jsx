import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantsCategory from '../components/RestaurantsCategory'

const RestaurantMenu = () => {  
  
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);
  

  if (resInfo === null) return <Shimmer/>;
  const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
  

  const {itemCards} =resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card)
  const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


  return( 
    <div className="text-center m-4">
      <h1 className="font-bold text-xl">{name}</h1>
      <p className="text-gray-500">{cuisines.join(', ')} {costForTwoMessage}</p>
      {categories.map((category) => 
      <RestaurantsCategory data = {category?.card?.card} />
      )}

      
    </div>
  );
};

export default RestaurantMenu;
