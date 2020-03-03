import React, { Component, Fragment } from 'react'
import Navbar from '../layout/Navbar'
import Products from '../product/Products'

class Home extends Component {
    render(){
        return(
        <Fragment>
            <div>
            <Navbar />
            <Products/>
            </div> 
        </Fragment>           
        )
    }
}
export default Home