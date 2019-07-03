import React from 'react';
import { Option, Pigeongraph } from './styles';

const Step16 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>
			The deli door rings mellifluously. It triggers a sort of Pavlov response deep inside your bird body, and all you
			can think of is an italian sandwich on Mancini's bread. Extra banana peppers.
		</Pigeongraph>
		<Pigeongraph>
			The Deli Man says, "Hey there Donnie, what'll it be?" and you inform him of your Pavlovian desires.
		</Pigeongraph>
		<Pigeongraph>You acquire the best looking italian sando this world has yet known. And it is all yours.</Pigeongraph>
		<Option onClick={() => changeStep(18)}>do something else</Option>
	</div>
);

export default Step16;
