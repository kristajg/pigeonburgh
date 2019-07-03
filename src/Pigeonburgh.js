import React, { Component } from 'react';
import cloneDeep from 'lodash.clonedeep';
import Substep from './Substep';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Step8 from './Step8';
import Step9 from './Step9';
import Step10 from './Step10';
import Step11 from './Step11';
import Step12 from './Step12';
import Step13 from './Step13';
import Step14 from './Step14';
import Step15 from './Step15';
import Step16 from './Step16';
import Step17 from './Step17';
import Step18 from './Step18';
import Step19 from './Step19';
import Step20 from './Step20';
import { Pigeonwrap } from './styles';
import * as stext from './substepText';
import Inventory from './Inventory';

class Pigeonburgh extends Component {
	state = {
		step: 1,
		substep: 0,
		viewingInventory: false,
		inventory: [
			{
				id: 'binaryCode',
				visible: false,
				name: 'Binary Code',
				description: 'A paper with mysterious binary code scrawled on one side.',
			},
		],
	};

	changeStep = step => this.setState({ step, substep: 0 });

	changeSubstep = substep => this.setState({ substep });

	resetSubstep = () => this.setState({ substep: 0 });

	renderSubstep = text => {
		return <Substep text={text} resetSubstep={this.resetSubstep} />;
	};

	toggleInventory = () => this.setState({ viewingInventory: !this.state.viewingInventory });

	renderInventoryButton = () => {
		let showButton = false;
		this.state.inventory.forEach(item => {
			if (item.visible) {
				showButton = true;
				return;
			}
		});

		if (showButton && !this.state.viewingInventory) {
			return (
				<button onClick={() => this.toggleInventory()} style={{ marginTop: 25 }}>
					View Inventory
				</button>
			);
		}
	};

	addItem = itemId => {
		let newInventory = cloneDeep(this.state.inventory);
		const itemIndex = newInventory.findIndex(item => item.id === itemId);
		newInventory[itemIndex].visible = true;
		this.setState({ inventory: newInventory });
	};

	renderInventory = () => {
		return <Inventory inventory={this.state.inventory} toggleInventory={this.toggleInventory} />;
	};

	renderGameStep = () => {
		const { step, substep } = this.state;

		if (step === 1) {
			if (substep === 1) {
				return this.renderSubstep(stext.stepOneSubstepOne);
			}
			return <Step1 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
		} else if (step === 2) {
			return <Step2 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
		} else if (step === 3) {
			if (substep === 1) {
				return this.renderSubstep(stext.stepThreeSubstepOne);
			}
			return <Step3 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
		} else if (step === 4) {
			if (substep === 1) {
				return this.renderSubstep(stext.stepFourSubstepOne);
			}
			return <Step4 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
		} else if (step === 5) {
			return <Step5 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />;
		} else if (step === 6) {
			if (substep === 1) {
				return this.renderSubstep(stext.stepSixSubstepOne);
			}
			if (substep === 2) {
				return this.renderSubstep(stext.stepSixSubstepTwo);
			}
			return (
				<Step6
					changeStep={this.changeStep}
					changeSubstep={this.changeSubstep}
					resetSubstep={this.resetSubstep}
					addItem={this.addItem}
				/>
			);
		} else if (step === 7) {
			return (
				<Step7
					changeStep={this.changeStep}
					changeSubstep={this.changeSubstep}
					resetSubstep={this.resetSubstep}
					addItem={this.addItem}
				/>
			);
		} else if (step === 8) {
			return (
				<Step8
					changeStep={this.changeStep}
					changeSubstep={this.changeSubstep}
					resetSubstep={this.resetSubstep}
					addItem={this.addItem}
				/>
			);
		} else if (step === 9) {
			return (
				<Step9
					changeStep={this.changeStep}
					changeSubstep={this.changeSubstep}
					resetSubstep={this.resetSubstep}
					addItem={this.addItem}
				/>
			);
		} else if (step === 10) {
			return (
				<Step10 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />
			);
		} else if (step === 11) {
			return (
				<Step11 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />
			);
		} else if (step === 12) {
			return (
				<Step12 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />
			);
		} else if (step === 13) {
			return (
				<Step13 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />
			);
		} else if (step === 14) {
			return (
				<Step14 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />
			);
		} else if (step === 15) {
			return (
				<Step15 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />
			);
		} else if (step === 16) {
			return (
				<Step16 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />
			);
		} else if (step === 17) {
			return (
				<Step17 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />
			);
		} else if (step === 18) {
			return (
				<Step18 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />
			);
		} else if (step === 19) {
			return (
				<Step19 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />
			);
		} else if (step === 20) {
			return (
				<Step20 changeStep={this.changeStep} changeSubstep={this.changeSubstep} resetSubstep={this.resetSubstep} />
			);
		}
	};

	render() {
		return (
			<Pigeonwrap>
				{this.state.viewingInventory ? this.renderInventory() : this.renderGameStep()}
				{this.renderInventoryButton()}
				<br />
				<br />
				<button onClick={() => this.changeStep(1)}>RESET GAME</button>
			</Pigeonwrap>
		);
	}
}

export default Pigeonburgh;
