import axios from 'axios';
require ('dotenv').config()
export const getAllCategory = () => {
    const authorization = localStorage.getItem('token');
    const userId = localStorage.getItem("user-id");
    return{
        type: 'GET_CATEGORY',
        payload: axios({
            method: "GET",
            url: `${process.env.REACT_APP_API}/category`,
        headers: {
            "authorization": authorization,
            "user-id": userId
        }
        })
    }
}

export const postCategory = (data) => {
    return{
        type: 'POST_CATEGORY',
        payload: axios({
            method: "POST",
            url: `${process.env.REACT_APP_API}/category`,
            data: data
        })
    }
}

export const patchCategory = (data, categoryId) => {
    return{
        type: 'PATCH_CATEGORY',
        payload: axios({
            method: "PATCH",
            url: `${process.env.REACT_APP_API}/category${categoryId}`,
            data: data
        })
    }
}

export const deleteCategory = ( categoryId) => {
    return{
        type: 'DELETE_CATEGORY',
        payload: axios({
            method: "DELETE",
            url: `${process.env.REACT_APP_API}/category${categoryId}`
        })
    }
}