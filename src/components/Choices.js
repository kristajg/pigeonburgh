// React & third party libaries
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import { ChoicesWrapper, Option } from '../styles';

class Choices extends Component {
	render() {
		const { choices, changeStep } = this.props;
		return (
			<ChoicesWrapper>
				{choices.map((choice, i) => (
					<Option key={`choice-${i}`} className="choice-option" onClick={() => changeStep(choice.nextStepId)}>
						{choice.text}
					</Option>
				))}
			</ChoicesWrapper>
		);
	}
}

Choices.propTypes = {
	choices: PropTypes.array.isRequired,
	changeStep: PropTypes.func.isRequired,
};

export default Choices;
