import React, { useRef, useState } from 'react';

export default function RefSample4() {
    const idRef = useRef(1);
    const [id, setId] = useState(10);
    let idVar = 20;

    const plusIdRef = () => {
        idRef.current += 1;
        console.log(idRef.current);
        // re-rendering이 되지 않으면 화면은 변화하지 않는다.
    };

    const plusIdState = () => {
        setId(id + 1);
        // state는 자동(?) re-rendering이 된다
    };

    return (
        <>
            <h1>Ref Sample - 로컬 변수</h1>
            <h2>{idRef.current}</h2>
            <button onClick={plusIdRef}>plus Ref</button>

            <h2>{id}</h2>
            <button onClick={plusIdState}>plus State</button>

            <h2>{idVar}</h2>
            <button
                onClick={() => {
                    idVar += 1;
                    console.log(idVar);
                }}
            >
                {/* re-rendering이 발생하면 일반 변수 값은 초기화가 된다 */}
                plus 일반 변수
            </button>
        </>
    );
}
