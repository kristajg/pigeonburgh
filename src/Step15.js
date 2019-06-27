import React from 'react';
import { Option, Pigeongraph } from './styles';

const Step15 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>You listen intently as Ira tells her story.</Pigeongraph>
		<Option onClick={() => changeStep(17)}>do something else</Option>
	</div>
);

export default Step15;
