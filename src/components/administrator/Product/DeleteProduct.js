import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import {connect} from 'react-redux'
import {deleteProduct} from '../../redux/actions/product'

const DeleteProduct = (props) => {
    const{ product, show, onHide } = props
    const onCancelHandle = (event) => {
        event.preventDefault()
        onHide()
    }
    const onDeleteHandle = async (event) => {
        console.log("inidia")
        event.preventDefault()

        await this.props.dispatch(deleteProduct(product.id))
    }
    return(
        <Modal show={show} onHide={onHide} variant="lg">
            <Modal.Header>
                <p>Apakah Anda Yakin Ingin Menghapus Book {product ? product.name : ""} ini ?</p>
            </Modal.Header>
            <Modal.Body>
                <Button variant="primary" size="sm" onClick={onCancelHandle} style={{ marginRight: "10px" }}>Cancel</Button>
                <Button variant="danger" size="sm" onClick={onDeleteHandle}>Delete</Button>
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