import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Container, Row, Col, Button, Table } from 'react-bootstrap';

import { connect } from 'react-redux';
import { getAllCategory } from '../../redux/actions/category';

import AddCategory from './AddCategory';
import CategoryItem from './AdminCategoryItem'

class Category extends Component {

  componentDidMount() {
    this.getAllCategory();
  }

  getAllCategory() {
    this.props.dispatch(getAllCategory());
  }

  render() {
    const { category } = this.props;
    const listCategory = category.map((category, index) => <CategoryItem key={index} category={category} />);
    return (
      <Fragment>
        <Container>
          <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Col>
              <h4>CATEGORY</h4>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
          </Row>
          <Row>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                </tr>
              </thead>
              <tbody>
                {listCategory}
              </tbody>
            </Table>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

const categoryStateToProps = (state) => {
  return {
    category: state.category.category
  }
}

export default connect(categoryStateToProps)(Category);