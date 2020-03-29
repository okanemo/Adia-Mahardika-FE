import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import AdminNavbar from '../../layout/AdminNavbar'
import AdminSidenav from '../../layout/AdminSidenav'
import { connect } from 'react-redux';
import { getAllUser } from '../../redux/actions/user';
import UserItem from './UserItem'

class User extends Component {

  componentDidMount() {
    this.getAllUser();
  }

  getAllUser() {
    this.props.dispatch(getAllUser());
  }

  render() {
    const { user } = this.props;
    const listUser = user.map((user, index) => <UserItem key={index} user={user} />);
    return (
      <Fragment>
        <AdminNavbar/>
        <AdminSidenav/>
        <Container>
          <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Col>
              <h4>USER</h4>
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
                  <th>EMAIL</th>
                  <th>STATUS</th>
                  <td>DATE UPDATED</td>
                </tr>
              </thead>
              <tbody>
                {listUser}
              </tbody>
            </Table>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

const userStateToProps = (state) => {
  return {
    user: state.user.user
  }
}

export default connect(userStateToProps)(User);