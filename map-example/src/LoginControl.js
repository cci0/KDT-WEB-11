import React, { useState } from 'react';
import Button from './Button';

export default function LoginControl() {
    const [login, setLogin] = useState(false);
    const handleClick = () => {
        setLogin(!login);
    };

    if (login) {
        return <Button type="Logout" onClick={handleClick} />;
    } else {
        return <Button type="Login" onClick={handleClick} />;
    }
}
