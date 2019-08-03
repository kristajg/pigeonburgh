import React from 'react';
import PropTypes from 'prop-types';
import { Option, Pigeongraph } from './styles';

const Step10 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>You fly home and let out a big sigh.</Pigeongraph>
		<Pigeongraph>
			You lay down in your feather down bed and try to go to sleep, but that “take me home country roads” song is stuck
			in your head for no reason.
		</Pigeongraph>
		<Pigeongraph>
			Musical stylings of John Denver aside, you play through the day&#39;s events in your mind... pausing to consider
			that mysterious binary code.
		</Pigeongraph>
		<Option onClick={() => changeStep(11)}>Sleep comes eventually, Mountain Mama</Option>
	</div>
);

Step10.propTypes = {
	changeStep: PropTypes.func.isRequired,
	changeSubstep: PropTypes.func.isRequired,
};

export default Step10;
