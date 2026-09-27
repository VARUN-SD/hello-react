import { useState } from "react";

const User=({name,location})=>{
    const [count,setCount]=useState(0);
    const [count2,setCount2]=useState(1);
    return(
        <div className="user">
            <h1>Count:{count}</h1>
            <h1>Count2={count2}</h1>
            <button onClick={()=>{
                setCount(count+1),
                setCount2(count2+1);
            }}>Count Increase</button>
            <h2>Name:{name}(functional)</h2>
            <h3>Phone:9182345678</h3>
            <h4>Location:{location}</h4> 
        </div>
    )
};

export default User;