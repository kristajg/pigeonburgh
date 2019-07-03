import React from 'react';
import { Option, Pigeongraph } from './styles';

const Step21 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>You picked Bread olive and cheese board from hipster restaurant</Pigeongraph>
		<Option onClick={() => changeStep(23)}>do something else</Option>
	</div>
);

export default Step21;
