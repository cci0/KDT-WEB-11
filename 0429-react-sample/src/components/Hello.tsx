import React from 'react';

export default function Hello() {
    const onClick = () => {
        alert('Hello');
    };
    const text = 'Hello, React';

    return (
        <div>
            <div onClick={onClick}>{text}</div>
        </div>
    );
}
