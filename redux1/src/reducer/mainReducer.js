//The reducer function uses the action object and performs a state update, returning the new state. React then checks whether the new state differs from the previous one. If the state has been updated, React re-renders the component and useReducer() returns the new state value
import {combineReducers} from 'redux';
import films from './moviesReducer';

// declare all the reducers
const rootReducer = combineReducers({
    films
})

export default rootReducer