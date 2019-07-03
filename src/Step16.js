import React from 'react';
import { Option, Pigeongraph } from './styles';

const Step16 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>Grab traditional sando</Pigeongraph>
		<Option onClick={() => changeStep(18)}>do something else</Option>
	</div>
);

export default Step16;