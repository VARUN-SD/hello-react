import ItemList from './ItemList';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const RestaurantCategory = ({data,showItems,setActiveIndex}) => {

    const handleClick=()=>{
      setActiveIndex()
    }
  return (
    <div className='w-6/12 mx-auto my-4 p-3 bg-gray-100 shadow-lg'>
        <div className=' flex justify-between cursor-pointer' onClick={handleClick}>
        <span className='font-medium '>{data.title} ({data.itemCards.length})</span>
        <span>{showItems ? <FaChevronUp/> : <FaChevronDown/>}</span>
        </div>
        {showItems && <ItemList items={data.itemCards}/>}
    </div>
  )
}

export default RestaurantCategory;
