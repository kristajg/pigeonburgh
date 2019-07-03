import React from 'react';
import PropTypes from 'prop-types';
import { Option, Pigeongraph } from './styles';

const Step14 = ({ changeStep, changeSubstep }) => (
	<div>
		<Pigeongraph>
			You listen sincerely to Ira&#39;s tale of grueling agency churn & burn, spending long hours toiling for peanuts.
		</Pigeongraph>
		<Pigeongraph>
			It makes you a bit sad in your core. How come such a creative person should burn themselves out like this? But...
			she has certainly built quite a portfolio out of it.
		</Pigeongraph>
		<Pigeongraph>
			Maybe everyone has to put in those hell-grindy hours and get sad before bustin&#39; out like a caterpillar turning
			into a <Option onClick={() => changeSubstep(1)}>butterfly</Option>.
		</Pigeongraph>
		<Pigeongraph>
			You say, "Ira. That sucks major tail! You are a cool person with the drive and know-how to destroy a
			small-to-medium sized planet. Destroy it with the power of your art!"
		</Pigeongraph>
		<Pigeongraph>
			Ira smiles and says, "Thanks Birdman, means a lot. Why are you flying around these parts anyways?"
		</Pigeongraph>
		<Option onClick={() => changeStep(19)}>Tell her about the binary code paper</Option>
	</div>
);

Step14.propTypes = {
	changeStep: PropTypes.func.isRequired,
	changeSubstep: PropTypes.func.isRequired,
};

export default Step14;
