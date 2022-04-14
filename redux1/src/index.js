// import react from 'react';
// import reactDOM from 'react-dom';
// import {provider} from 'react-redux'
// import Home from './container/Home'
// import store from './store/storeFile'

// //provider is used to connect view to the store
// reactDOM.render(
//     <provider store={store}> 
//         <Home/>
//     </provider>,document.getElementById('root')
// )
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/storeFile';
import Home from './container/Home';

// view is connected to store
ReactDOM.render(
    <Provider store={store}>
        <Home/>
    </Provider>, document.getElementById('root')
)