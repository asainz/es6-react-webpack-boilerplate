import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import browserHistory from 'react-router/lib/browserHistory';
import Router from 'react-router/lib/Router';
import createStore from './redux/config';
import initialState from './redux/initial-state';
import getRoutes from './routes/';

const store = createStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {getRoutes()}
        </Router>
    </Provider>,
    document.getElementById('app')
);

