import React, { useState } from 'react';
import Drink from './Drink';

const DrinkList = () => {
    // 음료 목록 데이터
    const drinks = [
        {
            imageUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[20]_20210415144112850.jpg',
            name: '아메리카노',
            price: '4,000원',
        },
        {
            imageUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[41]_20210415133833879.jpg',
            name: '카페라떼',
            price: '4,000원',
        },
        {
            imageUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[72]_20210415140949967.jpg',
            name: '초코라떼',
            price: '4,000원',
        },
        {
            imageUrl: 'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[169001]_20210419130701792.jpg',
            name: '망고 블렌디드',
            price: '4,000원',
        },
        {
            imageUrl:
                'https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000003276]_20210416154001403.jpg',
            name: '딸기 요거트 블렌디드',
            price: '4,000원',
        },
        {
            imageUrl:
                'https://image.istarbucks.co.kr/upload/store/skuimg/2023/09/[9200000004870]_20230905110300360.jpg',
            name: '유자 블렌디드',
            price: '4,000원',
        },
    ];

    const [message, setMessage] = useState('원하는 음료를 골라주세요!');

    const onClickDrink = (drinkName) => {
        setMessage(`${drinkName}를 고르셨군요!`);
    };

    return (
        <>
            <h1>메뉴판</h1>
            <table border="1" cellspacing="0" cellpadding="1">
                <thead>
                    <tr>
                        <th>음료</th>
                        <th>음료명</th>
                        <th>가격</th>
                        <th>선택</th>
                    </tr>
                </thead>
                <tbody>
                    {drinks.map((drink, index) => (
                        <Drink
                            key={index}
                            imageUrl={drink.imageUrl}
                            name={drink.name}
                            price={drink.price}
                            onClick={() => onClickDrink(drink.name)}
                        />
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default DrinkList;
