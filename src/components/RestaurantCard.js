import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
  
    const {resData}=props;

    const {cloudinaryImageId,name,avgRating,cuisines,costForTwo}=resData?.info;

    return(
        <div className="res-card w-60 h-80 p-2 m-2 rounded-lg hover:bg-gray-300 bg-gray-200">
            <img className="res-image w-56 h-36 p-2 rounded-xl" alt="res-image" 
            src={CDN_URL+cloudinaryImageId}></img>
            <h2 className="font-extrabold p-2">{name}</h2>
            <h4 className="font-medium">{"⭐"+avgRating}</h4>
            <h4 className="p-2 font-medium">{cuisines.join(", ")}</h4>
            <h4 className="font-medium px-2">{costForTwo}</h4>
        </div>
    )
};


export const withVegLabel=(RestaurantCard)=>{
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white p-2 m-2 rounded-lg">🟩Veg</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
};
export default RestaurantCard;