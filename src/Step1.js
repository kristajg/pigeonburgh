import React from 'react';
import PropTypes from 'prop-types';
import { Option, Pigeongraph } from './styles';

const Step1 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph style={{ fontWeight: 600 }}>Hey there. Yeah, you. Wake up ya jaboroni!!</Pigeongraph>
		<Pigeongraph>
			You are a <Option onClick={() => changeSubstep(1)}>pigeon</Option> in your prime. How coo is that? You reckon
			it&#39;s pretty coo.
		</Pigeongraph>
		<Pigeongraph>
			Yaaaaaaawn. What a beautiful day in the neighborhood. The rising sun shines through sparse clouds, illuminating
			the surrounding rivers and city buildings.
		</Pigeongraph>
		<Pigeongraph>A corn chip rests conveniently by your feetsies...</Pigeongraph>
		<Option onClick={() => changeStep(2)}>Crunch that chip</Option>
		<br />
		<br />
		<Option onClick={() => changeStep(3)}>Skip the chip</Option>
	</div>
);

Step1.propTypes = {
	changeStep: PropTypes.func.isRequired,
	changeSubstep: PropTypes.func.isRequired,
};

export default Step1;
