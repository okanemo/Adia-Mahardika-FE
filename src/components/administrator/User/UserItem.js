import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';

const UserItem = ({ user }) => {

    return (
        <Fragment>
            <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                <td>{user.date_updated}</td>
                <td><Button variant="warning" size="sm">Edit</Button> - <Button variant="danger" size="sm">Delete</Button></td>
            </tr>
        </Fragment>
    )
}

export default UserItem;