import { Pigeongraph } from '../styles/styles';

export default function Substep({ text, closeSubstepModal }) {
	return (
		<div>
			<Pigeongraph>{text}</Pigeongraph>
			<Pigeongraph>
				<span className="substep" onClick={() => closeSubstepModal()}>
					Go Back
				</span>
			</Pigeongraph>
		</div>
	);
}