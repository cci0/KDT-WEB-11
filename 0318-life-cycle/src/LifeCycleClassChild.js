// unmount 를 쉽게 확인 하기 위해서 자식 컴포넌트를 만든 것
import React, { Component } from 'react';

export default class LifeCycleClassChild extends Component {
    // 1. Mount
    componentDidMount() {
        console.log('컴포넌트 마운트!!');
    }

    // 2. Update
    componentDidUpdate() {
        console.log('컴포넌트 업데이트!!');
    }

    // 3. UnMount
    componentWillUnmount() {
        console.log('컴포넌트 언마운트!!');
    }

    render() {
        return <div>현재 Number 값은 {this.props.number}입니다!</div>;
        // props는 부모 요소의 값을 자식 요소로 가져오기다.
    }
}
