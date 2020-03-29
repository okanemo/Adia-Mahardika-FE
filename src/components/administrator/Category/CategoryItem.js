import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';

const CategoryItem = ({ category, onSelectCategoryEdit, onSelectCategoryDelete }) => {
    const onClickEditCategory = (event) => {
        event.preventDefault();
        onSelectCategoryEdit(category);
    }
    const onClickDeleteCategory = (event) => {
        event.preventDefault();
        onSelectCategoryDelete(category);
    }
    return (
        <Fragment>
            <tr>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td><Button variant="warning" size="sm" onClick={onClickEditCategory}>Edit</Button> - <Button variant="danger" size="sm" onClick={onClickDeleteCategory}>Delete</Button></td>
            </tr>
        </Fragment>
    )
}

export default CategoryItem;