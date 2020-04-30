import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import { connect } from "react-redux";
import { patchCategory } from "../../redux/actions/category";

class EditCategory extends Component {
  state = {
    id: "",
    name: "",
  };

  componentWillReceiveProps({ category }) {
    console.log(category);
    this.onSetValue(category);
  }

  onSetValue = (category) => {
    this.setState({
      id: category.id,
      name: category.name,
    });
  };

  onChangeValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  patchCategory = async (event) => {
    event.preventDefault();
    const id = this.props.category.id;
    const data = {
      name: this.state.name,
    };
    await this.props.dispatch(patchCategory(data, id));
    await this.props.onHide();
  };

  render() {
    const { show, onHide } = this.props;
    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT CATEGORY</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.patchCategory}>
            <Form.Group>
              <Form.Label>NAME</Form.Label>
              <Form.Control
                type="text"
                placeholder="Insert Name"
                name="name"
                onChange={this.onChangeValue}
                value={this.state.name}
              />
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

export default connect()(EditCategory);
