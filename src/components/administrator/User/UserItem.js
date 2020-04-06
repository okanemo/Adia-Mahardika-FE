import React, { Fragment } from 'react';
import './User.css'
const UserItem = ({ user }) => {

    return (
        <Fragment>
            <tr>
            <td class='manageUser'>
                <button type="button" class="btn btn-sm btn-outline-delete" data-toggle='modal' data-target='#deleteModal' style={{borderRadius:25, fontSize:'12px', color:'white'}}data-dismiss='modal'>Delete</button>
                <button type="button" class="btn btn-sm btn-edit" data-toggle='modal' data-target='#editModal' style={{borderRadius:25, fontSize:'12px', color:'white'}}>Edit</button>
            </td>
            <td class='itemUser'>{user.id}</td>
            <td class='itemUser'>{user.name}</td>
            <td class='itemUser'>{user.email}</td>
            <td class='itemUser'>{user.status}</td>
            <td class='itemUser'>{user.date_updated}</td>
            </tr>
        </Fragment>
    )
}

export default UserItem;