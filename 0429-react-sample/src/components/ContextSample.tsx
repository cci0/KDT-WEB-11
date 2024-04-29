import React from 'react';

// Title을 전달하기 위해 Context를 작성한다.
const TitleContext = React.createContext('');

// Title 컴포넌트 안에서 Context 값을 참조한다
const Title = () => {
    return (
        <TitleContext.Consumer>
            {(title) => {
                return <h1>{title}</h1>;
            }}
        </TitleContext.Consumer>
    );
};

const Header = () => {
    return (
        <div>
            <Title />
        </div>
    );
};

const Page = () => {
    const title = 'React Book';
    return (
        <TitleContext.Provider value={title}>
            <Header />
        </TitleContext.Provider>
    );
};

export default Page;
