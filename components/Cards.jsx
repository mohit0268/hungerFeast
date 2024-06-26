
const Cards = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo,areaName,sla} = resData?.info
    return (
      <div className="flex justify-center shrink-0">
      <div className="flex flex-row sm:flex-col w-full h-auto m-2 p-2 xl:w-[290px] xl:h-[400px] bg-gray-100 rounded-lg ">
          <img className='w-[150px] rounded-lg mr-2 sm:w-[290px] h-40 object-cover bg-center ' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="img"/>
        <div className="product-detail">
            <h3 className="font-bold pt-2 text-lg">{name}</h3>
            <h4 className="res-rating">⭐{avgRating} - {sla.deliveryTime} Mins</h4>
            <p className="res-detail">{cuisines.slice(0,5).join(", ")}</p>
            <p className="res-detail">{costForTwo}</p>
            <p className="res-detail">{areaName}</p>
        </div>
      </div>
      </div>
    );
  };

  //High order component for Restaurant promoted
  export const PromotedLabel = (Cards) => {
    return (props) => {
      return (
        <div>
          <label className="absolute bg-black text-white mx-4 px-2 rounded-sm">Promoted</label>
          <Cards {...props}/>
        </div>
      )
    }
  }

  export default Cards;