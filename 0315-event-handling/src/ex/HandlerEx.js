// 실습1

import { Component } from 'react';

class handleEx extends Component {
    state = {
        text: 'Hello World!',
    };

    render() {
        const { text } = this.state;
        const handleClick = () => {
            this.setState({ text: 'Goodbye World!' });
        };
        return (
            <div>
                <div style={{ fontWeight: 'bold' }}>{text}</div>
                <button onClick={handleClick}>제출</button>
            </div>
        );
    }
}

export default handleEx;
