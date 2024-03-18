import './App.css';
import RefEx1 from './RefEx1';
import RefEx2 from './RefEx2';
import RefExam1 from './RefExam1';
import RefExam2 from './RefExam2';
import RefSample1 from './RefSample1';
import RefSample2 from './RefSample2';
import RefSample3 from './RefSample3';
import RefSample4 from './RefSample4';

function App() {
    return (
        <div className="App">
            <>
                {/* 클래스형 컴포넌트; ref 사용 1.콜백함수 */}
                <RefSample1 />
                <hr />

                {/* 클래스형 컴포넌트; ref 사용 2. createRef() */}
                <RefSample2 />
                <hr />

                {/* 실습 1 */}
                <RefExam1 />
                <hr />
                <RefEx1 />
                <hr />

                {/* 함수형 컴포넌트; useRef()로 DOM 요소에 접근 */}
                <RefSample3 />
                <hr />
                {/* 함수형 컴포넌트; useRef()로 로컬 함수 */}
                <RefSample4 />
                <hr />

                <RefExam2 />
                <hr />
                <RefEx2 />
            </>
        </div>
    );
}

export default App;
