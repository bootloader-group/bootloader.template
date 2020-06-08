import {createStore, combineReducers} from 'redux';
import dummyReducer from '../reducers/dummy';
import {composeWithDevTools} from 'redux-devtools-extension';

const reducers = combineReducers({
    dummyInfo: dummyReducer,
});

const store = createStore(
    reducers,
    composeWithDevTools(),
);

export default store;