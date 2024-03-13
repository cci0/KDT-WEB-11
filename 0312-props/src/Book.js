import './Book.css';

const Book = (props) => {
    const { title, author, price, type } = props;
    return (
        <div className="div">
            <div className="best">이번주 베스트셀러</div>
            <img src="https://image.yes24.com/goods/93513663/XL" alt="img" />
            <div className="title">{title}</div>
            <div className="detail">
                <div>저자: {author}</div>
                <div>판매가: {price}원</div>
                <div>구분: {type}</div>
            </div>
        </div>
    );
};

export default Book;
