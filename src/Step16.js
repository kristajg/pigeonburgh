import React from 'react';
import { Option, Pigeongraph } from './styles';

const Step16 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>NOPE HANG ON</Pigeongraph>
		<Option onClick={() => changeStep(17)}>do something else</Option>
	</div>
);

export default Step16;
