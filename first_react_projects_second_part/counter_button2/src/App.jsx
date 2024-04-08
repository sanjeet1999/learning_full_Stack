import { useState } from 'react'


function App() {
  // State initialise 
  const [count, setCount] = useState(0)

  return (
    // these 2 count and setCount is passed to function customButton as arguments
    <CustomButton count = {count} setCount ={setCount}></CustomButton>
  )
}

// above return used this function both the arguments are present in this props
function CustomButton(props){
  function onclickhandle(){
    props.setCount(props.count+1)
  }
  return <button onClick={onclickhandle}>
    Counter {props.count}
  </button>
}

export default App
