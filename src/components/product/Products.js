import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getAllProduct, paginationProduct } from '../redux/actions/product'
import CardProduct from '../product/CardProduct'
import Sidenav from '../layout/Sidenav'
class Products extends Component {
      state = {
          product: [],
          category: '',
          selectProduct: null
      }

  actSelectProduct = (products) => {
    this.setState({
        selectProduct: products
    })
  }

  getAllProduct () {
    this.props.dispatch(getAllProduct())
    // console.log(this.getAllProduct)
  }

  componentDidMount () {
   this.getAllProduct()
  }

  paginationProduct = (event) => {
    // console.log(paginationProduct)
    this.props.dispatch(paginationProduct(event.target.id))
  }

  render () {
    const { products, pagination } = this.props
    const showProduct = products.map((item, index) => {
      return (
        <CardProduct product={item} key={index} selectProductItem={this.actSelectProduct}/>
      )
    })
    return (
      <Fragment>
      <Sidenav filterProduct={this.filterProduct}/>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-10'>
            <div className='row' style={{display:'flex', overflowY:'scroll', height:'90vh'}}>
              {showProduct}
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
          <div className='col-lg-2'>
                        Rencananya Cart
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps)(Products)
