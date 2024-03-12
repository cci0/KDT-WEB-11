import './Practice.css';
import grass from './grass.png';

function Practice() {
    return (
        <>
            <div className="practice">
                <div className="circle circle1">
                    <div className="eye-white">
                        <div className="eye-black"></div>
                    </div>
                </div>
                <div className="circle circle2"></div>
                <div className="circle circle3"></div>
                <div className="circle circle4"></div>
                <div className="circle circle5"></div>
                <img className="grass" src={grass} alt="grass" />
                {/* public img 접근 */}
                {/* <img src="/grass.png" alt="grass" /> */}
            </div>
        </>
    );
}

export default Practice;
