import React, { Component, Fragment } from 'react'
import AdminNavbar from '../layout/AdminNavbar'
import AdminSidenav from '../layout/AdminSidenav'
import AdminProducts from '../administrator/Product/AdminProduct'
import AdminCategory from './Category/Category'

class Administrator extends Component {
    render(){
        return(
        <Fragment>
            <div>
            <AdminNavbar />
            <AdminSidenav/>
            <AdminProducts/>
            </div> 
        </Fragment>           
        )
    }
}
export default Administrator