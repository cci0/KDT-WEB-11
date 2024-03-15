import { useState } from 'react';

export default function Counter() {
    const [number, setNumber] = useState(0); // 초기값 0

    const increase = () => {
        setNumber(number + 1);
    };

    const alretMsg = (msg) => {
        alert(`${msg}~ 현재 숫자는 ${number}`);
    };

    const alretMsg2 = (e, msg) => {
        alert(`${msg}~ 현재 숫자는 ${number}`);
        console.log(e);
    };

    // currentTarget은 이벤트 핸들러가 있는 요소
    // target은 부모로부터 이벤트가 위임되어 발생하는 자식의 위치. 즉, 내가 클릭한 자식 요소

    const handleEvent = (e) => {
        console.log('e.target', e.target);
        console.log('e.currentTarget', e.currentTarget);
    };

    return (
        <div>
            <h1>Function Component Event</h1>
            <h2>{number}</h2>

            {/* 함수에 인자가 없는 경우 - 함수 이름만 전달 */}
            <button onClick={increase}>더하기</button>

            {/* 함수에 인자 보내기 - 익명함수로 감싸서 처리 */}
            <button onClick={() => alretMsg('hello')}>alert 출력</button>
            <button onClick={(e) => alretMsg2(e, 'hello')}>alert2 출력</button>

            <button onClick={handleEvent}>
                <span>handle Event</span>
            </button>
        </div>
    );
}
