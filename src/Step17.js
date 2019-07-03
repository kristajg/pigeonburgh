import React from 'react';
import { Option, Pigeongraph } from './styles';

const Step16 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>Try hipster restaurant</Pigeongraph>
		<Option onClick={() => changeStep(19)}>do something else</Option>
	</div>
);

export default Step16;
