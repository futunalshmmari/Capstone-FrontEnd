
import React, { Component } from 'react'
import {Link} from "react-router-dom"
import axios from 'axios';
import './services.css';

export default class Services extends Component {
    constructor(props) {
        super(props)
        this.state = {
            services: [],

        };
    }
    componentDidMount() {
        axios.get("https://servicesplusbackend.herokuapp.com/Services").then(res => {
            const services = res.data
            this.setState({ services })
            console.log(res.data);
        });



      
        axios({
            method: "post",
            url: "https://servicesplusbackend.herokuapp.com/Services/add",
            data: {
                id: 2,
                category: "driver ",
                description: "Application takes 2 months for new Driver",
                img:"https://mzadqatar.com//uploads/images/2020/10/24/12066148-89315251d1.png",
                link: "/driver"



            }


        })
        axios({
            method: "post",
            url: "https://servicesplusbackend.herokuapp.com/Services/add",
            data: {
                id: 3,
                category: "Maid ",
                description: "Application takes 3 months",
                img: "https://www.alyaum.com/uploads/imported_images/media/article/3_frruZDX.jpg",
                link: "/housemaid"



            }
        })
        axios({
            method: "post",
            url: "https://servicesplusbackend.herokuapp.com/Services/add",
            data: {
                id: 4,
                category: "Nanny ",
                description: "Babysitter for 1-10 year olds",
                img:"https://www.tutoraround.com/uploads/1/1/7/7/117782982/published/nannies-near-me.png?1594292267",
                link:"/nursemaid"



            }


        })

    }
   




    render() {
        return (
            <>
         
        
            <br></br>
            <h2 className='work-title'>Services</h2><br></br><br></br>
                <div className='flexer' >


                    {this.state.services.map(item => (
                        <div className='card' key={item.id}>
                            <div className='contianer'>
                                <img className='img' src={item.img} />
                                <h4 >{item.category}</h4>
                                <hr className='line' />
                                <p>2022 <a href="#">...</a></p>
                                <p>{item.description}</p>
                                <div class="tooltip">
                           
                                <Link  to={item.link}>{item.link.substring(1)}</Link>
                                </div>
                            </div>

                        </div>
                    ))}



                </div>
            </>


// <div >
// 		<div class="common_space">
// 			<div class="blog_header">
// 			<h2>Our <span>Blog</span></h2>
// 			<p>It is a long established fact that a reader will be of a page when <br/> established fact looking at its layout.</p>
// 			</div>
//             {this.state.services.map(item => (
// 			<div class="blog_item">
			
// 					<div class="blog_box"key={item.id}>
// 						<div class="blog_img">
// 							<img src={item.img} alt=""/>
// 						</div>
// 						<div class="bbc">
// 							<h5><a href="#">{item.category}</a></h5>
// 							<p>11 March 2018 <a href="#"> By Kerri</a></p>
// 							<p>{item.description}.</p>
// 							<p><a class="bf" href={item.link}> {item.link.substring(1)}...</a></p>
                           
// 						</div></div>
//                         </div>
               
                       
//                         ))}
                         
// 					</div>
// </div>
            )
    }

}