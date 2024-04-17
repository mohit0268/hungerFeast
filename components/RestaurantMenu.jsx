import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  
  const {resId} = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_MENU_API + resId + "&catalog_qa=undefined");
    const json = await data.json();
    console.log(json.data)
    setResInfo(json.data)
  }; 
 
  if (resInfo === null) return <Shimmer/>;
  const {name,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
  

  const {itemCards} =resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return(
    <div className="Menu">
      <h1>{name}</h1>
      <p>{cuisines.join(', ')} {costForTwoMessage}</p>
      <h2>Menu</h2>
      <ui>
        {itemCards.map(item => (
          <li key={item.card.info.id}>
            {item.card.info.name}
            </li>
        ))}
      </ui>

      
    </div>
  );
};

export default RestaurantMenu;
