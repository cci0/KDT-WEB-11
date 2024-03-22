// 추천 방식

import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import isVisibleReducer from './isVisibleReducer';
import Ex1Reducer from './Ex1Reducer';

// combineReducers: 여러 개의 리듀서를 하나로 합쳐주는 것
const rootReducer = combineReducers({
    counter: counterReducer,
    isVisible: isVisibleReducer,
    bank: Ex1Reducer,
});

export default rootReducer;
