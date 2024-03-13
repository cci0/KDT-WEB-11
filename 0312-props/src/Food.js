// 실급 1

export default function Food({ food }) {
    const red = {
        color: 'red',
    };
    return (
        <div>
            <h1>
                좋아하는 음식은 <span style={red}>{food}</span>
            </h1>
            <div>매운 떡볶이다</div>
        </div>
    );
}

Food.defaultProps = {
    food: '엽기 떡볶이',
};
