import ItemsList from "./ItemsList";

const RestaurantsCategory = ({data}) => {
    console.log(data);
    return(
        <div className="w-6/12 m-auto bg-gray-100 shadow-lg my-4 p-4 rounded">
            <div className="flex justify-between">
            <span className="font-bold text-2xl">{data.title} ({data.itemCards.length})</span>
            <span>▼</span>
            </div>
            <ItemsList items={data.itemCards}/>
            
        </div>
    );
}

export default RestaurantsCategory;