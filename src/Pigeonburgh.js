// React & third party libaries
import React, { Component } from 'react';
import Modal from 'react-modal';

// Data
import storyline from './data/storyline.json';
import inventory from './data/inventory.json';

// Components
import Step from './components/Step';
import Substep from './components/Substep';
import Inventory from './components/Inventory';

// Styling
import { Pigeonwrap, modalStyles } from './styles';

Modal.setAppElement('#root');

class Pigeonburgh2 extends Component {
	state = {
		step: 1,
		currentParagraph: 0,
		currentSubstep: 0, // substep 0 is technically "no substep". Ground 0.
		substepModalOpen: false,
		viewingInventory: false,
		steps: storyline.steps,
		allInvetory: inventory.items,
		inventory: [], // user's current inventory - gets populated as story progresses via info from step choice
	};

	changeStep = (step) => this.setState({ step, currentSubstep: 0, currentParagraph: 0 });

	changeSubstep = (currentSubstep) => {
		this.setState({ currentSubstep, substepModalOpen: true });
	};

	updateCurrentParagraph = () => {
		this.setState((prevState) => {
			return { currentParagraph: prevState.currentParagraph + 1 };
		});
	};

	closeSubstepModal = () => {
		this.changeSubstep(0);
		this.setState({ substepModalOpen: false });
	};

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
		const { step, currentParagraph, currentSubstep, steps, viewingInventory } = this.state;
		const { content, substeps, choices } = steps.find((data) => data.id === step);
		if (viewingInventory) {
			return <Inventory inventory={this.state.inventory} toggleInventory={this.toggleInventory} />;
		}
		return (
			<Step
				content={content}
				substeps={substeps}
				choices={choices}
				changeStep={this.changeStep}
				changeSubstep={this.changeSubstep}
				currentParagraph={currentParagraph}
				currentSubstep={currentSubstep}
				updateCurrentParagraph={this.updateCurrentParagraph}
			/>
		);
	};

	render() {
		const { step, steps, currentSubstep, substepModalOpen } = this.state;
		const { substeps } = steps.find((data) => data.id === step);
		const foundSubstep = substeps.find((obj) => obj.id === currentSubstep);
		const substepText = foundSubstep ? foundSubstep.text : '';
		return (
			<div>
				<Pigeonwrap>
					{this.renderContent()}
					<Modal
						isOpen={substepModalOpen}
						onRequestClose={this.closeSubstepModal}
						style={modalStyles}
						contentLabel={substepText}>
						<Substep text={substepText} closeSubstepModal={this.closeSubstepModal} />
					</Modal>
					{this.renderInventoryButton()}
				</Pigeonwrap>
			</div>
		);
	}
}

export default Pigeonburgh2;
