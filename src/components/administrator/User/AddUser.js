import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import { connect } from 'react-redux';
import { postUser } from '../../redux/actions/user'

class AddUser extends Component {
    state = {
        name:''
    } 

    onCreateUser = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    postUser = async (event) => {
        event.preventDefault();

        await this.props.dispatch(postUser(this.state));
        await this.props.onHide();
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
                    <Form onSubmit={this.postUser} encType="multipart/form-data">
                        <Form.Group>
                            <Form.Label>User Name </Form.Label>
                            <Form.Control type="text" placeholder="Enter Name..." name="name" onChange={this.onCreateUser} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="text" placeholder="Enter Email..." name="description" onChange={this.onCreateUser} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password </Form.Label>
                            <Form.Control type="password" placeholder="Enter Password..." name="password" onChange={this.onCreateUser} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Status</Form.Label>
                            <Form.Control type="text" placeholder="Enter Status..."  name="status" onChange={this.onCreateUser} as="select">
                            <option selected value={0} disabled>Choose Status</option>
                            <option selected value={1} >Administrator</option>
                            <option selected value={2} >Cashier</option>
                            </Form.Control>
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



export default connect()(AddUser);