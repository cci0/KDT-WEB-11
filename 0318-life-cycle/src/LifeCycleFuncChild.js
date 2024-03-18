import React, { useEffect } from 'react';

export default function LifeCycleFuncChild({ number }) {
    // mount 시점에 실행 (화면에 처음 나왔을 때)
    useEffect(() => {
        // 첫번째 값은 콜백 함수
        console.log('컴포넌트 마운트!');
    }, []); // 두 번째는 의존 배열에 빈 배열. 빈 배열을 넣어줬기 때문에 마운트 시점에서 실행된다.

    // unmount 시점에 실행
    useEffect(() => {
        // 첫번째 값은 콜백 함수
        console.log('컴포넌트 언마운트 코드 전!');
        // 두번째 값은 return 값
        return () => {
            console.log('컴포넌트 언마운트!');
        };
    }, []); // 세번째는 의존 배열에 빈 배열 return 값은 언마운트 시점일 때만 실행

    // update 시점에 실행 & 마운트 실행시
    useEffect(() => {
        console.log('number', number);
    }, [number]);

    return <div>현재 Number 값은 {number}입니다!</div>;
}
