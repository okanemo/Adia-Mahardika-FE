import React, { Component, Fragment } from 'react';
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
            <h2 className='title-user'>
              Manage User
              </h2>
              <div className='row user'>
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