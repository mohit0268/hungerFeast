const ItemsList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div className="text-left py-6 border-gray-400 border-b-2 flex">
          
          <div className="flex flex-col" key={item.card.info.id}>
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
          <div className="w-[300px] mx-4">
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                item.card.info.imageId
              }
              alt="img"
              className="rounded-lg flex flex-col-reverse"
            />
            <div className="absolute">
            <button className="bg-black text-white px-4 rounded">add +</button>
            </div>
            </div>
          
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
