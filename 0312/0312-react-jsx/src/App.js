import logo from './logo.svg';
import './App.css';
import Practice from './Practice';

function App() {
    const name1 = 'Codee';
    const styles = {
        color: 'yellow',
        fontSize: '48px',
        backgroundColor: 'black',
    };

    // 실습 1
    const name = '해리';
    const animal = '푸들';

    // 실습 3
    const a = 10;
    const b = 1;

    // 실습 4
    const title = 'Hello World';

    // 주석 작성
    return (
        <>
            <Practice></Practice>
            <div className="App">
                {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello World!</p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header> */}

                {/* jsx 문법 */}
                {/* 1. 하나로 감싸인 요소 */}
                {/* 2. JavaScript 표현식 사용
                      - {}로 감싸면 js 표현식 사용 가능
                      - {} 에서 삼항 연사자 사용 가능 (if문 안됨)
                */}
                <div>{name1} 안녕?</div>
                <div>반갑다</div>
                <div>{name1 == 'Codee' ? 'KDT 11기예요!' : '누구세요?'}</div>

                {/*
                3. style 속성
                  -  리엑트에서 DOM 요소에 스타일 적용시 문자열이 아닌 객체 사용
                  - 스타일 이름 중 하이픈(-) 포함시 camelCase로 작성해야 함
                */}
                <div style={styles}>하이~</div>
                <div
                    style={{
                        color: 'blue',
                        fontSize: '48px',
                        backgroundColor: 'pink',
                    }}
                >
                    하이하이~
                </div>

                {/*
                4. className 사용
                    - class 속성이 아닌 className 속성 사용 <div className="App">

                5. 종료 태그가 없는 태그의 사용
                    - 기존의 종료 태그가 없는 태그를 사용하더라도, 종료 태그를 작성해야 함 또는 self-closing
                    - ex. <br> -> <br /> or <br></br>

                6. 주석
                    - //: jsx 외부 주석
                    - {/**./}: jsx 내부 주석 (.제외)
                */}
            </div>
            <div>부모가 없다</div>

            {/* 실습 1 */}
            <div>
                <h2>
                    제 친구의 반려동물의 이름은 <u>{name}</u>입니다
                </h2>
                <h2>
                    <u>{name}</u>는 <u>{animal}</u>입니다
                </h2>
            </div>

            {/* 실습 2 */}
            <div>{3 + 5 == 8 ? '정답입니다!' : '오답입니다!'}</div>

            {/* 실습 3 */}
            <div>{a > b && 'a가 b보다 큽니다'}</div>

            {/* 실습 4 */}
            <div className="login">
                <div className="title">{title}</div>
                <div className="user">
                    <label htmlFor="id">
                        아이디: <input type="text" name="id" />
                    </label>
                </div>
                <div className="user">
                    <label htmlFor="pw">
                        비밀번호: <input type="password" name="pw" />
                    </label>
                </div>
            </div>
        </>
    );
}

export default App;
