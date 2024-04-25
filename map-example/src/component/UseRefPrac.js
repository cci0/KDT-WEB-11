import React, { useRef, useState } from 'react';

export default function UseRefPrac() {
    const [isChecked, setIsChecked] = useState(false);
    const inputRef = useRef();
    const messageRed = useRef('성함이 입력되지 않음');

    const handleButtonClick = () => {
        const username = inputRef.current.value.replace(/\s/g, '');

        if (username.length > 4) {
            alert('성함은 공백을 제외하고 4글자 이하입니다.');
            inputRef.current.focus();
            setIsChecked(false);
            messageRed.current = '성함이 입력되지 않음';
        } else {
            setIsChecked(true);
            messageRed.current = inputRef.current.value;
        }
    };

    console.log(inputRef.current.value);

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="성함을 입력하세요" defaultValue="" />
            <button onClick={handleButtonClick}>확인</button>
            <p>{isChecked ? '성함 확인됨' : '성함이 확인되지 않음'}</p>
            <p>{messageRed.current}</p>
        </div>
    );
}
