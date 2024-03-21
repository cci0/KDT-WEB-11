import React from 'react';
import { Link } from 'react-router-dom';

export default function Exmain() {
    return (
        <div>
            <h1>Example</h1>
            <Link to="/student">학생정보</Link>
        </div>
    );
}
