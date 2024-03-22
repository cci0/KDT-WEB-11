const initiaState = true;
// initiaState 이름 또한 자유

const isVisibleReducer = (state = initiaState, action) => {
    if (action.type === 'CHANGE') {
        return !state;
    }
    return state;
};

export default isVisibleReducer;
