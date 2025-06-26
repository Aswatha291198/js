import React, { useMemo, useState } from "react";

function WithoutMemo() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5,6]);

  // Expensive calculation
  const calculateSum = (numbers) => {
    console.log("Calculating sum...");
    return numbers.reduce((acc, curr) => acc + curr, 0);
  };

  const sum =useMemo(()=>{
    console.log('sum is calculated');
    
    return calculateSum(numbers);
  },[numbers])

  return (
    <div>
      <h1>Sum: {sum}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <h2>Count: {count}</h2>
    </div>
  );
}

export default WithoutMemo;
