import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import SayFunction from './SayFunction';
import PropsExam3 from './PropsExam3';
import ButtonExam from './ButtonExam';

function App() {
    const text = () => {
        console.log('콘솔 띄우기 성공');
    };
    return (
        <div className="App">
            <Counter />

            <hr />

            <SayFunction />

            <hr />
            {/* Props 실습 3 */}
            <PropsExam3 text="text를 받아와 출력하게 해주세요." valid={text} />
            <hr />
            {/* State 실습1 */}
            <ButtonExam />
        </div>
    );
}

export default App;
