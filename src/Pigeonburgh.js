import { useState, useEffect } from 'react';
import Modal from 'react-modal';

// Data
import storyline from './data/storyline.json';
// import inventory from './data/inventory.json';

// Components
import Step from './components/Step';
import Substep from './components/Substep';
// import Inventory from './components/Inventory';

// Styling
import { Pigeonwrap, modalStyles } from './styles/styles';

Modal.setAppElement('#root');

export default function Pigeonburgh() {
	const [step, setStep] = useState(1);
	const [paragraph, setParagraph] = useState(0);
	const [substep, setSubstep] = useState(0);
	const [modalOpen, toggleModal] = useState(false);
	// const [inventoryOpen, toggleInventory] = useState(false);
	// const [inventory, setInventory] = useState([]);
	
	const stepData = storyline.steps;
	// const inventoryData = inventory.items;

	function changeStep(step) {
		setStep(step);
		setSubstep(0);
		setParagraph(0);
	}

	function changeSubstep(substep) {
		setSubstep(substep);
		toggleModal(true);
	}

	function updateCurrentParagraph() {
		setParagraph(paragraph + 1);
	}

	function closeSubstepModal() {
		setSubstep(0);
		toggleModal(false);
	}

	const handleKeyDown = event => {
		if (event.key === 'Enter') {
			console.log('enter key was pressed')
		}
	}
	useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
				updateCurrentParagraph();
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  });

	// function handleInventory() {
	// 	toggleInventory(!inventoryOpen);
	// }

	const { content, substeps, choices } = stepData.find((data) => data.id === step);
	const foundSubstep = substeps.find((obj) => obj.id === substep);
	const substepText = foundSubstep ? foundSubstep.text : '';
	return (
		<div>
			<Pigeonwrap>
				{/* main story step */}
				<Step
					content={content}
					substeps={substeps}
					choices={choices}
					changeStep={changeStep}
					changeSubstep={changeSubstep}
					currentParagraph={paragraph}
					currentSubstep={substep}
					updateCurrentParagraph={updateCurrentParagraph}
				/>
				{/* substep modal */}
				<Modal
					isOpen={modalOpen}
					onRequestClose={closeSubstepModal}
					style={modalStyles}
					contentLabel={substepText}>
					<Substep
						text={substepText}
						closeSubstepModal={closeSubstepModal}
					/>
				</Modal>
				{/* {inventory && inventory.length (
					<button onClick={handleInventory} style={{ marginTop: 25 }}>
						View Inventory
					</button>						
				)} */}
			</Pigeonwrap>
		</div>
	);
}
