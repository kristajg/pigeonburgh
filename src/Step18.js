import React from 'react';
import { Option, Pigeongraph } from './styles';

const Step18 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>STEP 18</Pigeongraph>
		<Option onClick={() => changeStep(19)}>do something else</Option>
	</div>
);

export default Step18;
