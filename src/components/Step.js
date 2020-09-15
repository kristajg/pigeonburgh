// React & third party libaries
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Choices from './Choices';

// Styles
import { Pigeongraph, ParagraphContainer, Chevron } from '../styles';

// Images
import chevron from '../assets/images/chevron.png';

class Step extends Component {
	state = {
		currentParagraph: 0,
	};

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

	renderParagraph = (chevronClicked = false) => {
		const { currentParagraph } = this.state;
		if (chevronClicked) {
			this.setState((prevState) => {
				return { currentParagraph: prevState.currentParagraph + 1 };
			});
		}
		const { content } = this.props;
		let totalParagraphs = [];
		for (let i = 0; i <= currentParagraph; i++) {
			totalParagraphs.push(<Pigeongraph key={`paragraph-${i}`} dangerouslySetInnerHTML={{ __html: content[i] }} />);
		}
		return totalParagraphs;
	};

	renderChoices = () => {
		const { choices, changeStep } = this.props;
		if (choices && choices.length) {
			return <Choices choices={choices} changeStep={changeStep} />;
		}
	};

	renderChevron = () => {
		const { currentParagraph } = this.state;
		const { content } = this.props;
		if (content.length - 1 > currentParagraph) {
			return <Chevron src={chevron} alt="Chevron" onClick={() => this.renderParagraph(true)} />;
		}
	};

	render() {
		return (
			<div>
				<ParagraphContainer>
					{this.renderParagraph()}
					{this.renderChevron()}
				</ParagraphContainer>
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
