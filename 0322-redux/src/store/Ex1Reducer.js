const DEPOSIT = 'money/DEPOSIT';
const WITHDRAWAL = 'money/WITHDRAWAL';

export const deposit = (amount) => ({ type: DEPOSIT, payload: amount });
export const withdrawal = (amount) => ({ type: WITHDRAWAL, payload: amount });

const initialState = {
    money: 0,
};

const Ex1Reducer = (state = initialState, action) => {
    switch (action.type) {
        case DEPOSIT:
            return { money: Number(state.money) + Number(action.payload) };
        case WITHDRAWAL:
            return { money: Number(state.money) - Number(action.payload) };
        default:
            return state;
    }
};

export default Ex1Reducer;
