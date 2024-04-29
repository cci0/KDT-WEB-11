import React from 'react';
import Hello from './components/Hello';
import Name from './components/Name';
import Parent from './components/ContainerSample';
import Message from './components/Message';
import Page from './components/ContextSample';
import Counter from './components/Counter';

function App() {
    return (
        <div className="App">
            <Hello />
            <Name />
            <Message />
            <Parent />
            <Page />
            <Counter initialValue={0} />
        </div>
    );
}

export default App;
