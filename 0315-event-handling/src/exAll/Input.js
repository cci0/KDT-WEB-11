import React from 'react';

export default function Input({ setData }) {
    return (
        <div>
            내용:
            <input
                type="text"
                onChange={(e) => {
                    setData((prev) => {
                        return { ...prev, content: e.target.value };
                    });
                }}
            />
        </div>
    );
}
