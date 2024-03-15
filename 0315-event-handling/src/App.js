import './App.css';
import ClassBind from './ClassBind';
import Counter from './Counter';
import SysntheticEvent from './SysntheticEvent';
import ChangeColor from './ex/ChangeColor';

import HandlerEx from './ex/HandlerEx';
import Text from './ex/Text';
import ExAll from './exAll/ExAll';

function App() {
    return (
        <div className="App">
            <HandlerEx />
            <hr />
            <ChangeColor />
            <hr />
            <Text />
            <hr />

            <ExAll />
            <hr />
            <SysntheticEvent />
            <hr />
            <ClassBind />
            <hr />
            <Counter />
        </div>
    );
}

export default App;
