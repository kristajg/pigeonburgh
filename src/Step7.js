import React from 'react';
import { Option, Pigeongraph } from './styles';

const Step7 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>Ah, yes. The traditional skateboard.</Pigeongraph>
		<Pigeongraph>You could legitimately wear a Thrasher t-shirt, but they don't come in tiny bird sizes.</Pigeongraph>
		<Pigeongraph>
			You skate with the valience of ten thousand Greek chariots and so does the crust punk, but ultimately you best
			him.
		</Pigeongraph>
		<Pigeongraph>
			You do a kickflip to rub victory in his face a little, and he sadly offers you a slip of paper as a reward. Aw, he
			seems like a sensitive soul.
		</Pigeongraph>
		<Pigeongraph>The paper has a cryptic series of binary code on it. Cryptic, but not encrypted... huh.</Pigeongraph>
		<Option onClick={() => changeStep(10)}>Fly home with your spoils</Option>
	</div>
);

export default Step7;
