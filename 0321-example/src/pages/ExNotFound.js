import React from 'react';
import { Link } from 'react-router-dom';

export default function ExNotFound() {
    return (
        <div>
            <div>404 NotFound</div>
            <Link to={'/'}>홈으로</Link>
        </div>
    );
}
