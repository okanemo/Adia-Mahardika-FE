import { combineReducers } from 'redux';

import products from './products';
import category from './category'
import user from './user'

export default combineReducers({
    products,
    category,
    user
});