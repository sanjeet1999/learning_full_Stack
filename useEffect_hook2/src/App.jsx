import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  return <div>
  <Todo id={3}></Todo>
  </div>  
  
}

function Todo({id}){
  const [todo,setTodo] = useState({});
  useEffect(()=> {
  axios.get("https://sum-server.100xdevs.com/todo?id="+id)
    .then(response=>{
      setTodo(response.data.todo)
      console.log(response.data.todo,"resp")
    })
  },[])

  return <div>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
  </div>
}

export default App
