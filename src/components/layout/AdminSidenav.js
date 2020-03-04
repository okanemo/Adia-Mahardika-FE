import React, { Component } from 'react'
import SideNav, { NavItem, NavIcon } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { filterProduct, sortProduct } from '../redux/actions/product';
import {getAllCategory} from '../redux/actions/category'
// import { sortProduct } from '../redux/actions/product'
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
      this.setState({
        category: event
      })
      console.log(event)
      this.props.dispatch(filterProduct( event));
    }
    sortProduct = (event) => {
      this.setState({
        sortBy: event.target.value
      })
      this.props.dispatch(sortProduct(event.target.value, this.state.sortBy));
    }
    componentDidMount () {
      this.props.dispatch(getAllCategory())
  }

  render(){
    const { categories } = this.props
  return (
      <SideNav style={{ backgroundColor: 'transparent' }}>
        <SideNav.Nav>
          <NavItem>
            <NavIcon style={{ backgroundColor: 'white' }}>
              <div className='col' >
                <div className='p-3'>
                <div class='btn-group dropright' style={{display: 'block'}}>
                  <button type='button' className='fa fa-fw fa-filter' style={{ fontSize: '1.75em', color: '#e91e63', display: 'block', border: 'none', backgroundColor: 'transparent', marginTop: '80px', padding: '10px'}} data-target='#sort' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' />
                  <div class='dropdown-menu'>
                  <button onClick={this.filterProduct} class='dropdown-item' value={''} >All</button>
                  {categories.map((category,index) => 
                  <button onClick={() => this.filterProduct(category.id)} class='dropdown-item' key={index} value={category.id}>{category.name}</button>
                  )}
                  {/* <button onClick={this.filterProduct} class='dropdown-item' value={'Indonesian Food'} >Indonesian Food</button>
                  <button onClick={this.filterProduct} class='dropdown-item' value={'Western'}>Western</button>
                  <button onClick={this.filterProduct} class='dropdown-item' value={'Chinese Food'}>Chinese Food</button>
                  <button onClick={this.filterProduct} class='dropdown-item' value={'Middle Eastern'}>Middle Eastern</button>
                  <button onClick={this.filterProduct} class='dropdown-item' value={'Beverages'}>Beverages</button> */}
                  </div>
                </div>
                <div class='btn-group dropright' style={{display: 'block', marginTop:"-70px", marginLeft:"5px"}}>
                  <button type='button' className='fa fa-fw fa-sort' style={{ fontSize: '1.75em', color: '#e91e63', display: 'block', border: 'none', backgroundColor: 'transparent', marginTop: '80px', padding: '10px' }} data-target='#sort' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' />
                  <div class='dropdown-menu'>
                    <button onClick={this.sortProduct} class='dropdown-item' value={'Price'} >Price</button>
                  </div>
                </div>

                {/* Add Product */}
                <div class='btn-group dropright' style={{display: 'block',marginTop:"10px", marginLeft:"2px"}}>
                <button type='button' className='fa fa-fw fa-plus' style={{ fontSize: '1.75em', color: '#e91e63', display: 'block', border: 'none', backgroundColor: 'transparent', padding: '10px' }}  data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'/>
                <div class='dropdown-menu'>
                <button onClick={this.onShowAddProduct} class='dropdown-item'>Add Product</button>
                <button onClick={this.onShowAddCategory} class='dropdown-item'>Add Category</button>
                </div>
                </div>
                <AddProduct show={this.state.showAddProduct} onHide={this.onCloseAddProduct}/>
                </div>
              </div>
            </NavIcon>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    categories: state.category.categories
  }
}
export default connect (mapStateToProps)(AdminSidenav)

