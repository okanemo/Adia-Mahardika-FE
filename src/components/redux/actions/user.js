import axios from 'axios';
require ('dotenv').config()
export const getAllUser = () => {
    return{
        type: 'GET_USER',
        payload: axios({
            method: "GET",
            url: `${process.env.REACT_APP_API}/user`
        })
    }
}

export const deleteUser = (userId) => {
    return{
        type: 'DELETE_USER',
        payload: axios({
            method: "DELETE",
            url: `${process.env.REACT_APP_API}/user/${userId}`,
        })
    }
}

export const postUser = (data) => {
    return{
        type: 'POST_USER',
        payload: axios({
            method: "POST",
            url: `${process.env.REACT_APP_API}/user/register`,
            data: data
        })
    }
}