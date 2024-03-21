import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function ExStudentDetail() {
    const { name } = useParams();

    const navigate = useNavigate();
    return (
        <div>
            <div>
                <h5>
                    학생의 이름은 <span style={{ color: 'green' }}>{name}</span>입니다.
                </h5>
            </div>

            <button onClick={() => navigate(-1)}>이전 페이지로</button>
        </div>
    );
}
