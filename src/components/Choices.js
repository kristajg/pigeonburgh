import { ChoiceButton, ButtonText } from '../styles/styles';

export default function Choices({ choices, changeStep }) {
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