import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux"
import './sass/common/index.sass';
import allReducers from "./reducers"
import {Provider} from "react-redux"
import Page from './components/Page'

const store = createStore(allReducers)


ReactDOM.render(
        <Provider store={store}>
        <Page />
            </Provider>
    , document.getElementById('root'));
