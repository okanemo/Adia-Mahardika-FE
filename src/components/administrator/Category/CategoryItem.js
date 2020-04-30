import React, { Fragment } from "react";
import "./Category.css";
const CategoryItem = ({
  category,
  onSelectCategoryEdit,
  onSelectCategoryDelete,
}) => {
  const onClickEditCategory = (event) => {
    event.preventDefault();
    onSelectCategoryEdit(category);
  };
  const onClickDeleteCategory = (event) => {
    event.preventDefault();
    onSelectCategoryDelete(category);
  };
  return (
    <Fragment>
      <tr>
        <td className="manageCategory">
          <button
            type="button"
            className="btn btn-md btn-outline-delete"
            data-toggle="modal"
            data-target="#deleteModal"
            onClick={onClickDeleteCategory}
            data-dismiss="modal"
          >
            Delete
          </button>
          <button
            type="button"
            className="btn btn-md btn-edit"
            data-toggle="modal"
            data-target="#editModal"
            onClick={onClickEditCategory}
          >
            Edit
          </button>
        </td>
        <td className="itemCategory">{category.id}</td>
        <td className="itemCategory">{category.name}</td>
      </tr>
    </Fragment>
  );
};

export default CategoryItem;
