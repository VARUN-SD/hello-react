import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { ResListAPI } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body=()=>{
    const [ListofRestaurants,setListofRestaurants]=useState([]);

    const [filteredRestaurant,setFilteredRestaurants]=useState([]);

    const [searchText,setSearchText]=useState("");

    const onlineStatus=useOnlineStatus();

    const VegRestaurantCard=withVegLabel(RestaurantCard);

    useEffect(()=>{
        fetchData()
    },[]);
    const fetchData=async()=>{
       const data=await fetch(ResListAPI);
       const json=await data.json();
      // console.log(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setListofRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setFilteredRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    };
    if (onlineStatus===false) return <h1>Looks like You're Offline !! Please check your Internet connection</h1>

    return ListofRestaurants.length===0 ? <Shimmer/> :(
        <div className="body">
            <div className="search p-4  ">
                <input type="text" name="search" placeholder="  Search here.." className="search ml-2 border-2 rounded-lg bg-gray-50 " value={searchText}
                onChange={(e)=>{
                    setSearchText(e.target.value)
                }}/>
                <button className="search-btn bg-blue-300 px-2 py-1 mx-3 rounded-xl hover:cursor-pointer" onClick={()=>{
                   const filteredRestaurant= ListofRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                   setFilteredRestaurants(filteredRestaurant);
                }}>Search</button>
            <button className="top-btn bg-emerald-200 px-3 py-1 mx-4 rounded-xl hover:cursor-pointer" onClick={()=>{
                const filteredList=ListofRestaurants.filter((res)=>res.info.avgRating>4.5);
                setFilteredRestaurants(filteredList);
            }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container flex flex-wrap px-3 ">
             {filteredRestaurant.map((restaurant)=> (
             <Link key={restaurant.info.id}
             to={"/restaurants/"+restaurant.info.id}
             >{restaurant.info.veg ? <VegRestaurantCard resData={restaurant}/>:<RestaurantCard resData={restaurant}/>} </Link>))}
            </div>
        </div>
    )
};

export default Body;