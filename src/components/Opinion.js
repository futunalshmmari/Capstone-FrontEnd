import React, { Component } from 'react'
import axios from 'axios';
import './opinion.css'
export default class Opinion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opinion: [],

    };
  }

  componentDidMount() {
    axios.get("https://servicesplusbackend.herokuapp.com/Feedback").then(res => {
      const opinion = res.data
      this.setState({ opinion })
    });
  }

  deleteOpinion(id) {
    axios.delete(`https://servicesplusbackend.herokuapp.com/Feedback/delete/${id}`)
      .then(res => {
        const opinion = this.state.opinion.filter(item => item.id !== id);
        this.setState({ opinion })
      })
  }
  render() {
    return (<div><br></br>
      <h1>Feedback</h1>
     
        <figure class="snip1540">
          {this.state.opinion.map((item => (
            <div key={item.id}>
             <br></br> <br></br> <br></br> <br></br> <br></br>
              <div class="profile-image"><img src="https://instaker.com/uploads/img/user-img.png" alt="profile-sample1" />
          <div class="icons"><a href="#"><i class="ion-social-reddit"></i></a>
            <a href="#"> <i class="ion-social-twitter"></i></a>
            <a href="#"> <i class="ion-social-vimeo"></i></a>
          </div>
          </div>
          <figcaption>
            <h1>subject</h1>
              <p>{item.subject}</p>
              <h1>description</h1>
              <p>{item.description}</p>
              <h3> email:</h3>
              <p>{item.user.email}</p>
              <h3>services</h3>
              <p>{item.services.category}</p>
              
 
              <button onClick={(e) => this.deleteOpinion(item.id, e)}>Delete</button>
              </figcaption>

            </div>
          )))}
             </figure> 

    </div>)


  }

}
