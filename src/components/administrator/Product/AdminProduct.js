import React, { Component, Fragment } from 'react'

import { connect } from 'react-redux'
import { getAllProduct, paginationProduct, modifyProduct } from '../../redux/actions/product'
import AdminCardProduct from './AdminCardProduct'
import DeleteProduct from './DeleteProduct'
import EditProduct from './EditProduct'
import Sidenav from '../../layout/Sidenav'
import AdminNavbar from '../../layout/AdminNavbar'
import { withRouter } from "react-router"
class AdminProducts extends Component {
      state = {
          sortBy: '',
          orderBy:'',
          name:'',
          category:'',
          page:'',
          showDelete: false,
          showEdit: false,
          selectProductDelete: null,
          selectProductEdit: null,
      }

  // Add Product

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

  handleShowEdit = () => {
    this.setState({
      showEdit: true
    })
  }
  handleCloseEdit = () => {
    this.setState({
      showEdit: false
    })
  }

  onSelectProductEdit = (product) => {
    // console.log(product)
    this.setState({
      selectProductEdit: product,
      showEdit: true
    })
  }
  parseToRupiah(number)
  {
	var rupiah = '';		
	var numberrev = number.toString().split('').reverse().join('')
	for(var i = 0; i < numberrev.length; i++) if(i%3 == 0) rupiah += numberrev.substr(i,3)+'.'
	return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('')
  }
  // paginationProduct = (event) => {
  //   // console.log(paginationProduct)
  //   this.props.dispatch(paginationProduct(event.target.id))
  // }
  paginationProduct = (event) => {
    this.props.history.push(`/adminproduct?sortBy=${this.state.sortBy}&orderBy=${this.state.orderBy}&name=${this.state.name}&category=${this.props.category}&page=${event.target.id}`)
    console.log(event)
    this.props.dispatch(modifyProduct( this.state.sortBy, this.state.orderBy, this.state.name, this.state.category, event.target.id));
  }
  render () {
    const { products, pagination } = this.props
    // console.log(this.props)
    const showProduct = products.map((item, index) => {
      return (
        <AdminCardProduct product={item} key={index} onSelectProductDelete={this.onSelectProductDelete} onSelectProductEdit={this.onSelectProductEdit} parseToRupiah={this.parseToRupiah}/>
      )
    })
    return (
      <Fragment>
      <AdminNavbar/>
        <Sidenav sortCategory={this.sortCategory} sortBy={this.state.sortBy} orderBy={this.state.orderBy} name={this.state.name} category={this.state.category} page={this.state.page} />
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
          </div>
        </div>
        <DeleteProduct show={this.state.showDelete} onHide={this.handleCloseDelete} product={this.state.selectProductDelete}/>
        <EditProduct show={this.state.showEdit} onHide={this.handleCloseEdit} product={this.state.selectProductEdit}/>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products,
    pagination: state.products.pagination
  }
}

export default withRouter(connect(mapStateToProps)(AdminProducts))
