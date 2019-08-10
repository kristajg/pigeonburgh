// React & third party libaries
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Choices from './Choices';

// Styles
import { Pigeongraph } from '../styles';

class Step extends Component {
	componentDidMount() {
		this.updateSubsteps();
	}

	componentDidUpdate() {
		this.updateSubsteps();
	}

	updateSubsteps = () => {
		const { substeps } = this.props;
		if (substeps.length) {
			const foundSubsteps = document.querySelectorAll('[data-substep]');
			for (let i = 0; i < foundSubsteps.length; i++) {
				foundSubsteps[i].onclick = () => this.props.changeSubstep(i + 1);
			}
		}
	};

	renderParagraphs = () => {
		const { content } = this.props;
		return content.map((paragraph, i) => (
			<Pigeongraph key={`paragraph-${i}`} dangerouslySetInnerHTML={{ __html: paragraph }} />
		));
	};

	renderChoices = () => {
		const { choices, changeStep } = this.props;
		if (choices && choices.length) {
			return <Choices choices={choices} changeStep={changeStep} />;
		}
	};

	render() {
		return (
			<div>
				{this.renderParagraphs()}
				{this.renderChoices()}
			</div>
		);
	}
}

Step.propTypes = {
	content: PropTypes.array.isRequired,
	currentSubstep: PropTypes.number.isRequired,
	substeps: PropTypes.array.isRequired,
	choices: PropTypes.array.isRequired,
	changeStep: PropTypes.func.isRequired,
	changeSubstep: PropTypes.func.isRequired,
};

export default Step;
