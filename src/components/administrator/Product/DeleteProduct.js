import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import {connect} from 'react-redux'
import {deleteProduct} from '../../redux/actions/product'

const DeleteProduct = (props) => {
    const{ product, show, onHide, dispatch } = props

    const onCancelDelete = (event) => {
        event.preventDefault()
        onHide()
    }
    const onDeleteProduct = async (event) => {
        event.preventDefault()
        await dispatch(deleteProduct(product.id))
        await onHide()
    }
    return(
        <Modal show={show} onHide={onHide} variant="lg">
            <Modal.Body>
                <p>Are you sure want to delete this {product ? product.name : ""} product ?</p>
            </Modal.Body>
            <Modal.Body align='right'>
                <Button style={{ background: '#4285f4' }} size="sm" onClick={onCancelDelete} style={{ marginRight: "10px" }}>Cancel</Button>
                <Button variant="light" size="sm" onClick={onDeleteProduct}>Delete</Button>
            </Modal.Body>
        </Modal>
    )
}
export default connect()(DeleteProduct)

// import React, { Component } from 'react';
// import { Modal, Button } from 'react-bootstrap';

// import { connect } from 'react-redux';
// import { deleteProduct } from '../../redux/actions/product'

// class DeleteProduct extends Component {
//     render() {
//         const {show, onHide, product } = this.props
//         console.log(show)
        
//         const onCloseDeleteProduct = (event) => {
//             event.preventDefault()
//             onHide()
//         }
//         const onDeleteProduct = async(event) => {
//             event.preventDefault()
//             await this.props.dispatch(deleteProduct(product.id))
//             onHide()
//         }
//         return (
//             <Modal show={show} onHide={onHide} variant="lg">
//             <Modal.Header>
//                 <p>Confirm Untuk Menghapus Product {product ? product.name : ""} ?</p>
//             </Modal.Header>
//             <Modal.Body>
//                 <Button variant="primary" size="sm" onClick={onCloseDeleteProduct} style={{ marginRight: "10px" }}>Cancel</Button>
//                 <Button variant="danger" size="sm" onClick={onDeleteProduct}>Delete</Button>
//             </Modal.Body>
//             </Modal>
//         )
//     }
// }

// export default connect()(DeleteProduct);