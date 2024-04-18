import React, { useEffect, useState } from 'react'
import axios from "axios";

function ToDo() {
    
    const[Task,SetTask]=useState([]);

    const items = async () => {
        let response = await axios.get("http://localhost:5233/api/ToDo ")
        SetTask(response.data)
      }
      useEffect(() => {
        items()
      }, [])
    
    const add=async ()=>{
        const formData = new FormData();
        formData.append("Name",Name);
        formData.append("Description", Description);
        var added=await axios.post("http://localhost:5233/api/ToDo",formData);
        if(added){
            window.alert("successfully added");
        }
        else{
            window.alert("error in adding the task");
        }

    }
   
    const edit=(id)=>{

        var added=axios.put(`http://localhost:5233/api/ToDo?id=${id}`);
        if(added){
            window.alert("successfully added");
        }
        else{
            window.alert("error in adding the task");
        }

    }
    const deletetask=(id)=>{

        var added=axios.delete(`http://localhost:5233/api/ToDo?id=${id}`);
        if(added){
            window.alert("successfully added");
        }
        else{
            window.alert("error in adding the task");
        }

    }
  return (

    <div>
    {Task.map((x)=>{
        <div>
 <form >
 <label>
  {x.Name}
   <input type="text" />
 </label>
 <label>
 {x.Description}
   <input type="text" />
 </label>

 <button type="button" onClick={add}>Add</button>
</form>

<form>
 <label>
   Editing the Item
   <input type="text" />
 </label>
 <button type="button" onClick={()=>edit(x.id)}>Edit</button>
</form>

<form>
 <label>
   Deleting the Item
   <input type="text" />
 </label>
 <button type="button" onClick={()=>deletetask(x.id)}>Delete</button>
</form>
</div>
    })}
     
    </div>
  )
}

export default ToDo