import { createSlice } from '@reduxjs/toolkit';

// 게시판

const initialState = {
    postList: [],
};

// createSlice : 리듀서와 액션을 함께 생성하는 함수
const postSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {
        addPost: (state, action) => {
            console.log(action);
            state.postList.push(action.payload);
        },
    },
});

// postSlice.actions : 액션 생성자들을 포함하는 객체
export const { addPost } = postSlice.actions;

// postSlice.reducer : 상태를 업데이트하기 위한것
export default postSlice.reducer;
