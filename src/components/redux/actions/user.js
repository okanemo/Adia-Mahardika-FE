import axios from 'axios';

export const getAllUser = () => {
    return{
        type: 'GET_USER',
        payload: axios({
            method: "GET",
            url: "http://localhost:5000/user"
        })
    }
}

export const deleteUser = (userId) => {
    return{
        type: 'DELETE_USER',
        payload: axios({
            method: "DELETE",
            url: `http://localhost:5000/user/${userId}`,
        })
    }
}

export const postUser = () => {
    return{
        type: 'POST_USER',
        payload: axios({
            method: "POST",
            url: "http://localhost:5000/user/register"
        })
    }
}