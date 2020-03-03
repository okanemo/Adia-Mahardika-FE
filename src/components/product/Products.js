import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getAllProduct } from '../redux/actions/product'
import CardProduct from '../product/CardProduct'
import Sidenav from '../layout/Sidenav'
class Products extends Component {
  constructor(props) {
      super(props);

      this.state = {
          product: [],
          category: '',
          selectProduct: null
      }
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

  filterProduct = (event) => {
    event.preventDefault()
    this.setState({
        category: event.target.value
    })
    axios
    .get(`http://localhost:5000/product/?category=${event.target.value}`)
    .then(response => {
        this.setState({ product: response.data.result })
    })
    .catch(error => {
        console.log(error)
    })
  }

  render () {
    const { products } = this.props
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
    products: state.products.products
  }
}

export default connect(mapStateToProps)(Products)
