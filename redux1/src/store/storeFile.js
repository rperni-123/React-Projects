//Store is the object that holds the application state and provides a few helper methods to access the state, dispatch actions and register listeners.
import {createStore} from 'redux';
import reducer from '../reducer/mainReducer';

// we are connecting store to reducer
let store = createStore(reducer);

export default store;
