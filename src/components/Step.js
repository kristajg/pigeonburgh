// React & third party libaries
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Choices from './Choices';

// Styles
import { Option, Pigeongraph } from '../styles';

class Step extends Component {
	renderParagraphs = () => {
		console.log('wtf');
		const { content } = this.props;
		console.log('hello? ', content);
		return content.map((paragraph, i) => <Pigeongraph key={`paragraph-${i}`}>{paragraph}</Pigeongraph>);
	};

	// renderChoices = () => {};

	render() {
		return <div>{this.renderParagraphs()}</div>;
	}
}

Step.propTypes = {
	content: PropTypes.array.isRequired,
	currentSubstep: PropTypes.number.isRequired,
	substeps: PropTypes.array.isRequired,
	choices: PropTypes.array.isRequired,
	changeStep: PropTypes.func.isRequired,
};

export default Step;
