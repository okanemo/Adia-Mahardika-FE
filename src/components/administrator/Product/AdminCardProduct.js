import React, { Fragment } from 'react'
import './AdminProduct.css'
const AdminCardProduct = ({product, onSelectProductDelete, onSelectProductEdit, parseToRupiah}) => {
  const onClickDelete = (event) => {
    event.preventDefault()
    onSelectProductDelete(product)
  }

  const onClickEdit = (event) => {
    event.preventDefault()
    onSelectProductEdit(product)
  }

  return(
    <Fragment>
      <tr>
      <td class='manageProduct'>
        <button type="button" class="btn btn-sm btn-outline-delete" data-toggle='modal' data-target='#deleteModal' style={{borderRadius:25, fontSize:'12px', color:'white'}} onClick={onClickDelete} data-dismiss='modal'>Delete</button>
        <button type="button" class="btn btn-sm btn-edit" data-toggle='modal' data-target='#editModal' style={{borderRadius:25, fontSize:'12px', color:'white'}} onClick={onClickEdit}>Edit</button>
    </td>
    <td class='itemProduct'>{product.id}</td>
    <td class='itemProduct'>{product.name}</td>
    <td class='descProduct'>{product.description}</td>
    <td class='itemProduct'><img src={product.image}alt={product.image} style={{ maxHeight: 50 }}/></td>
    <td class='itemProduct'>{parseToRupiah(product.price)}</td>
    <td class='itemProduct'>{product.quantity}</td>
    <td class='itemProduct'>{product.category}</td>
    <td class='descProduct'>{product.date_created}</td>
    <td class='descProduct'>{product.date_updated}</td>
    </tr>
      {/* <div className='col-6 col-md-4' key={product.id} style={{ marginBottom: "10px", paddingTop: "10px", paddingBottom: "10px"}}>
         <div className='card' >
           <div className='view'>
             <img src={product.image} width={400} height={150} className='card-img-top' alt='...' />
             <div className='mask rgba-white-slight' /></div>
           <div className='card-body card-body-cascade'>
           <h6 className="-text font-bold card-title" style={{color:'#4285f4'}}><strong>ID: {product.id}</strong></h6>
           <h8 className="pink-text pb-2 pt-1"><i className="fas fa-utensils"></i> {product.category}</h8>
             <h4 className="-text font-bold card-title" style={{color:'#4285f4'}}><strong>{product.name}</strong></h4>
             <h5 className="pb-2"><strong>{parseToRupiah(product.price)}</strong></h5>
             <button type='button' className='fa fa-fw fa-trash' style={{ fontSize: '1em', color: 'black', border: 'none', backgroundColor: 'transparent', margin: '5', opacity: '50%' }} onClick={onClickDelete}/>
             <button type='button' className='fa fa-fw fa-pen' style={{ fontSize: '1em', color: 'black', border: 'none', backgroundColor: 'transparent', margin: '5', opacity: '50%' }} onClick={onClickEdit}/>
             <div className="card-footer mdb-white text-muted text-center mt-4 bg-white">
               Stock: {product.quantity} 
             </div>
           </div>
         </div>
       </div> */}
    </Fragment>
  )
}
export default AdminCardProduct