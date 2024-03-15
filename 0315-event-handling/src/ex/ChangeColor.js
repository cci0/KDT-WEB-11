import { useState } from 'react';

export default function ChangeColor() {
    const [text, setText] = useState('검정색 글씨');
    const [color, setColor] = useState({ color: 'black' });

    const red = () => {
        setText('빨간색 글씨');
        setColor({ color: 'red' });
    };

    const blue = () => {
        setText('파란색 글씨');
        setColor({ color: 'blue' });
    };

    return (
        <div>
            <h1>실습2</h1>
            <h2 style={color}>{text}</h2>
            <button onClick={red}>빨간색</button>
            <button onClick={blue}>파란색</button>
        </div>
    );
}
