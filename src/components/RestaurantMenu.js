import { useState } from 'react';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
import Shimmer from './Shimmer';
import { useParams } from 'react-router';
const RestaurantMenu = () => {

  const [activeIndex,setActiveIndex]=useState(0);

   const {resId}=useParams();

   const resInfo=useRestaurantMenu(resId);

    if (resInfo===null) return <Shimmer/>;

    const {name,costForTwo,cuisines}=resInfo?.cards[2]?.card?.card?.info;

    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(1);


  return (
    <div className='text-center '>
      <div className=' px-6 my-4 '>
        <h1 className='font-bold text-2xl py-4 '>{name}</h1>
      <p className='font-mono py-2 '>{cuisines.join(", ")} - {costForTwo}</p>
      </div>
      <div >
       {categories.map((category,index)=> <RestaurantCategory key={category.card.card.title}
       showItems={activeIndex===index ? true : false } 
       setActiveIndex={()=>setActiveIndex(activeIndex===index ? null : index)}
        data={category.card.card}/>)}
      </div  >
    </div>
  )
}

export default RestaurantMenu;
