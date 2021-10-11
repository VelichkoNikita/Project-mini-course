import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

export default function ScrollToTop() {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

ReactDOM.render(
    <>
        <BrowserRouter>
            <ScrollToTop/>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
