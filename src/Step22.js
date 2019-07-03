import React from 'react';
import { Option, Pigeongraph } from './styles';

const Step22 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>You picked BRUNCH FOR DINNER from hipster restaurant</Pigeongraph>
		<Option onClick={() => changeStep(23)}>do something else</Option>
	</div>
);

export default Step22;
