import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import reducer from './reducers/index.js';
//import registerServiceWorker from './registerServiceWorker';

const middleware = applyMiddleware(thunk);
const store = createStore(reducer, middleware);
ReactDOM.render(
    < Provider store={store} >
        <App />
    </Provider >
    , document.getElementById('root')
);

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
