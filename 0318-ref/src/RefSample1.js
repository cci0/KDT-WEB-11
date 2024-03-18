import { Component } from 'react';

class RefSample1 extends Component {
    handleFocus = () => {
        // button을 클릭시 발생하는 이벤트
        // input에 focus 처리
        console.log('this', this);
        console.log('this.myInput', this.myInput);
        this.myInput.focus();
    };

    render() {
        return (
            <>
                <p>(클래스형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
                <input
                    type="text"
                    ref={(ref) => {
                        this.myInput = ref;
                        // 해당 컴포넌트에 진입하기 위해 this 사용
                    }}
                />
                <button onClick={this.handleFocus}>focus</button>
            </>
        );
    }
}

export default RefSample1;
