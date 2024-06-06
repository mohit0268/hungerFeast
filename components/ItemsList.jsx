import { useDispatch } from "react-redux";
import { addItems } from "../store/cartSlice";

const ItemsList = ({ items }) => {

  //dispatch a action inside handleAddItem
  const dispatch = useDispatch();

  const handleAddItem = ((item) => {
    dispatch(addItems(item))
  });
  return (
    <div>
      {items.map((item) => (

        <div className="text-left py-6 border-gray-400 border-b-2 flex" key={item.card.info.id}>
          <div className="flex flex-col w-[80%]" >
            <span className="font-bold">{item.card.info.name}</span>
            <span>
              ₹{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-sm text-gray-600 pt-2">
            {item.card.info.description}
          </p>
          </div>
          <div className="w-[20%] mx-4 ">
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item.card.info.imageId
              }
              alt="img"
              className="rounded-lg w-28 m-auto"
            />
            <div className="relative flex justify-center bottom-3">
            <button className="bg-gray-900 text-white px-4 rounded" onClick={()=> handleAddItem(item)}>add +</button>
            </div>
            </div>
          
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
