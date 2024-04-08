// HOOK
import {useState} from "react";

function App(){
  const [count,setCount] = useState(0);
  
  function statechange(){
    setCount(count+1)
  }
  return(
    <div>
      <button onClick={statechange}>Counter {count}</button>
    </div>
  )
}

export default App