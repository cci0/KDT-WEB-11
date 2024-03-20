import Circles from './Circles';
import CssModuleComponents from './CssModuleComponents';
import Larva from './Larva';
import PostList from './PostList';
import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <h1>React Styling</h1>
            <CssModuleComponents />
            <hr />
            <SassComponent />
            <hr />
            <StyledComponent />
            <hr />
            {/* <Larva />
            <hr />
            <Circles />
            <hr /> */}
            <PostList />
        </div>
    );
}

export default App;
