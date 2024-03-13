import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Clock from './Clock';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //     // 화면에 보이는 부분
    <React.StrictMode>
        <App />
    </React.StrictMode>

    //     // Clock 렌더링
    //     // setInterval(() => {
    //     //     // React Virtual DOM은 내용이 변경된 부분만 업데이트
    //     //     // 브라우저에서 전체가 아닌 "시간" 부분만 새로고침 되고 있다
    //     //     root.render(
    //     //         <React.StrictMode>
    //     //             <Clock />
    //     //         </React.StrictMode>
    //     //     );
    //     // }, 1000)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
