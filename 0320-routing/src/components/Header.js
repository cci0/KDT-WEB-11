import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <span>Router Tutorial</span>
            <ul>
                <li>
                    <Link to={'/'}>HOME</Link>
                    {/* Link 태그의 경로 지정: to = {경로 이름(즉, 주소창)} */}
                </li>
                <li>
                    <Link to={'/products'}>Products</Link>
                </li>
            </ul>
        </header>
    );
}
