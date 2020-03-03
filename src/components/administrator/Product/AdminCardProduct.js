import React, { Fragment } from 'react'
const AdminCardProduct = ({product, onSelectProductDelete}) => {
  const onClickDelete = (event) => {
    event.preventDefault()
    onSelectProductDelete(product)
  }

  return(
    <Fragment>
      <div className='col-6 col-md-4' key={product.id} style={{ marginBottom: "10px", paddingTop: "10px", paddingBottom: "10px"}}>
         <div className='card' style={{height:'450px', width:'300px'}}>
           <div className='view'>
             <img src={product.image} width={400} height={150} className='card-img-top' alt='...' />
             <div className='mask rgba-white-slight' /></div>
           <div className='card-body card-body-cascade'>
           <h6 className="-text font-bold card-title" style={{color:'#4285f4'}}><strong>ID: {product.id}</strong></h6>
           <h8 className="pink-text pb-2 pt-1"><i className="fas fa-utensils"></i> {product.category}</h8>
             <h4 className="-text font-bold card-title" style={{color:'#4285f4'}}><strong>{product.name}</strong></h4>
             <h5 className="pb-2"><strong>Rp. {product.price}</strong></h5>
             <button type='button' className='fa fa-fw fa-trash' style={{ fontSize: '1em', color: 'black', border: 'none', backgroundColor: 'transparent', margin: '5', opacity: '50%' }} onClick={onClickDelete}/>
             <button type='button' className='fa fa-fw fa-pen' style={{ fontSize: '1em', color: 'black', border: 'none', backgroundColor: 'transparent', margin: '5', opacity: '50%' }} />
             <div className="card-footer mdb-white text-muted text-center mt-4 bg-white">
               Stock: {product.quantity} 
             </div>
           </div>
         </div>
       </div>
    </Fragment>
  )
}
export default AdminCardProduct
// import React, {Component} from 'react'
// import DeleteProduct from './DeleteProduct'

// class CardProduct extends Component {
//   state = {
//     selectProductDelete: null,
//     showDeleteProduct: false
//   }
//   onShowDeleteProduct = () => {
//     this.setState({
//         showDeleteProduct: true
//         })
//     }

//   onCloseDeleteProduct = () => {
//     this.setState({
//       showDeleteProduct: false
//       })
//   }
//   onSelectProductDelete = (product) => {
//       this.setState({
//         selectProductDelete: product,
//         showDeleteProduct: true
//       })
//   }
//   onClickDelete = () => {
    
//   }
//   render() {
//   return (
//       <div className='col-6 col-md-4' key={product.id} style={{ marginBottom: "10px", paddingTop: "10px", paddingBottom: "10px"}}>
//         <div className='card' style={{height:'450px', width:'300px'}}>
//           <div className='view'>
//             <img src={product.image} width={400} height={150} className='card-img-top' alt='...' />
//             <div className='mask rgba-white-slight' /></div>
//           <div className='card-body card-body-cascade'>
//           <h6 className="-text font-bold card-title" style={{color:'#4285f4'}}><strong>ID: {product.id}</strong></h6>
//           <h8 className="pink-text pb-2 pt-1"><i className="fas fa-utensils"></i> {product.category}</h8>
//             <h4 className="-text font-bold card-title" style={{color:'#4285f4'}}><strong>{product.name}</strong></h4>
//             <h5 className="pb-2"><strong>Rp. {product.price}</strong></h5>
//             <button type='button' className='fa fa-fw fa-trash' style={{ fontSize: '1em', color: 'black', border: 'none', backgroundColor: 'transparent', margin: '5', opacity: '50%' }} onClick={onClickDelete}/>
            
//             <button type='button' className='fa fa-fw fa-pen' style={{ fontSize: '1em', color: 'black', border: 'none', backgroundColor: 'transparent', margin: '5', opacity: '50%' }} />
//             <div className="card-footer mdb-white text-muted text-center mt-4 bg-white">
//               Stock: {product.quantity} 
//               <DeleteProduct onHide={onHide}/>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
// export default CardProduct