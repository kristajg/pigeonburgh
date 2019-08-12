// React & third party libaries
import React, { Component } from 'react';

// Data
import storyline from './data/storyline.json';
import inventory from './data/inventory.json';

// Components
import Step from './components/Step';
import Substep from './components/Substep';
import Inventory from './components/Inventory';

// Styling
import { Pigeonwrap } from './styles';

class Pigeonburgh2 extends Component {
	state = {
		step: 1,
		currentSubstep: 0, // substep 0 is technically "no substep". Ground 0.
		viewingInventory: false,
		steps: storyline.steps,
		allInvetory: inventory.items,
		inventory: [], // user's current inventory - gets populated as story progresses via info from step choice
	};

	changeStep = step => this.setState({ step, currentSubstep: 0 });

	changeSubstep = currentSubstep => this.setState({ currentSubstep });

	toggleInventory = () => this.setState({ viewingInventory: !this.state.viewingInventory });

	renderInventoryButton = () => {
		const { inventory, viewingInventory } = this.state;
		if (inventory.length && !viewingInventory) {
			return (
				<button onClick={() => this.toggleInventory()} style={{ marginTop: 25 }}>
					View Inventory
				</button>
			);
		}
	};

	renderContent = () => {
		const { step, currentSubstep, steps, viewingInventory } = this.state;
		const { content, substeps, choices } = steps.find(data => data.id === step);
		if (currentSubstep === 0) {
			return (
				<Step
					content={content}
					substeps={substeps}
					choices={choices}
					changeStep={this.changeStep}
					changeSubstep={this.changeSubstep}
					currentSubstep={currentSubstep}
				/>
			);
		} else if (viewingInventory) {
			return <Inventory inventory={this.state.inventory} toggleInventory={this.toggleInventory} />;
		}
		return (
			<Substep text={substeps.find(obj => obj.id === currentSubstep).text} resetSubstep={() => this.changeSubstep(0)} />
		);
	};

	render() {
		return (
			<div>
				<Pigeonwrap>
					{this.renderContent()}
					{this.renderInventoryButton()}
				</Pigeonwrap>
			</div>
		);
	}
}

export default Pigeonburgh2;
