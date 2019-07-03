import React from 'react';
import { Option, Pigeongraph } from './styles';

const Step20 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>STEP 20</Pigeongraph>
		<Option onClick={() => changeStep(19)}>do something else</Option>
	</div>
);

export default Step20;
