import React from 'react';
import { Option, Pigeongraph } from './styles';

const Step19 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>Done talking to Ira, told her about the paper</Pigeongraph>
		<Option onClick={() => changeStep(20)}>do something else</Option>
	</div>
);

export default Step19;
