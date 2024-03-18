import React, { useState } from 'react';
import LifeCycleFuncChild from './LifeCycleFuncChild';

export default function LifeCycleFunc() {
    // 1. state 만들기
    const [number, setNumver] = useState(0);
    const [visiable, setVisiable] = useState(true);

    // 2. state 값 변경
    const changeNumber = () => {
        setNumver(number + 1);
    };

    const changeVisiable = () => {
        setVisiable(!visiable);
    };

    return (
        <div>
            <button onClick={changeNumber}>Plus</button>
            <button onClick={changeVisiable}>on/off</button>
            {visiable && <LifeCycleFuncChild number={number} />}
        </div>
    );
}
