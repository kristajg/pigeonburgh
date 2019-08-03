// React & third party libaries
import React, { Component } from 'react';

// Data
import storyline from './data/storyline.json';

// Components
import Step from './components/Step';

class Pigeonburgh2 extends Component {
	state = {
		step: 1,
		substep: 0,
		viewingInventory: false,
		steps: storyline.steps,
	};

	changeStep = step => this.setState({ step, substep: 0 });

	changeSubstep = substep => this.setState({ substep });

	renderStep = () => {
		const { step, substep, steps } = this.state;
		const { content, substeps, choices } = steps.find(data => data.id === step);
		console.log('what up ', content);
		return (
			<Step
				content={content}
				substeps={substeps}
				choices={choices}
				changeStep={this.changeStep}
				currentSubstep={substep}
			/>
		);
	};

	render() {
		return <div>{this.renderStep()}</div>;
	}
}

export default Pigeonburgh2;
