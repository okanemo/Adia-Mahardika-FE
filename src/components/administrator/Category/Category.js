import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

import { connect } from 'react-redux';
import { getAllCategory } from '../../redux/actions/category';
import AdminNavbar from '../../layout/AdminNavbar'
import AdminSidenav from '../../layout/AdminSidenav'
import CategoryItem from './CategoryItem'
import EditCategory from './EditCategory'
import DeleteCategory from './DeleteCategory'

class Category extends Component {
  state = {
    showEdit: false,
    showDelete: false,
    selectCategoryEdit: null,
    selectCategoryDelete: null
  }
  componentDidMount() {
    this.getAllCategory();
  }

  getAllCategory() {
    this.props.dispatch(getAllCategory());
  }
  onShowEdit = () => {
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

  onShowDelete = () => {
    this.setState({
      showDelete: true
    })
  }
  onCloseDelete =() => {
    this.setState({
      showDelete: false
    })
  }
  onSelectCategoryDelete = category => {
    this.setState({
      selectCategoryDelete: category,
      showDelete: true
    })
  }

  render() {
    const { categories } = this.props;
    const listCategories = categories.map((category, index) => <CategoryItem key={index} category={category} onSelectCategoryEdit={this.onSelectCategoryEdit} onSelectCategoryDelete={this.onSelectCategoryDelete}/>);
    return (
      <Fragment>
        <AdminNavbar/>
        <AdminSidenav/>
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
          <DeleteCategory show={this.state.showDelete} onHide={this.onCloseDelete} category={this.state.selectCategoryDelete} />
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