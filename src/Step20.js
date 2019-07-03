import React from 'react';
import { Option, Pigeongraph } from './styles';

const Step20 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>At the rum warehouse yall!!!!</Pigeongraph>
		<Option onClick={() => changeStep(20)}>do something else</Option>
	</div>
);

export default Step20;
