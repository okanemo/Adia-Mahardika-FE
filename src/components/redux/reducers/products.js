const initialState = {
    products: [],
    pagination: [],
    isLoading: false
}
//console.log(initialState.products)

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
            const newDataProducts = [...state.products, action.payload.data.result];
            return{
                ...state,
                isLoading: false,
                products: newDataProducts
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
            const newDataProductsAfterDelete = state.products.filter(product => product.id !== action.payload.data.result)
            return{
                ...state,
                isLoading: false,
                products: newDataProductsAfterDelete
            }
        // case 'SEARCH_PRODUCT_PENDING':
        //     return {
        //         ...state,
        //         isLoading: true
        //     }
        // case 'SEARCH_PRODUCT_REJECTED':
        //     return {
        //         ...state,
        //         isLoading: true
        //     }
        // case 'SEARCH_PRODUCT_FULFILLED':
        //     return {
        //         ...state,
        //         isLoading: false,
        //         products: action.payload.data.result
        //     }
        // case 'FILTER_PRODUCT_PENDING':
        //     return {
        //         ...state,
        //         isLoading: true
        //     }
        // case 'FILTER_PRODUCT_REJECTED':
        //     return {
        //         ...state,
        //         isLoading: true
        //     }
        // case 'FILTER_PRODUCT_FULFILLED':
        //     return {
        //         ...state,
        //         isLoading: false,
        //         products: action.payload.data.result
        //     }
        // case 'SORT_PRODUCT_PENDING':
        //     return {
        //         ...state,
        //         isLoading: true
        //     }
        // case 'SORT_PRODUCT_REJECTED':
        //     return {
        //         ...state,
        //         isLoading: true
        //     }
        // case 'SORT_PRODUCT_FULFILLED':
        //     return {
        //         ...state,
        //         isLoading: false,
        //         products: action.payload.data.result
        //     }
        // case 'PAGINATION_FULFILLED':
        //     return {
        //         ...state,
        //         products: action.payload.data.result
        //     }
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
            const newProductAfterUpdate = state.products.map(product => {
                if (product.id === action.payload.data.result.id) {
                    return action.payload.data.result;
                }
                return product;
            })
            return {
                ...state,
                isLoading: false,
                products: newProductAfterUpdate
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