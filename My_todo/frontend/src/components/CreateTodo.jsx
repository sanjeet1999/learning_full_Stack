import { useState } from "react"

export function CreateTodo(){

    const [title,setTitle] = useState("");
    const [description,setDescritpion] = useState("");

    return <div>
        <input style={{padding:10,margin:10}} type="text" placeholder="title" onChange={function(e){
            const titledata = e.target.value
            console.log(titledata,"title data")
            setTitle(titledata)
        }}/><br/>
        <input  style={{padding:10, margin:10}} type="text" placeholder="Description" onChange={function(e){
            const newDes = e.target.value;
            setDescritpion(newDes)
        }}/><br/>
        <button style={{margin:10}} onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "content-Type":"application/json"
                }
            }).then(async function(res){
                const jsondata = await res.json();
                console.log("data aya",jsondata)
                alert("todo added");
            })
        }}>Add todo</button>
    </div>
}

