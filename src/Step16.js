import React from 'react';
import { Option, Pigeongraph } from './styles';

const Step16 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>You interrupt to share a story you feel is relatable & might help her feel more at ease to share.</Pigeongraph>
		<Option onClick={() => changeStep(17)}>do something else</Option>
	</div>
);

export default Step16;
