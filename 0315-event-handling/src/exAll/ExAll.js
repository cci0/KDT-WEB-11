import { useState } from 'react';
import Select from './Select';
import Result from './Result';
import Input from './Input';

export default function ExAll() {
    // 상태 관리
    const [data, setData] = useState({
        fruit: 'apple',
        background: 'black',
        color: 'white',
        content: 'text',
    });

    /**  const [fruit, setFruit] = useState('apple');
    const [background, setBackground] = useState('black');
    const [color, setColor] = useState('white');
    const [content, setContent] = useState('text');*/

    return (
        <>
            <Select setData={setData} />
            <Input setData={setData} />
            <Result data={data} />
        </>
    );
}
