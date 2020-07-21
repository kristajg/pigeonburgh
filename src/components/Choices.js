// React & third party libaries
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import { ChoiceButton, ButtonText } from '../styles';

class Choices extends Component {
	render() {
		const { choices, changeStep } = this.props;
		return (
			<div>
				{choices.map((choice, i) => (
					<ChoiceButton key={`choice-${i}`} onClick={() => changeStep(choice.nextStepId)} hide={choice.hide}>
						<ButtonText textLength={choice.text.length}>{choice.text}</ButtonText>
					</ChoiceButton>
				))}
			</div>
		);
	}
}

Choices.propTypes = {
	choices: PropTypes.array.isRequired,
	changeStep: PropTypes.func.isRequired,
};

export default Choices;
