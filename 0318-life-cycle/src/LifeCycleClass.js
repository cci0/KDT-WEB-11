import React, { Component } from 'react';
import LifeCycleClassChild from './LifeCycleClassChild';

export default class LifeCycleClass extends Component {
    // 1. state 만들기

    state = {
        number: 0,
        visiable: true,
    };

    // 2. state 값 업데이트
    changeNumberState = () => {
        this.setState({ number: this.state.number + 1 });
        // this.setState <- Class 형에서 state 값을 변경 시킬 때 사용
    };

    chageVisibleState = () => {
        this.setState({ visiable: !this.state.visiable });
    };

    render() {
        return (
            <>
                <button onClick={this.changeNumberState}>PLUS</button>
                <button onClick={this.chageVisibleState}>ON/OFF</button>
                {this.state.visiable && <LifeCycleClassChild number={this.state.number} />}
            </>
        );
    }
}
