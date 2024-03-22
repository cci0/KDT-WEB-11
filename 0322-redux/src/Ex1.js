import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdrawal } from './store/Ex1Reducer';

export default function Ex1() {
    const money = useSelector((state) => state.bank.money);
    return (
        <div>
            <h1>코딩온 은행</h1>
            <h2>잔액: {money}원</h2>
            <Bank />
        </div>
    );
}

const Bank = () => {
    const dispatch = useDispatch();
    const [inputMoney, setInputMoney] = useState();
    return (
        <div className="moneyBox">
            <input type="number" onChange={(e) => setInputMoney(e.target.value)} />
            <button type="submit" onClick={() => dispatch(deposit(inputMoney))}>
                입금
            </button>
            <button type="submit" onClick={() => dispatch(withdrawal(inputMoney))}>
                출금
            </button>
        </div>
    );
};
