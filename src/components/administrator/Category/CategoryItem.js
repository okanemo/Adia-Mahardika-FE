import React, { Fragment } from 'react';
import './Category.css'
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
      <td class='manageCategory'>
        <button type="button" class="btn btn-sm btn-outline-delete" data-toggle='modal' data-target='#deleteModal' style={{borderRadius:25, fontSize:'12px', color:'white'}} onClick={onClickDeleteCategory} data-dismiss='modal'>Delete</button>
        <button type="button" class="btn btn-sm btn-edit" data-toggle='modal' data-target='#editModal' style={{borderRadius:25, fontSize:'12px', color:'white'}} onClick={onClickEditCategory}>Edit</button>
    </td>
    <td class='itemCategory'>{category.id}</td>
    <td class='itemCategory'>{category.name}</td>
    </tr>
        </Fragment>
    )
}

export default CategoryItem;