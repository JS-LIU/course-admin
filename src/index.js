/**
 * Created by Liudq on 2020/3/30
 */
import React from 'react';
import ReactDOM from 'react-dom';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import {HashRouter, Redirect, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';


import {menuReducer} from "./redux/reducers/menu.reducer";
import {productReducer} from "./redux/reducers/product.reducer";

const rootReducer = combineReducers({
    productReducer:productReducer,
    menuReducer:menuReducer
});
const store = createStore(rootReducer);
console.log(store.getState());
import {HomeView} from "./PresentationComponents/Home/HomeView";

ReactDOM.render(
    (
        <Provider store={store}>
            <HashRouter>
                <Redirect to="/classProductList"/>
                <div>
                    <Route path="/" component={HomeView}/>
                </div>
            </HashRouter>
        </Provider>),
    document.getElementById('app')
);