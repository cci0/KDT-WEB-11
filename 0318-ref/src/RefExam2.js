import React, { useRef } from 'react';

export default function RefExam2() {
    // 1. ref 객체 만들기
    const inputTitle = useRef(null);
    const inputWriter = useRef(null);

    const handleFocus = () => {
        if (inputTitle.current.value.trim().length === 0) {
            inputTitle.current.focus();
            return;
        } else if (inputWriter.current.value.trim().length === 0) {
            inputWriter.current.focus();
            return;
        }

        alert(`${inputTitle.current.value} : ${inputWriter.current.value}`);
    };
    return (
        <>
            <p>(함수형 컴포넌트) 버튼 클릭시 input에 focus 처리</p>
            제목: <input type="text" ref={inputTitle} />
            작성자: <input type="text" ref={inputWriter} />
            <button onClick={handleFocus}>focus</button>
        </>
    );
}
