import { Component, createRef } from 'react';

export default class RefEx1 extends Component {
    // createRef를 사용해 만들 때는 컴포넌트 내부에서 변수에 createRef()을 담아주는 것
    wirteRef = createRef();
    titleRef = createRef();

    handleFocus = () => {
        if (this.wirteRef.current.value.trim().length === 0) {
            this.wirteRef.current.focus();
            return;
        }

        if (this.titleRef.current.value.trim().length === 0) {
            this.titleRef.current.focus();
            return;
        }

        alert(`${this.wirteRef.current.value} : ${this.titleRef.current.value}`);
        // createRef를 이용해 설정한 DOM 요소에 접근하려면 this.myInput.Current 이용
        // this.wirteRef.current.focus();
        // this.titleRef.current.focus();
    };
    render() {
        return (
            <>
                <p>(클래스형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
                작성자: <input type="text" ref={this.wirteRef} />
                제목: <input type="text" ref={this.titleRef} />
                <button onClick={this.handleFocus}>focus</button>
            </>
        );
    }
}
