import React from 'react';
import PropTypes from 'prop-types';
import { Option, Pigeongraph } from './styles';

const Step5 = ({ changeStep }) => (
	<div>
		<Pigeongraph>
			The cat crust punk sneers as he itches his ear and flicks the end of a cheap cigarette at you, but graciously
			allows you to pick your method of shreddin&#39;. You think to yourself everything cats do is adorable no matter
			how much they try to be hardcore.
		</Pigeongraph>
		<Pigeongraph>Looking into his arsenal reveals three choices of handlebar-less transportation:</Pigeongraph>
		<Option onClick={() => changeStep(7)}>the ripped denim tradition of a regular skateboard</Option>
		<br />
		<br />
		<Option onClick={() => changeStep(8)}>the big sur longboard cruiser</Option>
		<br />
		<br />
		<Option onClick={() => changeStep(9)}>the alternative boot-glide of rollerblades</Option>
	</div>
);

Step5.propTypes = {
	changeStep: PropTypes.func.isRequired,
};

export default Step5;
