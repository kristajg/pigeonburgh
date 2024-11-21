// React & third party libaries
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Choices from './Choices';

// Styles
import { Pigeongraph, ParagraphContainer, Chevron } from '../styles/styles';

// Images
import chevron from '../assets/images/chevron.png';

class Step extends Component {
	constructor(props) {
		super(props);
		this.messagesEndRef = React.createRef();
	}

	componentDidMount() {
		this.updateSubsteps();
	}

	componentDidUpdate() {
		this.updateSubsteps();
		this.scrollToBottom();
	}

	scrollToBottom = () => {
		this.messagesEndRef.scrollIntoView({ behavior: 'smooth' });
	};

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
		const { currentParagraph, updateCurrentParagraph } = this.props;
		if (chevronClicked) {
			updateCurrentParagraph();
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
		const { content, currentParagraph } = this.props;
		if (content.length - 1 > currentParagraph) {
			return <Chevron src={chevron} alt="Chevron" onClick={() => this.renderParagraph(true)} />;
		}
	};

	render() {
		return (
			<div>
				<ParagraphContainer id="paragraph-container">
					{this.renderParagraph()}
					{this.renderChevron()}
					<div
						style={{ float: 'left', clear: 'both' }}
						ref={(el) => {
							this.messagesEndRef = el;
						}}></div>
				</ParagraphContainer>
				{this.renderChoices()}
			</div>
		);
	}
}

Step.propTypes = {
	content: PropTypes.array.isRequired,
	currentParagraph: PropTypes.number.isRequired,
	currentSubstep: PropTypes.number.isRequired,
	substeps: PropTypes.array.isRequired,
	choices: PropTypes.array.isRequired,
	changeStep: PropTypes.func.isRequired,
	changeSubstep: PropTypes.func.isRequired,
	updateCurrentParagraph: PropTypes.func.isRequired,
};

export default Step;
