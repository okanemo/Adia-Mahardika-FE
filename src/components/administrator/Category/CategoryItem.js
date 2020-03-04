import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';

const CategoryItem = ({ category, onSelectCategoryEdit }) => {
    const onClickEditCategory = (event) => {
        event.preventDefault();
        onSelectCategoryEdit(category);
    }
    return (
        <Fragment>
            <tr>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td><Button variant="warning" size="sm" onClick={onClickEditCategory}>Edit</Button> - <Button variant="danger" size="sm">Delete</Button></td>
            </tr>
        </Fragment>
    )
}

export default CategoryItem;