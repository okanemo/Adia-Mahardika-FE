import axios from 'axios';

export const getAllProduct = () => {
    return{
        type: 'GET_PRODUCT',
        payload: axios({
            method: "GET",
            url: "http://localhost:5000/product"
        })
    }
}

export const postProduct = (data) => {
    return{
        type: 'POST_PRODUCT',
        payload: axios({
            method: "POST",
            url: "http://localhost:5000/product",
            data: data
        })
    }
}

export const deleteProduct = (productId) => {
    return{
        type: 'DELETE_PRODUCT',
        payload: axios({
            method: "DELETE",
            url: `http://localhost:5000/product/${productId}`,
        })
    }
}
export const searchProduct = (data) => {
    return {
        type: 'SEARCH_PRODUCT',
        payload: axios({
            method: 'GET',
            url: `http://localhost:5000/product/?name=${data}`,
        })
    }
}

export const filterProduct = (data) => {
    return {
        type: 'FILTER_PRODUCT',
        payload: axios({
            method: 'GET',
            url: `http://localhost:5000/product/?category=${data}`
        })
    }
}