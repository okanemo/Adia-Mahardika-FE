import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import AdminNavbar from '../../layout/AdminNavbar'
import AdminSidenav from '../../layout/AdminSidenav'
import { connect } from 'react-redux';
import { getAllUser } from '../../redux/actions/user';
import UserItem from './UserItem'
import './User.css'
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
        <div className='container'>
          <div className='row'>
            <h2 style={{fontSize:'40px', fontFamily: 'Source Sans Pro, sans-serif',fontWeight:700, marginTop:'12px', color:'#4285f4'}}>
              Manage User
              </h2>
              <div className='row'  style={{display:'flex', overflowY:'scroll', height:'75vh'}}>
                <table className="tableUser table-bordered table-hover table-responsive">
            <thead className="thead-light">
              <tr>
                <th scope="col">Manage</th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Status</th>
                <th scope="col">Date Updated</th>
              </tr>
            </thead>
            <tbody>
              {listUser}
            </tbody>
          </table>
              </div>
          </div>
        </div>
        {/* <Container>
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
        </Container> */}
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