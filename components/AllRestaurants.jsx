import Cards from "./Cards";
import RES_LIST from "../utils/constants";

const AllRestaurant = (props) => {
  const { resData } = props;
  return (
    <div className="section">
      <div className="res-container">
        {RES_LIST.map((restaurant) => <Cards key={RES_LIST.id} resData={restaurant}/>)}
      </div>
    </div>
  );
};

export default AllRestaurant;
