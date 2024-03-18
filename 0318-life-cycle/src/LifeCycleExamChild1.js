import React from 'react';

export default function LifeCycleExamChild1({ fakePosts }) {
    return (
        <div>
            {fakePosts.map((post) => (
                <div key={post.id}>
                    <ol>
                        <li>
                            <p>{post.title}</p>
                            <p>{post.body}</p>
                        </li>
                    </ol>
                </div>
            ))}
        </div>
    );
}
