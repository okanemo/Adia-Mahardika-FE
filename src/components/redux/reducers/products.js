const initialState = {
    products: [],
    pagination: [],
    isLoading: false
}

const products = (state = initialState, action) => {
   switch(action.type){
        case 'GET_PRODUCT_PENDING':
           return{
               ...state,
               isLoading: true
           }
        case 'GET_PRODUCT_REJECTED':
            return{
                ...state,
                isLoading: true
            }
        case 'GET_PRODUCT_FULFILLED':
            return{
                ...state,
                isLoading: false,
                products: action.payload.data.result,
                pagination: action.payload.data.totalPages
            }
        case 'POST_PRODUCT_PENDING':
            return{
                ...state,
                isLoading: true
            }

        case 'POST_PRODUCT_REJECTED':
            return{
                ...state,
                isLoading: true
            }
        case 'POST_PRODUCT_FULFILLED':
            return{
                ...state,
                isLoading: false,
                products: action.payload.data.result
            }
        case 'DELETE_PRODUCT_PENDING':
            return{
                ...state,
                isLoading: true
            }
        case 'DELETE_PRODUCT_REJECTED':
            return{
                ...state,
                isLoading: true
            }
        case 'DELETE_PRODUCT_FULFILLED':
            return{
                ...state,
                isLoading: false,
                products: action.payload.data.result
            }
        case 'PATCH_PRODUCT_PENDING':
            return {
                ...state,
                isLoading: true
            }

        case 'PATCH_PRODUCT_REJECTED':
            return {
                ...state,
                isLoading: true
            }

        case 'PATCH_PRODUCT_FULFILLED':
            return {
                ...state,
                isLoading: false,
                products: action.payload.data.result
            }
        case 'MODIFY_PRODUCT_PENDING':
            return {
                ...state,
                isLoading: true
            }
        case 'MODIFY_PRODUCT_REJECTED':
            return {
                ...state,
                isLoading: true
            }
        case 'MODIFY_PRODUCT_FULFILLED':
            return {
                ...state,
                isLoading: false,
                products: action.payload.data.result,
                pagination: action.payload.data.totalPages
            }
        default:
            return state;
   }
}

export default products;