import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantsCategory = ({data,showItems,setShowIndex}) => {

    const clickHandler = () => {
        
        setShowIndex();
        
    }
     return(
        <div className="w-6/12 m-auto bg-gray-100 shadow-lg my-4 p-4 rounded">
            <div className="flex justify-between cursor-pointer" onClick={clickHandler}>
            <span className="font-bold text-xl">{data.title} ({data.itemCards.length})</span>
            <span>▼</span>
            </div>
            {showItems && <ItemsList items={data.itemCards}/>}
            
        </div>
    );
}

export default RestaurantsCategory;