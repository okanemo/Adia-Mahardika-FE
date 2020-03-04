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
export const searchUser = (data) => {
    return {
        type: 'SEARCH_USER',
        payload: axios({
            method: 'GET',
            url: `http://localhost:5000/user/?name=${data}`,
        })
    }
}

export const filterUser = (data) => {
    return {
        type: 'FILTER_USER',
        payload: axios({
            method: 'GET',
            url: `http://localhost:5000/user/?category=${data}`
        })
    }
}