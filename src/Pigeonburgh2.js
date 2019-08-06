// React & third party libaries
import React, { Component } from 'react';

// Data
import storyline from './data/storyline.json';

// Components
import Step from './components/Step';
import Substep from './components/Substep';

// Styling
import { Pigeonwrap } from './styles';

class Pigeonburgh2 extends Component {
	state = {
		step: 1,
		currentSubstep: 0, // substep 0 is technically "no substep". ground 0
		viewingInventory: false,
		steps: storyline.steps,
	};

	changeStep = step => this.setState({ step, currentSubstep: 0 });

	changeSubstep = currentSubstep => this.setState({ currentSubstep });

	renderContent = () => {
		const { step, currentSubstep, steps } = this.state;
		const { content, substeps, choices } = steps.find(data => data.id === step);
		console.log('um ok ', choices);
		return currentSubstep === 0 ? (
			<Step
				content={content}
				substeps={substeps}
				choices={choices}
				changeStep={this.changeStep}
				changeSubstep={this.changeSubstep}
				currentSubstep={currentSubstep}
			/>
		) : (
			<Substep text={substeps.find(obj => obj.id === currentSubstep).text} resetSubstep={() => this.changeSubstep(0)} />
		);
	};

	render() {
		return (
			<div>
				<Pigeonwrap>{this.renderContent()}</Pigeonwrap>
			</div>
		);
	}
}

export default Pigeonburgh2;
