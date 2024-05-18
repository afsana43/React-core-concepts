import { useState } from "react"

export default function Counter(){
    
    const [count , setCount] = useState(0);

    // add function
    const handleAdd = ()=>{
        const newCount = count + 1;
        setCount(newCount);
    };

    // reduce function
    const handleReduce = ()=>{
      const newCount = count - 1;
        setCount (newCount);
    }

    return (
        <div style={{border: '2px solid red'}}>
            <h2>React state management</h2>
            <h2>Count : {count}</h2>
            <button onClick={handleAdd}>Click to Add</button>
            <button onClick={handleReduce}>Click to Reduce</button>
        </div>
    )
}