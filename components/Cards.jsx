import RES_LIST from "../utils/constants";

const Cards = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name,avgRating,cuisines,areaName} = resData?.info
    return (
      <div className="res-cards">
        <div className="res-image">
          <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}alt="img" className="img"/>
        </div>
        <div className="product-detail">
            <h3 className="res-name">{name}</h3>
            <h4 className="res-rating">{avgRating}</h4>
            <p className="res-detail">{cuisines && cuisines.join(", ")}</p>
            <p className="res-detail">{areaName}</p>
        </div>
      </div>
    );
  };

  export default Cards;