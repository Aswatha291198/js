import React, { useEffect, useState } from "react";

 export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
       console.log(count,'c');
      setCount((prev) => prev + 1);
    }, 1000);

    // cleanup
    console.log(count,'c');
    
    
  }, []);

  return <h2>{count}</h2>;
}