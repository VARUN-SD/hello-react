import { CDN_URL } from '../utils/constants';

const ItemList = ({items}) => {
    
  return (
    <div>
      {items.map((item)=> (
      <div className='text-left flex justify-between p-2 m-2 border-gray-200 border-b-2' key={item.card.info.id}>
        <div>
            <span className='text-lg' >{item.card.info.name} - ₹ {item.card.info.price/100}</span>
            <p className='text-sm'>{item.card.info.description}</p>
        </div>
        <div className=''>
        
        <button className='absolute bg-black text-white rounded-lg ml-3'>Add +</button>
        <img className='w-20 h-16 ' src={CDN_URL+item.card.info.imageId}></img>
        </div>
      </div>))}
    </div>
  )
}

export default ItemList;
