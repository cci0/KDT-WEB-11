import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import counterReducer from './store/counterReducer';
import { createStore } from 'redux'; // 옛날 방식
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './store';
import App2 from './App2';
import App3 from './App3';
import { composeWithDevTools } from '@redux-devtools/extension';
import Ex1 from './Ex1';

const root = ReactDOM.createRoot(document.getElementById('root'));

// store 정의: 전역으로 상태를 관리하는 공간(하나의 프로젝트에 하나만!)
// const 자유 = createStore(어떠한 걸로 만들 것인지 정의)
// const store = createStore(counterReducer); // depredcated (옛날 방식)

// composeWithDevTools : 확장 프로그램을 사용하기 위해 추가한 것이기 때문에
//                       없어도 상관없다.
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

root.render(
    <React.StrictMode>
        <Provider store={store}>
            {/* <App /> */}
            {/* <App2 /> */}
            {/* <App3 /> */}
            <Ex1 />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
