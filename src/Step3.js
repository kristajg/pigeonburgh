import React from 'react';
import PropTypes from 'prop-types';
import { Option, Pigeongraph } from './styles';

const Step3 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>Too good for a carb-heavy breakfast, eh? Just a coffee-and-go kind of bird.</Pigeongraph>
		<Pigeongraph>
			You fly to the nearest cafe and take a <Option onClick={() => changeSubstep(1)}>BIG SIP</Option> from a half-full
			mug left on a patio table.
		</Pigeongraph>
		<Pigeongraph>
			Full on caffeinated, you fly like a bird out of hell in several circles because you feel ALIVE. Let's put this
			perpetual birdmotion machine to work!
		</Pigeongraph>
		<Option onClick={() => changeStep(4)}>FLY OVER TO A BRIDGE WITH INTENT</Option>
	</div>
);

Step3.propTypes = {
	changeStep: PropTypes.func.isRequired,
	changeSubstep: PropTypes.func.isRequired,
};

export default Step3;
