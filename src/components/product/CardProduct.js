import React from 'react'
import { Link } from 'react-router-dom'

const CardProduct = ({ product, addCart, parseToRupiah }) => {
  // const selectProduct = (event) => {
  //   event.preventDefault()
  //   selectProductItem(product)
  // }
  const selectProduct = (event) => {
      event.preventDefault()
      addCart(product)
    }
  return (
      <div className='col-6 col-md-4' key={product.id} style={{ marginBottom: "10px", paddingTop: "10px", paddingBottom: "10px"}}>
        <div className='card'>
          <div className='view'>
            <img src={product.image} width={400} height={150} className='card-img-top' alt='...' />
            <div className='mask rgba-white-slight' /></div>
          <div className='card-body card-body-cascade'>
          <h8 className="pink-text pb-2 pt-1"><i className="fas fa-utensils"></i> {product.category}</h8>
            <h4 className="-text font-bold card-title" style={{color:'#4285f4'}}><strong>{product.name}</strong></h4>
            <h5 className="pb-2"><strong>{parseToRupiah(product.price)}</strong></h5>
            <div style={{ float: 'right', marginTop: '-15px' }}>
              <button className='badge badge-pill btn btn-lg btn-primary ' onClick={selectProduct}>ADD</button>
            </div>
            <div className="card-footer mdb-white text-muted text-center mt-4 bg-white">
              Stock: {product.quantity} 
            </div>
          </div>
        </div>
      </div>
  )
}

export default CardProduct

// import React, {Component} from 'react'
// import { Link } from 'react-router-dom'


// import { connect } from 'react-redux'
// import { getAllProduct } from '../redux/actions/product'

// class CardProduct extends Component {
//   getAllProduct () {
//     this.props.dispatch(getAllProduct())
//     // console.lo
//   }
  
//   componentDidMount() {
//     this.getAllProduct()
//   }

//   render(){
//     const { products} = this.props
//   return (
//       <div className='col-6 col-md-4'  style={{ marginBottom: "10px", paddingTop: "10px", paddingBottom: "10px"}}>
//         <div className='card'>
//           <div className='view'>
//             <img src={products.image} width={400} height={150} className='card-img-top' alt='...' />
//             <div className='mask rgba-white-slight' /></div>
//           <div className='card-body card-body-cascade'>
//           <h8 className="pink-text pb-2 pt-1"><i className="fas fa-utensils"></i> {products.category}</h8>
//             <h4 className="-text font-bold card-title" style={{color:'#4285f4'}}><strong>{products.name}</strong></h4>
//             <h5 className="pb-2"><strong>Rp. {products.price}</strong></h5>
//             <div style={{ float: 'right', marginTop: '-15px' }}>
//               <Link to='/' className='badge badge-pill btn btn-lg btn-primary '>ADD</Link>
//             </div>
//             <div className="card-footer mdb-white text-muted text-center mt-4 bg-white">
//               Stock: {products.quantity} 
//             </div>
//           </div>
//         </div>
//       </div>
//   )
// }
// }

// const mapState = (state) => {
//   return {
//     products: state.products.products
//   }
// }

// export default connect(mapState)(CardProduct)
