import {createStore, combineReducers} from 'redux';
import categoriesReducer from '../reducers/categories';
import {composeWithDevTools} from 'redux-devtools-extension';

const reducers = combineReducers({
    categories: categoriesReducer,
});

const store = createStore(
    reducers,
    composeWithDevTools(),
);

export default store;