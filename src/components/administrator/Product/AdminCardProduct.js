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
    </Fragment>
  )
}
export default AdminCardProduct