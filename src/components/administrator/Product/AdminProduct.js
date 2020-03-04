import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'
import { getAllProduct, paginationProduct } from '../../redux/actions/product'
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
    // console.log(product)
    this.setState({
      selectProductDelete: product,
      showDelete: true
    })
  }

  paginationProduct = (event) => {
    // console.log(paginationProduct)
    this.props.dispatch(paginationProduct(event.target.id))
  }
  render () {
    const { products, pagination } = this.props
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
          <div className="row">
                    <nav aria-label="Page navigation example">

                        <ul className="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            {pagination.map((pagination) => (
                                <li class="page-item" key={pagination}><a class="page-link" onClick={this.paginationProduct} id={pagination}>{pagination}</a></li>
                            ))}
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
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
    products: state.products.products,
    pagination: state.products.pagination
  }
}

export default connect(mapStateToProps)(AdminProducts)
