import PropTypes from 'prop-types';

export default function FunctionComponent({ name, time, children }) {
    // const { name } = props;
    return (
        <div>
            {/* <h1>Hi {props.name}</h1> */}
            <h1>Hi {name}</h1>
            <h1>Hi {time}</h1>
            {/* <h1>Hi {props.title}</h1> */}
            <div>{children}</div>
        </div>
    );
}

FunctionComponent.defaultProps = {
    name: '홍길동',
};

FunctionComponent.propTypes = {
    // isRequired는 default 없을 때 작동
    name: PropTypes.string.isRequired,
    time: PropTypes.number,
};
