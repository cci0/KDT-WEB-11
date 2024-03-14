import React from 'react';

const Drink = (props) => {
    const { imageUrl, name, price, onClickDrink } = props;

    return (
        <tr>
            <td>
                <img src={imageUrl} alt={name} style={{ width: '150px' }} />
            </td>
            <td>
                <div>{name}</div>
            </td>
            <td>
                <div>{price}</div>
            </td>
            <td>
                <button onClick={onClickDrink}>선택</button>
            </td>
        </tr>
    );
};

export default Drink;
