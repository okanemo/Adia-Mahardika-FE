import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import { connect } from 'react-redux';
import { patchCategory } from '../../redux/actions/category'

class EditCategory extends Component {
    state = {
        nameCategory: ''
    }

    componentWillReceiveProps({ category }) {
        this.onSetValue(category);
    }

    onSetValue = (category) => {
        this.setState({
            nameCategory: category.nameCategory
        })
    }

    onChangeValue = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    patchCategory = async (event) => {
        event.preventDefault()
        const categoryId = this.props.category.id
        await this.props.dispatch(patchCategory(categoryId, this.state))
        await this.props.onHide()
    }

    render() {
        const { show, onHide } = this.props
        return (
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>EDIT CATEGORY</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.updateCategory}>
                        <Form.Group>
                            <Form.Label>NAME</Form.Label>
                            <Form.Control type="text" placeholder="Insert Name" name="nameCategory" onChange={this.onChangeValue} />
                        </Form.Group>
                        <Button align='right' variant="primary" type="submit">
                            SUBMIT
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        );
    }
}



export default connect()(EditCategory);