import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import { connect } from "react-redux";
import { searchProduct, modifyProduct } from "../redux/actions/product";
import { withRouter } from "react-router"
class AdminNavbar extends Component {
    state = {
        sortBy: '',
        orderBy:'',
        name:'',
        category:'',
        page:''
    }
    // searchProduct = (event) => {
    //     // console.log(event.target.value)
    //     this.props.dispatch(searchProduct(event.target.value));
    //   }
    searchProduct = (event) => {

    this.props.history.push(`?sortBy=${this.state.sortBy}&orderBy=${this.state.orderBy}&name=${event.target.value}&category=${this.props.category}&page=${this.state.page}`)
    
    this.props.dispatch(modifyProduct(this.state.sortBy, this.state.orderBy, event.target.value, this.state.category, this.state.page));
    }
    render(){
        // const { onLogout } = this.props
    return (
        <nav className='navbar sticky-top navbar-expand-lg navbar-light' style={{ background: '#4285f4' }}>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              
              <div className='container'>
                  <div className='col-lg-12'>
                      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                      <ul class="navbar-nav mr-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{margin: 'auto', fontFamily: 'Arial Black, Gadget, sans-serif', fontSize:'15px', padding:'10px', color: 'white' }}>
                            Administrator
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link class="dropdown-item" to='/adminproduct'>Product</Link>
                            <Link class="dropdown-item" to="/admincategory">Category</Link>
                            <Link class="dropdown-item" to="/adminuser">Cashier</Link>
                            </div>
                        </li>
                        </ul>
                          <ul className='navbar-nav mr-auto' style={{margin:'auto'}}>
                              <li className='nav-item' >
                                  <Link className='nav-link' to='/' style={{margin: 'auto', fontFamily: 'Arial Black, Gadget, sans-serif', fontSize:'20px', padding:'10px', color: 'white' }}>The Mahardika FnB</Link>
                              </li>
                          </ul>
                          {/* <form className='form-inline my-3 my-lg-0'>
                              <input className='form-control mr-sm-2' type='search' placeholder='Search Name' aria-label='Search' />
                              <button class="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.searchProduct}>Search</button>
                          </form> */}
                          <form className='form-inline my-3 my-lg-0'>
                              <input className='form-control mr-sm-2' type='text' placeholder='Search Name' aria-label='Search' onChange={this.searchProduct}/>
                          </form>
                      </div>
                  </div>
                  {/* <p style={{margin: 'auto', fontFamily: 'Arial Black, Gadget, sans-serif',  fontSize:'15px'}}>Hi, Adia {localStorage.getItem('name')} <Link to="" onClick={onLogout.bind(this)}>Logout</Link></p> */}
              </div>
          </nav>
      )
    }
}

export default withRouter(connect()(AdminNavbar))
