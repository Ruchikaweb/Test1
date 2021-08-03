import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom' 
import Home  from'../component/Home'
import Sales from '../component/Dashboard/Sales'
import Finance from '../component/Dashboard/Finance' 
import Productsingle from '../component/Dashboard/Ecommerse/Productsingle'
import Productlist from '../component/Dashboard/Ecommerse/Productlist'
import Productcheckout from '../component/Dashboard/Ecommerse/productcheckout'
import Infulen from '../component/Dashboard/Infulencer/infulen'
import Infulencerfinder from '../component/Dashboard/Infulencer/infulenserfinder'
import Signup from '../component/logindetails/signup'
import Forgetpwd from '../component/logindetails/forgetpwd'
import Login from '../component/logindetails/logoin'
const Routing = ()=>{
    return( 
        <BrowserRouter>  
            <Route exact path='/' component={Home}/>
            <Route path="/finance" component={Finance}/> 
            <Route path="/Sales" component={Sales}/>
            <Route path="/productlist" component={Productlist}/>
            <Route path="/Productsingle" component={Productsingle}/>
            <Route path="/productcheckout" component={Productcheckout}/>
            <Route path="/infulen" component={Infulen}/>
            <Route path="/infulencerfinder" component={Infulencerfinder}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/forgetpwd" component={Forgetpwd}/>
            <Route path="/login" component={Login}/>
        </BrowserRouter>
    )
} 

export default Routing ;