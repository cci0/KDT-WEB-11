import { useState } from 'react';

export default function Text() {
    const [display, setDisplay] = useState(true);

    return (
        <>
            <h2>실습3</h2>
            {/** 삼항 연산자로 나타내기 */}
            {/** true -> false, false -> true */}
            <button onClick={() => setDisplay(!display)}>{display ? '사라져라' : '보여라'}</button>
            {/** display가 true 일 때만 화면에 나오게 */}
            {display && <h4>안녕하세요</h4>}
        </>
    );
}
