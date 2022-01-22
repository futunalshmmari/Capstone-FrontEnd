import React from 'react'
import axios from "axios"
import './user.css'
import { useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
function User() {
    
    const [name, setName] = useState({name:""}) 
    const[password,setPassword]=useState({password:""})
    const [email, setEmail] = useState({email:""})
    const [city, setCity] = useState({city:""})
    const [phone, setPhone] = useState({phone:""})

 
   
     function Register(event){

       let x={name:name,password:password,email:email, city:city,phone:phone}
       console.log(x)
       axios({
         method:"post",
         url:"https://servicesplusbackend.herokuapp.com/user/add",
         data:
          x
       });
    
       console.log(x);
      
     }
    return (
            <div class='wrapp'>
       
             {/* <input type="text" required name="ID" id='username'  placeholder="ID" onChange={(event) => { setId(event.target.value) }} /> */}
             <form >
               <label>username</label>
              <input type="text"  name="username" required placeholder="Username" required onChange={(event) => { setName(event.target.value)  }}  />
              <label>Password</label>
              <input type="text"  name="Password" placeholder="Password" onChange={(event) => { setPassword(event.target.value) }} required/>
<label> City</label>
             <input type="text"  name="City"  placeholder="City" onChange={(event) => { setCity(event.target.value) }} required />
             <label>Phone</label>
            <input type="text"  name="Phone" placeholder="Phone" onChange={(event) => {  if (isNaN(event.target.value)){alert('It is not a Number')} else{ setPhone(event.target.value) }}} required />
            <label> Email</label>
            <input type="text" required name ="Email" placeholder="Email" onChange={(event) => { setEmail(event.target.value) }} />

            <button type="submit" value="submit" class='login' onClick={(event)=>{Register(event); return false;}}>Add</button>
            </form>
            </div>
          );
}
export default User
