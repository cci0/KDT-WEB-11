import React from 'react';
import Styled from 'styled-components';

// CSS in JS: js안에 css를 작성함
// styled-components, emotion, styled-jsx, ...
// 각 컴포넌트마다 격리된 스타일 적용 가능

const StyledContainer = Styled.div`
    display: flex;
`;
const StyledBox = Styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.bgColor || 'blue'};

    &:hover{
        transform: translateY(-20px)
    }
`;

export default function StyledComponent() {
    return (
        <>
            <StyledContainer>
                <StyledBox bgColor="red" />
                <StyledBox bgColor="orange" />
                <StyledBox bgColor="yellow" />
                <StyledBox />
            </StyledContainer>
        </>
    );
}
