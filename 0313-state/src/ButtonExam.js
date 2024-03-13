import React, { Component } from 'react';

class ButtonExam extends Component {
    state = {
        number: 0,
    };
    render() {
        console.log(this.number);
        const { number } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <button
                    onClick={() => {
                        this.setState({ number: number - 1 });
                    }}
                >
                    -1
                </button>
                <button
                    onClick={() => {
                        this.setState({ number: number + 1 });
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default ButtonExam;
