/**
 * Created by sahilpandya on 18/03/18.
 */
import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from '../src/components/App';
import {AppContainer} from 'react-hot-loader'

const logger = createLogger();
const store = createStore(
    allReducers,
    applyMiddleware(thunk, promise, logger)
);

const renderApp = (Component) => {
    render(
        <Provider store={store}>
            <AppContainer>
                <Component/>
            </AppContainer>
        </Provider>,
        document.getElementById('app')
    );
}

renderApp(App);

// Webpack Hot Module Replacement
if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept(() => {
        render(App)
    });

    // Enable Webpack hot module replacement for reducers
    //@TODO move inside store when separate store file there.
    module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers');
        store.replaceReducer(nextRootReducer);
    });
}

