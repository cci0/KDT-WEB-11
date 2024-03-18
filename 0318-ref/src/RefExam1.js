import { Component, createRef } from 'react';
export default class RefExam1 extends Component {
    state = {
        inputWriter: '',
        inputTitle: '',
        comment: [
            {
                writer: '민수',
                title: '안뇽',
            },
            {
                writer: '지민',
                title: '하이하이',
            },
            {
                writer: '희수',
                title: '멋쟁이',
            },
        ],
    };

    render() {
        const { inputWriter, inputTitle, comment } = this.state;
        const addComment = () => {
            if (this.writerRef.value.trim() === '') {
                // trim() 공백을 제거하는 함수
                this.writerRef.focus();
                return;
                // return을 적어야
            } else if (this.titleRef.value.trim() === '') {
                this.titleRef.focus();
                return;
            }

            let newComment = {
                writer: inputWriter,
                title: inputTitle,
            };
            // state 추가
            this.setState({
                comment: [...comment, newComment],
                inputWriter: '',
                inputTitle: '',
            });
        };
        return (
            <div>
                <form>
                    <label htmlFor="writer">작성자:</label>
                    <input
                        id="writer"
                        type="text"
                        name="writer"
                        value={inputWriter}
                        onChange={(e) => this.setState({ inputWriter: e.target.value })}
                        ref={(ref) => {
                            this.writerRef = ref;
                        }}
                    />
                    <label htmlFor="title">제목:</label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        value={inputTitle}
                        onChange={(e) => this.setState({ inputTitle: e.target.value })}
                        ref={(ref) => {
                            this.titleRef = ref;
                        }}
                    />
                    <button type="button" onClick={addComment}>
                        작성
                    </button>
                </form>
                <table border={1} style={{ marginTop: '30px', width: '500px' }}>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comment.map((value, idx) => {
                            return (
                                <tr key={idx + 1}>
                                    <td>{idx + 1}</td>
                                    <td>{value.title}</td>
                                    <td>{value.writer}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
