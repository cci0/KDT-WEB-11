import { useState } from 'react';

type CounterProps = {
    initialValue: number;
};

export default function Counter(props: CounterProps) {
    const { initialValue } = props;
    const [count, setCount] = useState(initialValue);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>+1</button>
        </div>
    );
}
