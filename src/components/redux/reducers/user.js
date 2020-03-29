const initialState = {
    user: []
}
//console.log(initialState.products)

const user = (state = initialState, action) => {
   switch(action.type){
        case 'GET_USER_PENDING':
           return{
               ...state,
               isLoading: true
           }
        case 'GET_USER_REJECTED':
            return{
                ...state,
                isLoading: true
            }
        case 'GET_USER_FULFILLED':
            return{
                ...state,
                isLoading: false,
                user: action.payload.data.result
            }
        case 'DELETE_USER_PENDING':
            return{
                ...state,
                isLoading: true
            }
        case 'DELETE_USER_REJECTED':
            return{
                ...state,
                isLoading: true
            }
        case 'DELETE_USER_FULFILLED':
            const newDataUserAfterDelete = state.user.filter(user => user.id !== action.payload.data.id)
            return{
                ...state,
                isLoading: false,
                user: newDataUserAfterDelete
            }
        case 'POST_USER_PENDING':
            return{
                ...state
            }

        case 'POST_USER_REJECTED':
            return{
                ...state
            }
        
        case 'POST_USER_FULFILLED':
            const newDataCategory = [...state.user, action.payload.data.result];
            return{
                ...state,
                user: newDataCategory
            }
        default:
            return state;
   }
}

export default user;