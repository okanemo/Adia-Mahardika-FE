import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import { connect } from 'react-redux';
import { postCategory } from '../../redux/actions/category'

class AddCategory extends Component {
    state = {
        name:''
    } 

    onCreateCategory = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    postCategory = async (event) => {
        event.preventDefault();

        await this.props.dispatch(postCategory(this.state));
        await this.props.onHide();
        // this.props.history.push('/adminproduct')
    }

    render() {
        const { show, onHide } = this.props
        return (
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD CATEGORY</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.postCategory} >
                        <Form.Group>
                            <Form.Label>Category Name </Form.Label>
                            <Form.Control type="text" placeholder="Enter Category..." name="name" onChange={this.onCreateCategory} />
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



export default connect()(AddCategory);