import { useState } from "react"

import React from "react"
import axios from "axios"
import './login.css'
import { useNavigate } from "react-router-dom"


export default function Login(props) {
    let [name, setname] = useState("")
    let [password, setpassword] = useState("")
const navigate=useNavigate();

   

    function handlename(event) {
        setname((name = event.target.value));

    }

    function handlepassword(event) {
        setpassword((password = event.target.value));
    }


    function handleSubmit(event) {
        event.preventDefault();
        axios({
            method: "get",
            url: "https://servicesplusbackend.herokuapp.com/user/login",
            params: { name: name, password: password }
        })
            .then((res => {
                console.log(res.data)
                if (res.data == "authenticated") {
               
                localStorage.setItem("isLoggedln","yes")
             
                window.open("/navabar","_self")
                }
                else {

                    alert(res.data)
                }
            }))

    }

    return (

        <div class='wraps'>
              Login
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name} 
                    id='username'
                    name="name"
                    placeholder="Username"
                    onChange={handlename}
                />

                <input
                    type="password"
                    value={password}
                    name="password"
                    id='password'
                    placeholder=" password"
                    onChange={handlepassword}
                />
               <button  type="submit" value="submit" class='login' >LOG IN</button>
            </form>
      
           

        </div>
    )
}