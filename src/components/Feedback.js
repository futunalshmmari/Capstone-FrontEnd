import React from 'react';
import axios from "axios"
// import { Link } from 'react-router-dom';
import { useState } from "react";
import './feedback.css'
// import { Link } from 'react-router-dom';
function Feedback() {
  const [id, setId] = useState({ id: "" })
  const [subject, setSubject] = useState({ subject: "" })
  const [description, setDescription] = useState({ description: "" })
  const [user, setUser] = useState({ use: "" })
  const [services, setServices] = useState({ services: "" })
  // let userid = { "id": user }
  // let servicesid = { "id": services }
  let x = {subject: subject, description: description, user: {id:user}, services: {id:services} }
  
 // console.log(x)
  function Register(event) {
    event.preventDefault()
    console.log(x)
    axios({
      method: "post",
      url: 'https://servicesplusbackend.herokuapp.com/Feedback/add',
      data:
        x
    });
  }
  return (
    <div>
      <div class="contact_form">
					<form>
			            <div class="row">
			                <div class="column">
			                    <label for="ID">ID</label>
			                    <input type="text" id="name" placeholder="ID.." onChange={(event) => { setId(event.target.value) }}/>
			                </div>
			                <div class="column">
			                    <label for="IDuser">ID user</label>
			                    <input type="text" id="text" placeholder="ID user.." onChange={(event) => { setUser(event.target.value) }}/>
			                </div>
			            </div>
			            <div class="row">
			                <div class="column">
			                    <label for="IDservices">ID services</label>
			                    <input type="text" id="IDservices" placeholder="ID services.. " onChange={(event) => { setServices(event.target.value) }}/>
			                </div>
			                <div class="column">
			                    <label for="Subject">Subject</label>
			                    <input type="text" id="Subject" placeholder="Subject.." onChange={(event) => { setSubject(event.target.value) }}/>
			                </div>
			            </div>
			            <div class="row" id="formrow">
			                <div class="column">
			                    <label for="issue">Describe your issue</label>
			                    <textarea id="issue" placeholder="Describe your issue in detail here" rows="3"  onChange={(event) => { setDescription(event.target.value) }}></textarea>
			                </div>
			            </div>
                    <button  type="submit" value="Send Message" onClick={Register}>Submit</button>
        			</form>
				</div>

    </div>
  );



}
export default Feedback