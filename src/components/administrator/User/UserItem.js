import React, { Fragment } from 'react';
import './User.css'
const UserItem = ({ user }) => {

    return (
        <Fragment>
            <tr>
            <td className='manageUser'>
                <button type="button" className="btn btn-md btn-outline-delete" data-toggle='modal' data-target='#deleteModal' data-dismiss='modal'>Delete</button>
                <button type="button" className="btn btn-md btn-edit" data-toggle='modal' data-target='#editModal'>Edit</button>
            </td>
            <td className='itemUser'>{user.id}</td>
            <td className='itemUser'>{user.name}</td>
            <td className='itemUser'>{user.email}</td>
            <td className='itemUser'>{user.status}</td>
            <td className='itemUser'>{user.date_updated}</td>
            </tr>
        </Fragment>
    )
}

export default UserItem;