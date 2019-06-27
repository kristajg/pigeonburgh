import React from 'react';
import { Option, Pigeongraph } from './styles';

const Step10 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>You fly home and let out a big sigh.</Pigeongraph>
		<Pigeongraph>
			You lay down in that down and try to go to sleep but that “take me home country roads” song is stuck in your head
			for no reason.
		</Pigeongraph>
		<Pigeongraph>
			Musical entrapments of John Denver aside, you play through the events of the day in your mind... pausing to
			consider that mysterious binary code.
		</Pigeongraph>
		<Option onClick={() => changeStep(11)}>Sleep comes eventually, Mountain Mama</Option>
	</div>
);

export default Step10;
