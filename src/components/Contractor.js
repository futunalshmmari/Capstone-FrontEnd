import React, { Component } from 'react'
import axios from 'axios';
import './contractor.css';
export default class Contractor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contractor: [],

        };
    }
    componentDidMount() {
        axios.get("https://servicesplusbackend.herokuapp.com/Contractor").then(res => {
            const contractor = res.data
            this.setState({ contractor })
            console.log(res.data);
        });
    }
    deleteOpinion(id){
        axios.delete(`https://servicesplusbackend.herokuapp.com/Contractor/delete/${id}`)
        .then(res=>{
            const contractor=this.state.contractor.filter(item=> item.id !== id);
            this.setState({contractor})
        })}
    render() {
        return (
            <><br></br><br></br>
            <h2 className='work-title'>Resumes for Contractors</h2><br></br><br></br>
        <div class="flex-container" >
            {this.state.contractor.map(item=>(
                <div  key={item.id}>
                  <div className='contianer'>
                            <h4 >name :  {item.name}</h4>
                            <h4 > phone :{item.phone}</h4>
                            <h4 > address :{item.address}</h4>
                            <h4 > nationality :{item.nationality}</h4>
                            <h4> category :{item.category}</h4>
                            <button onClick={(e) => this.deleteOpinion(item.id, e)}>option</button>
                           
                         </div>
                 </div>
            ))}
        </div>
        </>)
    }

}
