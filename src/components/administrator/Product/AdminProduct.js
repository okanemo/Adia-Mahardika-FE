import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'
import { getAllProduct } from '../../redux/actions/product'
import AdminCardProduct from './AdminCardProduct'
import DeleteProduct from './DeleteProduct'
import AdminSidenav from '../../layout/AdminSidenav'
import AdminNavbar from '../../layout/AdminNavbar'
class AdminProducts extends Component {
      state = {
          product: [],
          showDelete: false,
          selectProductDelete: null,
          selectProduct: null

      }

  // Add Product
  actSelectProduct = (products) => {
    this.setState({
        selectProduct: products
    })
  }

  getAllProduct () {
    this.props.dispatch(getAllProduct())
  }

  componentDidMount () {
   this.getAllProduct()
  }

  sortCategory = (event) => {
    event.preventDefault()
    this.setState({
        category: event.target.value
    })
  }

  handleShowDelete = () => {
    this.setState({
      showDelete: true
    })
  }
  handleCloseDelete = () => {
    this.setState({
      showDelete: false
    })
  }

  onSelectProductDelete = (product) => {
    this.setState({
      selectProductDelete: product,
      showDelete: true
    })
  }

  render () {
    const { products } = this.props
    const showProduct = products.map((item, index) => {
      return (
        <AdminCardProduct product={item} key={index} selectProductItem={this.actSelectProduct} onSelectProductDelete={this.onSelectProductDelete}/>
      )
    })
    return (
      <Fragment>
      <AdminNavbar/>
        <AdminSidenav sortCategory={this.sortCategory}/>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10'>
              <div className='row'>
                {showProduct}
              </div>
            </div>
          </div>
        </div>
        <DeleteProduct show={this.state.showDelete} onHide={this.handleCloseDelete} product={this.state.selectProductDelete}/>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    products: state.products.products
  }
}

export default connect(mapStateToProps)(AdminProducts)
