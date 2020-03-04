import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Form, Container, Row, Col, Button, Table } from 'react-bootstrap';

import { connect } from 'react-redux';
import { getAllCategory } from '../../redux/actions/category';

import AddCategory from './AddCategory';
import CategoryItem from './CategoryItem'
import EditCategory from './EditCategory'

class Category extends Component {
  state = {
    showDelete: false,
    selectCategoryDelete: null
  }
  componentDidMount() {
    this.getAllCategory();
  }

  getAllCategory() {
    this.props.dispatch(getAllCategory());
  }
  onShowEdit = event => {
    this.setState({
        showEdit: true
    })
  }

  onCloseEdit = () => {
      this.setState({
          showEdit: false
      })
  }
  onSelectCategoryEdit = category => {
    this.setState({
        selectCategoryEdit: category,
        showEdit: true
    })
  }

  render() {
    const { categories } = this.props;
    const listCategories = categories.map((category, index) => <CategoryItem key={index} category={category} onSelectCategoryEdit={this.onSelectCategoryEdit}/>);
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
                {listCategories}
              </tbody>
            </Table>
          </Row>
          <EditCategory show={this.state.showEdit} onHide={this.onCloseEdit} category={this.state.selectCategoryEdit} />
        </Container>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.category.categories
  }
}

export default connect(mapStateToProps)(Category);