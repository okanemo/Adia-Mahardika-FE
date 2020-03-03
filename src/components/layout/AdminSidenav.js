import React, { Component } from 'react'
import SideNav, { NavItem, NavIcon } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { filterProduct } from '../redux/actions/product';
import { connect } from "react-redux";
import AddProduct from '../administrator/Product/AddProduct'

class AdminSidenav extends Component {
state = {
    showAddProduct: false,
    showAddCategory: false
    }

    onShowAddProduct = () => {
    this.setState({
      showAddProduct: true
        })
    }

    onCloseAddProduct = () => {
    this.setState({
      showAddProduct: false
        })
    }

    onShowAddCategory = () => {
        this.setState({
          showAddCategory: true
        })
    }
    
    onCloseAddCategory = () => {
    this.setState({
      showAddCategory: false
        })
    }
  filterProduct = (event) => {
    this.props.dispatch(filterProduct(event.target.value));
  }
  render(){
  return (
      <SideNav style={{ backgroundColor: 'transparent' }}>
        <SideNav.Nav>
          <NavItem>
            <NavIcon style={{ backgroundColor: 'white' }}>
              <div className='col'>
                <div class='btn-group dropright'>
                  <button type='button' className='fa fa-fw fa-filter' style={{ fontSize: '1.75em', color: '#e91e63', display: 'block', border: 'none', backgroundColor: 'transparent', marginTop: '80px', padding: '10px' }} data-target='#sort' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' />
                  <div class='dropdown-menu'>
                    <button onClick={this.filterProduct} class='dropdown-item' value={'Indonesian Food'} >Indonesian Food</button>
                    <button onClick={this.filterProduct} class='dropdown-item' value={'Western'}>Western</button>
                    <button onClick={this.filterProduct} class='dropdown-item' value={'Chinese Food'}>Chinese Food</button>
                    <button onClick={this.filterProduct} class='dropdown-item' value={'Middle Eastern'}>Middle Eastern</button>
                    <button onClick={this.filterProduct} class='dropdown-item' value={'Beverages'}>Beverages</button>
                  </div>
                </div>

                {/* Add Product */}
                <div class='btn-group dropright'>
                <button type='button' className='fa fa-fw fa-plus' style={{ fontSize: '1.75em', color: '#e91e63', display: 'block', border: 'none', backgroundColor: 'transparent', marginTop: '80px', padding: '10px' }}  data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'/>
                <div class='dropdown-menu'>
                <button onClick={this.onShowAddProduct} class='dropdown-item'>Add Product</button>
                <button onClick={this.onShowAddCategory} class='dropdown-item'>Add Category</button>
                </div>
                </div>
                <AddProduct show={this.state.showAddProduct} onHide={this.onCloseAddProduct}/>


              </div>
            </NavIcon>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    )
  }
}
const sidenavStateToProps = (state) => {
  return {
    products: state.products.products
  }
}
export default connect (sidenavStateToProps)(AdminSidenav)

