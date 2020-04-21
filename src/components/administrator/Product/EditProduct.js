import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import { connect } from 'react-redux';
import { patchProduct } from '../../redux/actions/product'
import { getAllCategory } from '../../redux/actions/category'

class EditProduct extends Component {
    state = {
        name: "",
        description: "",
        image: "",
        price: "",
        quantity: "",
        category: "" || "DEFAULT"
    }

    // onSetValue = (product) => {
    //     this.setState({
    //         name: product.name,
    //         description: product.description,
    //         price: product.price,
    //         quantity: product.quantity,
    //         category: product.category
    //     })
    // }

    // componentWillReceiveProps({ product }) {
    //     this.onSetValue(product);
    // }

    onChangeValue = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onChangeImage = event => {
        this.setState({
            image: event.target.files[0]
        })
    }

    patchProduct = async (event) => {
        event.preventDefault();
        const id = this.props.product.id
        const data = new FormData();
        data.append("name", this.state.name);
        data.append("description", this.state.description);
        data.append("image", this.state.image);
        data.append("price", this.state.price);
        data.append("quantity", this.state.quantity);
        data.append("category", this.state.category);
        if (this.state.image === "") {
            data.delete("image")
            await this.props.dispatch(patchProduct(id, data))
            await this.props.onHide()
        } else {
            await this.props.dispatch(patchProduct(id, data))
            await this.props.onHide()
        }
    }

    // componentDidMount () {
    //     this.props.dispatch(getAllCategory())
    // }
    render() {
        const { show, onHide, categories } = this.props
        return (
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.patchProduct} encType="multipart/form-data">
                        <Form.Group>
                            <Form.Label>NAME</Form.Label>
                            <Form.Control type="text" name="name" onChange={this.onChangeValue} value={this.state.name} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>DESCRIPTION</Form.Label>
                            <Form.Control type="text" name="description" onChange={this.onChangeValue} value={this.state.description} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>PRICE</Form.Label>
                            <Form.Control type="number" name="price" onChange={this.onChangeValue} value={this.state.price} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>STOCK</Form.Label>
                            <Form.Control type="number" name="quantity" onChange={this.onChangeValue} value={this.state.quantity} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>CATEGORY</Form.Label>
                            <Form.Control type="text" placeholder="Enter Category" defaultValue={"DEFAULT"} name="category" onChange={this.onChangeValue} value={this.state.category} as="select">
                                <option value="DEFAULT" disabled>Choose..</option>
                                {categories.map((category,index) => 
                            <option key={index} value={category.id}>{category.name}</option>
                            )}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>IMAGE</Form.Label>
                            <Form.Control type="file" name="image" onChange={this.onChangeImage} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            SUBMIT
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log(state)
        return {
            categories: state.category.categories
        }
    }
export default connect(mapStateToProps)(EditProduct);