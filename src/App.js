import React, { Component} from 'react'
import { BrowserRouter,Route ,Routes  } from 'react-router-dom'
import Home from './components/Home'
import User from './components/User'
import Serivices from './components/Services'
import Feedback from './components/Feedback'
import Contractor from './components/Contractor'
import Opinion from './components/Opinion'
import Nursemaid from'./components/Nursemaid'
import Housemaid from './components/Housemaid'
import Driver from './components/Driver'
import Login from'./components/Login'
import Navabar from './components/Navabar'


 class App extends Component {
  render() {
    return (
<div>

<BrowserRouter>

          <Routes>

           <Route path="/" element={<Home/>}>
           
           
             <Route path="/user" element={<User />} /> 
       
              <Route path="/contractor" element={<Contractor/>}> </Route>   
              <Route path="/navabar" element={<Navabar/>}/>          
             <Route path="/services" element={<Serivices />} /> 
             <Route path="/feedback"  element={<Feedback />} /> 
             <Route path="/nursemaid"  element={<Nursemaid />} /> 
             <Route path="/housemaid"  element={<Housemaid />} /> 
             <Route path="/driver"  element={<Driver />} />
         
          <Route path="/opinion" element={<Opinion/>}/>
          <Route path="/login" element={<Login/>}/>
          </Route>
          
          </Routes>
       </BrowserRouter>
</div>
    )
  }
}

export default App

