import { useEffect,useState} from"react";
import { MenuAPI } from "./constants";

const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async()=>{
        const data=await fetch(MenuAPI+resId);
        const json=await data.json();
        setResInfo(json?.data);

    }

    return resInfo;
};

export default useRestaurantMenu;