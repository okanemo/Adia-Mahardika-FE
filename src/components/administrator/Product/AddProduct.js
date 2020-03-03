import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import { connect } from 'react-redux';
import { postProduct } from '../../redux/actions/product'

class AddProduct extends Component {
    state = {
        name:'',
        category: 0,
        description:'',
        price: 0,
        quantity: 0,
        image:''
    } 

    onCreateProduct = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(event.target.value)
    }

    onChangeImage = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        })
    }

    postProduct = async (event) => {
        event.preventDefault();
        let data = new FormData();
        data.append("name", this.state.name);
        data.append("description", this.state.description);
        data.append("image", this.state.image);
        data.append("price", this.state.price);
        data.append("quantity", this.state.quantity);
        data.append("category", this.state.category);


        await this.props.dispatch(postProduct(data));
        this.props.onHide();
        // this.props.history.push('/adminproduct')
    }

    render() {
        const { show, onHide } = this.props
        return (
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD PRODUCT</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.postProduct} encType="multipart/form-data">
                        <Form.Group>
                            <Form.Label>Product Name </Form.Label>
                            <Form.Control type="text" placeholder="Enter Product..." name="name" onChange={this.onCreateProduct} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description </Form.Label>
                            <Form.Control type="text" placeholder="Enter Description..." name="description" onChange={this.onCreateProduct} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price </Form.Label>
                            <Form.Control type="text" placeholder="Enter Price..." name="price" onChange={this.onCreateProduct} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control type="text" placeholder="Enter Quantity..." name="quantity" onChange={this.onCreateProduct} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Control type="text" placeholder="Enter Category..."  name="category" onChange={this.onCreateProduct} as="select">
                            <option selected value={0} disabled>Choose Category</option>
                            <option value={'Indonesian Food'}>Indonesian Food</option>
                            <option value={'Beverages'}>Beverages</option>
                            <option value={'Western'}>Western</option>
                            <option value={'Chinese Food'}>Chinese Food</option>
                            <option value={'Middle Eastern'}>Middle Eastern</option>
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
        );
    }
}



export default connect()(AddProduct);