import React from 'react';
import { Option, Pigeongraph } from './styles';

const Step15 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>
			You share a relatable story in the hopes it'll put her at ease to know the pain is shareable.
		</Pigeongraph>
		<Option onClick={() => changeStep(17)}>do something else</Option>
	</div>
);

export default Step15;
