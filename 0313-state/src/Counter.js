import React, { Component } from 'react';

class Counter extends Component {
    // state 사용
    state = {
        number: 0, // 초기값 0
        name: '맹구',
    };
    render() {
        // state 는 this.state 로 접근 가능
        console.log(this.state);
        const { number } = this.state;
        return (
            <div>
                <h1>{number}</h1>
                <button
                    onClick={() => {
                        // this.setState(): state 값을 바꾸는 함수
                        // state 값은 직접 변경이 불가. 꼭 setState() 이용만 가능
                        this.setState({ number: number + 1 });
                    }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;
