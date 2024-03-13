import { Component } from 'react';
import PropTypes from 'prop-types';

class PropsExam3 extends Component {
    render() {
        const { text, valid } = this.props;
        return (
            <div>
                <h2>{text}</h2>
                <button onClick={valid}>valid</button>
            </div>
        );
    }
}

PropsExam3.defaultProps = {
    text: '이건 기본 text props입니다.',
};

PropsExam3.propTypes = {
    text: PropTypes.string.isRequired,
};

export default PropsExam3;
